import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('Analytics', () => {
  it('getZoneAnalytics posts a GraphQL query and aggregates totals + timeseries', async () => {
    const graphqlResponse = {
      data: {
        viewer: {
          zones: [
            {
              httpRequests1dGroups: [
                {
                  dimensions: { date: '2024-01-01' },
                  sum: { requests: 100, cachedRequests: 60, bytes: 5000, cachedBytes: 3000, pageViews: 20, threats: 2 },
                  uniq: { uniques: 15 },
                },
                {
                  dimensions: { date: '2024-01-02' },
                  sum: { requests: 200, cachedRequests: 120, bytes: 8000, cachedBytes: 5000, pageViews: 40, threats: 5 },
                  uniq: { uniques: 25 },
                },
              ],
            },
          ],
        },
      },
    };

    server.use(
      rest.post(`${API_BASE}/graphql`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body.query).toContain(zoneId);
        expect(body.query).toContain('date_geq: "2024-01-01"');
        expect(body.query).toContain('date_leq: "2024-01-02"');
        return res(ctx.json(graphqlResponse));
      })
    );

    const res = await api.getZoneAnalytics(zoneId, '2024-01-01', '2024-01-02');

    expect(res.totals.requests).toEqual({ all: 300, cached: 180, uncached: 120 });
    expect(res.totals.bandwidth).toEqual({ all: 13000, cached: 8000, uncached: 5000 });
    expect(res.totals.threats).toEqual({ all: 7 });
    expect(res.totals.pageviews).toEqual({ all: 60 });
    expect(res.totals.uniques).toEqual({ all: 40 });
    expect(res.timeseries).toHaveLength(2);
    expect(res.timeseries[0]).toEqual({
      date: '2024-01-01',
      requests: 100,
      cachedRequests: 60,
      bytes: 5000,
      cachedBytes: 3000,
      threats: 2,
      pageViews: 20,
      uniques: 15,
    });
  });

  it('returns zeroed totals and empty timeseries when there are no groups', async () => {
    server.use(
      rest.post(`${API_BASE}/graphql`, (_req, res, ctx) =>
        res(ctx.json({ data: { viewer: { zones: [{ httpRequests1dGroups: [] }] } } }))
      )
    );

    const res = await api.getZoneAnalytics(zoneId, '2024-01-01', '2024-01-31');

    expect(res.totals.requests).toEqual({ all: 0, cached: 0, uncached: 0 });
    expect(res.timeseries).toEqual([]);
  });
});
