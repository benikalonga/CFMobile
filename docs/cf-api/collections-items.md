# Collections - Items

2 endpoints.

## POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items

Create item(s)

operationId: `post_ItemCreate`

**Request** (application/json)

(one of 2 variants; showing the first)
- `data`: object **required** — Single item data matching collection schema

**Response** 201 → `result`

- `created_at`: string **required**
- `data`: object **required**
- `id`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/search

Search items (advanced filtering)

operationId: `post_ItemSearch`

**Request** (application/json)

- `cursor`: string
- `filter`: object — Recursive filter supporting AND/OR nesting of conditions. Can be either a leaf condition (field/op/value) or a logical group (and/or array o
- `limit`: integer default: `20`
- `q`: string — Case-insensitive substring search across all columns. Matches any column containing the term. No relevance ranking.
- `sort`: object
  - `field`: string **required** — Column name to sort by
  - `order`: string enum: `asc`, `desc` default: `asc`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `data`: object **required**
- `id`: string **required**
- `updated_at`: string **required**
