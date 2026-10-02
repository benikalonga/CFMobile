import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

beforeAll(async () => {
  await initTestClient();
});

describe('API Tokens (user-owned)', () => {
  const token = {
    id: 'tok1',
    name: 'My Token',
    status: 'active' as const,
    policies: [
      { id: 'pol1', effect: 'allow' as const, permission_groups: [{ id: 'pg1', name: 'Zone Read' }], resources: { 'com.cloudflare.api.account.zone.*': '*' } },
    ],
  };

  it('getAPITokens lists tokens', async () => {
    server.use(
      rest.get(`${API_BASE}/user/tokens`, (_req, res, ctx) => res(ctx.json(cfResponse([token]))))
    );

    const res = await api.getAPITokens();
    expect(res.result).toEqual([token]);
  });

  it('getAPIToken fetches a single token', async () => {
    server.use(
      rest.get(`${API_BASE}/user/tokens/tok1`, (_req, res, ctx) => res(ctx.json(cfResponse(token))))
    );

    const res = await api.getAPIToken('tok1');
    expect(res.result).toEqual(token);
  });

  it('updateAPIToken PUTs the whole token with status changed', async () => {
    const disabled = { ...token, status: 'disabled' as const };
    server.use(
      rest.put(`${API_BASE}/user/tokens/tok1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(disabled);
        return res(ctx.json(cfResponse(disabled)));
      })
    );

    const res = await api.updateAPIToken('tok1', disabled);
    expect(res.result.status).toBe('disabled');
  });

  it('deleteAPIToken DELETEs the token', async () => {
    server.use(
      rest.delete(`${API_BASE}/user/tokens/tok1`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'tok1' }))))
    );

    const res = await api.deleteAPIToken('tok1');
    expect(res.result).toEqual({ id: 'tok1' });
  });

  it('rollAPIToken PUTs to the value endpoint and returns the new secret', async () => {
    server.use(
      rest.put(`${API_BASE}/user/tokens/tok1/value`, (_req, res, ctx) => res(ctx.json(cfResponse('new-secret-value'))))
    );

    const res = await api.rollAPIToken('tok1');
    expect(res.result).toBe('new-secret-value');
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/user/tokens`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getAPITokens()).rejects.toBeTruthy();
  });
});
