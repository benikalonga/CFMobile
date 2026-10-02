# Collections

13 endpoints.

## GET /accounts/{account_id}/cloudforce-one/v2/collections

List collections

operationId: `get_CollectionList` · query: `page`, `limit`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `created_by`: string **required**
- `id`: string **required**
- `item_count`: number **required**
- `metadata`: object
- `name`: string **required**
- `status`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/cloudforce-one/v2/collections

Create a new collection

operationId: `post_CollectionCreate`

**Request** (application/json)

(one of 3 variants; showing the first)
- `columns`: object[] **required**
  [array of]
  - `default`: object — Default value for the column (type depends on column type)
  - `name`: string **required**
  - `required`: boolean default: `false`
  - `type`: string **required** enum: `text`, `number`, `boolean`, `date`
- `description`: string
- `metadata`: object
- `name`: string **required**
- `project_id`: string
- `tags`: string[]
  [array]

**Response** 201 → `result`

- `columns`: object[] **required**
  [array of]
  - `default_value`: string **required**
  - `id`: string **required**
  - `name`: string **required**
  - `position`: integer **required**
  - `required`: boolean **required**
  - `type`: string **required** enum: `text`, `number`, `boolean`, `date`
- `created_at`: string **required**
- `created_by`: string **required**
- `description`: string
- `id`: string **required**
- `item_count`: integer **required**
- `name`: string **required**
- `project_id`: string
- `status`: string **required** enum: `ready`, `processing`, `failed`
- `tags`: string[]
  [array]
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}

Delete collection

operationId: `delete_CollectionDelete`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array]
- `messages`: object[] **required**
  [array]
- `success`: boolean **required** enum: `true`

## GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}

Get collection

operationId: `get_CollectionGet`

**Response** 200 → `result`

- `columns`: object[] **required**
  [array of]
  - `default`: object
  - `id`: string **required**
  - `name`: string **required**
  - `position`: number **required**
  - `required`: boolean **required**
  - `type`: string **required**
- `created_at`: string **required**
- `created_by`: string **required**
- `id`: string **required**
- `item_count`: number **required**
- `metadata`: object
- `name`: string **required**
- `status`: string **required**
- `updated_at`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}

Update collection

operationId: `patch_CollectionUpdate`

**Request** (application/json)

- `metadata`: object
  - `description`: string — Collection description
  - `project_id`: string — Project ID
  - `tags`: string[]
    [array]
- `name`: string — Collection name

**Response** 200 → `result`

- `created_at`: string **required**
- `created_by`: string **required**
- `id`: string **required**
- `item_count`: number **required**
- `metadata`: object
- `name`: string **required**
- `status`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns

Add column to collection

operationId: `post_ColumnAdd`

**Request** (application/json)

- `default`: object
- `name`: string **required**
- `required`: boolean default: `false`
- `type`: string **required** enum: `text`, `number`, `boolean`, `date`

**Response** 200 → `result`

- `id`: string **required**
- `name`: string **required**
- `position`: number **required**
- `required`: boolean **required**
- `type`: string **required** enum: `text`, `number`, `boolean`, `date`

## DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns/{column_id}

Delete column

operationId: `delete_ColumnDelete`

**Response** 200 → `result`

- `id`: string **required**
- `name`: string **required**
- `position`: number **required**
- `required`: boolean **required**
- `type`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/columns/{column_id}

Update column

operationId: `patch_ColumnUpdate`

**Request** (application/json)

- `name`: string — New column name (must be unique)
- `position`: number — Column display order
- `required`: boolean — Whether column is required
- `type`: string enum: `text`, `number`, `boolean`, `date` — Column type: text, number, boolean, or date

**Response** 200 → `result`

- `id`: string **required**
- `name`: string **required**
- `position`: number **required**
- `required`: boolean **required**
- `type`: string **required**

## GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/export

Export collection to CSV, JSONL, or Markdown

operationId: `get_CollectionExportEndpoint` · query: `include_ids`

**Response** 200 → `result`

string

## GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items

Query collection items

operationId: `get_ItemQuery` · query: `cursor`, `limit`, `q`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `data`: object **required**
- `id`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}

Delete collection item

operationId: `delete_ItemDelete`

**Response** 200 → `result`

- `deleted`: boolean **required**

## GET /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}

Get collection item

operationId: `get_ItemGet`

**Response** 200 → `result`

- `created_at`: string **required**
- `data`: object **required**
- `id`: string **required**
- `updated_at`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/v2/collections/{collection_id}/items/{item_id}

Update collection item

operationId: `patch_ItemUpdate`

**Request** (application/json)

- `data`: object **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `data`: object **required**
- `id`: string **required**
- `updated_at`: string **required**
