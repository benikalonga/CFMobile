import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';

beforeAll(async () => {
  await initTestClient();
});

describe('Registrar', () => {
  it('getRegistrarDomains lists domains', async () => {
    const domains = [
      { id: 'example.com', available: false, can_register: false, locked: true, supported_tld: true },
    ];
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/registrar/domains`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(domains)))
      )
    );

    const res = await api.getRegistrarDomains(accountId);
    expect(res.success).toBe(true);
    expect(res.result).toEqual(domains);
  });

  it('getRegistrarDomain fetches a single domain by name', async () => {
    const domain = { id: 'example.com', available: false, can_register: false, locked: true, supported_tld: true };
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/registrar/domains/example.com`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(domain)))
      )
    );

    const res = await api.getRegistrarDomain(accountId, 'example.com');
    expect(res.result).toEqual(domain);
  });

  it('updateRegistrarDomain PUTs the update body', async () => {
    const update = { auto_renew: true, locked: false, privacy: true };
    const updated = { id: 'example.com', available: false, can_register: false, supported_tld: true, ...update };
    server.use(
      rest.put(`${API_BASE}/accounts/${accountId}/registrar/domains/example.com`, async (req, res, ctx) => {
        expect(await req.json()).toEqual(update);
        return res(ctx.json(cfResponse(updated)));
      })
    );

    const res = await api.updateRegistrarDomain(accountId, 'example.com', update);
    expect(res.result).toEqual(updated);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/registrar/domains`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getRegistrarDomains(accountId)).rejects.toBeTruthy();
  });
});
