import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Accounts', () => {
  it('getAccounts hits GET /accounts', async () => {
    const accounts = [{ id: 'acct123', name: 'My Account', type: 'standard' }];
    server.use(
      rest.get(`${API_BASE}/accounts`, (_req, res, ctx) => res(ctx.json(cfResponse(accounts))))
    );

    const res = await api.getAccounts();
    expect(res.result).toEqual(accounts);
  });

  it('getAccountMembers hits GET /accounts/:id/members with page and per_page', async () => {
    const members = [{ id: 'm1', user: { email: 'a@b.com' }, status: 'accepted', roles: [] }];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/members`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('2');
        expect(req.url.searchParams.get('per_page')).toBe('50');
        return res(ctx.json(cfResponse(members)));
      })
    );

    const res = await api.getAccountMembers(accountId, 2);
    expect(res.result).toEqual(members);
  });

  it('getAccountMembers defaults to page 1', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/members`, (req, res, ctx) => {
        expect(req.url.searchParams.get('page')).toBe('1');
        return res(ctx.json(cfResponse([])));
      })
    );

    await api.getAccountMembers(accountId);
  });

  it('getAccountRoles hits GET /accounts/:id/roles', async () => {
    const roles = [{ id: 'r1', name: 'Admin', description: 'Full access', permissions: {} }];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/roles`, (_req, res, ctx) => res(ctx.json(cfResponse(roles))))
    );

    const res = await api.getAccountRoles(accountId);
    expect(res.result).toEqual(roles);
  });

  it('inviteAccountMember posts email, roles and status', async () => {
    const invite = { email: 'new@example.com', roles: ['r1'], status: 'pending' as const };
    const member = { id: 'm2', user: { email: invite.email }, status: 'pending', roles: ['r1'] };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/members`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(invite);
        return res(ctx.json(cfResponse(member)));
      })
    );

    const res = await api.inviteAccountMember(accountId, invite);
    expect(res.result).toEqual(member);
  });

  it('updateAccountMemberRoles puts full role objects', async () => {
    const roles = [{ id: 'r1', name: 'Admin', description: 'Full access', permissions: {} }];
    const member = { id: 'm1', user: { email: 'a@b.com' }, status: 'accepted', roles };
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/members/m1`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ roles });
        return res(ctx.json(cfResponse(member)));
      })
    );

    const res = await api.updateAccountMemberRoles(accountId, 'm1', roles as any);
    expect(res.result).toEqual(member);
  });

  it('removeAccountMember hits DELETE /accounts/:id/members/:memberId', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/members/m1`, (_req, res, ctx) => res(ctx.json(cfResponse({ id: 'm1' }))))
    );

    const res = await api.removeAccountMember(accountId, 'm1');
    expect(res.result).toEqual({ id: 'm1' });
  });
});
