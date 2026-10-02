# DLP Data Classes

5 endpoints.

## GET /accounts/{account_id}/dlp/data_classes

Retrieve all data classes in an account

operationId: `dlp-data-classes-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `data_tags`: string[] **required**
  [array]
- `description`: string
- `expression`: string **required**
- `id`: string **required**
- `name`: string **required**
- `sensitivity_levels`: object[] **required**
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/data_classes

Creates a new data class

operationId: `dlp-data-classes-create`

**Request** (application/json)

- `data_tags`: string[] **required**
  [array]
- `description`: string
- `expression`: string **required**
- `name`: string **required**
- `sensitivity_levels`: object[] **required**
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `data_tags`: string[] **required**
  [array]
- `description`: string
- `expression`: string **required**
- `id`: string **required**
- `name`: string **required**
- `sensitivity_levels`: object[] **required**
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/data_classes/{data_class_id}

Delete a single data class

operationId: `dlp-data-classes-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/data_classes/{data_class_id}

Retrieve a specific data class

operationId: `dlp-data-classes-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `data_tags`: string[] **required**
  [array]
- `description`: string
- `expression`: string **required**
- `id`: string **required**
- `name`: string **required**
- `sensitivity_levels`: object[] **required**
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/data_classes/{data_class_id}

Update the attributes of a single data class

operationId: `dlp-data-classes-update`

**Request** (application/json)

- `data_tags`: string[]
  [array]
- `description`: string
- `expression`: string
- `name`: string
- `sensitivity_levels`: object[]
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `data_tags`: string[] **required**
  [array]
- `description`: string
- `expression`: string **required**
- `id`: string **required**
- `name`: string **required**
- `sensitivity_levels`: object[] **required**
  [array of]
  - `group_id`: string **required**
  - `level_id`: string **required**
- `updated_at`: string **required**
