# Stream Subtitles/Captions

6 endpoints.

## GET /accounts/{account_id}/stream/{identifier}/captions

List captions or subtitles

operationId: `stream-subtitles/-captions-list-captions-or-subtitles`

**Response** 200 → `result`

[array of]
- `generated`: boolean — Whether the caption was generated via AI.
- `label`: string — The language label displayed in the native language to users.
- `language`: string — The language tag in BCP 47 format.
- `status`: string enum: `ready`, `inprogress`, `error` — The status of a generated caption.

## DELETE /accounts/{account_id}/stream/{identifier}/captions/{language}

Delete captions or subtitles

operationId: `stream-subtitles/-captions-delete-captions-or-subtitles`

**Response** 200 → `result`

string

## GET /accounts/{account_id}/stream/{identifier}/captions/{language}

List captions or subtitles for a provided language

operationId: `stream-subtitles/-captions-get-caption-or-subtitle-for-language`

**Response** 200 → `result`

- `generated`: boolean — Whether the caption was generated via AI.
- `label`: string — The language label displayed in the native language to users.
- `language`: string — The language tag in BCP 47 format.
- `status`: string enum: `ready`, `inprogress`, `error` — The status of a generated caption.

## PUT /accounts/{account_id}/stream/{identifier}/captions/{language}

Upload captions or subtitles

operationId: `stream-subtitles/-captions-upload-captions-or-subtitles`

**Request** (multipart/form-data)

- `file`: string **required** — The WebVTT file containing the caption or subtitle content.

**Response** 200 → `result`

- `generated`: boolean — Whether the caption was generated via AI.
- `label`: string — The language label displayed in the native language to users.
- `language`: string — The language tag in BCP 47 format.
- `status`: string enum: `ready`, `inprogress`, `error` — The status of a generated caption.

## POST /accounts/{account_id}/stream/{identifier}/captions/{language}/generate

Generate captions or subtitles for a provided language via AI

operationId: `stream-subtitles/-captions-generate-caption-or-subtitle-for-language`

**Response** 200 → `result`

- `generated`: boolean — Whether the caption was generated via AI.
- `label`: string — The language label displayed in the native language to users.
- `language`: string — The language tag in BCP 47 format.
- `status`: string enum: `ready`, `inprogress`, `error` — The status of a generated caption.

## GET /accounts/{account_id}/stream/{identifier}/captions/{language}/vtt

Return WebVTT captions for a provided language

operationId: `stream-subtitles/-captions-get-vtt-caption-or-subtitle`

**Response** 200 → `result`

string
