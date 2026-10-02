import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('DNS Import (BIND zone file)', () => {
  it('importDnsRecords posts multipart/form-data with the file and proxied flag', async () => {
    const result = { recs_added: 3, total_records_parsed: 3 };
    let receivedContentType: string | null = null;
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/import`, async (req, res, ctx) => {
        receivedContentType = req.headers.get('content-type');
        return res(ctx.json(cfResponse(result)));
      })
    );

    const res = await api.importDnsRecords(zoneId, 'file:///fake/records.txt', true);
    expect(receivedContentType).toContain('multipart/form-data');
    expect(res.result).toEqual(result);
  });

  it('importDnsRecords defaults proxied to false', async () => {
    const result = { recs_added: 0, total_records_parsed: 0 };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/import`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(result)))
      )
    );

    const res = await api.importDnsRecords(zoneId, 'file:///fake/records.txt');
    expect(res.result).toEqual(result);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/import`, (_req, res, ctx) =>
        res(
          ctx.status(400),
          ctx.json({ success: false, errors: [{ code: 9999, message: 'Invalid zone file' }], messages: [], result: null })
        )
      )
    );

    await expect(api.importDnsRecords(zoneId, 'file:///fake/records.txt')).rejects.toBeTruthy();
  });
});
