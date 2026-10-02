import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const accountId = 'acct123';
const projectName = 'my-project';

beforeAll(async () => {
  await initTestClient();
});

describe('Pages Custom Domains', () => {
  const domain = {
    id: 'domain1',
    domain_id: 'domain1',
    name: 'www.example.com',
    status: 'active' as const,
    certificate_authority: 'google' as const,
    zone_tag: 'zone456',
    created_on: '2024-01-01T00:00:00Z',
    validation_data: { method: 'http' as const, status: 'active' },
    verification_data: { status: 'active' },
  };

  it('getPagesDomains lists custom domains for a project', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/domains`, (_req, res, ctx) =>
        res(ctx.json(cfResponse([domain])))
      )
    );

    const res = await api.getPagesDomains(accountId, projectName);
    expect(res.result).toEqual([domain]);
  });

  it('addPagesDomain POSTs the domain name', async () => {
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/domains`, async (req, res, ctx) => {
        expect(await req.json()).toEqual({ name: 'www.example.com' });
        return res(ctx.json(cfResponse(domain)));
      })
    );

    const res = await api.addPagesDomain(accountId, projectName, 'www.example.com');
    expect(res.result).toEqual(domain);
  });

  it('deletePagesDomain DELETEs the domain by name', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/domains/www.example.com`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(null)))
      )
    );

    const res = await api.deletePagesDomain(accountId, projectName, 'www.example.com');
    expect(res.success).toBe(true);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/domains`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getPagesDomains(accountId, projectName)).rejects.toBeTruthy();
  });
});
