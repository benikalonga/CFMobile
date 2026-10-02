# Credential Sets

6 endpoints.

## GET /accounts/{account_id}/vuln_scanner/credential_sets

List Credential Sets

operationId: `list-credential-sets` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `id`: string **required** — Credential set identifier.
- `name`: string **required** — Human-readable name.

## POST /accounts/{account_id}/vuln_scanner/credential_sets

Create Credential Set

operationId: `create-credential-set`

**Request** (application/json)

- `name`: string **required** — Human-readable name.

**Response** 200 → `result`

- `id`: string **required** — Credential set identifier.
- `name`: string **required** — Human-readable name.

## DELETE /accounts/{account_id}/vuln_scanner/credential_sets/{credential_set_id}

Delete Credential Set

operationId: `delete-credential-set`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/vuln_scanner/credential_sets/{credential_set_id}

Get Credential Set

operationId: `get-credential-set`

**Response** 200 → `result`

- `id`: string **required** — Credential set identifier.
- `name`: string **required** — Human-readable name.

## PATCH /accounts/{account_id}/vuln_scanner/credential_sets/{credential_set_id}

Edit Credential Set

operationId: `edit-credential-set`

**Request** (application/json)

- `name`: string — Human-readable name.

**Response** 200 → `result`

- `id`: string **required** — Credential set identifier.
- `name`: string **required** — Human-readable name.

## PUT /accounts/{account_id}/vuln_scanner/credential_sets/{credential_set_id}

Update Credential Set

operationId: `update-credential-set`

**Request** (application/json)

- `name`: string **required** — Human-readable name.

**Response** 200 → `result`

- `id`: string **required** — Credential set identifier.
- `name`: string **required** — Human-readable name.
