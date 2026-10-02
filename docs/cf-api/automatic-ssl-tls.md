# Automatic SSL/TLS

2 endpoints.

## GET /zones/{zone_id}/settings/ssl_automatic_mode

Get Automatic SSL/TLS enrollment status for the given zone

operationId: `ssl-detector-automatic-mode-get-enrollment`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether this setting can be updated or not.
- `id`: string **required**
- `modified_on`: string **required** — Last time this setting was modified.
- `next_scheduled_scan`: string — Next time this zone will be scanned by the Automatic SSL/TLS.
- `value`: string **required** enum: `auto`, `custom` — Current setting of the automatic SSL/TLS.

## PATCH /zones/{zone_id}/settings/ssl_automatic_mode

Patch Automatic SSL/TLS Enrollment status for given zone

operationId: `ssl-detector-automatic-mode-patch-enrollment`

**Request** (application/json)

- `value`: string **required** enum: `auto`, `custom` — Controls enablement of Automatic SSL/TLS.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether this setting can be updated or not.
- `id`: string **required**
- `modified_on`: string **required** — Last time this setting was modified.
- `next_scheduled_scan`: string — Next time this zone will be scanned by the Automatic SSL/TLS.
- `value`: string **required** enum: `auto`, `custom` — Current setting of the automatic SSL/TLS.
