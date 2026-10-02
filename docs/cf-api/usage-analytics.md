# Usage Analytics

5 endpoints.

## GET /accounts/{account_id}/billing/usage

Get account billing usage

operationId: `usage-analytics-get-account-billing-usage` · query: `metrics`, `since`, `until`, `time_delta`, `limit`, `filters`

**Response** 200 → `result`

[array of]
- `argoAcceleratedBytes`: integer — Number of Argo accelerated bytes in this time period.
- `imageResizingRequests`: integer — Number of Image Resizing requests in this time period.
- `loadBalancingQueries`: integer — Number of Load Balancing DNS queries in this time period.
- `mediaUniqueTransformations`: integer — Number of Media unique image transformations in this time period.
- `rateLimitingRequestsAllowed`: integer — Number of Rate Limiting requests allowed in this time period.
- `spectrumBytesTransferred`: integer — Number of Spectrum bytes transferred in this time period.
- `streamMinutesViewed`: integer — Number of Stream billable minutes viewed in this time period.
- `ts`: integer — Unix timestamp (epoch seconds) for the start of this time period.
- `workersKVReads`: integer — Number of Workers KV reads in this time period.
- `workersRequests`: integer — Number of Workers requests in this time period.

## GET /accounts/{account_id}/media/usage

Get account Media usage

operationId: `usage-analytics-get-account-media-usage` · query: `metrics`, `since`, `until`, `time_delta`, `limit`, `filters`

**Response** 200 → `result`

[array of]
- `streamMinutesViewed`: integer — Number of Stream billable minutes viewed in this time period.
- `ts`: integer — Unix timestamp (epoch seconds) for the start of this time period.

## GET /accounts/{account_id}/stream/usage

Get account Stream usage

operationId: `usage-analytics-get-account-stream-usage` · query: `metrics`, `since`, `until`, `time_delta`, `limit`, `filters`

**Response** 200 → `result`

[array of]
- `streamMinutesViewed`: integer — Number of Stream billable minutes viewed in this time period.
- `ts`: integer — Unix timestamp (epoch seconds) for the start of this time period.

## GET /zones/{zone_id}/media/usage

Get zone Media usage

operationId: `usage-analytics-get-zone-media-usage` · query: `metrics`, `since`, `until`, `time_delta`, `limit`, `filters`

**Response** 200 → `result`

[array of]
- `streamMinutesViewed`: integer — Number of Stream billable minutes viewed in this time period.
- `ts`: integer — Unix timestamp (epoch seconds) for the start of this time period.

## GET /zones/{zone_id}/stream/usage

Get zone Stream usage

operationId: `usage-analytics-get-zone-stream-usage` · query: `metrics`, `since`, `until`, `time_delta`, `limit`, `filters`

**Response** 200 → `result`

[array of]
- `streamMinutesViewed`: integer — Number of Stream billable minutes viewed in this time period.
- `ts`: integer — Unix timestamp (epoch seconds) for the start of this time period.
