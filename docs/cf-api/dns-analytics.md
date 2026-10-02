# DNS Analytics

2 endpoints.

## GET /zones/{zone_id}/dns_analytics/report

Table

operationId: `dns-analytics-table` · query: `metrics`, `dimensions`, `since`, `until`, `limit`, `sort`, `filters`

**Response** 200 → `result`

- `data`: object[] **required** — Array with one row per combination of dimension values.
  [array of]
  - `dimensions`: string[] **required** — Array of dimension values, representing the combination of dimension values corresponding to this row.
    [array]
- `data_lag`: number **required** — Number of seconds between current time and last processed event, in another words how many seconds of data could be missing.
- `max`: object **required** — Maximum results for each metric (object mapping metric names to values). Currently always an empty object.
- `min`: object **required** — Minimum results for each metric (object mapping metric names to values). Currently always an empty object.
- `query`: object **required**
  - `dimensions`: string[] **required** — Array of dimension names.
    [array]
  - `filters`: string — Segmentation filter in 'attribute operator value' format.
  - `limit`: integer **required** default: `100000` — Limit number of returned metrics.
  - `metrics`: string[] **required** — Array of metric names.
    [array]
  - `since`: string **required** — Start date and time of requesting data period in ISO 8601 format.
  - `sort`: string[] — Array of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).
    [array]
  - `until`: string **required** — End date and time of requesting data period in ISO 8601 format.
- `rows`: number **required** — Total number of rows in the result.
- `totals`: object **required** — Total results for metrics across all data (object mapping metric names to values).
- `data`: object[] **required**
  [array of]
  - `metrics`: number[] **required** — Array with one item per requested metric. Each item is a single value.
    [array]

## GET /zones/{zone_id}/dns_analytics/report/bytime

By Time

operationId: `dns-analytics-by-time` · query: `metrics`, `dimensions`, `since`, `until`, `limit`, `sort`, `filters`, `time_delta`

**Response** 200 → `result`

- `data`: object[] **required** — Array with one row per combination of dimension values.
  [array of]
  - `dimensions`: string[] **required** — Array of dimension values, representing the combination of dimension values corresponding to this row.
    [array]
- `data_lag`: number **required** — Number of seconds between current time and last processed event, in another words how many seconds of data could be missing.
- `max`: object **required** — Maximum results for each metric (object mapping metric names to values). Currently always an empty object.
- `min`: object **required** — Minimum results for each metric (object mapping metric names to values). Currently always an empty object.
- `query`: object **required**
  - `dimensions`: string[] **required** — Array of dimension names.
    [array]
  - `filters`: string — Segmentation filter in 'attribute operator value' format.
  - `limit`: integer **required** default: `100000` — Limit number of returned metrics.
  - `metrics`: string[] **required** — Array of metric names.
    [array]
  - `since`: string **required** — Start date and time of requesting data period in ISO 8601 format.
  - `sort`: string[] — Array of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending).
    [array]
  - `until`: string **required** — End date and time of requesting data period in ISO 8601 format.
- `rows`: number **required** — Total number of rows in the result.
- `totals`: object **required** — Total results for metrics across all data (object mapping metric names to values).
- `data`: object[] **required**
  [array of]
  - `metrics`: array[] **required** — Array with one item per requested metric. Each item is an array of values, broken down by time interval.
    [array of]
    [array]
- `query`: object **required**
  - `time_delta`: string **required** enum: `all`, `auto`, `year`, `quarter`, `month`, `week`, `day`, `hour` — Unit of time to group data by.
- `time_intervals`: array[] **required** — Array of time intervals in the response data. Each interval is represented as an array containing two values: the start time, and the end ti
  [array of]
  [array]
