# DLP Datasets

9 endpoints.

## GET /accounts/{account_id}/dlp/datasets

Fetch all datasets

operationId: `dlp-datasets-read-all`

**Response** 200 → `result`

[array of]
- `case_sensitive`: boolean
- `columns`: object[] **required**
  [array of]
  - `entry_id`: string **required**
  - `header_name`: string **required**
  - `num_cells`: integer **required**
  - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `created_at`: string **required**
- `description`: string — The description of the dataset.
- `encoding_version`: integer **required**
- `id`: string **required**
- `name`: string **required**
- `num_cells`: integer **required**
- `secret`: boolean **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required** — Stores when the dataset was last updated.
- `uploads`: object[] **required**
  [array of]
  - `num_cells`: integer **required**
  - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `version`: integer **required**

## POST /accounts/{account_id}/dlp/datasets

Create a new dataset

operationId: `dlp-datasets-create`

**Request** (application/json)

- `case_sensitive`: boolean — Only applies to custom word lists.
- `description`: string — The description of the dataset.
- `encoding_version`: integer — Dataset encoding version
- `name`: string **required**
- `secret`: boolean — Generate a secret dataset.

**Response** 200 → `result`

- `dataset`: object **required**
  - `case_sensitive`: boolean
  - `columns`: object[] **required**
    [array of]
    - `entry_id`: string **required**
    - `header_name`: string **required**
    - `num_cells`: integer **required**
    - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `created_at`: string **required**
  - `description`: string — The description of the dataset.
  - `encoding_version`: integer **required**
  - `id`: string **required**
  - `name`: string **required**
  - `num_cells`: integer **required**
  - `secret`: boolean **required**
  - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `updated_at`: string **required** — Stores when the dataset was last updated.
  - `uploads`: object[] **required**
    [array of]
    - `num_cells`: integer **required**
    - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
    - `version`: integer **required**
- `encoding_version`: integer **required** — Encoding version to use for dataset.
- `max_cells`: integer **required**
- `secret`: string — The secret to use for Exact Data Match datasets.
- `version`: integer **required** — The version to use when uploading the dataset.

## DELETE /accounts/{account_id}/dlp/datasets/{dataset_id}

Delete a dataset

operationId: `dlp-datasets-delete`

## GET /accounts/{account_id}/dlp/datasets/{dataset_id}

Fetch a specific dataset

operationId: `dlp-datasets-read`

**Response** 200 → `result`

- `case_sensitive`: boolean
- `columns`: object[] **required**
  [array of]
  - `entry_id`: string **required**
  - `header_name`: string **required**
  - `num_cells`: integer **required**
  - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `created_at`: string **required**
- `description`: string — The description of the dataset.
- `encoding_version`: integer **required**
- `id`: string **required**
- `name`: string **required**
- `num_cells`: integer **required**
- `secret`: boolean **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required** — Stores when the dataset was last updated.
- `uploads`: object[] **required**
  [array of]
  - `num_cells`: integer **required**
  - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `version`: integer **required**

## PUT /accounts/{account_id}/dlp/datasets/{dataset_id}

Update details about a dataset

operationId: `dlp-datasets-update`

**Request** (application/json)

- `case_sensitive`: boolean — Determines if the words should be matched in a case-sensitive manner.
- `description`: string — The description of the dataset.
- `name`: string — The name of the dataset, must be unique.

**Response** 200 → `result`

- `case_sensitive`: boolean
- `columns`: object[] **required**
  [array of]
  - `entry_id`: string **required**
  - `header_name`: string **required**
  - `num_cells`: integer **required**
  - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `created_at`: string **required**
- `description`: string — The description of the dataset.
- `encoding_version`: integer **required**
- `id`: string **required**
- `name`: string **required**
- `num_cells`: integer **required**
- `secret`: boolean **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required** — Stores when the dataset was last updated.
- `uploads`: object[] **required**
  [array of]
  - `num_cells`: integer **required**
  - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `version`: integer **required**

## POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload

Prepare to upload a new version of a dataset

operationId: `dlp-datasets-create-version`

**Response** 200 → `result`

- `case_sensitive`: boolean
- `columns`: object[]
  [array of]
  - `entry_id`: string **required**
  - `header_name`: string **required**
  - `num_cells`: integer **required**
  - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `encoding_version`: integer **required**
- `max_cells`: integer **required**
- `secret`: string
- `version`: integer **required**

## POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}

Upload a new version of a dataset

operationId: `dlp-datasets-upload-version`

**Request** (application/octet-stream)

string

**Response** 200 → `result`

- `case_sensitive`: boolean
- `columns`: object[] **required**
  [array of]
  - `entry_id`: string **required**
  - `header_name`: string **required**
  - `num_cells`: integer **required**
  - `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `created_at`: string **required**
- `description`: string — The description of the dataset.
- `encoding_version`: integer **required**
- `id`: string **required**
- `name`: string **required**
- `num_cells`: integer **required**
- `secret`: boolean **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required** — Stores when the dataset was last updated.
- `uploads`: object[] **required**
  [array of]
  - `num_cells`: integer **required**
  - `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
  - `version`: integer **required**

## POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}

Sets the column information for a multi-column upload

operationId: `dlp-datasets-define-columns`

**Request** (application/json)

[array of]
(one of 2 variants; showing the first)
- `entry_id`: string **required**
- `header_name`: string **required**
- `num_cells`: integer **required**

**Response** 200 → `result`

[array of]
- `entry_id`: string **required**
- `header_name`: string **required**
- `num_cells`: integer **required**
- `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`

## POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}

Upload a new version of a multi-column dataset

operationId: `dlp-datasets-upload-dataset-column`

**Request** (application/octet-stream)

string

**Response** 200 → `result`

- `entry_id`: string **required**
- `header_name`: string **required**
- `num_cells`: integer **required**
- `upload_status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
