# TagCategory

4 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/tags/categories

Lists all tag categories (SoT)

operationId: `get_TagCategoryList` · query: `search`

**Response** 200 → `result`

- `categories`: object[] **required**
  [array of]
  - `createdAt`: string
  - `description`: string
  - `name`: string **required**
  - `updatedAt`: string
  - `uuid`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}

Deletes a tag category (SoT)

operationId: `delete_TagCategoryDelete`

**Response** 200 → `result`

- `uuid`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}

Updates a tag category (SoT)

operationId: `patch_TagCategoryUpdate`

**Request** (application/json)

- `description`: string
- `name`: string

**Response** 200 → `result`

- `createdAt`: string
- `description`: string
- `name`: string **required**
- `updatedAt`: string
- `uuid`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/tags/categories/create

Creates a new tag category (SoT)

operationId: `post_TagCategoryCreate`

**Request** (application/json)

- `description`: string
- `name`: string **required**

**Response** 200 → `result`

- `createdAt`: string
- `description`: string
- `name`: string **required**
- `updatedAt`: string
- `uuid`: string **required**
