import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Health Checks', () => {
  const baseCheck = {
    id: 'hc1',
    name: 'my-check',
    address: '1.2.3.4',
    type: 'HTTP' as const,
    status: 'healthy' as const,
    suspended: false,
    interval: 60,
    retries: 2,
    timeout: 5,
    consecutive_fails: 1,
    consecutive_successes: 1,
  };

  it('getHealthChecks lists checks for the zone', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/healthchecks`, (_req, res, ctx) => res(ctx.json(cfResponse([baseCheck]))))
    );

    const res = await api.getHealthChecks(zoneId);
    expect(res.result).toEqual([baseCheck]);
  });

  it('getHealthCheck fetches a single check by id', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/healthchecks/hc1`, (_req, res, ctx) => res(ctx.json(cfResponse(baseCheck))))
    );

    const res = await api.getHealthCheck(zoneId, 'hc1');
    expect(res.result).toEqual(baseCheck);
  });

  it('createHealthCheck posts the check input', async () => {
    const input = {
      name: 'my-check',
      address: '1.2.3.4',
      type: 'HTTP' as const,
      check_regions: ['WEU'],
    };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/healthchecks`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(input);
        return res(ctx.json(cfResponse({ ...baseCheck, check_regions: ['WEU'] })));
      })
    );

    const res = await api.createHealthCheck(zoneId, input);
    expect(res.result.check_regions).toEqual(['WEU']);
  });

  it('updateHealthCheck patches a partial check input', async () => {
    const partial = { suspended: true };
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/healthchecks/hc1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(partial);
        return res(ctx.json(cfResponse({ ...baseCheck, suspended: true })));
      })
    );

    const res = await api.updateHealthCheck(zoneId, 'hc1', partial);
    expect(res.result.suspended).toBe(true);
  });

  it('deleteHealthCheck deletes by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/healthchecks/hc1`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'hc1' }))))
    );

    const res = await api.deleteHealthCheck(zoneId, 'hc1');
    expect(res.result).toEqual({ id: 'hc1' });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/healthchecks`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getHealthChecks(zoneId)).rejects.toBeTruthy();
  });
});
