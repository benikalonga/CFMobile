# Rate Limiting Analytics

1 endpoints.

## GET /zones/{zone_id}/rate_limit_analytics

Get Rate Limiting Analytics

operationId: `rate-limit-analytics-get-zone-analytics` · query: `since`, `until`, `time_delta`

**Response** 200 → `result`

- `labels`: object **required** — Mapping from rule ID to human-readable description of the rule.
- `since`: string **required** — Start of the queried time period formatted as RFC 3339.
- `time_delta`: integer **required** enum: `60`, `3600`, `86400`, `2592000` — Length (in seconds) of the time segments dividing the entire time period.
- `timeseries`: object[] **required** — Time series with analytics data for each time segment.
  [array of]
  - `rules`: object **required** — Contains rule-level analytics for this time segment.
  - `since`: string **required** — Start of the time segment formatted as RFC 3339.
  - `until`: string **required** — Exclusive end of the time segment formatted as RFC 3339.
- `until`: string **required** — Exclusive end of the queried time period formatted as RFC 3339.
- `zone_id`: integer — Numeric ID of the zone.
