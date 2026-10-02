# Environment Variables

3 endpoints.

## GET /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables

List environment variables

operationId: `listEnvironmentVariables`

**Response** 200 → `result`

object

## PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables

Upsert environment variables

operationId: `upsertEnvironmentVariables`

**Request** (application/json)

object

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}

Delete environment variable

operationId: `deleteEnvironmentVariable`

**Response** 200 → `result`

object
