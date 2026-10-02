# Stream Video Clipping

1 endpoints.

## POST /accounts/{account_id}/stream/clip

Clip videos given a start and end time

operationId: `stream-video-clipping-clip-videos-given-a-start-and-end-time`

**Request** (application/json)

- `allowedOrigins`: string[] — Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays a
  [array]
- `clippedFromVideoUID`: string **required** — The unique video identifier (UID).
- `creator`: string — A user-defined identifier for the media creator.
- `endTimeSeconds`: integer **required** — Specifies the end time for the video clip in seconds.
- `input`: string — A video's URL. Preferred over 'url'.
- `meta`: object — A user modifiable key-value store used to reference other systems of record for managing videos.
- `name`: string — A name for the video.
- `requireSignedURLs`: boolean default: `false` — Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view
- `scheduledDeletion`: string — Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remo
- `startTimeSeconds`: integer **required** — Specifies the start time for the video clip in seconds.
- `thumbnailTimestampPct`: number default: `0` — The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a p
- `url`: string — A video's URL (legacy field, use 'input' instead).
- `watermark`: object
  - `uid`: string — The unique identifier for the watermark profile.

**Response** 200 → `result`

- `allowedOrigins`: string[] — Lists the origins allowed to display the video. Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays a
  [array]
- `clippedFrom`: string — The unique identifier of the source video this video was clipped from.
- `created`: string — The date and time the media item was created.
- `creator`: string — A user-defined identifier for the media creator.
- `duration`: number — The duration of the video in seconds. A value of `-1` means the duration is unknown. The duration becomes available after the upload and bef
- `input`: object
  - `height`: integer — The video height in pixels. A value of `-1` means the height is unknown. The value becomes available after the upload and before the video i
  - `width`: integer — The video width in pixels. A value of `-1` means the width is unknown. The value becomes available after the upload and before the video is 
- `liveInput`: string — The live input ID used to upload a video with Stream Live.
- `maxDurationSeconds`: integer — The maximum duration in seconds for a video upload. Can be set for a video that is not yet uploaded to limit its duration. Uploads that exce
- `maxSizeBytes`: integer — The maximum size in bytes for the video upload.
- `meta`: object — A user modifiable key-value store used to reference other systems of record for managing videos.
- `modified`: string — The date and time the media item was last modified.
- `playback`: object
  - `dash`: string — DASH Media Presentation Description for the video.
  - `hls`: string — The HLS manifest for the video.
- `preview`: string — The video's preview page URI. This field is omitted until encoding is complete.
- `publicDetails`: object — Public details for the video including title, share link, channel link, and logo.
  - `channel_link`: string
  - `logo`: string
  - `media_id`: integer
  - `share_link`: string
  - `title`: string
- `readyToStream`: boolean — Indicates whether the video is playable. The field is empty if the video is not ready for viewing or the live stream is still in progress.
- `readyToStreamAt`: string — Indicates the time at which the video became playable. The field is empty if the video is not ready for viewing or the live stream is still 
- `requireSignedURLs`: boolean default: `false` — Indicates whether the video can be a accessed using the UID. When set to `true`, a signed token must be generated with a signing key to view
- `scheduledDeletion`: string — Indicates the date and time at which the video will be deleted. Omit the field to indicate no change, or include with a `null` value to remo
- `size`: number — The size of the media item in bytes.
- `status`: object — Specifies a detailed status for a video. If the `state` is `inprogress` or `error`, the `step` field returns `encoding` or `manifest`. If th
  - `errorReasonCode`: string — Specifies why the video failed to encode. This field is empty if the video is not in an `error` state. Preferred for programmatic use.
  - `errorReasonText`: string — Specifies why the video failed to encode using a human readable error message in English. This field is empty if the video is not in an `err
  - `pctComplete`: string — Indicates the progress as a percentage between 0 and 100.
  - `state`: string enum: `pendingupload`, `downloading`, `queued`, `inprogress`, `ready`, `error`, `live-inprogress` — Specifies the processing status for all quality levels for a video.
- `thumbnail`: string — The media item's thumbnail URI. This field is omitted until encoding is complete.
- `thumbnailTimestampPct`: number default: `0` — The timestamp for a thumbnail image calculated as a percentage value of the video's duration. To convert from a second-wise timestamp to a p
- `uid`: string — A Cloudflare-generated unique identifier for a media item.
- `uploadExpiry`: string — The date and time when the video upload URL is no longer valid for direct user uploads.
- `uploaded`: string — The date and time the media item was uploaded.
- `watermark`: object
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
