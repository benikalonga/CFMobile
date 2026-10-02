# Radar Datasets

3 endpoints.

## GET /radar/datasets

List datasets

operationId: `radar-get-reports-datasets` · query: `limit`, `offset`, `datasetType`, `date`, `format`

**Response** 200 → `result`

- `datasets`: object[] **required**
  [array of]
  - `description`: string **required**
  - `id`: integer **required**
  - `meta`: object **required**
  - `tags`: string[] **required**
    [array]
  - `title`: string **required**
  - `type`: string **required**

## GET /radar/datasets/{alias}

Get dataset CSV stream

operationId: `radar-get-reports-dataset-download`

**Response** 200 → `result`

string

## POST /radar/datasets/download

Get dataset download URL

operationId: `radar-post-reports-dataset-download-url` · query: `format`

**Request** (application/json)

- `datasetId`: integer **required**

**Response** 200 → `result`

- `dataset`: object **required**
  - `url`: string **required**
