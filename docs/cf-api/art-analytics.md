# ART Analytics

3 endpoints.

## POST /accounts/{account_id}/analytics/query/{dataset}/summary

Query analytics summary

operationId: `art-analytics-query-summary`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply before aggregating results.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — The start of the query time range (inclusive). RFC3339 format with timezone is required (e.g. `2024-11-05T00:00:00Z`).
- `groupBy`: string[] **required** — Specifies the column names to group results by. Requires valid columns for the target dataset.
  [array]
- `stats`: string[] **required** — Specifies the stat names to include in results. Requires valid stats for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
  [array]
- `to`: string **required** — Specifies the end of the query time range (exclusive). Requires RFC3339 format with timezone.

**Response** 200 → `result`

- `currentTotal`: object[] **required** — Aggregated stats for the requested time range.
  [array]
- `previousTotal`: object[] **required** — Aggregated stats for the equivalent preceding time range, for trend comparison.
  [array]

## POST /accounts/{account_id}/analytics/query/{dataset}/timeseries

Query analytics timeseries

operationId: `art-analytics-query-timeseries`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply before aggregating results.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — The start of the query time range (inclusive). RFC3339 format with timezone is required (e.g. `2024-11-05T00:00:00Z`).
- `groupBy`: string[] **required** — Specifies the column names to group results by. Requires valid columns for the target dataset.
  [array]
- `stats`: string[] **required** — Specifies the stat names to include in results. Requires valid stats for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
  [array]
- `to`: string **required** — Specifies the end of the query time range (exclusive). Requires RFC3339 format with timezone.
- `resolution`: string **required** — Time bucket size for grouping results. Controls the granularity of the returned time slots.

**Response** 200 → `result`

- `resolution`: string **required** — The resolution used for time bucketing.
- `slots`: object[] **required** — Time-bucketed result rows. Each slot contains a `time_bucket` field plus the requested stats and group-by dimensions.
  [array]

## POST /accounts/{account_id}/analytics/query/{dataset}/top-n

Query analytics top-N

operationId: `art-analytics-query-top-n`

**Request** (application/json)

- `filters`: object[] **required** — Filters to apply before aggregating results.
  [array of]
  - `name`: string **required** — Specifies the column name to filter on. Requires a valid column for the target dataset (e.g. `country`, `allowed`, `appId`).
  - `op`: string **required** — Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`, `lte`.
  - `values`: object[] **required** — Values to match against. Type depends on the column.
    [array]
- `from`: string **required** — The start of the query time range (inclusive). RFC3339 format with timezone is required (e.g. `2024-11-05T00:00:00Z`).
- `groupBy`: string[] **required** — Specifies the column names to group results by. Requires valid columns for the target dataset.
  [array]
- `stats`: string[] **required** — Specifies the stat names to include in results. Requires valid stats for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
  [array]
- `to`: string **required** — Specifies the end of the query time range (exclusive). Requires RFC3339 format with timezone.
- `n`: integer **required** — Maximum number of results to return.
- `orderBy`: string **required** — Specifies the stat name for sorting results in descending order. Requires a valid stat for the target dataset.

**Response** 200 → `result`

[array of]
object
