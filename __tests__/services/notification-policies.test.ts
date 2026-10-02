import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Notification Policies & Webhooks', () => {
  const policy = {
    id: 'pol1',
    name: 'My Policy',
    alert_type: 'universal_ssl_event_type',
    enabled: true,
    mechanisms: { email: [{ id: 'em1' }] },
  };

  it('getNotificationPolicies lists policies', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/alerting/v3/policies`, (_req, res, ctx) => res(ctx.json(cfResponse([policy]))))
    );

    const res = await api.getNotificationPolicies(accountId);
    expect(res.result).toEqual([policy]);
  });

  it('updateNotificationPolicy PUTs the whole policy with enabled changed', async () => {
    const disabled = { ...policy, enabled: false };
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/alerting/v3/policies/pol1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(disabled);
        return res(ctx.json(cfResponse(disabled)));
      })
    );

    const res = await api.updateNotificationPolicy(accountId, 'pol1', disabled);
    expect(res.result.enabled).toBe(false);
  });

  it('deleteNotificationPolicy DELETEs the policy', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/alerting/v3/policies/pol1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: 'pol1' })))
      )
    );

    const res = await api.deleteNotificationPolicy(accountId, 'pol1');
    expect(res.result).toEqual({ id: 'pol1' });
  });

  const webhook = { id: 'wh1', name: 'My Webhook', url: 'https://example.com/hook', type: 'generic' as const };

  it('getNotificationWebhooks lists webhook destinations', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/alerting/v3/destinations/webhooks`, (_req, res, ctx) =>
        res(ctx.json(cfResponse([webhook])))
      )
    );

    const res = await api.getNotificationWebhooks(accountId);
    expect(res.result).toEqual([webhook]);
  });

  it('createNotificationWebhook POSTs the webhook body', async () => {
    const body = { name: 'My Webhook', url: 'https://example.com/hook', secret: 'shh' };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/alerting/v3/destinations/webhooks`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(body);
        return res(ctx.json(cfResponse({ id: 'wh1' })));
      })
    );

    const res = await api.createNotificationWebhook(accountId, body);
    expect(res.result).toEqual({ id: 'wh1' });
  });

  it('createNotificationWebhook omits secret when not provided', async () => {
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/alerting/v3/destinations/webhooks`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual({ name: 'My Webhook', url: 'https://example.com/hook' });
        expect(body.secret).toBeUndefined();
        return res(ctx.json(cfResponse({ id: 'wh1' })));
      })
    );

    await api.createNotificationWebhook(accountId, { name: 'My Webhook', url: 'https://example.com/hook' });
  });

  it('deleteNotificationWebhook DELETEs the webhook', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/alerting/v3/destinations/webhooks/wh1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(null)))
      )
    );

    const res = await api.deleteNotificationWebhook(accountId, 'wh1');
    expect(res.success).toBe(true);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/alerting/v3/policies`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getNotificationPolicies(accountId)).rejects.toBeTruthy();
  });
});
