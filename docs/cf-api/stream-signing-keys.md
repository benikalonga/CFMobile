# Stream Signing Keys

3 endpoints.

## GET /accounts/{account_id}/stream/keys

List signing keys

operationId: `stream-signing-keys-list-signing-keys`

**Response** 200 → `result`

[array of]
- `created`: string — The date and time a signing key was created.
- `id`: string — Identifier.
- `key_id`: string — The unique identifier for the signing key.

## POST /accounts/{account_id}/stream/keys

Create signing keys

operationId: `stream-signing-keys-create-signing-keys`

**Response** 200 → `result`

- `created`: string — The date and time a signing key was created.
- `id`: string — Identifier.
- `jwk`: string — The signing key in JWK format.
- `pem`: string — The signing key in PEM format.

## DELETE /accounts/{account_id}/stream/keys/{identifier}

Delete signing keys

operationId: `stream-signing-keys-delete-signing-keys`

**Response** 200 → `result`

string
