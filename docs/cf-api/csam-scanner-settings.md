# CSAM Scanner Settings

2 endpoints.

## GET /zones/{zone_id}/settings/csam_scanner_third_party

Get CSAM Scanner setting

operationId: `csam-scanner-get-setting`

**Response** 200 → `result`

object

## PATCH /zones/{zone_id}/settings/csam_scanner_third_party

Update CSAM Scanner setting

operationId: `csam-scanner-update-setting`

**Request** (application/json)

- `id`: string enum: `csam_scanner` — The feature identifier.
- `value`: object — Writable CSAM Scanner feature configuration values.
  - `email`: string — Notification email address for CSAM scan results. When changed,
  - `enabled`: boolean — Whether CSAM scanning is enabled for this zone.
  - `resend_email`: boolean — Set to true to trigger re-sending the email verification.
  - `sources`: object — Map of scanning sources and their enabled state.

**Response** 200 → `result`

object
