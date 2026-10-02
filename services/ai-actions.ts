import * as api from '@/services/cloudflare';
import { ActionProposal, ChatContext } from '@/services/ai';

/**
 * Maps an ActionProposal.kind (defined by the chat worker) to the real
 * Cloudflare API call. This is the only place an AI-proposed action turns
 * into an actual mutation — the worker can only ever suggest a `kind` +
 * `params`, never call the Cloudflare API directly.
 *
 * Extensible by design: add a new entry here (and teach the worker to emit
 * matching `kind`/`params`) to cover more products. `destructive` controls
 * default confirmation behavior in the chat UI.
 */
interface ActionHandler {
  destructive: boolean;
  requires: ('zoneId' | 'accountId')[];
  run: (params: Record<string, any>, ctx: ChatContext) => Promise<any>;
}

export const ACTION_REGISTRY: Record<string, ActionHandler> = {
  'dns.create': {
    destructive: false,
    requires: ['zoneId'],
    run: (p, ctx) => api.createDnsRecord(ctx.zoneId!, {
      type: p.type,
      name: p.name,
      content: p.content,
      ttl: p.ttl,
      proxied: p.proxied,
      priority: p.priority,
      comment: p.comment,
    }),
  },
  'dns.update': {
    destructive: false,
    requires: ['zoneId'],
    run: (p, ctx) => api.updateDnsRecord(ctx.zoneId!, p.id, {
      type: p.type,
      name: p.name,
      content: p.content,
      ttl: p.ttl,
      proxied: p.proxied,
      priority: p.priority,
      comment: p.comment,
    }),
  },
  'dns.delete': {
    destructive: true,
    requires: ['zoneId'],
    run: (p, ctx) => api.deleteDnsRecord(ctx.zoneId!, p.id),
  },
  'zone.setting': {
    destructive: false,
    requires: ['zoneId'],
    run: (p, ctx) => api.updateZoneSetting(ctx.zoneId!, p.settingId, p.value),
  },
  'zone.pause': {
    destructive: true,
    requires: ['zoneId'],
    run: (_p, ctx) => api.pauseZone(ctx.zoneId!),
  },
  'zone.unpause': {
    destructive: false,
    requires: ['zoneId'],
    run: (_p, ctx) => api.unpauseZone(ctx.zoneId!),
  },
  'cache.purge_all': {
    destructive: true,
    requires: ['zoneId'],
    run: (_p, ctx) => api.purgeAllCache(ctx.zoneId!),
  },
  'cache.purge_urls': {
    destructive: false,
    requires: ['zoneId'],
    run: (p, ctx) => api.purgeUrls(ctx.zoneId!, p.files),
  },
  'registrar.update': {
    destructive: false,
    requires: ['accountId'],
    run: (p, ctx) => api.updateRegistrarDomain(ctx.accountId!, p.domainName, p.update),
  },
};

export function isKnownAction(kind: string): boolean {
  return kind in ACTION_REGISTRY;
}

export function isDestructive(kind: string): boolean {
  return ACTION_REGISTRY[kind]?.destructive ?? true;
}

/** Reason the action can't run yet (missing zone/account context), or null if it's ready. */
export function missingContext(kind: string, ctx: ChatContext): 'zoneId' | 'accountId' | null {
  const handler = ACTION_REGISTRY[kind];
  if (!handler) return null;
  for (const req of handler.requires) {
    if (!ctx[req]) return req;
  }
  return null;
}

export async function executeAction(action: ActionProposal, ctx: ChatContext): Promise<any> {
  const handler = ACTION_REGISTRY[action.kind];
  if (!handler) throw new Error(`Unknown action: ${action.kind}`);
  const missing = missingContext(action.kind, ctx);
  if (missing) throw new Error(`Missing ${missing} for this action`);
  return handler.run(action.params, ctx);
}
