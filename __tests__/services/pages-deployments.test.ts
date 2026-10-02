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

describe('Pages Deployments', () => {
  const deployment = {
    id: 'dep1',
    short_id: 'd1',
    project_id: 'proj1',
    project_name: projectName,
    environment: 'production' as const,
    url: 'https://d1.my-project.pages.dev',
    created_on: '2024-01-01T00:00:00Z',
    modified_on: '2024-01-01T00:00:00Z',
    is_skipped: false,
    latest_stage: { name: 'deploy' as const, status: 'success' as const },
    stages: [],
    deployment_trigger: { type: 'ad_hoc' as const },
  };

  it('getPagesDeployments lists deployments for a project', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments`, (_req, res, ctx) =>
        res(ctx.json(cfResponse([deployment])))
      )
    );

    const res = await api.getPagesDeployments(accountId, projectName);
    expect(res.result).toEqual([deployment]);
  });

  it('getPagesDeployment fetches a single deployment', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments/dep1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(deployment)))
      )
    );

    const res = await api.getPagesDeployment(accountId, projectName, 'dep1');
    expect(res.result).toEqual(deployment);
  });

  it('deletePagesDeployment DELETEs the deployment', async () => {
    server.use(
      rest.delete(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments/dep1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(null)))
      )
    );

    const res = await api.deletePagesDeployment(accountId, projectName, 'dep1');
    expect(res.success).toBe(true);
  });

  it('retryPagesDeployment POSTs to the retry endpoint', async () => {
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments/dep1/retry`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(deployment)))
      )
    );

    const res = await api.retryPagesDeployment(accountId, projectName, 'dep1');
    expect(res.result).toEqual(deployment);
  });

  it('rollbackPagesDeployment POSTs to the rollback endpoint', async () => {
    const rolledBack = { ...deployment, id: 'dep2' };
    server.use(
      rest.post(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments/dep1/rollback`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(rolledBack)))
      )
    );

    const res = await api.rollbackPagesDeployment(accountId, projectName, 'dep1');
    expect(res.result).toEqual(rolledBack);
  });

  it('getPagesDeploymentLogs fetches the log history', async () => {
    const logs = { data: ['line 1', 'line 2'] };
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments/dep1/history/logs`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(logs)))
      )
    );

    const res = await api.getPagesDeploymentLogs(accountId, projectName, 'dep1');
    expect(res.result).toEqual(logs);
  });

  it('propagates a Cloudflare error response', async () => {
    server.use(
      rest.get(`${API_BASE}/accounts/${accountId}/pages/projects/${projectName}/deployments`, (_req, res, ctx) =>
        res(
          ctx.status(403),
          ctx.json({ success: false, errors: [{ code: 10000, message: 'Authentication error' }], messages: [], result: null })
        )
      )
    );

    await expect(api.getPagesDeployments(accountId, projectName)).rejects.toBeTruthy();
  });
});
