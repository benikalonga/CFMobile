# Access IdP federation grants

4 endpoints.

## GET /accounts/{account_id}/access/idp_federation_grants

List IdP federation grants

operationId: `access-idp-federation-grants-list`

**Response** 200 → `result`

[array of]
- `created_at`: any **required**
- `id`: any **required** — UID of the IdP federation grant.
- `idp_id`: string **required** — UID of the identity provider being federated.

## POST /accounts/{account_id}/access/idp_federation_grants

Create an IdP federation grant

operationId: `access-idp-federation-grants-create`

**Request** (application/json)

- `idp_id`: string **required** — UID of the identity provider to federate. Must be an existing identity provider in this account. One-time pin and Cloudflare-managed identit

**Response** 201 → `result`

- `created_at`: any **required**
- `id`: any **required** — UID of the IdP federation grant.
- `idp_id`: string **required** — UID of the identity provider being federated.

## DELETE /accounts/{account_id}/access/idp_federation_grants/{grant_id}

Delete an IdP federation grant

operationId: `access-idp-federation-grants-delete`

**Response** 202 → `result`

- `id`: any — UID of the deleted IdP federation grant.

## GET /accounts/{account_id}/access/idp_federation_grants/{grant_id}

Get an IdP federation grant

operationId: `access-idp-federation-grants-get`

**Response** 200 → `result`

- `created_at`: any **required**
- `id`: any **required** — UID of the IdP federation grant.
- `idp_id`: string **required** — UID of the identity provider being federated.
