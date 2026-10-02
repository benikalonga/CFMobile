# Zero Trust Gateway operations

2 endpoints.

## GET /accounts/{account_id}/gateway/operations

List Zero Trust Gateway operations

operationId: `zero-trust-gateway-operations-list-zero-trust-gateway-operations`

**Response** 200 → `result`

[array of]
- `created_at`: string
- `data`: object — Provide metadata describing the resource the operation acts on. The fields present depend on the `operation_type`.
- `id`: string — Identify the API resource with a UUID.
- `operation_type`: string enum: `create_list` — The type of operation.
- `processing_error`: string — A human-readable error message if the operation failed. Only present when the operation status is `failed`.
- `result`: string — The result of the operation. Only present when the operation has completed successfully.
- `status`: string enum: `pending`, `active`, `failed`, `complete` — The status of the operation.
- `updated_at`: string

## GET /accounts/{account_id}/gateway/operations/{operation_id}

Zero Trust Gateway operation details

operationId: `zero-trust-gateway-operations-zero-trust-gateway-operation-details`

**Response** 200 → `result`

- `created_at`: string
- `data`: object — Provide metadata describing the resource the operation acts on. The fields present depend on the `operation_type`.
- `id`: string — Identify the API resource with a UUID.
- `operation_type`: string enum: `create_list` — The type of operation.
- `processing_error`: string — A human-readable error message if the operation failed. Only present when the operation status is `failed`.
- `result`: string — The result of the operation. Only present when the operation has completed successfully.
- `status`: string enum: `pending`, `active`, `failed`, `complete` — The status of the operation.
- `updated_at`: string
