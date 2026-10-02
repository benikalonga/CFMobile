# Google Tag Gateway

2 endpoints.

## GET /zones/{zone_id}/settings/google-tag-gateway/config

Get Google Tag Gateway configuration

operationId: `zone-settings-get-google-tag-gateway-config`

**Response** 200 → `result`

- `enabled`: boolean **required** — Enables or disables Google Tag Gateway for this zone.
- `endpoint`: string **required** — Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alpha
- `hideOriginalIp`: boolean **required** — Hides the original client IP address from Google when enabled.
- `measurementId`: string **required** — Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
- `setUpTag`: boolean — Set up the associated Google Tag on the zone automatically when enabled.

## PUT /zones/{zone_id}/settings/google-tag-gateway/config

Update Google Tag Gateway configuration

operationId: `zone-settings-change-google-tag-gateway-config`

**Request** (application/json)

- `enabled`: boolean **required** — Enables or disables Google Tag Gateway for this zone.
- `endpoint`: string **required** — Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alpha
- `hideOriginalIp`: boolean **required** — Hides the original client IP address from Google when enabled.
- `measurementId`: string **required** — Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
- `setUpTag`: boolean — Set up the associated Google Tag on the zone automatically when enabled.

**Response** 200 → `result`

- `enabled`: boolean **required** — Enables or disables Google Tag Gateway for this zone.
- `endpoint`: string **required** — Specifies the endpoint path for proxying Google Tag Manager requests. Use an absolute path starting with '/', with no nested paths and alpha
- `hideOriginalIp`: boolean **required** — Hides the original client IP address from Google when enabled.
- `measurementId`: string **required** — Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or G-XXXXXXXXXX).
- `setUpTag`: boolean — Set up the associated Google Tag on the zone automatically when enabled.
