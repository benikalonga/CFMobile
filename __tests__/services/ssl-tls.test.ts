import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('SSL/TLS', () => {
  it('getSSLSetting hits GET /zones/:id/settings/ssl', async () => {
    const setting = { id: 'ssl', value: 'full' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/settings/ssl`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getSSLSetting(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateSSLSetting patches the value', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/settings/ssl`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'strict' });
        return res(ctx.json(cfResponse({ id: 'ssl', value: 'strict' })));
      })
    );

    const res = await api.updateSSLSetting(zoneId, 'strict');
    expect(res.result).toEqual({ id: 'ssl', value: 'strict' });
  });

  it('getSSLVerification hits GET /zones/:id/ssl/verification', async () => {
    const verification = [{ certificate_status: 'active' }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/ssl/verification`, (_req, res, ctx) => res(ctx.json(cfResponse(verification))))
    );

    const res = await api.getSSLVerification(zoneId);
    expect(res.result).toEqual(verification);
  });

  it('getAlwaysUseHTTPS hits GET /zones/:id/settings/always_use_https', async () => {
    const setting = { id: 'always_use_https', value: 'on' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/settings/always_use_https`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getAlwaysUseHTTPS(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateAlwaysUseHTTPS patches the value', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/settings/always_use_https`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'off' });
        return res(ctx.json(cfResponse({ id: 'always_use_https', value: 'off' })));
      })
    );

    const res = await api.updateAlwaysUseHTTPS(zoneId, 'off');
    expect(res.result).toEqual({ id: 'always_use_https', value: 'off' });
  });

  it('getMinTLSVersion hits GET /zones/:id/settings/min_tls_version', async () => {
    const setting = { id: 'min_tls_version', value: '1.2' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/settings/min_tls_version`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getMinTLSVersion(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateMinTLSVersion patches the value', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/settings/min_tls_version`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: '1.3' });
        return res(ctx.json(cfResponse({ id: 'min_tls_version', value: '1.3' })));
      })
    );

    const res = await api.updateMinTLSVersion(zoneId, '1.3');
    expect(res.result).toEqual({ id: 'min_tls_version', value: '1.3' });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/settings/ssl`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getSSLSetting(zoneId)).rejects.toBeTruthy();
  });
});
