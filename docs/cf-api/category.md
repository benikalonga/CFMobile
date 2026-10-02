# Category

9 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/categories

Lists categories across multiple datasets

operationId: `get_CategoryList` · query: `datasetIds`

**Response** 200 → `result`

[array of]
- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/events/categories/{category_id}

Deletes a category

operationId: `delete_CategoryDelete`

**Response** 200 → `result`

- `uuid`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/categories/{category_id}

Reads a category

operationId: `get_CategoryRead`

**Response** 200 → `result`

- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/events/categories/{category_id}

Updates a category

operationId: `patch_CategoryUpdate`

**Request** (application/json)

- `killChain`: number
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string
- `shortname`: string

**Response** 200 → `result`

- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/categories/{category_id}

Updates a category

operationId: `post_CategoryUpdate`

**Request** (application/json)

- `killChain`: number
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string
- `shortname`: string

**Response** 200 → `result`

- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/categories/catalog

Lists categories

operationId: `get_CategoryListComplete`

**Response** 200 → `result`

[array of]
- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/categories/create

Creates a new category

operationId: `post_CategoryCreate`

**Request** (application/json)

- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string

**Response** 200 → `result`

- `killChain`: number **required**
- `mitreAttack`: string[]
  [array]
- `mitreCapec`: string[]
  [array]
- `name`: string **required**
- `shortname`: string
- `uuid`: string **required**

## GET /accounts/{account_id}/resource-library/categories

List application categories

operationId: `getCategories` · query: `limit`, `offset`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — Returns the category creation time.
- `description`: string **required** — Returns the category description.
- `id`: string **required** — Returns the category ID.
- `name`: string **required** — Returns the category name.

## GET /accounts/{account_id}/resource-library/categories/{id}

Get application category

operationId: `getCategoryById`

**Response** 200 → `result`

- `created_at`: string **required** — Returns the category creation time.
- `description`: string **required** — Returns the category description.
- `id`: string **required** — Returns the category ID.
- `name`: string **required** — Returns the category name.
