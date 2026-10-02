# Repository Connections

2 endpoints.

## PUT /accounts/{account_id}/builds/repos/connections

Create or update repository connection

operationId: `upsertRepoConnection`

**Request** (application/json)

- `provider_account_id`: string **required** — Provider account identifier.
- `provider_account_name`: string **required**
- `provider_type`: string **required** enum: `github`, `gitlab`, `gitlab_internal`
- `repo_id`: string **required** — Repository identifier.
- `repo_name`: string **required**

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}

Delete repository connection

operationId: `deleteRepoConnection`

**Response** 200 → `result`

object
