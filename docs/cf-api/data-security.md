# Data Security

3 endpoints.

## POST /accounts/{account_id}/analytics/query/data-security/content-findings/top-n

Top integrations by content findings

operationId: `data-security-content-findings-top-n`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply. `findingType = content` is applied automatically for CASB data.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — Start of the query time range (inclusive). RFC3339.
- `n`: integer **required** — Maximum number of integrations to return.
- `to`: string **required** — End of the query time range (exclusive). RFC3339.

**Response** 200 → `result`

[array of]
object

## POST /accounts/{account_id}/analytics/query/data-security/findings/summary

Data security findings summary

operationId: `data-security-findings-summary`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — Start of the query time range (inclusive). RFC3339.
- `to`: string **required** — End of the query time range (exclusive). RFC3339.

**Response** 200 → `result`

- `currentTotal`: object[] **required** — Aggregated stats for the requested time range.
  [array]
- `previousTotal`: object[] **required** — Aggregated stats for the equivalent preceding time range, for trend comparison.
  [array]

## POST /accounts/{account_id}/analytics/query/data-security/findings/timeseries

Data security findings timeseries

operationId: `data-security-findings-timeseries`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — Start of the query time range (inclusive). RFC3339.
- `to`: string **required** — End of the query time range (exclusive). RFC3339.

**Response** 200 → `result`

- `resolution`: string — Always null for this endpoint.
- `slots`: object[] **required** — Contains time-bucketed result rows. Each slot includes a `timestamp` plus `content` and `posture` maps with `cloud` and `saas` keys.
  [array]
