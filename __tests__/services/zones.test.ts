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

describe('Zones', () => {
  it('getZones hits GET /zones with default paging/order params', async () => {
    const zones = [{ id: zoneId, name: 'example.com' }];
    server.use(
      rest.get(`${API_BASE}/zones`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        expect(req.url.searchParams.get('per_page')).toBe('50');
        expect(req.url.searchParams.get('order')).toBe('name');
        expect(req.url.searchParams.get('direction')).toBe('asc');
        expect(req.url.searchParams.has('name')).toBe(false);
        return res(ctx.json(cfResponse(zones)));
      })
    );

    const res = await api.getZones();
    expect(res.result).toEqual(zones);
  });

  it('getZones includes name param when search is provided', async () => {
    server.use(
      rest.get(`${API_BASE}/zones`, (req, res, ctx) => {
        expect(req.url.searchParams.get('name')).toBe('example');
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getZones(1, 'example');
  });

  it('getZone hits GET /zones/:id', async () => {
    const zone = { id: zoneId, name: 'example.com' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}`, (_req, res, ctx) => res(ctx.json(cfResponse(zone))))
    );

    const res = await api.getZone(zoneId);
    expect(res.result).toEqual(zone);
  });

  it('createZone posts name, account id and type', async () => {
    const zone = { id: zoneId, name: 'new.com' };
    server.use(
      rest.post(`${API_BASE}/zones`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ name: 'new.com', account: { id: accountId }, type: 'full' });
        return res(ctx.json(cfResponse(zone)));
      })
    );

    const res = await api.createZone('new.com', accountId);
    expect(res.result).toEqual(zone);
  });

  it('deleteZone hits DELETE /zones/:id', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: zoneId }))))
    );

    const res = await api.deleteZone(zoneId);
    expect(res.result).toEqual({ id: zoneId });
  });

  it('purgeAllCache posts purge_everything: true', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/purge_cache`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ purge_everything: true });
        return res(ctx.json(cfResponse({ id: zoneId })));
      })
    );

    const res = await api.purgeAllCache(zoneId);
    expect(res.result).toEqual({ id: zoneId });
  });

  it('purgeUrls posts the files array', async () => {
    const files = ['https://example.com/a.js'];
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/purge_cache`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ files });
        return res(ctx.json(cfResponse({ id: zoneId })));
      })
    );

    const res = await api.purgeUrls(zoneId, files);
    expect(res.result).toEqual({ id: zoneId });
  });

  it('pauseZone patches paused: true', async () => {
    const zone = { id: zoneId, paused: true };
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ paused: true });
        return res(ctx.json(cfResponse(zone)));
      })
    );

    const res = await api.pauseZone(zoneId);
    expect(res.result).toEqual(zone);
  });

  it('unpauseZone patches paused: false', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ paused: false });
        return res(ctx.json(cfResponse({ id: zoneId, paused: false })));
      })
    );

    await api.unpauseZone(zoneId);
  });

  it('checkActivation hits PUT /zones/:id/activation_check', async () => {
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/activation_check`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: zoneId }))))
    );

    const res = await api.checkActivation(zoneId);
    expect(res.result).toEqual({ id: zoneId });
  });

  it('getZoneHold hits GET /zones/:id/hold', async () => {
    const hold = { hold: true };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/hold`, (_req, res, ctx) => res(ctx.json(cfResponse(hold))))
    );

    const res = await api.getZoneHold(zoneId);
    expect(res.result).toEqual(hold);
  });

  it('createZoneHold posts include_subdomains as a query param when provided', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/hold`, (req, res, ctx) => {
        expect(req.url.searchParams.get('include_subdomains')).toBe('true');
        return res(ctx.json(cfResponse({ hold: true })));
      })
    );

    const res = await api.createZoneHold(zoneId, true);
    expect(res.result).toEqual({ hold: true });
  });

  it('createZoneHold omits the query param when not provided', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/hold`, (req, res, ctx) => {
        expect(req.url.searchParams.has('include_subdomains')).toBe(false);
        return res(ctx.json(cfResponse({ hold: true })));
      })
    );

    await api.createZoneHold(zoneId);
  });

  it('updateZoneHold patches hold_after and include_subdomains when provided', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/hold`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ hold_after: '2026-01-01T00:00:00Z', include_subdomains: false });
        return res(ctx.json(cfResponse({ hold: true })));
      })
    );

    const res = await api.updateZoneHold(zoneId, '2026-01-01T00:00:00Z', false);
    expect(res.result).toEqual({ hold: true });
  });

  it('updateZoneHold sends an empty body when nothing is provided', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/hold`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({});
        return res(ctx.json(cfResponse({ hold: false })));
      })
    );

    await api.updateZoneHold(zoneId);
  });

  it('deleteZoneHold hits DELETE /zones/:id/hold', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/hold`, (_req, res, ctx) => res(ctx.json(cfResponse(null))))
    );

    await api.deleteZoneHold(zoneId);
  });

  it('toggleDevMode patches the development_mode setting', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/settings/development_mode`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'on' });
        return res(ctx.json(cfResponse({ id: 'development_mode', value: 'on' })));
      })
    );

    const res = await api.toggleDevMode(zoneId, 'on');
    expect(res.result).toEqual({ id: 'development_mode', value: 'on' });
  });

  it('getZoneSettings hits GET /zones/:id/settings', async () => {
    const settings = [{ id: 'ssl', value: 'full' }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/settings`, (_req, res, ctx) => res(ctx.json(cfResponse(settings))))
    );

    const res = await api.getZoneSettings(zoneId);
    expect(res.result).toEqual(settings);
  });

  it('updateZoneSetting patches the given setting id with value', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/settings/ssl`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'strict' });
        return res(ctx.json(cfResponse({ id: 'ssl', value: 'strict' })));
      })
    );

    const res = await api.updateZoneSetting(zoneId, 'ssl', 'strict');
    expect(res.result).toEqual({ id: 'ssl', value: 'strict' });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}`, (_req, res, ctx) =>
        res(
          ctx.status(404),
          ctx.json({ success: false, errors: [{ code: 1001, message: 'Zone not found' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getZone(zoneId)).rejects.toBeTruthy();
  });
});
