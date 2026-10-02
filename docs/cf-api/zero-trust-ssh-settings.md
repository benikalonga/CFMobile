# Zero Trust SSH Settings

3 endpoints.

## GET /accounts/{account_id}/gateway/audit_ssh_settings

Get Zero Trust SSH settings

operationId: `zero-trust-get-audit-ssh-settings`

**Response** 200 → `result`

- `created_at`: string
- `public_key`: string — Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/
- `seed_id`: string — Identify the seed ID.
- `updated_at`: string

## PUT /accounts/{account_id}/gateway/audit_ssh_settings

Update Zero Trust SSH settings

operationId: `zero-trust-update-audit-ssh-settings`

**Request** (application/json)

- `public_key`: string **required** — Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/

**Response** 200 → `result`

- `created_at`: string
- `public_key`: string — Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/
- `seed_id`: string — Identify the seed ID.
- `updated_at`: string

## POST /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed

Rotate Zero Trust SSH account seed

operationId: `zero-trust-rotate-ssh-account-seed`

**Response** 200 → `result`

- `created_at`: string
- `public_key`: string — Provide the Base64-encoded HPKE public key that encrypts SSH session logs. See https://developers.cloudflare.com/cloudflare-one/connections/
- `seed_id`: string — Identify the seed ID.
- `updated_at`: string
