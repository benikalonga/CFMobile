# Usage

1 endpoints.

## GET /accounts/{account_id}/workers/observability/usage

Get event count

operationId: `usage.get` · query: `from`, `to`

**Response** 200 → `result`

- `breakdown`: object[] **required** — Event counts grouped by dataset and service, bucketed by day.
  [array of]
  - `bin`: string **required** — ISO-8601 timestamp for the start of the bucket.
  - `count`: number **required** — ABR-adjusted event count for this bucket.
  - `dataset`: string **required** — Dataset name (e.g. 'workers', 'queues').
  - `service`: string **required** — Worker or service name that produced the events.
- `events`: number **required** — Total ABR-adjusted event count for the period — sum of all breakdown bins.
