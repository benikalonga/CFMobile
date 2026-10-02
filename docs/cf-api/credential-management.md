# Credential Management

1 endpoints.

## POST /accounts/{account_id}/r2-catalog/{bucket_name}/credential

Store catalog credentials

operationId: `store-credentials`

**Request** (application/json)

- `token`: string **required** — Provides the Cloudflare API token for accessing R2.

**Response** 200 → `result`

object
