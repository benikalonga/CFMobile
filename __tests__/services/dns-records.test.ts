import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';

beforeAll(async () => {
  await initTestClient();
});

describe('DNS Records', () => {
  it('getDnsRecords hits GET /zones/:id/dns_records with default paging', async () => {
    const records = [{ id: 'r1', type: 'A', name: 'example.com', content: '1.2.3.4' }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        expect(req.url.searchParams.get('per_page')).toBe('100');
        expect(req.url.searchParams.has('type')).toBe(false);
        expect(req.url.searchParams.has('name')).toBe(false);
        return res(ctx.json(cfResponse(records)));
      })
    );

    const res = await api.getDnsRecords(zoneId);
    expect(res.result).toEqual(records);
  });

  it('getDnsRecords includes type and name filters when provided', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records`, (req, res, ctx) => {
        expect(req.url.searchParams.get('type')).toBe('CNAME');
        expect(req.url.searchParams.get('name')).toBe('www');
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getDnsRecords(zoneId, 1, 'CNAME', 'www');
  });

  it('getDnsRecord hits GET /zones/:id/dns_records/:recordId', async () => {
    const record = { id: 'r1', type: 'A', name: 'example.com', content: '1.2.3.4' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records/r1`, (_req, res, ctx) => res(ctx.json(cfResponse(record))))
    );

    const res = await api.getDnsRecord(zoneId, 'r1');
    expect(res.result).toEqual(record);
  });

  it('createDnsRecord posts the record body', async () => {
    const record = { type: 'A' as const, name: 'example.com', content: '1.2.3.4', ttl: 1 };
    const created = { id: 'r2', ...record };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(record);
        return res(ctx.json(cfResponse(created)));
      })
    );

    const res = await api.createDnsRecord(zoneId, record as any);
    expect(res.result).toEqual(created);
  });

  it('updateDnsRecord puts the record body at the record id', async () => {
    const record = { type: 'A' as const, name: 'example.com', content: '5.6.7.8', ttl: 1 };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/dns_records/r1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(record);
        return res(ctx.json(cfResponse({ id: 'r1', ...record })));
      })
    );

    const res = await api.updateDnsRecord(zoneId, 'r1', record as any);
    expect(res.result).toEqual({ id: 'r1', ...record });
  });

  it('deleteDnsRecord hits DELETE /zones/:id/dns_records/:recordId', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/dns_records/r1`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'r1' }))))
    );

    const res = await api.deleteDnsRecord(zoneId, 'r1');
    expect(res.result).toEqual({ id: 'r1' });
  });

  it('exportDnsRecords hits GET /zones/:id/dns_records/export and returns the raw body', async () => {
    const zoneFile = '$ORIGIN example.com.\nexample.com. 1 IN A 1.2.3.4\n';
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records/export`, (_req, res, ctx) => res(ctx.text(zoneFile)))
    );

    const res = await api.exportDnsRecords(zoneId);
    expect(res).toBe(zoneFile);
  });

  it('getDnsSettings hits GET /zones/:id/dns_settings', async () => {
    const settings = { flatten_all_cnames: true, foundation_dns: false };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_settings`, (_req, res, ctx) => res(ctx.json(cfResponse(settings))))
    );

    const res = await api.getDnsSettings(zoneId);
    expect(res.result).toEqual(settings);
  });

  it('updateDnsSettings patches the given partial settings', async () => {
    const partial = { foundation_dns: true };
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/dns_settings`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(partial);
        return res(ctx.json(cfResponse({ ...partial, flatten_all_cnames: false })));
      })
    );

    const res = await api.updateDnsSettings(zoneId, partial);
    expect(res.result).toEqual({ ...partial, flatten_all_cnames: false });
  });

  it('getDnsRecordUsage hits GET /zones/:id/dns_records/usage', async () => {
    const usage = { record_quota: 1000, record_usage: 12 };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records/usage`, (_req, res, ctx) => res(ctx.json(cfResponse(usage))))
    );

    const res = await api.getDnsRecordUsage(zoneId);
    expect(res.result).toEqual(usage);
  });

  it('scanDnsRecords hits POST /zones/:id/dns_records/scan', async () => {
    const result = { recs_added: 3, total_records_parsed: 10 };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/scan`, (_req, res, ctx) => res(ctx.json(cfResponse(result))))
    );

    const res = await api.scanDnsRecords(zoneId);
    expect(res.result).toEqual(result);
  });

  it('triggerDnsScan hits POST /zones/:id/dns_records/scan/trigger', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/scan/trigger`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'scan1' }))))
    );

    const res = await api.triggerDnsScan(zoneId);
    expect(res.result).toEqual({ id: 'scan1' });
  });

  it('reviewDnsScan hits GET /zones/:id/dns_records/scan/review', async () => {
    const records = [{ id: 'r3', type: 'A', name: 'new.example.com', content: '9.9.9.9' }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records/scan/review`, (_req, res, ctx) => res(ctx.json(cfResponse(records))))
    );

    const res = await api.reviewDnsScan(zoneId);
    expect(res.result).toEqual(records);
  });

  it('applyDnsScanResults posts accepts and rejects', async () => {
    const accepts = [{ id: 'r3' }];
    const rejects = ['r4'];
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/scan/review`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ accepts, rejects });
        return res(ctx.json(cfResponse({ ok: true })));
      })
    );

    const res = await api.applyDnsScanResults(zoneId, accepts, rejects);
    expect(res.result).toEqual({ ok: true });
  });

  it('batchDnsRecords posts the batch body', async () => {
    const batch = { deletes: [{ id: 'r1' }], posts: [{ type: 'A' as const, name: 'x', content: '1.1.1.1' }] };
    const result = { deletes: [{ id: 'r1' }], patches: [], posts: [{ id: 'r5' }], puts: [] };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/dns_records/batch`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(batch);
        return res(ctx.json(cfResponse(result)));
      })
    );

    const res = await api.batchDnsRecords(zoneId, batch as any);
    expect(res.result).toEqual(result);
  });

  it('getSecondaryDnsOutgoing hits GET /zones/:id/secondary_dns/outgoing', async () => {
    const zone = { id: 'sdz1', name: 'outgoing', peers: ['p1'], soa_serial: 1, checked_time: null, created_time: null, last_transferred_time: null };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing`, (_req, res, ctx) => res(ctx.json(cfResponse(zone))))
    );

    const res = await api.getSecondaryDnsOutgoing(zoneId);
    expect(res.result).toEqual(zone);
  });

  it('createSecondaryDnsOutgoing posts the config', async () => {
    const config = { id: 'sdz1', name: 'outgoing', peers: ['p1'] };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(config);
        return res(ctx.json(cfResponse({ ...config, soa_serial: null, checked_time: null, created_time: null, last_transferred_time: null })));
      })
    );

    const res = await api.createSecondaryDnsOutgoing(zoneId, config);
    expect(res.result).toMatchObject(config);
  });

  it('updateSecondaryDnsOutgoing puts the config', async () => {
    const config = { id: 'sdz1', name: 'outgoing', peers: ['p1', 'p2'] };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(config);
        return res(ctx.json(cfResponse({ ...config, soa_serial: null, checked_time: null, created_time: null, last_transferred_time: null })));
      })
    );

    const res = await api.updateSecondaryDnsOutgoing(zoneId, config);
    expect(res.result).toMatchObject(config);
  });

  it('deleteSecondaryDnsOutgoing hits DELETE /zones/:id/secondary_dns/outgoing', async () => {
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'sdz1' }))))
    );

    const res = await api.deleteSecondaryDnsOutgoing(zoneId);
    expect(res.result).toEqual({ id: 'sdz1' });
  });

  it('enableSecondaryDnsOutgoing hits POST /zones/:id/secondary_dns/outgoing/enable', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing/enable`, (_req, res, ctx) => res(ctx.json(cfResponse('enabled'))))
    );

    const res = await api.enableSecondaryDnsOutgoing(zoneId);
    expect(res.result).toEqual('enabled');
  });

  it('disableSecondaryDnsOutgoing hits POST /zones/:id/secondary_dns/outgoing/disable', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing/disable`, (_req, res, ctx) => res(ctx.json(cfResponse('disabled'))))
    );

    const res = await api.disableSecondaryDnsOutgoing(zoneId);
    expect(res.result).toEqual('disabled');
  });

  it('forceSecondaryDnsNotify hits POST /zones/:id/secondary_dns/outgoing/force_notify', async () => {
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing/force_notify`, (_req, res, ctx) => res(ctx.json(cfResponse('notified'))))
    );

    const res = await api.forceSecondaryDnsNotify(zoneId);
    expect(res.result).toEqual('notified');
  });

  it('getSecondaryDnsOutgoingStatus hits GET /zones/:id/secondary_dns/outgoing/status', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/secondary_dns/outgoing/status`, (_req, res, ctx) => res(ctx.json(cfResponse('active'))))
    );

    const res = await api.getSecondaryDnsOutgoingStatus(zoneId);
    expect(res.result).toEqual('active');
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/dns_records`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getDnsRecords(zoneId)).rejects.toBeTruthy();
  });
});
