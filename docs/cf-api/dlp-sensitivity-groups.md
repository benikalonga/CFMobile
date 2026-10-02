# DLP Sensitivity Groups

7 endpoints.

## GET /accounts/{account_id}/dlp/sensitivity_groups

Retrieve all sensitivity groups in an account

operationId: `dlp-sensitivity-groups-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `name`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/sensitivity_groups

Creates a new sensitivity group.

operationId: `dlp-sensitivity-groups-create`

**Request** (application/json)

- `description`: string
- `levels`: object[] — Levels to create with the group. Mutually exclusive with `template_id`.
  [array of]
  - `description`: string
  - `name`: string **required**
- `name`: string **required**
- `template_id`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `name`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}

Delete a single sensitivity group.

operationId: `dlp-sensitivity-groups-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}

Retrieve a specific sensitivity group.

operationId: `dlp-sensitivity-groups-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `name`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}

Update the attributes of a single sensitivity group.

operationId: `dlp-sensitivity-groups-update`

**Request** (application/json)

- `description`: string
- `levels`: object[] — The desired final state of levels.
  [array of]
  - `description`: string
  - `name`: string
  - `id`: string — If `None` (omitted), a new level will be created. Otherwise, an existing level will
- `name`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: string **required**
  - `name`: string **required**
  - `updated_at`: string **required**
- `name`: string **required**
- `template_id`: string
- `updated_at`: string **required**

## GET /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order

Retrieve the ordered list of level IDs for a sensitivity group.

operationId: `dlp-sensitivity-groups-get-level-order`

**Response** 200 → `result`

- `level_ids`: string[] **required**
  [array]

## PUT /accounts/{account_id}/dlp/sensitivity_groups/{sensitivity_group_id}/level_order

Set the ordering of levels within a sensitivity group.

operationId: `dlp-sensitivity-groups-put-level-order`

**Request** (application/json)

- `level_ids`: string[] **required**
  [array]

**Response** 200 → `result`

- `level_ids`: string[] **required**
  [array]
