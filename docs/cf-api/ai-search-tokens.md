# AI Search Tokens

5 endpoints.

## GET /accounts/{account_id}/ai-search/tokens

List tokens

operationId: `ai-search-list-tokens` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

[array of]
- `cf_api_id`: string **required**
- `created_at`: string **required**
- `created_by`: string
- `enabled`: boolean default: `true`
- `id`: string **required**
- `legacy`: boolean default: `true`
- `modified_at`: string **required**
- `modified_by`: string
- `name`: string **required**

## POST /accounts/{account_id}/ai-search/tokens

Create a token

operationId: `ai-search-create-tokens`

**Request** (application/json)

- `cf_api_id`: string **required**
- `cf_api_key`: string **required**
- `legacy`: boolean default: `true`
- `name`: string **required**

**Response** 201 → `result`

- `cf_api_id`: string **required**
- `created_at`: string **required**
- `created_by`: string
- `enabled`: boolean default: `true`
- `id`: string **required**
- `legacy`: boolean default: `true`
- `modified_at`: string **required**
- `modified_by`: string
- `name`: string **required**

## DELETE /accounts/{account_id}/ai-search/tokens/{id}

Delete a token

operationId: `ai-search-delete-tokens`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/ai-search/tokens/{id}

Get a token

operationId: `ai-search-fetch-tokens`

**Response** 200 → `result`

- `cf_api_id`: string **required**
- `created_at`: string **required**
- `created_by`: string
- `enabled`: boolean default: `true`
- `id`: string **required**
- `legacy`: boolean default: `true`
- `modified_at`: string **required**
- `modified_by`: string
- `name`: string **required**

## PUT /accounts/{account_id}/ai-search/tokens/{id}

Update a token

operationId: `ai-search-update-tokens`

**Request** (application/json)

- `cf_api_id`: string **required**
- `cf_api_key`: string **required**
- `legacy`: boolean default: `true`
- `name`: string **required**

**Response** 200 → `result`

- `cf_api_id`: string **required**
- `created_at`: string **required**
- `created_by`: string
- `enabled`: boolean default: `true`
- `id`: string **required**
- `legacy`: boolean default: `true`
- `modified_at`: string **required**
- `modified_by`: string
- `name`: string **required**
