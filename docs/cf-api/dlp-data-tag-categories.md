# DLP Data Tag Categories

5 endpoints.

## GET /accounts/{account_id}/dlp/data_tag_categories

Retrieve all data tag categories in an account

operationId: `dlp-data-tag-categories-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/data_tag_categories

Creates a new data tag category.

operationId: `dlp-data-tag-categories-create`

**Request** (application/json)

- `description`: string
- `name`: string **required**
- `tags`: object[] — Tags to create with the category. Mutually exclusive with `template_id`.
  [array of]
  - `description`: string
  - `name`: string **required**
- `template_id`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/data_tag_categories/{category_id}

Delete a single data tag category.

operationId: `dlp-data-tag-categories-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/data_tag_categories/{category_id}

Retrieve a specific data tag category.

operationId: `dlp-data-tag-categories-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/data_tag_categories/{category_id}

Update the attributes of a single data tag category.

operationId: `dlp-data-tag-categories-update`

**Request** (application/json)

- `description`: string
- `name`: string
- `tags`: object[] — The desired final state of tags.
  [array of]
  - `description`: string
  - `name`: string
  - `id`: string — If `None` (omitted), a new tag will be created. Otherwise, an existing tag will be

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `template_id`: string
- `updated_at`: string **required**
