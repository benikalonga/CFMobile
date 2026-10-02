# DLP Data Tags

5 endpoints.

## GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags

Retrieve all data tags in a data tag category

operationId: `dlp-data-tags-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags

Creates a new data tag.

operationId: `dlp-data-tags-create`

**Request** (application/json)

- `description`: string
- `name`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}

Delete a single data tag.

operationId: `dlp-data-tags-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}

Retrieve a specific data tag.

operationId: `dlp-data-tags-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/data_tag_categories/{category_id}/data_tags/{tag_id}

Update the attributes of a single data tag.

operationId: `dlp-data-tags-update`

**Request** (application/json)

- `description`: string
- `name`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**
