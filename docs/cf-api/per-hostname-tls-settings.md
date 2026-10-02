# Per-Hostname TLS Settings

4 endpoints.

## GET /zones/{zone_id}/hostnames/settings/{setting_id}

List TLS setting for hostnames

operationId: `per-hostname-tls-settings-list`

**Response** 200 → `result`

[array of]
- `created_at`: string — This is the time the tls setting was originally created for this hostname.
- `hostname`: string — The hostname for which the tls settings are set.
- `status`: string — Deployment status for the given tls setting.
- `updated_at`: string — This is the time the tls setting was updated.
- `value`: any — The TLS setting value.

## DELETE /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}

Delete TLS setting for hostname

operationId: `per-hostname-tls-settings-delete`

**Response** 200 → `result`

- `created_at`: string — This is the time the tls setting was originally created for this hostname.
- `hostname`: string — The hostname for which the tls settings are set.
- `status`: string — Deployment status for the given tls setting.
- `updated_at`: string — This is the time the tls setting was updated.
- `value`: any — The TLS setting value.

## GET /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}

Get TLS setting for hostname

operationId: `per-hostname-tls-settings-get`

**Response** 200 → `result`

- `created_at`: string — This is the time the tls setting was originally created for this hostname.
- `hostname`: string — The hostname for which the tls settings are set.
- `status`: string — Deployment status for the given tls setting.
- `updated_at`: string — This is the time the tls setting was updated.
- `value`: any — The TLS setting value.

## PUT /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}

Edit TLS setting for hostname

operationId: `per-hostname-tls-settings-put`

**Request** (application/json)

- `value`: any **required** — The TLS setting value.

**Response** 200 → `result`

- `created_at`: string — This is the time the tls setting was originally created for this hostname.
- `hostname`: string — The hostname for which the tls settings are set.
- `status`: string — Deployment status for the given tls setting.
- `updated_at`: string — This is the time the tls setting was updated.
- `value`: any — The TLS setting value.
