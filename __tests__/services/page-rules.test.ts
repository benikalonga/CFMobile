import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse, cfError } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Page Rules', () => {
  it('getPageRules lists page rules for the zone', async () => {
    const rules = [
      {
        id: 'pr1',
        targets: [{ target: 'url', constraint: { operator: 'matches', value: 'example.com/*' } }],
        actions: [{ id: 'forwarding_url', value: { url: 'https://example.com/new', status_code: 301 } }],
        priority: 1,
        status: 'active' as const,
        created_on: '2024-01-01',
        modified_on: '2024-01-01',
      },
    ];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/pagerules`, (_req, res, ctx) => res(ctx.json(cfResponse(rules))))
    );

    const res = await api.getPageRules(zoneId);
    expect(res.result).toEqual(rules);
  });

  it('deletePageRule DELETEs the rule by id', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/pagerules/pr1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse({ id: 'pr1' })))
      )
    );

    const res = await api.deletePageRule(zoneId, 'pr1');
    expect(res.result).toEqual({ id: 'pr1' });
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/pagerules`, (_req, res, ctx) =>
        res(ctx.status(403), ctx.json(cfError('Authentication error', 10000)))
      )
    );

    await expect(api.getPageRules(zoneId)).rejects.toBeTruthy();
  });
});
