# Live streams

12 endpoints.

## GET /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/daywise

Fetch day-wise analytics data for your livestreams

operationId: `get-livestream-analytics-daywise` · query: `start_time`, `end_time`, `filters`

**Response** 200 → `result`

- `data`: object[]
  [array of]
  - `count`: integer — Count of total livestream sessions.
  - `date`: string — Analytics date.
  - `total_ingest_seconds`: integer — Total time duration for which the input was given or the meeting was streamed.
  - `total_viewer_seconds`: integer — Total view time for which the viewers watched the stream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/overall

Fetch complete analytics data for your livestreams

operationId: `get-livestream-analytics-complete` · query: `start_time`, `end_time`, `filters`

**Response** 200 → `result`

- `data`: object
  - `count`: integer — Count of total livestreams.
  - `total_ingest_seconds`: integer — Total time duration for which the input was given or the meeting was streamed.
  - `total_viewer_seconds`: integer — Total view time for which the viewers watched the stream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams

Fetch all livestreams

operationId: `fetch_all_livestreams` · query: `exclude_meetings`, `per_page`, `page_no`, `status`, `start_time`, `end_time`, `sort_order`

**Response** 200 → `result`

- `data`: object
  - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
  - `disabled`: string — Specifies if the livestream was disabled.
  - `id`: string — The ID of the livestream.
  - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
  - `meeting_id`: string — ID of the meeting.
  - `name`: string — Name of the livestream.
  - `paging`: object
    - `end_offset`: integer
    - `start_offset`: integer
    - `total_count`: integer
  - `playback_url`: string — The web address that viewers can use to watch the livestream.
  - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
  - `stream_key`: string — Unique key for accessing each livestream.
  - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
- `success`: boolean

## POST /accounts/{account_id}/realtime/kit/{app_id}/livestreams

Create an independent livestream

operationId: `create_livestream`

**Request** (application/json)

- `name`: string — Name of the livestream

**Response** 201 → `result`

- `data`: object
  - `disabled`: boolean — Specifies if the livestream was disabled.
  - `id`: string — The livestream ID.
  - `ingest_server`: string — The server URL to which the RTMP encoder should send the video and audio data.
  - `meeting_id`: string
  - `name`: string
  - `playback_url`: string — The web address that viewers can use to watch the livestream.
  - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
  - `stream_key`: string — Unique key for accessing each livestream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}

Fetch livestream details using livestream ID

operationId: `get-v2-livestream-session-livestream-id` · query: `page_no`, `per_page`

**Response** 200 → `result`

- `data`: object
  - `livestream`: object
    - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
    - `disabled`: string — Specifies if the livestream was disabled.
    - `id`: string — ID of the livestream.
    - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
    - `meeting_id`: string — The ID of the meeting.
    - `name`: string — Name of the livestream.
    - `playback_url`: string — The web address that viewers can use to watch the livestream.
    - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
    - `stream_key`: string — Unique key for accessing each livestream.
    - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
  - `paging`: object
    - `end_offset`: integer
    - `start_offset`: integer
    - `total_count`: integer
  - `session`: object
    - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
    - `err_message`: string
    - `id`: string — ID of the session.
    - `ingest_seconds`: number — The time duration for which the input was given or the meeting was streamed.
    - `invoked_time`: string — Timestamp the object was invoked. The time is returned in ISO format.
    - `livestream_id`: string
    - `started_time`: string — Timestamp the object was started. The time is returned in ISO format.
    - `stopped_time`: string — Timestamp the object was stopped. The time is returned in ISO format.
    - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
    - `viewer_seconds`: number — The total view time for which the viewers watched the stream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}/active-livestream-session

Fetch active livestream session details

operationId: `get-v2-active-livestream-session-details`

**Response** 200 → `result`

- `data`: object
  - `livestream`: object
    - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
    - `disabled`: string — Specifies if the livestream was disabled.
    - `id`: string
    - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
    - `meeting_id`: string — ID of the meeting.
    - `name`: string — Name of the livestream.
    - `playback_url`: string — The web address that viewers can use to watch the livestream.
    - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
    - `stream_key`: string — Unique key for accessing each livestream.
    - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
  - `session`: object
    - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
    - `err_message`: string
    - `id`: string
    - `ingest_seconds`: string — The time duration for which the input was given or the meeting was streamed.
    - `invoked_time`: string — Timestamp the object was invoked. The time is returned in ISO format.
    - `livestream_id`: string
    - `started_time`: string — Timestamp the object was started. The time is returned in ISO format.
    - `stopped_time`: string — Timestamp the object was stopped. The time is returned in ISO format.
    - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
    - `viewer_seconds`: string — The total view time for which the viewers watched the stream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/sessions/{livestream-session-id}

