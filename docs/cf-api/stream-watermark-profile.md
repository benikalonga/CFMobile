# Stream Watermark Profile

4 endpoints.

## GET /accounts/{account_id}/stream/watermarks

List watermark profiles

operationId: `stream-watermark-profile-list-watermark-profiles`

**Response** 200 → `result`

[array of]
- `created`: string — The date and a time a watermark profile was created.
- `downloadedFrom`: string — The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.
- `height`: integer — The height of the image in pixels.
- `name`: string default: `` — A short description of the watermark profile.
- `opacity`: number default: `1` — The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note th
- `padding`: number default: `0.05` — The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicat
- `position`: string default: `upperRight` — The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignor
- `scale`: number default: `0.15` — The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. 
- `size`: number — The size of the image in bytes.
- `uid`: string — The unique identifier for a watermark profile.
- `width`: integer — The width of the image in pixels.

## POST /accounts/{account_id}/stream/watermarks

Create watermark profiles via basic upload

operationId: `stream-watermark-profile-create-watermark-profiles-via-basic-upload`

**Request** (application/json)

- `name`: string default: `` — A short description of the watermark profile.
- `opacity`: number default: `1` — The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note th
- `padding`: number default: `0.05` — The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicat
- `position`: string default: `upperRight` — The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignor
- `scale`: number default: `0.15` — The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. 
- `url`: string — URL of the watermark image to copy.

**Response** 200 → `result`

- `created`: string — The date and a time a watermark profile was created.
- `downloadedFrom`: string — The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.
- `height`: integer — The height of the image in pixels.
- `name`: string default: `` — A short description of the watermark profile.
- `opacity`: number default: `1` — The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note th
- `padding`: number default: `0.05` — The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicat
- `position`: string default: `upperRight` — The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignor
- `scale`: number default: `0.15` — The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. 
- `size`: number — The size of the image in bytes.
- `uid`: string — The unique identifier for a watermark profile.
- `width`: integer — The width of the image in pixels.

## DELETE /accounts/{account_id}/stream/watermarks/{identifier}

Delete watermark profiles

operationId: `stream-watermark-profile-delete-watermark-profiles`

**Response** 200 → `result`

string

## GET /accounts/{account_id}/stream/watermarks/{identifier}

Watermark profile details

operationId: `stream-watermark-profile-watermark-profile-details`

**Response** 200 → `result`

- `created`: string — The date and a time a watermark profile was created.
- `downloadedFrom`: string — The source URL for a downloaded image. If the watermark profile was created via direct upload, this field is null.
- `height`: integer — The height of the image in pixels.
- `name`: string default: `` — A short description of the watermark profile.
- `opacity`: number default: `1` — The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note th
- `padding`: number default: `0.05` — The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicat
- `position`: string default: `upperRight` — The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignor
- `scale`: number default: `0.15` — The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. 
- `size`: number — The size of the image in bytes.
- `uid`: string — The unique identifier for a watermark profile.
- `width`: integer — The width of the image in pixels.
