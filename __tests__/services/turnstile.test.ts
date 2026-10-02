import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Turnstile', () => {
  const widget = {
    sitekey: 'sk1',
    name: 'my-widget',
    domains: ['example.com'],
    mode: 'managed' as const,
    bot_fight_mode: false,
    clearance_level: 'managed' as const,
    ephemeral_id: false,
    offlabel: false,
    region: 'world' as const,
    created_on: '2024-01-01T00:00:00Z',
    modified_on: '2024-01-01T00:00:00Z',
  };

  it('getTurnstileWidgets lists widgets', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/challenges/widgets`, (_req, res, ctx) =>
        res(ctx.json(cfResponse([widget])))
      )
    );

    const res = await api.getTurnstileWidgets(accountId);
    expect(res.result).toEqual([widget]);
  });

  it('getTurnstileWidget fetches by sitekey', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/challenges/widgets/sk1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(widget)))
      )
    );

    const res = await api.getTurnstileWidget(accountId, 'sk1');
    expect(res.result).toEqual(widget);
  });

  it('createTurnstileWidget POSTs the widget body', async () => {
    const body = { name: 'my-widget', domains: ['example.com'], mode: 'managed' as const, bot_fight_mode: true };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/challenges/widgets`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(body);
        return res(ctx.json(cfResponse({ ...widget, ...body })));
      })
    );

    const res = await api.createTurnstileWidget(accountId, body);
    expect(res.result.name).toBe('my-widget');
  });

  it('updateTurnstileWidget PUTs the widget body', async () => {
    const body = { name: 'renamed', domains: ['example.com'], mode: 'invisible' as const };
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/challenges/widgets/sk1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(body);
        return res(ctx.json(cfResponse({ ...widget, ...body })));
      })
    );

    const res = await api.updateTurnstileWidget(accountId, 'sk1', body);
    expect(res.result.name).toBe('renamed');
  });

  it('deleteTurnstileWidget DELETEs the widget', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/challenges/widgets/sk1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(widget)))
      )
    );

    const res = await api.deleteTurnstileWidget(accountId, 'sk1');
    expect(res.result).toEqual(widget);
  });

  it('rotateTurnstileSecret POSTs invalidate_immediately flag', async () => {
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/challenges/widgets/sk1/rotate_secret`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ invalidate_immediately: true });
        return res(ctx.json(cfResponse({ ...widget, secret: 'new-secret' })));
      })
    );

    const res = await api.rotateTurnstileSecret(accountId, 'sk1', true);
    expect(res.result.secret).toBe('new-secret');
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/challenges/widgets`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getTurnstileWidgets(accountId)).rejects.toBeTruthy();
  });
});
