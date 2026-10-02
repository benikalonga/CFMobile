import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Zone Cache Settings', () => {
  it('getCacheReserve fetches the setting', async () => {
    const setting = { id: 'cache_reserve', value: 'on', editable: true };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/cache/cache_reserve`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getCacheReserve(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateCacheReserve PATCHes the value', async () => {
    const setting = { id: 'cache_reserve', value: 'off', editable: true };
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/cache/cache_reserve`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'off' });
        return res(ctx.json(cfResponse(setting)));
      })
    );

    const res = await api.updateCacheReserve(zoneId, 'off');
    expect(res.result).toEqual(setting);
  });

  it('getCacheReserveClearStatus fetches clear job status', async () => {
    const status = { id: 'cache_reserve_clear' as const, state: 'In-progress' as const, start_ts: '2024-01-01T00:00:00Z' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/cache/cache_reserve_clear`, (_req, res, ctx) => res(ctx.json(cfResponse(status))))
    );

    const res = await api.getCacheReserveClearStatus(zoneId);
    expect(res.result).toEqual(status);
  });

  it('startCacheReserveClear POSTs to start the clear job', async () => {
    const status = { id: 'cache_reserve_clear' as const, state: 'In-progress' as const, start_ts: '2024-01-01T00:00:00Z' };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/cache/cache_reserve_clear`, (_req, res, ctx) => res(ctx.json(cfResponse(status))))
    );

    const res = await api.startCacheReserveClear(zoneId);
    expect(res.result).toEqual(status);
  });

  it('getRegionalTieredCache fetches the setting', async () => {
    const setting = { id: 'regional_tiered_cache', value: 'on', editable: true };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/cache/regional_tiered_cache`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getRegionalTieredCache(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateRegionalTieredCache PATCHes the value', async () => {
    const setting = { id: 'regional_tiered_cache', value: 'on', editable: true };
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/cache/regional_tiered_cache`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'on' });
        return res(ctx.json(cfResponse(setting)));
      })
    );

    const res = await api.updateRegionalTieredCache(zoneId, 'on');
    expect(res.result).toEqual(setting);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/cache/cache_reserve`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getCacheReserve(zoneId)).rejects.toBeTruthy();
  });
});
