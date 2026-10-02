# Values

1 endpoints.

## POST /accounts/{account_id}/workers/observability/telemetry/values

List values

operationId: `telemetry.values.list`

**Request** (application/json)

- `datasets`: string[] **required** — Leave this empty to use the default datasets
  [array]
- `filters`: object[] default: `` — Apply filters before listing values. Supports nested groups via kind: 'group'. Maximum nesting depth is 4.
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
- `key`: string **required**
- `limit`: number default: `50`
- `needle`: object — Full-text search expression to match events containing the specified text or pattern.
  - `isRegex`: boolean — When true, treats the value as a regular expression (RE2 syntax).
  - `matchCase`: boolean — When true, performs a case-sensitive search. Defaults to case-insensitive.
  - `value`: any **required** — The text or pattern to search for.
- `timeframe`: object **required**
  - `from`: number **required**
  - `to`: number **required**
- `type`: string **required** enum: `string`, `boolean`, `number`

**Response** 200 → `result`

[array of]
- `dataset`: string **required**
- `key`: string **required**
- `type`: string **required** enum: `string`, `boolean`, `number`
- `value`: any **required**
