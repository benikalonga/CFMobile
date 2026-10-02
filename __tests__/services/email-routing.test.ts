import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';
const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Email Routing', () => {
  it('getEmailRoutingSettings fetches settings', async () => {
    const settings = { id: 'set1', enabled: true, name: 'example.com', status: 'ready' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/email/routing`, (_req, res, ctx) => res(ctx.json(cfResponse(settings))))
    );

    const res = await api.getEmailRoutingSettings(zoneId);
    expect(res.result).toEqual(settings);
  });

  it('enableEmailRouting posts to enable', async () => {
    const settings = { id: 'set1', enabled: true, name: 'example.com', status: 'ready' };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/email/routing/enable`, (_req, res, ctx) => res(ctx.json(cfResponse(settings))))
    );

    const res = await api.enableEmailRouting(zoneId);
    expect(res.result.enabled).toBe(true);
  });

  it('disableEmailRouting posts to disable', async () => {
    const settings = { id: 'set1', enabled: false, name: 'example.com', status: 'ready' };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/email/routing/disable`, (_req, res, ctx) => res(ctx.json(cfResponse(settings))))
    );

    const res = await api.disableEmailRouting(zoneId);
    expect(res.result.enabled).toBe(false);
  });

  it('getEmailRoutingDns fetches required DNS records', async () => {
    const records = [{ type: 'MX', name: 'example.com', content: 'route1.mx.cloudflare.net', priority: 22 }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/email/routing/dns`, (_req, res, ctx) => res(ctx.json(cfResponse(records))))
    );

    const res = await api.getEmailRoutingDns(zoneId);
    expect(res.result).toEqual(records);
  });

  it('getEmailRoutingRules passes page and per_page params', async () => {
    const rules = [{ id: 'r1', name: 'rule', enabled: true, priority: 0, matchers: [], actions: [] }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/email/routing/rules`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('2');
        expect(req.url.searchParams.get('per_page')).toBe('50');
        return res(ctx.json(cfResponse(rules)));
      })
    );

    const res = await api.getEmailRoutingRules(zoneId, 2);
    expect(res.result).toEqual(rules);
  });

  it('createEmailRoutingRule posts the rule body', async () => {
    const rule = {
      name: 'forward to me',
      enabled: true,
      matchers: [{ type: 'literal' as const, field: 'to' as const, value: 'a@example.com' }],
      actions: [{ type: 'forward' as const, value: ['me@example.com'] }],
    };
    const created = { id: 'r2', ...rule, priority: 0 };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/email/routing/rules`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(rule);
        return res(ctx.json(cfResponse(created)));
      })
    );

    const res = await api.createEmailRoutingRule(zoneId, rule);
    expect(res.result).toEqual(created);
  });

  it('updateEmailRoutingRule puts a partial rule', async () => {
    const partial = { enabled: false };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/email/routing/rules/r1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(partial);
        return res(ctx.json(cfResponse({ id: 'r1', name: 'rule', enabled: false, priority: 0, matchers: [], actions: [] })));
      })
    );

    const res = await api.updateEmailRoutingRule(zoneId, 'r1', partial);
    expect(res.result.enabled).toBe(false);
  });

  it('deleteEmailRoutingRule deletes by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/email/routing/rules/r1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: 'r1' })))
      )
    );

    const res = await api.deleteEmailRoutingRule(zoneId, 'r1');
    expect(res.result).toEqual({ id: 'r1' });
  });

  it('getEmailCatchAll fetches the catch-all rule', async () => {
    const rule = { id: 'catch_all', name: 'Catch All', enabled: true, priority: 0, matchers: [], actions: [] };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/email/routing/rules/catch_all`, (_req, res, ctx) => res(ctx.json(cfResponse(rule))))
    );

    const res = await api.getEmailCatchAll(zoneId);
    expect(res.result).toEqual(rule);
  });

  it('updateEmailCatchAll puts the catch-all body', async () => {
    const body = { enabled: true, matchers: [{ type: 'all' as const }], actions: [{ type: 'drop' as const }] };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/email/routing/rules/catch_all`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(body);
        return res(ctx.json(cfResponse({ id: 'catch_all', name: 'Catch All', ...body })));
      })
    );

    const res = await api.updateEmailCatchAll(zoneId, body);
    expect(res.result.id).toBe('catch_all');
  });

  it('getDestinationAddresses passes page and per_page params', async () => {
    const addrs = [{ id: 'd1', email: 'me@example.com', verified: '2024-01-01T00:00:00Z' }];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/email/routing/addresses`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        expect(req.url.searchParams.get('per_page')).toBe('50');
        return res(ctx.json(cfResponse(addrs)));
      })
    );

    const res = await api.getDestinationAddresses(accountId);
    expect(res.result).toEqual(addrs);
  });

  it('createDestinationAddress posts the email', async () => {
    const created = { id: 'd2', email: 'new@example.com', verified: null };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/email/routing/addresses`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ email: 'new@example.com' });
        return res(ctx.json(cfResponse(created)));
      })
    );

    const res = await api.createDestinationAddress(accountId, 'new@example.com');
    expect(res.result).toEqual(created);
  });

  it('deleteDestinationAddress deletes by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/email/routing/addresses/d1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: 'd1' })))
      )
    );

    const res = await api.deleteDestinationAddress(accountId, 'd1');
    expect(res.result).toEqual({ id: 'd1' });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/email/routing`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getEmailRoutingSettings(zoneId)).rejects.toBeTruthy();
  });
});