Fetch livestream session details using livestream session ID

operationId: `get-v2-livestreams-livestream-session-id`

**Response** 200 → `result`

- `data`: object
  - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
  - `err_message`: string — The server URL to which the RTMP encoder sends the video and audio data.
  - `id`: string — The livestream ID.
  - `ingest_seconds`: integer — Name of the livestream.
  - `livestream_id`: string
  - `started_time`: string — Unique key for accessing each livestream.
  - `stopped_time`: string — The web address that viewers can use to watch the livestream.
  - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
  - `viewer_seconds`: integer — Specifies if the livestream was disabled.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream

Fetch active livestreams for a meeting

operationId: `get-v2-meetings-meetingId-active-livestream`

**Response** 200 → `result`

- `data`: object
  - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
  - `disabled`: string — Specifies if the livestream was disabled.
  - `id`: string — The livestream ID.
  - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
  - `meeting_id`: string
  - `name`: string — Name of the livestream.
  - `playback_url`: string — The web address that viewers can use to watch the livestream.
  - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
  - `stream_key`: string — Unique key for accessing each livestream.
  - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
- `success`: boolean

## POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream/stop

Stop livestreaming a meeting

operationId: `stop_livestreaming`

**Response** 200 → `result`

- `data`: object
  - `message`: string
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestream

Fetch livestream session details for a meeting

operationId: `livestream-session-details` · query: `page_no`, `per_page`

**Response** 200 → `result`

- `data`: object
  - `livestreams`: object[]
    [array of]
    - `created_at`: string — The timestamp at which the livestream was created. The time is returned in ISO format.
    - `disabled`: boolean — Specifies if the livestream was disabled.
    - `id`: string — The livestream ID.
    - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
    - `meeting_id`: string — The ID of the meeting that was livestreamed.
    - `name`: string — Name of the livestream.
    - `playback_url`: string — The web address that viewers can use to watch the livestream.
    - `status`: string enum: `LIVE`, `INVOKED`, `ERRORED`, `IDLE`
    - `stream_key`: string — Unique key for accessing each livestream.
    - `updated_at`: string — The timestamp at which the livestream was updated. The time is returned in ISO format.
  - `paging`: object
    - `end_offset`: integer
    - `start_offset`: integer
    - `total_count`: integer
  - `sessions`: object
    - `created_at`: string — The timestamp at which the livestream was created. The time is returned in ISO format.
    - `err_message`: string
    - `id`: string — The ID of the livestream session.
    - `ingest_seconds`: string — The time duration for which the input was given or the meeting was streamed.
    - `invoked_time`: string — The time at which the livestream was invoked.
    - `livestream_id`: string — The ID of the livestream.
    - `started_time`: string — The time at which the livestream was started.
    - `stopped_time`: string — The time at which the livestream was stopped.
    - `updated_at`: string — The timestamp at which the livestream was updated. The time is returned in ISO format.
- `success`: boolean

## POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestreams

Start livestreaming a meeting

operationId: `start-livestreaming`

**Request** (application/json)

- `name`: string
- `video_config`: object
  - `height`: integer — Height of the livestreaming video in pixels
  - `width`: integer — Width of the livestreaming video in pixels

**Response** 201 → `result`

- `data`: object
  - `id`: string — The livestream ID.
  - `ingest_server`: string — The server URL to which the RTMP encoder sends the video and audio data.
  - `playback_url`: string — The web address that viewers can use to watch the livestream.
  - `status`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
  - `stream_key`: string — Unique key for accessing each livestream.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/livestream-sessions

Fetch livestream session details using a session ID

operationId: `get-v2-livestreamsession-session-meetingId-active-livestream` · query: `per_page`, `page_no`

**Response** 200 → `result`

- `data`: object
  - `created_at`: string — Timestamp the object was created at. The time is returned in ISO format.
  - `err_message`: string enum: `LIVE`, `IDLE`, `ERRORED`, `INVOKED`
  - `id`: string — The livestream session ID.
  - `ingest_seconds`: number — The time duration for which the input was given or the meeting was streamed.
  - `invoked_time`: string — Name of the livestream.
  - `livestream_id`: string — The ID of the livestream.
  - `paging`: object
    - `end_offset`: number
    - `start_offset`: number
    - `total_count`: number
  - `stopped_time`: string — Specifies if the livestream was disabled.
  - `updated_at`: string — Timestamp the object was updated at. The time is returned in ISO format.
  - `viewer_seconds`: number — The total view time for which the viewers watched the stream.
- `success`: boolean
