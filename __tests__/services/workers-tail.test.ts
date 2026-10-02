import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';
const scriptName = 'my-worker';

beforeAll(async () => {
  await initTestClient();
});

describe('Workers Tail (live logs)', () => {
  it('createWorkerTail posts to create a tail session', async () => {
    const tail = { id: 'tail1', url: 'wss://tail.example.com/session', expires_at: '2024-01-01T00:10:00Z' };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/workers/scripts/${scriptName}/tails`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(tail)))
      )
    );

    const res = await api.createWorkerTail(accountId, scriptName);
    expect(res.result).toEqual(tail);
  });

  it('deleteWorkerTail deletes a tail session by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/workers/scripts/${scriptName}/tails/tail1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: 'tail1' })))
      )
    );

    const res = await api.deleteWorkerTail(accountId, scriptName, 'tail1');
    expect(res.result).toEqual({ id: 'tail1' });
  });

  it('propagates a Cloudflare error response when creating a tail fails', async () => {
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/workers/scripts/${scriptName}/tails`, (_req, res, ctx) =>
        res(
          ctx.status(400),
          ctx.json({ success: false, errors: [{ code: 10021, message: 'Too many tail sessions' }], messages: [], result: null })
        )
      )
    );

    await expect(api.createWorkerTail(accountId, scriptName)).rejects.toBeTruthy();
  });
});
