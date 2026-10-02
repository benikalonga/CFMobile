# Analytics

1 endpoints.

## GET /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise

Fetch day-wise session and recording analytics data for an App

operationId: `get-org-analytics` · query: `start_date`, `end_date`

**Response** 200 → `result`

- `data`: object
  - `recording_stats`: object — Recording statistics of an App during the range specified
    - `day_stats`: object[] — Day wise recording stats
    - `recording_count`: integer — Total number of recordings during the range specified
    - `recording_minutes_consumed`: number — Total recording minutes during the range specified
  - `session_stats`: object — Session statistics of an App during the range specified
    - `day_stats`: object[] — Day wise session stats
    - `sessions_count`: integer — Total number of sessions during the range specified
    - `sessions_minutes_consumed`: number — Total session minutes during the range specified
- `success`: boolean
