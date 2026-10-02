import { Platform } from 'react-native';
import Constants from 'expo-constants';

/**
 * In-memory record of recent failures, so a user who hits an error can send us
 * what happened. Nothing here leaves the device on its own: a report is only
 * shared when the user taps "Send email" or "Open GitHub issue", and they see
 * the text in their mail app or browser before it goes anywhere.
 */

export const SUPPORT_EMAIL = 'your_email@fakeemail.com';
export const ISSUES_URL = 'https://github.com/imtaqin/CFMobile/issues/new';

export interface LogEntry {
  at: string;
  source: string;
  message: string;
  detail?: string;
}

const MAX_ENTRIES = 40;
const entries: LogEntry[] = [];

/**
 * Strip anything that could identify the account or act as a credential.
 * Reports can end up in a public GitHub issue, so err on the side of removing
 * too much: tokens, keys, emails, and Cloudflare's 32-hex resource ids.
 */
export function redact(text: string): string {
  return text
    .replace(/(Bearer\s+)[A-Za-z0-9._-]+/gi, '$1<redacted>')
    .replace(/(X-Auth-(?:Key|Email)["':\s]+)[^\s"',}]+/gi, '$1<redacted>')
    .replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '<email>')
    .replace(/\b[a-f0-9]{32,}\b/gi, '<id>')
    .replace(/\b[A-Za-z0-9_-]{40,}\b/g, '<redacted>');
}

function describe(error: unknown): { message: string; detail?: string } {
  if (error instanceof Error) {
    const stack = error.stack?.split('\n').slice(0, 8).join('\n');
    return { message: error.message || error.name, detail: stack };
  }
  if (typeof error === 'string') return { message: error };
  try {
    return { message: JSON.stringify(error) };
  } catch {
    return { message: String(error) };
  }
}

/** Record a failure. `source` is a short tag such as "api", "ai" or "crash". */
export function logError(source: string, error: unknown, context?: string): void {
  const { message, detail } = describe(error);
  entries.unshift({
    at: new Date().toISOString(),
    source,
    message: redact(context ? `${context}: ${message}` : message).slice(0, 400),
    detail: detail ? redact(detail).slice(0, 900) : undefined,
  });
  if (entries.length > MAX_ENTRIES) entries.length = MAX_ENTRIES;
}

export function getLog(): LogEntry[] {
  return entries.slice();
}

export function hasLog(): boolean {
  return entries.length > 0;
}

function deviceLine(): string {
  const c = (Platform.constants ?? {}) as Record<string, any>;
  const version = Constants.expoConfig?.version ?? '?';
  const build = Constants.expoConfig?.android?.versionCode ?? '?';
  const device = [c.Brand, c.Model].filter(Boolean).join(' ') || 'unknown device';
  const os = Platform.OS === 'android' ? `Android ${c.Release ?? Platform.Version}` : `${Platform.OS} ${Platform.Version}`;
  return `CloudFlare Mobile ${version} (${build})${__DEV__ ? ' dev' : ''} · ${os} · ${device}`;
}

/**
 * Plain-text report: app and device line, the error being reported (if any),
 * then the most recent log entries. `maxChars` keeps it inside what a mailto:
 * link or a GitHub issue URL can carry.
 */
export function buildReport(current?: unknown, maxChars = 4500): string {
  const lines: string[] = [deviceLine(), `Time: ${new Date().toISOString()}`];

  if (current !== undefined) {
    const { message, detail } = describe(current);
    lines.push('', '--- Error ---', redact(message));
    if (detail) lines.push(redact(detail));
  }

  if (entries.length) {
    lines.push('', '--- Recent log ---');
    for (const e of entries.slice(0, 15)) {
      lines.push(`[${e.at.slice(11, 19)}] ${e.source}: ${e.message}`);
    }
  }

  const text = lines.join('\n');
  return text.length > maxChars ? text.slice(0, maxChars) + '\n…(truncated)' : text;
}

export function mailtoUrl(report: string, summary?: string): string {
  const subject = `CloudFlare Mobile error report${summary ? `: ${summary.slice(0, 60)}` : ''}`;
  const body = `Describe what you were doing when this happened:\n\n\n${report}`;
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function issueUrl(report: string, summary?: string): string {
  const title = summary ? summary.slice(0, 80) : 'Error report';
  const body = `**What happened**\n\n<!-- describe what you were doing -->\n\n**Report**\n\n\`\`\`\n${report}\n\`\`\`\n`;
  return `${ISSUES_URL}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}

let installed = false;

/** Catch uncaught JS errors so they show up in a later report. Safe to call twice. */
export function installGlobalErrorLog(): void {
  if (installed) return;
  installed = true;
  const utils = (globalThis as any).ErrorUtils;
  if (!utils?.getGlobalHandler) return;
  const previous = utils.getGlobalHandler();
  utils.setGlobalHandler((error: unknown, isFatal?: boolean) => {
    logError(isFatal ? 'crash' : 'uncaught', error);
    previous?.(error, isFatal);
  });
}
