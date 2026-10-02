# Magic Network Monitoring Rules

9 endpoints.

## GET /accounts/{account_id}/mnm/rules

List rules

operationId: `magic-network-monitoring-rules-list-rules`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/mnm/rules

Create rules

operationId: `magic-network-monitoring-rules-create-rules`

**Request** (application/json)

- `automatic_advertisement`: boolean **required** — Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is trigger
- `bandwidth_threshold`: number — The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 an
- `duration`: string enum: `1m`, `5m`, `10m`, `15m`, `20m`, `30m`, `45m`, `60m` default: `1m` — The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the 
- `name`: string **required** — The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have
- `packet_threshold`: number — The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1
- `prefix_match`: string enum: `exact`, `subnet`, `supernet` — Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
- `prefixes`: string[] **required**
  [array]
- `type`: string **required** enum: `threshold`, `zscore`, `advanced_ddos` — MNM rule type.
- `zscore_sensitivity`: string enum: `low`, `medium`, `high` — Level of sensitivity set for zscore rules.
- `zscore_target`: string enum: `bits`, `packets` — Target of the zscore rule analysis.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/mnm/rules

Update rules

operationId: `magic-network-monitoring-rules-update-rules`

**Request** (application/json)

- `automatic_advertisement`: boolean **required** — Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is trigger
- `bandwidth_threshold`: number — The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 an
- `duration`: string enum: `1m`, `5m`, `10m`, `15m`, `20m`, `30m`, `45m`, `60m` default: `1m` — The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the 
- `name`: string **required** — The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have
- `packet_threshold`: number — The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1
- `prefix_match`: string enum: `exact`, `subnet`, `supernet` — Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
- `prefixes`: string[] **required**
  [array]
- `type`: string **required** enum: `threshold`, `zscore`, `advanced_ddos` — MNM rule type.
- `zscore_sensitivity`: string enum: `low`, `medium`, `high` — Level of sensitivity set for zscore rules.
- `zscore_target`: string enum: `bits`, `packets` — Target of the zscore rule analysis.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/mnm/rules/{rule_id}

Delete rule

operationId: `magic-network-monitoring-rules-delete-rule`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/mnm/rules/{rule_id}

Get rule

operationId: `magic-network-monitoring-rules-get-rule`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/mnm/rules/{rule_id}

Update rule

operationId: `magic-network-monitoring-rules-update-rule`

**Request** (application/json)

- `automatic_advertisement`: boolean **required** — Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is trigger
- `bandwidth_threshold`: number — The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 an
- `duration`: string enum: `1m`, `5m`, `10m`, `15m`, `20m`, `30m`, `45m`, `60m` default: `1m` — The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the 
- `name`: string **required** — The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have
- `packet_threshold`: number — The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1
- `prefix_match`: string enum: `exact`, `subnet`, `supernet` — Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
- `prefixes`: string[] **required**
  [array]
- `type`: string **required** enum: `threshold`, `zscore`, `advanced_ddos` — MNM rule type.
- `zscore_sensitivity`: string enum: `low`, `medium`, `high` — Level of sensitivity set for zscore rules.
- `zscore_target`: string enum: `bits`, `packets` — Target of the zscore rule analysis.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/mnm/rules/{rule_id}/advertisement

Update advertisement for rule

operationId: `magic-network-monitoring-rules-update-advertisement-for-rule`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/mnm/rules/bulk

Create rules in bulk

operationId: `magic-network-monitoring-rules-create-rules-bulk`

**Request** (application/json)

[array of]
- `automatic_advertisement`: boolean **required** — Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is trigger
- `bandwidth_threshold`: number — The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 an
- `duration`: string enum: `1m`, `5m`, `10m`, `15m`, `20m`, `30m`, `45m`, `60m` default: `1m` — The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the 
- `name`: string **required** — The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have
- `packet_threshold`: number — The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1
- `prefix_match`: string enum: `exact`, `subnet`, `supernet` — Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
- `prefixes`: string[] **required**
  [array]
- `type`: string **required** enum: `threshold`, `zscore`, `advanced_ddos` — MNM rule type.
- `zscore_sensitivity`: string enum: `low`, `medium`, `high` — Level of sensitivity set for zscore rules.
- `zscore_target`: string enum: `bits`, `packets` — Target of the zscore rule analysis.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/mnm/rules/bulk

Update rules in bulk

operationId: `magic-network-monitoring-rules-update-rules-bulk`

**Request** (application/json)

[array of]
- `automatic_advertisement`: boolean **required** — Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is trigger
- `bandwidth_threshold`: number — The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 an
- `duration`: string enum: `1m`, `5m`, `10m`, `15m`, `20m`, `30m`, `45m`, `60m` default: `1m` — The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the 
- `name`: string **required** — The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have
- `packet_threshold`: number — The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1
- `prefix_match`: string enum: `exact`, `subnet`, `supernet` — Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.
- `prefixes`: string[] **required**
  [array]
- `type`: string **required** enum: `threshold`, `zscore`, `advanced_ddos` — MNM rule type.
- `zscore_sensitivity`: string enum: `low`, `medium`, `high` — Level of sensitivity set for zscore rules.
- `zscore_target`: string enum: `bits`, `packets` — Target of the zscore rule analysis.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
