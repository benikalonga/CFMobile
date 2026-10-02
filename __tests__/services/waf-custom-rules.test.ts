import { rest } from '../../test-utils/msw';
import { server } from '../../test-utils/server';
import { API_BASE, initTestClient } from '../../test-utils/cf-client';
import { cfResponse, cfError } from '../../test-utils/cf-response';
import * as api from '@/services/cloudflare';

const zoneId = 'zone456';
const WAF_CUSTOM_PHASE = 'http_request_firewall_custom';

beforeAll(async () => {
  await initTestClient();
});

describe('WAF Custom Rules (Rulesets API)', () => {
  it('getWAFCustomRules gets the entrypoint ruleset for the custom phase', async () => {
    const ruleset = { id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone', rules: [] };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/phases/${WAF_CUSTOM_PHASE}/entrypoint`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(ruleset)))
      )
    );

    const res = await api.getWAFCustomRules(zoneId);
    expect(res.result).toEqual(ruleset);
  });

  it('getZoneRulesets lists all rulesets for the zone', async () => {
    const rulesets = [{ id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone' }];
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets`, (_req, res, ctx) => res(ctx.json(cfResponse(rulesets))))
    );

    const res = await api.getZoneRulesets(zoneId);
    expect(res.result).toEqual(rulesets);
  });

  it('getZoneRuleset gets a single ruleset by id', async () => {
    const ruleset = { id: 'rs2', name: 'Other', phase: 'http_request_transform', kind: 'zone' };
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/rs2`, (_req, res, ctx) => res(ctx.json(cfResponse(ruleset))))
    );

    const res = await api.getZoneRuleset(zoneId, 'rs2');
    expect(res.result).toEqual(ruleset);
  });

  it('createRulesetRule POSTs the new rule to the ruleset rules endpoint', async () => {
    const rule = { action: 'block' as const, expression: 'ip.src eq 1.2.3.4', description: 'block ip', enabled: true };
    const updatedRuleset = { id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone', rules: [{ id: 'rule1', ...rule }] };
    server.use(
      rest.post(`${API_BASE}/zones/${zoneId}/rulesets/rs1/rules`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual(rule);
        return res(ctx.json(cfResponse(updatedRuleset)));
      })
    );

    const res = await api.createRulesetRule(zoneId, 'rs1', rule);
    expect(res.result).toEqual(updatedRuleset);
  });

  it('updateRulesetRule PATCHes the specific rule within the ruleset', async () => {
    server.use(
      rest.patch(`${API_BASE}/zones/${zoneId}/rulesets/rs1/rules/rule1`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual({ enabled: false });
        return res(ctx.json(cfResponse({ id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone', rules: [] })));
      })
    );

    await api.updateRulesetRule(zoneId, 'rs1', 'rule1', { enabled: false });
  });

  it('deleteRulesetRule DELETEs the specific rule within the ruleset', async () => {
    const updatedRuleset = { id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone', rules: [] };
    server.use(
      rest.delete(`${API_BASE}/zones/${zoneId}/rulesets/rs1/rules/rule1`, (_req, res, ctx) =>
        res(ctx.json(cfResponse(updatedRuleset)))
      )
    );

    const res = await api.deleteRulesetRule(zoneId, 'rs1', 'rule1');
    expect(res.result).toEqual(updatedRuleset);
  });

  it('createWAFEntrypoint PUTs an empty rules entrypoint to create it', async () => {
    const created = { id: 'rs1', name: 'Custom rules', phase: WAF_CUSTOM_PHASE, kind: 'zone', rules: [] };
    server.use(
      rest.put(`${API_BASE}/zones/${zoneId}/rulesets/phases/${WAF_CUSTOM_PHASE}/entrypoint`, async (req, res, ctx) => {
        const body = await req.json();
        expect(body).toEqual({ name: 'Custom rules', kind: 'zone', phase: WAF_CUSTOM_PHASE, rules: [] });
        return res(ctx.json(cfResponse(created)));
      })
    );

    const res = await api.createWAFEntrypoint(zoneId);
    expect(res.result).toEqual(created);
  });

  it('propagates a Cloudflare error when the entrypoint does not exist yet (404)', async () => {
    server.use(
      rest.get(`${API_BASE}/zones/${zoneId}/rulesets/phases/${WAF_CUSTOM_PHASE}/entrypoint`, (_req, res, ctx) =>
        res(ctx.status(404), ctx.json(cfError('Ruleset not found', 10001)))
      )
    );

    await expect(api.getWAFCustomRules(zoneId)).rejects.toBeTruthy();
  });
});
