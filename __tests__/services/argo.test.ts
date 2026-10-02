import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Argo', () => {
  it('getArgoSmartRouting fetches the current setting', async () => {
    const setting = { id: 'smart_routing', value: 'on', editable: true };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/argo/smart_routing`, (_req, res, ctx) => res(ctx.json(cfResponse(setting))))
    );

    const res = await api.getArgoSmartRouting(zoneId);
    expect(res.result).toEqual(setting);
  });

  it('updateArgoSmartRouting patches the value to on', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/argo/smart_routing`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'on' });
        return res(ctx.json(cfResponse({ id: 'smart_routing', value: 'on', editable: true })));
      })
    );

    const res = await api.updateArgoSmartRouting(zoneId, 'on');
    expect(res.result.value).toBe('on');
  });

  it('updateArgoSmartRouting patches the value to off', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/argo/smart_routing`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ value: 'off' });
        return res(ctx.json(cfResponse({ id: 'smart_routing', value: 'off', editable: true })));
      })
    );

    const res = await api.updateArgoSmartRouting(zoneId, 'off');
    expect(res.result.value).toBe('off');
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/argo/smart_routing`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getArgoSmartRouting(zoneId)).rejects.toBeTruthy();
  });
});
