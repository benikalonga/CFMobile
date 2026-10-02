# Durable Objects Namespace

2 endpoints.

## GET /accounts/{account_id}/workers/durable_objects/namespaces

List Namespaces

operationId: `durable-objects-namespace-list-namespaces` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `class`: string
- `id`: string
- `name`: string
- `script`: string
- `use_sqlite`: boolean

## GET /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects

List Objects

operationId: `durable-objects-namespace-list-objects` · query: `limit`, `cursor`

**Response** 200 → `result`

[array of]
- `hasStoredData`: boolean — Whether the Durable Object has stored data.
- `id`: string — ID of the Durable Object.
