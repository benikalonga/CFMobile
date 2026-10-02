# AI Search Namespaces

6 endpoints.

## GET /accounts/{account_id}/ai-search/namespaces

List namespaces

operationId: `ai-search-list-namespaces` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string — Optional description for the namespace. Max 256 characters.
- `name`: string **required**

## POST /accounts/{account_id}/ai-search/namespaces

Create a namespace

operationId: `ai-search-create-namespace`

**Request** (application/json)

- `description`: string — Optional description for the namespace. Max 256 characters.
- `name`: string **required**

**Response** 201 → `result`

- `created_at`: string **required**
- `description`: string — Optional description for the namespace. Max 256 characters.
- `name`: string **required**

## DELETE /accounts/{account_id}/ai-search/namespaces/{name}

Delete a namespace

operationId: `ai-search-delete-namespace`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/ai-search/namespaces/{name}

Get a namespace

operationId: `ai-search-fetch-namespace`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string — Optional description for the namespace. Max 256 characters.
- `name`: string **required**

## PUT /accounts/{account_id}/ai-search/namespaces/{name}

Update a namespace

operationId: `ai-search-update-namespace`

**Request** (application/json)

- `description`: string — Optional description for the namespace. Max 256 characters.

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string — Optional description for the namespace. Max 256 characters.
- `name`: string **required**

## PATCH /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}

Move an instance to a different namespace.

operationId: `ai-search-move-instance`

**Request** (application/json)

- `new_namespace`: string **required** — Target namespace to move the instance into.

**Response** 200 → `result`

object
