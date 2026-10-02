# DLP Sensitivity Levels

5 endpoints.

## GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels

Retrieve all sensitivity levels in a sensitivity group

operationId: `dlp-sensitivity-levels-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels

Creates a new sensitivity level.

operationId: `dlp-sensitivity-levels-create`

**Request** (application/json)

- `description`: string
- `name`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}

Delete a single sensitivity level.

operationId: `dlp-sensitivity-levels-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}

Retrieve a specific sensitivity level.

operationId: `dlp-sensitivity-levels-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/levels/{sensitivity_level_id}

Update the attributes of a single sensitivity level.

operationId: `dlp-sensitivity-levels-update`

**Request** (application/json)

- `description`: string
- `name`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `name`: string **required**
- `updated_at`: string **required**
