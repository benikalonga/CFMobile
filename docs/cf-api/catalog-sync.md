# Catalog Sync

8 endpoints.

## GET /accounts/{account_id}/magic/cloud/catalog-syncs

List Catalog Syncs

operationId: `catalog-syncs-list`

**Response** 200 → `result`

[array of]
- `description`: string **required**
- `destination_id`: string **required**
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `errors`: object
- `id`: string **required**
- `includes_discoveries_until`: string
- `last_attempted_update_at`: string
- `last_successful_update_at`: string
- `last_user_update_at`: string **required**
- `name`: string **required**
- `policy`: string **required**
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

## POST /accounts/{account_id}/magic/cloud/catalog-syncs

Create Catalog Sync

operationId: `catalog-syncs-create`

**Request** (application/json)

- `description`: string
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `name`: string **required**
- `policy`: string
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

**Response** 201 → `result`

- `description`: string **required**
- `destination_id`: string **required**
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `errors`: object
- `id`: string **required**
- `includes_discoveries_until`: string
- `last_attempted_update_at`: string
- `last_successful_update_at`: string
- `last_user_update_at`: string **required**
- `name`: string **required**
- `policy`: string **required**
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

## DELETE /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}

Delete Catalog Sync

operationId: `catalog-syncs-delete` · query: `delete_destination`

**Response** 200 → `result`

- `id`: string **required**

## GET /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}

Read Catalog Sync

operationId: `catalog-syncs-read`

**Response** 200 → `result`

- `description`: string **required**
- `destination_id`: string **required**
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `errors`: object
- `id`: string **required**
- `includes_discoveries_until`: string
- `last_attempted_update_at`: string
- `last_successful_update_at`: string
- `last_user_update_at`: string **required**
- `name`: string **required**
- `policy`: string **required**
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

## PATCH /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}

Patch Catalog Sync

operationId: `catalog-syncs-patch`

**Request** (application/json)

- `description`: string
- `name`: string
- `policy`: string
- `update_mode`: string enum: `AUTO`, `MANUAL`

**Response** 200 → `result`

- `description`: string **required**
- `destination_id`: string **required**
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `errors`: object
- `id`: string **required**
- `includes_discoveries_until`: string
- `last_attempted_update_at`: string
- `last_successful_update_at`: string
- `last_user_update_at`: string **required**
- `name`: string **required**
- `policy`: string **required**
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

## PUT /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}

Update Catalog Sync

operationId: `catalog-syncs-update`

**Request** (application/json)

- `description`: string
- `name`: string
- `policy`: string
- `update_mode`: string enum: `AUTO`, `MANUAL`

**Response** 200 → `result`

- `description`: string **required**
- `destination_id`: string **required**
- `destination_type`: string **required** enum: `NONE`, `ZERO_TRUST_LIST`
- `errors`: object
- `id`: string **required**
- `includes_discoveries_until`: string
- `last_attempted_update_at`: string
- `last_successful_update_at`: string
- `last_user_update_at`: string **required**
- `name`: string **required**
- `policy`: string **required**
- `update_mode`: string **required** enum: `AUTO`, `MANUAL`

## POST /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}/refresh

Run Catalog Sync

operationId: `catalog-syncs-refresh`

**Response** 200 → `result`

string

## GET /accounts/{account_id}/magic/cloud/catalog-syncs/prebuilt-policies

List Prebuilt Policies

operationId: `catalog-syncs-prebuilt-policies-list` · query: `destination_type`

**Response** 200 → `result`

[array of]
- `applicable_destinations`: string[] **required**
  [array]
- `policy_description`: string **required**
- `policy_name`: string **required**
- `policy_string`: string **required**
