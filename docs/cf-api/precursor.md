# Precursor

2 endpoints.

## GET /zones/{zone_id}/precursor

Get Zone Precursor Config

operationId: `precursor-for-a-zone-get-config`

**Response** 200 → `result`

- `default_mode`: string enum: `off`, `min-friction`, `max-security` default: `off` — The zone-level Precursor enforcement mode applied to requests that do
- `enforcement_rules`: object[] — The ordered list of enforcement rules for the zone.
  [array of]
  - `description`: string default: `` — An informative description of the rule.
  - `enabled`: boolean default: `true` — Whether the rule is active.
  - `expression`: string **required** — The filter expression that determines which requests the rule matches.
  - `id`: string — The read-only identifier that Cloudflare assigns to the rule.
  - `mode`: string **required** enum: `min-friction`, `max-security` — The override mode Precursor applies to requests matching an enforcement

## PUT /zones/{zone_id}/precursor

Update Zone Precursor Config

operationId: `precursor-for-a-zone-update-config`

**Request** (application/json)

- `default_mode`: string enum: `off`, `min-friction`, `max-security` default: `off` — The zone-level Precursor enforcement mode applied to requests that do
- `enforcement_rules`: object[] — The ordered list of enforcement rules for the zone.
  [array of]
  - `description`: string default: `` — An informative description of the rule.
  - `enabled`: boolean default: `true` — Whether the rule is active.
  - `expression`: string **required** — The filter expression that determines which requests the rule matches.
  - `id`: string — The read-only identifier that Cloudflare assigns to the rule.
  - `mode`: string **required** enum: `min-friction`, `max-security` — The override mode Precursor applies to requests matching an enforcement

**Response** 200 → `result`

- `default_mode`: string enum: `off`, `min-friction`, `max-security` default: `off` — The zone-level Precursor enforcement mode applied to requests that do
- `enforcement_rules`: object[] — The ordered list of enforcement rules for the zone.
  [array of]
  - `description`: string default: `` — An informative description of the rule.
  - `enabled`: boolean default: `true` — Whether the rule is active.
  - `expression`: string **required** — The filter expression that determines which requests the rule matches.
  - `id`: string — The read-only identifier that Cloudflare assigns to the rule.
  - `mode`: string **required** enum: `min-friction`, `max-security` — The override mode Precursor applies to requests matching an enforcement
