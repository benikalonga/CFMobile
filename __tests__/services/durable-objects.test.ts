import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Durable Objects', () => {
  it('getDurableObjectNamespaces lists namespaces', async () => {
    const namespaces = [
      { id: 'ns1', name: 'my-do', script: 'worker-a', class: 'Counter', use_sqlite: false },
    ];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/workers/durable_objects/namespaces`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(namespaces)))
      )
    );

    const res = await api.getDurableObjectNamespaces(accountId);
    expect(res.success).toBe(true);
    expect(res.result).toEqual(namespaces);
  });

  it('getDurableObjects lists objects in a namespace, optionally with a cursor', async () => {
    const objects = [{ id: 'obj1', hasStoredData: true }];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/workers/durable_objects/namespaces/ns1/objects`, (req, res, ctx) => {
        expect(req.url.searchParams.get('cursor')).toBe('abc');
        return res(ctx.json(cfResponse(objects)));
      })
    );

    const res = await api.getDurableObjects(accountId, 'ns1', 'abc');
    expect(res.result).toEqual(objects);
  });

  it('getDurableObjects omits the cursor param when not provided', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/workers/durable_objects/namespaces/ns1/objects`, (req, res, ctx) => {
        expect(req.url.searchParams.has('cursor')).toBe(false);
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getDurableObjects(accountId, 'ns1');
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/workers/durable_objects/namespaces`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getDurableObjectNamespaces(accountId)).rejects.toBeTruthy();
  });
});
