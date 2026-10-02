# Access tags

5 endpoints.

## GET /accounts/{account_id}/access/tags

List tags

operationId: `access-tags-list-tags` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `app_count`: integer — The number of applications that have this tag
- `created_at`: any
- `name`: string **required** — The name of the tag
- `updated_at`: any

## POST /accounts/{account_id}/access/tags

Create a tag

operationId: `access-tags-create-tag`

**Request** (application/json)

- `name`: string — The name of the tag

**Response** 201 → `result`

- `app_count`: integer — The number of applications that have this tag
- `created_at`: any
- `name`: string **required** — The name of the tag
- `updated_at`: any

## DELETE /accounts/{account_id}/access/tags/{tag_name}

Delete a tag

operationId: `access-tags-delete-a-tag`

**Response** 202 → `result`

- `name`: string — The name of the tag

## GET /accounts/{account_id}/access/tags/{tag_name}

Get a tag

operationId: `access-tags-get-a-tag`

**Response** 200 → `result`

- `app_count`: integer — The number of applications that have this tag
- `created_at`: any
- `name`: string **required** — The name of the tag
- `updated_at`: any

## PUT /accounts/{account_id}/access/tags/{tag_name}

Update a tag

operationId: `access-tags-update-a-tag`

**Request** (application/json)

- `created_at`: any
- `name`: string **required** — The name of the tag
- `updated_at`: any

**Response** 200 → `result`

- `app_count`: integer — The number of applications that have this tag
- `created_at`: any
- `name`: string **required** — The name of the tag
- `updated_at`: any
