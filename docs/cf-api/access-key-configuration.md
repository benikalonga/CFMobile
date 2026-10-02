# Access key configuration

3 endpoints.

## GET /accounts/{account_id}/access/keys

Get the Access key configuration

operationId: `access-key-configuration-get-the-access-key-configuration`

**Response** 200 → `result`

- `days_until_next_rotation`: number — The number of days until the next key rotation.
- `key_rotation_interval_days`: number — The number of days between key rotations.
- `last_key_rotation_at`: string — The timestamp of the previous key rotation.

## PUT /accounts/{account_id}/access/keys

Update the Access key configuration

operationId: `access-key-configuration-update-the-access-key-configuration`

**Request** (application/json)

- `key_rotation_interval_days`: number **required** — The number of days between key rotations.

**Response** 200 → `result`

- `days_until_next_rotation`: number — The number of days until the next key rotation.
- `key_rotation_interval_days`: number — The number of days between key rotations.
- `last_key_rotation_at`: string — The timestamp of the previous key rotation.

## POST /accounts/{account_id}/access/keys/rotate

Rotate Access keys

operationId: `access-key-configuration-rotate-access-keys`

**Response** 200 → `result`

- `days_until_next_rotation`: number — The number of days until the next key rotation.
- `key_rotation_interval_days`: number — The number of days between key rotations.
- `last_key_rotation_at`: string — The timestamp of the previous key rotation.
