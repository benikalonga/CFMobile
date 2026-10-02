import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse, cfError } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Transform, Redirect, and Cache Rules', () => {
  it('getTransformRules gets the http_request_transform entrypoint', async () => {
    const ruleset = { id: 'rs1', name: 'Transform Rules', description: '', kind: 'zone', phase: 'http_request_transform', rules: [] };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_transform/entrypoint`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(ruleset)))
      )
    );

    const res = await api.getTransformRules(zoneId);
    expect(res.result).toEqual(ruleset);
  });

  it('getRedirectRules gets the http_request_dynamic_redirect entrypoint', async () => {
    const ruleset = { id: 'rs2', name: 'Redirect Rules', description: '', kind: 'zone', phase: 'http_request_dynamic_redirect', rules: [] };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_dynamic_redirect/entrypoint`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(ruleset)))
      )
    );

    const res = await api.getRedirectRules(zoneId);
    expect(res.result).toEqual(ruleset);
  });

  it('getCacheRules gets the http_request_cache_settings entrypoint', async () => {
    const ruleset = { id: 'rs3', name: 'Cache Rules', description: '', kind: 'zone', phase: 'http_request_cache_settings', rules: [] };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_cache_settings/entrypoint`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(ruleset)))
      )
    );

    const res = await api.getCacheRules(zoneId);
    expect(res.result).toEqual(ruleset);
  });

  it('updateTransformRules PUTs the whole ruleset back to the transform entrypoint', async () => {
    const ruleset = {
      rules: [
        { action: 'rewrite' as const, expression: 'true', enabled: true, action_parameters: { uri: { path: { value: '/new' } } } },
      ],
    };
    const updated = { id: 'rs1', name: 'Transform Rules', description: '', kind: 'zone', phase: 'http_request_transform', rules: ruleset.rules };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_transform/entrypoint`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual(ruleset);
        return res(ctx.json(cfResponse(updated)));
      })
    );

    const res = await api.updateTransformRules(zoneId, ruleset);
    expect(res.result).toEqual(updated);
  });

  it('updateRedirectRules PUTs the whole ruleset back to the redirect entrypoint', async () => {
    const ruleset = {
      rules: [
        { action: 'redirect' as const, expression: 'true', enabled: true, action_parameters: { from: '/old', to: '/new', status_code: 301 } },
      ],
    };
    const updated = { id: 'rs2', name: 'Redirect Rules', description: '', kind: 'zone', phase: 'http_request_dynamic_redirect', rules: ruleset.rules };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_dynamic_redirect/entrypoint`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual(ruleset);
        return res(ctx.json(cfResponse(updated)));
      })
    );

    const res = await api.updateRedirectRules(zoneId, ruleset);
    expect(res.result).toEqual(updated);
  });

  it('updateCacheRules PUTs the whole ruleset back to the cache settings entrypoint', async () => {
    const ruleset = {
      rules: [
        { action: 'set_cache_settings' as const, expression: 'true', enabled: false, action_parameters: { cache: true, edge_cache_ttl: 3600 } },
      ],
    };
    const updated = { id: 'rs3', name: 'Cache Rules', description: '', kind: 'zone', phase: 'http_request_cache_settings', rules: ruleset.rules };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_cache_settings/entrypoint`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual(ruleset);
        return res(ctx.json(cfResponse(updated)));
      })
    );

    const res = await api.updateCacheRules(zoneId, ruleset);
    expect(res.result).toEqual(updated);
  });

  it('propagates a Cloudflare error response when updating fails', async () => {
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/rulesets/phases/http_request_transform/entrypoint`, (_req, res, ctx) =>
        res(ctx.status(400), ctx.json(cfError('Invalid expression', 9999)))
      )
    );

    await expect(api.updateTransformRules(zoneId, { rules: [] })).rejects.toBeTruthy();
  });
});
