# Stream Audio Tracks

4 endpoints.

## GET /accounts/{account_id}/stream/{identifier}/audio

List additional audio tracks on a video

operationId: `list-audio-tracks`

**Response** 200 → `result`

- `audio`: object[] — Array of audio tracks for the video.
  [array of]
  - `default`: boolean default: `false` — Denotes whether the audio track will be played by default in a player.
  - `label`: string — A string to uniquely identify the track amongst other audio track labels for the specified video.
  - `status`: string enum: `queued`, `ready`, `error` — Specifies the processing status of the video.
  - `uid`: string — A Cloudflare-generated unique identifier for a media item.

## DELETE /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}

Delete additional audio tracks on a video

operationId: `delete-audio-tracks`

**Response** 200 → `result`

string

## PATCH /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}

Edit additional audio tracks on a video

operationId: `edit-audio-tracks`

**Request** (application/json)

- `default`: boolean default: `false` — Denotes whether the audio track will be played by default in a player.
- `label`: string — A string to uniquely identify the track amongst other audio track labels for the specified video.

**Response** 200 → `result`

- `default`: boolean default: `false` — Denotes whether the audio track will be played by default in a player.
- `label`: string — A string to uniquely identify the track amongst other audio track labels for the specified video.
- `status`: string enum: `queued`, `ready`, `error` — Specifies the processing status of the video.
- `uid`: string — A Cloudflare-generated unique identifier for a media item.

## POST /accounts/{account_id}/stream/{identifier}/audio/copy

Add audio tracks to a video

operationId: `add-audio-track`

**Request** (application/json)

- `label`: string **required** — A string to uniquely identify the track amongst other audio track labels for the specified video.
- `url`: string — An audio track URL. The server must be publicly routable and support `HTTP HEAD` requests and `HTTP GET` range requests. The server should r

**Response** 200 → `result`

- `default`: boolean default: `false` — Denotes whether the audio track will be played by default in a player.
- `label`: string — A string to uniquely identify the track amongst other audio track labels for the specified video.
- `status`: string enum: `queued`, `ready`, `error` — Specifies the processing status of the video.
- `uid`: string — A Cloudflare-generated unique identifier for a media item.
