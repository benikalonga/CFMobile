# Dataset

6 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/dataset

Lists all datasets in an account

operationId: `get_DatasetList` · query: `includeDeleted`

**Response** 200 → `result`

[array of]
- `deletedAt`: string
- `isPublic`: boolean **required**
- `name`: string **required**
- `uuid`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}

Delete a dataset

operationId: `delete_DatasetDelete`

**Response** 200 → `result`

- `name`: string **required**
- `uuid`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}

Reads a dataset

operationId: `get_DatasetRead`

**Response** 200 → `result`

- `deletedAt`: string
- `isPublic`: boolean **required**
- `name`: string **required**
- `uuid`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}

Updates an existing dataset

operationId: `patch_DatasetUpdate`

**Request** (application/json)

- `isPublic`: boolean **required** — If true, then anyone can search the dataset. If false, then its limited to the account.
- `name`: string **required** — Used to describe the dataset within the account context.

**Response** 200 → `result`

- `deletedAt`: string
- `isPublic`: boolean **required**
- `name`: string **required**
- `uuid`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}

Updates an existing dataset

operationId: `post_DatasetUpdate`

**Request** (application/json)

- `isPublic`: boolean **required** — If true, then anyone can search the dataset. If false, then its limited to the account.
- `name`: string **required** — Used to describe the dataset within the account context.

**Response** 200 → `result`

- `deletedAt`: string
- `isPublic`: boolean **required**
- `name`: string **required**
- `uuid`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/dataset/create

Creates a dataset

operationId: `post_DatasetCreate`

**Request** (application/json)

- `isPublic`: boolean **required** — If true, then anyone can search the dataset. If false, then its limited to the account.
- `name`: string **required** — Used to describe the dataset within the account context.

**Response** 200 → `result`

- `deletedAt`: string
- `isPublic`: boolean **required**
- `name`: string **required**
- `uuid`: string **required**
