# Instant Logs jobs for a zone

2 endpoints.

## GET /zones/{zone_id}/logpush/edge/jobs

List Instant Logs jobs

operationId: `get-zones-zone_id-logpush-edge-jobs`

**Response** 200 → `result`

[array of]
- `destination_conf`: string — Unique WebSocket address that will receive messages from Cloudflare’s edge.
- `fields`: string — Comma-separated list of fields.
- `filter`: string — Filters to drill down into specific events.
- `sample`: integer — The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.
- `session_id`: string — Unique session id of the job.

## POST /zones/{zone_id}/logpush/edge/jobs

Create Instant Logs job

operationId: `post-zones-zone_id-logpush-edge-jobs`

**Request** (application/json)

- `fields`: string — Comma-separated list of fields.
- `filter`: string — Filters to drill down into specific events.
- `sample`: integer — The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.

**Response** 200 → `result`

- `destination_conf`: string — Unique WebSocket address that will receive messages from Cloudflare’s edge.
- `fields`: string — Comma-separated list of fields.
- `filter`: string — Filters to drill down into specific events.
- `sample`: integer — The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.
- `session_id`: string — Unique session id of the job.
