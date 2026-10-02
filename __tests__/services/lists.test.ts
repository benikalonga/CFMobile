import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Lists', () => {
  const baseList = {
    id: 'list1',
    name: 'blocked-ips',
    kind: 'ip' as const,
    num_items: 2,
    num_referencing_filters: 0,
    created_on: '2024-01-01T00:00:00Z',
    modified_on: '2024-01-01T00:00:00Z',
  };

  it('getLists lists the account lists', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/rules/lists`, (_req, res, ctx) => res(ctx.json(cfResponse([baseList]))))
    );

    const res = await api.getLists(accountId);
    expect(res.result).toEqual([baseList]);
  });

  it('createList posts the new list body', async () => {
    const input = { name: 'blocked-ips', kind: 'ip' as const, description: 'bad actors' };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/rules/lists`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(input);
        return res(ctx.json(cfResponse({ ...baseList, description: 'bad actors' })));
      })
    );

    const res = await api.createList(accountId, input);
    expect(res.result.description).toBe('bad actors');
  });

  it('updateList puts only the description', async () => {
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/rules/lists/list1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ description: 'updated' });
        return res(ctx.json(cfResponse({ ...baseList, description: 'updated' })));
      })
    );

    const res = await api.updateList(accountId, 'list1', 'updated');
    expect(res.result.description).toBe('updated');
  });

  it('deleteList deletes by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/rules/lists/list1`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'list1' }))))
    );

    const res = await api.deleteList(accountId, 'list1');
    expect(res.result).toEqual({ id: 'list1' });
  });

  it('getListItems passes per_page but omits cursor when not provided', async () => {
    const items = [{ id: 'i1', ip: '1.2.3.4', created_on: '2024-01-01T00:00:00Z', modified_on: '2024-01-01T00:00:00Z' }];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/rules/lists/list1/items`, (req, res, ctx) => {
        expect(req.url.searchParams.get('per_page')).toBe('100');
        expect(req.url.searchParams.has('cursor')).toBe(false);
        return res(ctx.json(cfResponse(items)));
      })
    );

    const res = await api.getListItems(accountId, 'list1');
    expect(res.result).toEqual(items);
  });

  it('getListItems passes the cursor when provided', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/rules/lists/list1/items`, (req, res, ctx) => {
        expect(req.url.searchParams.get('cursor')).toBe('abc');
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getListItems(accountId, 'list1', 'abc');
  });

  it('createListItems posts an array of items and returns an operation id', async () => {
    const items = [{ ip: '1.2.3.4', comment: 'bad' }];
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/rules/lists/list1/items`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(items);
        return res(ctx.json(cfResponse({ operation_id: 'op1' })));
      })
    );

    const res = await api.createListItems(accountId, 'list1', items);
    expect(res.result).toEqual({ operation_id: 'op1' });
  });

  it('deleteListItems sends a DELETE with an items body containing the ids', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/rules/lists/list1/items`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ items: [{ id: 'i1' }, { id: 'i2' }] });
        return res(ctx.json(cfResponse({ operation_id: 'op2' })));
      })
    );

    const res = await api.deleteListItems(accountId, 'list1', ['i1', 'i2']);
    expect(res.result).toEqual({ operation_id: 'op2' });
  });

  it('deleteListItems clears the whole list when given an empty array', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/rules/lists/list1/items`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ items: [] });
        return res(ctx.json(cfResponse({ operation_id: 'op3' })));
      })
    );

    const res = await api.deleteListItems(accountId, 'list1', []);
    expect(res.result).toEqual({ operation_id: 'op3' });
  });

  it('getListBulkOperation fetches the async operation status', async () => {
    const op = { id: 'op1', status: 'completed' as const };
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/rules/lists/bulk_operations/op1`, (_req, res, ctx) => res(ctx.json(cfResponse(op))))
    );

    const res = await api.getListBulkOperation(accountId, 'op1');
    expect(res.result).toEqual(op);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/rules/lists`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getLists(accountId)).rejects.toBeTruthy();
  });
});
