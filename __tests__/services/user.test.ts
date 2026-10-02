import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

beforeAll(async () => {
  await initTestClient();
});

describe('User', () => {
  it('getUser hits GET /user and unwraps the result', async () => {
    const user = { id: 'user1', email: 'me@example.com', username: 'me' };
    server.use(
      rest.get(`${API_BASE}/user`, (_req, res, ctx) => res(ctx.json(cfResponse(user))))
    );

    const res = await api.getUser();
    expect(res.success).toBe(true);
    expect(res.result).toEqual(user);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/user`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getUser()).rejects.toBeTruthy();
  });
});
