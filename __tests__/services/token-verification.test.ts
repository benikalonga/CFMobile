import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

beforeAll(async () => {
  await initTestClient();
});

describe('Token Verification', () => {
  it('verifyToken hits GET /user/tokens/verify and unwraps the result', async () => {
    const result = { id: 'tok1', status: 'active' };
    server.use(
      rest.get(`${API_BASE}/user/tokens/verify`, (_req, res, ctx) => res(ctx.json(cfResponse(result))))
    );

    const res = await api.verifyToken();
    expect(res.success).toBe(true);
    expect(res.result).toEqual(result);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/user/tokens/verify`, (_req, res, ctx) =>
        res(
          ctx.status(400),
          ctx.json({ success: false, errors: [{ code: 1000, message: 'Invalid token' }], messages: [], result: null })
        )
      )
    );

    await expect(api.verifyToken()).rejects.toBeTruthy();
  });
});
