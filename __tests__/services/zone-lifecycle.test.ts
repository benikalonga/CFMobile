import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse, cfError } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Zone Lifecycle', () => {
  it('getAvailablePlans lists plans available for the zone', async () => {
    const plans = [
      { id: 'plan1', name: 'Free', price: 0, currency: 'USD', frequency: 'monthly', legacy_id: 'free', is_subscribed: true, can_subscribe: false },
    ];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/available_plans`, (_req, res, ctx) => res(ctx.json(cfResponse(plans))))
    );

    const res = await api.getAvailablePlans(zoneId);
    expect(res.result).toEqual(plans);
  });

  it('getAvailablePlan gets a single plan by identifier', async () => {
    const plan = { id: 'plan2', name: 'Pro', price: 20, currency: 'USD', frequency: 'monthly', legacy_id: 'pro', is_subscribed: false, can_subscribe: true };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/available_plans/plan2`, (_req, res, ctx) => res(ctx.json(cfResponse(plan))))
    );

    const res = await api.getAvailablePlan(zoneId, 'plan2');
    expect(res.result).toEqual(plan);
  });

  it('changeZonePausedStatus PATCHes the zone paused field', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual({ paused: true });
        return res(ctx.json(cfResponse({ id: zoneId, paused: true })));
      })
    );

    const res = await api.changeZonePausedStatus(zoneId, true);
    expect(res.result).toEqual({ id: zoneId, paused: true });
  });

  it('changeZonePausedStatus can unpause the zone', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual({ paused: false });
        return res(ctx.json(cfResponse({ id: zoneId, paused: false })));
      })
    );

    const res = await api.changeZonePausedStatus(zoneId, false);
    expect(res.result.paused).toBe(false);
  });

  it('rerunActivationCheck PUTs to the activation_check endpoint with no body', async () => {
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/activation_check`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: zoneId })))
      )
    );

    const res = await api.rerunActivationCheck(zoneId);
    expect(res.result).toEqual({ id: zoneId });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/available_plans`, (_req, res, ctx) =>
        res(ctx.status(403), ctx.json(cfError('Authentication error', 10000)))
      )
    );

    await expect(api.getAvailablePlans(zoneId)).rejects.toBeTruthy();
  });
});
