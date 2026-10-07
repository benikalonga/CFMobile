import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system/legacy';
import { DNSRecord, DNSRecordInput } from './types';

/**
 * A log of the DNS changes made from this app, kept in a file on the device.
 * It never leaves the phone, and it knows nothing about changes made in the
 * Cloudflare dashboard or by anyone else. Each entry keeps the values before
 * and after, which is what makes "undo" possible.
 */
const FILE = `${FileSystem.documentDirectory}change-history.json`;
const WEB_KEY = 'cf_change_history';
const MAX_ENTRIES = 300;

export type DnsSnapshot = Required<Pick<DNSRecordInput, 'type' | 'name' | 'content'>> &
  Pick<DNSRecordInput, 'ttl' | 'proxied' | 'priority' | 'comment'>;

export interface ChangeEntry {
  id: string;
  /** ISO timestamp of when the change was applied. */
  at: string;
  zoneId: string;
  zoneName?: string;
  action: 'create' | 'update' | 'delete';
  /** Missing only if Cloudflare did not return one for a new record. */
  recordId?: string;
  before: DnsSnapshot | null;
  after: DnsSnapshot | null;
  /** Set once the entry has been undone from the History screen. */
  revertedAt?: string;
}

export interface FieldChange {
  field: 'type' | 'name' | 'content' | 'ttl' | 'proxied' | 'priority' | 'comment';
  before: string | null;
  after: string | null;
}

const FIELDS: FieldChange['field'][] = ['type', 'name', 'content', 'ttl', 'proxied', 'priority', 'comment'];

/** The editable part of a record, in a stable shape. */
export function snapshot(record: DNSRecord | DNSRecordInput): DnsSnapshot {
  return {
    type: record.type,
    name: record.name,
    content: record.content,
    ttl: record.ttl,
    proxied: record.proxied,
    priority: record.priority,
    comment: record.comment || undefined,
  };
}

function show(field: FieldChange['field'], value: unknown): string | null {
  if (value === undefined || value === null || value === '') return null;
  if (field === 'proxied') return value ? 'on' : 'off';
  if (field === 'ttl') return value === 1 ? 'auto' : String(value);
  return String(value);
}

/**
 * Field-by-field difference between two versions of a record. Pass null for
 * `before` (a new record) or `after` (a deleted one) to list every set field.
 */
export function diffFields(before: DnsSnapshot | null, after: DnsSnapshot | null): FieldChange[] {
  const out: FieldChange[] = [];
  for (const field of FIELDS) {
    const a = before ? show(field, before[field]) : null;
    const b = after ? show(field, after[field]) : null;
    if (a !== b) out.push({ field, before: a, after: b });
  }
  return out;
}

async function read(): Promise<ChangeEntry[]> {
  try {
    const raw = Platform.OS === 'web'
      ? localStorage.getItem(WEB_KEY)
      : (await FileSystem.getInfoAsync(FILE)).exists ? await FileSystem.readAsStringAsync(FILE) : null;
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    // A corrupt file must not take the DNS screens down with it.
    return [];
  }
}

async function write(list: ChangeEntry[]): Promise<void> {
  const raw = JSON.stringify(list.slice(0, MAX_ENTRIES));
  if (Platform.OS === 'web') localStorage.setItem(WEB_KEY, raw);
  else await FileSystem.writeAsStringAsync(FILE, raw);
}

/** Newest first. */
export async function getHistory(): Promise<ChangeEntry[]> {
  return read();
}

/** Record a change that has already been applied. Never throws: logging must not fail a save. */
export async function addChange(entry: Omit<ChangeEntry, 'id' | 'at'>): Promise<void> {
  try {
    const list = await read();
    list.unshift({
      ...entry,
      id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
      at: new Date().toISOString(),
    });
    await write(list);
  } catch {
    // storage full or unavailable: the change itself still went through
  }
}

export async function markReverted(id: string): Promise<void> {
  const list = await read();
  const entry = list.find((e) => e.id === id);
  if (!entry) return;
  entry.revertedAt = new Date().toISOString();
  await write(list);
}

export async function clearHistory(): Promise<void> {
  await write([]);
}
