# Keys

1 endpoints.

## POST /accounts/{account_id}/workers/observability/telemetry/keys

List keys

operationId: `telemetry.keys.list`

**Request** (application/json)

- `datasets`: string[] default: `` — Leave this empty to use the default datasets
  [array]
- `filters`: object[] default: `` — Apply filters to narrow key discovery. Supports nested groups via kind: 'group'. Maximum nesting depth is 4.
  [array of]
  - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
  - `filters`: object[] **required**
    [array of]
    - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
    - `filters`: object[] **required**
    - `kind`: string **required** enum: `group`
  - `kind`: string **required** enum: `group`
  - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR` — Logical operator for combining child filters: 'and' (all must match) or 'or' (any must match).
  - `filters`: object[] **required** — Child filter nodes. Each can be a leaf filter or another nested group.
    [array of]
    - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
    - `filters`: object[] **required**
    - `kind`: string **required** enum: `group`
  - `kind`: string **required** enum: `group` — Discriminator indicating this is a nested filter group.
- `from`: number
- `keyNeedle`: object — If the user suggests a key, use this to narrow down the list of keys returned. Make sure matchCase is false to avoid case sensitivity issues
  - `isRegex`: boolean — When true, treats the value as a regular expression (RE2 syntax).
  - `matchCase`: boolean — When true, performs a case-sensitive search. Defaults to case-insensitive.
  - `value`: any **required** — The text or pattern to search for.
- `limit`: number — Advanced usage: set limit=1000+ to retrieve comprehensive key options without needing additional filtering.
- `needle`: object — Search for a specific substring in any of the events
  - `isRegex`: boolean — When true, treats the value as a regular expression (RE2 syntax).
  - `matchCase`: boolean — When true, performs a case-sensitive search. Defaults to case-insensitive.
  - `value`: any **required** — The text or pattern to search for.
- `to`: number

**Response** 200 → `result`

[array of]
- `key`: string **required**
- `lastSeenAt`: number **required**
- `type`: string **required** enum: `string`, `boolean`, `number`
