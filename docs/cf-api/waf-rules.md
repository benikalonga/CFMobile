# WAF rules

3 endpoints.

## GET /zones/{zone_id}/firewall/waf/packages/{package_id}/rules

List WAF rules

operationId: `waf-rules-list-waf-rules` · query: `mode`, `group_id`, `page`, `per_page`, `order`, `direction`, `match`, `description`, `priority`

**Response** 200 → `result`

[array of]
(one of 3 variants; showing the first)
- `description`: string — Defines the public description of the WAF rule.
- `group`: object — Defines the rule group to which the current WAF rule belongs.
  - `id`: string — Defines the unique identifier of the rule group.
  - `name`: string — Defines the name of the rule group.
- `id`: string — Defines the unique identifier of the WAF rule.
- `package_id`: string — Defines the unique identifier of a WAF package.
- `priority`: string — Defines the order in which the individual WAF rule is executed within its rule group.
- `allowed_modes`: string[] — Defines the available modes for the current WAF rule. Applies to anomaly detection WAF rules.
  [array]
- `mode`: string enum: `on`, `off` — Defines the mode anomaly. When set to `on`, the current WAF rule will be used when evaluating the request. Applies to anomaly detection WAF 

## GET /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}

Get a WAF rule

operationId: `waf-rules-get-a-waf-rule`

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}

Update a WAF rule

operationId: `waf-rules-update-a-waf-rule`

**Request** (application/json)

- `mode`: string enum: `default`, `disable`, `simulate`, `block`, `challenge`, `on`, `off` — Defines the mode/action of the rule when triggered. You must use a value from the `allowed_modes` array of the current rule.

**Response** 200 → `result`

(one of 2 variants; showing the first)
object
