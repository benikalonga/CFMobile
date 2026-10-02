# Namespaces

4 endpoints.

## GET /accounts/{account_id}/agent-memory/namespaces

List namespaces

operationId: `agent-memory-namespace-list` · query: `per_page`, `order`, `direction`, `cursor`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — Time the namespace was created.
- `id`: string **required** — Unique identifier of the namespace.
- `name`: string **required** — Namespace name.
- `updated_at`: string **required** — Time the namespace was last updated.

## POST /accounts/{account_id}/agent-memory/namespaces

Create a namespace

operationId: `agent-memory-namespace-create`

**Request** (application/json)

- `name`: string **required** — Namespace name.

**Response** 201 → `result`

- `created_at`: string **required** — Time the namespace was created.
- `id`: string **required** — Unique identifier of the namespace.
- `name`: string **required** — Namespace name.
- `updated_at`: string **required** — Time the namespace was last updated.

## DELETE /accounts/{account_id}/agent-memory/namespaces/{namespace_name}

Delete a namespace

operationId: `agent-memory-namespace-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/agent-memory/namespaces/{namespace_name}

Get a namespace

operationId: `agent-memory-namespace-get`

**Response** 200 → `result`

- `created_at`: string **required** — Time the namespace was created.
- `id`: string **required** — Unique identifier of the namespace.
- `name`: string **required** — Namespace name.
- `updated_at`: string **required** — Time the namespace was last updated.
