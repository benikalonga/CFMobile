import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Audit Logs', () => {
  it('getAuditLogs passes default paging params', async () => {
    const entries = [
      {
        id: 'log1',
        action: { type: 'update', result: true },
        actor: { email: 'me@example.com', type: 'user', ip: '1.2.3.4' },
        resource: { type: 'zone', id: 'zone456' },
        when: '2024-01-01T00:00:00Z',
      },
    ];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/audit_logs`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        expect(req.url.searchParams.get('per_page')).toBe('50');
        expect(req.url.searchParams.get('direction')).toBe('desc');
        return res(ctx.json(cfResponse(entries)));
      })
    );

    const res = await api.getAuditLogs(accountId);
    expect(res.result).toEqual(entries);
  });

  it('getAuditLogs passes filters as dotted query params', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/audit_logs`, (req, res, ctx) => {
        expect(req.url.searchParams.get('action.type')).toBe('login');
        expect(req.url.searchParams.get('actor.email')).toBe('me@example.com');
        expect(req.url.searchParams.get('actor.ip')).toBe('1.2.3.4');
        expect(req.url.searchParams.get('since')).toBe('2024-01-01');
        expect(req.url.searchParams.get('before')).toBe('2024-02-01');
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getAuditLogs(accountId, 1, {
      actionType: 'login',
      actorEmail: 'me@example.com',
      actorIp: '1.2.3.4',
      since: '2024-01-01',
      before: '2024-02-01',
    });
  });

  it('getAuditLogs omits filter params when not provided', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/audit_logs`, (req, res, ctx) => {
        expect(req.url.searchParams.has('action.type')).toBe(false);
        expect(req.url.searchParams.has('actor.email')).toBe(false);
        expect(req.url.searchParams.has('actor.ip')).toBe(false);
        expect(req.url.searchParams.has('since')).toBe(false);
        expect(req.url.searchParams.has('before')).toBe(false);
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getAuditLogs(accountId);
  });

  it('getUserAuditLogs fetches the current user log with default paging', async () => {
    const entries = [
      {
        id: 'log2',
        action: { type: 'login', result: true },
        actor: { email: 'me@example.com', type: 'user', ip: '1.2.3.4' },
        resource: { type: 'user', id: 'u1' },
        when: '2024-01-01T00:00:00Z',
      },
    ];
    server.use(
      rest.get(`${API_BASE}/user/audit_logs`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        expect(req.url.searchParams.get('direction')).toBe('desc');
        return res(ctx.json(cfResponse(entries)));
      })
    );

    const res = await api.getUserAuditLogs();
    expect(res.result).toEqual(entries);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/audit_logs`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getAuditLogs(accountId)).rejects.toBeTruthy();
  });
});
