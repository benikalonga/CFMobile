# Vectorize Beta (Deprecated)

10 endpoints.

## GET /accounts/{account_id}/vectorize/indexes

List Vectorize Indexes (Deprecated)

operationId: `vectorize-(-deprecated)-list-vectorize-indexes`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes

Create Vectorize Index (Deprecated)

operationId: `vectorize-(-deprecated)-create-vectorize-index`

**Request** (application/json)

- `config`: any **required**
- `description`: string — Specifies the description of the index.
- `name`: string **required**

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/vectorize/indexes/{index_name}

Delete Vectorize Index (Deprecated)

operationId: `vectorize-(-deprecated)-delete-vectorize-index`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/vectorize/indexes/{index_name}

Get Vectorize Index (Deprecated)

operationId: `vectorize-(-deprecated)-get-vectorize-index`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/vectorize/indexes/{index_name}

Update Vectorize Index (Deprecated)

operationId: `vectorize-(-deprecated)-update-vectorize-index`

**Request** (application/json)

- `description`: string **required** — Specifies the description of the index.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids

Delete Vectors By Identifier (Deprecated)

operationId: `vectorize-(-deprecated)-delete-vectors-by-id`

**Request** (application/json)

- `ids`: string[] — A list of vector identifiers to delete from the index indicated by the path.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids

Get Vectors By Identifier (Deprecated)

operationId: `vectorize-(-deprecated)-get-vectors-by-id`

**Request** (application/json)

- `ids`: string[] — A list of vector identifiers to retrieve from the index indicated by the path.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes/{index_name}/insert

Insert Vectors (Deprecated)

operationId: `vectorize-(-deprecated)-insert-vector`

**Request** (application/x-ndjson)

string

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes/{index_name}/query

Query Vectors (Deprecated)

operationId: `vectorize-(-deprecated)-query-vector`

**Request** (application/json)

- `filter`: object — A metadata filter expression used to limit nearest neighbor results.
- `returnMetadata`: boolean default: `false` — Whether to return the metadata associated with the closest vectors.
- `returnValues`: boolean default: `false` — Whether to return the values associated with the closest vectors.
- `topK`: number default: `5` — The number of nearest neighbors to find.
- `vector`: number[] **required** — The search vector that will be used to find the nearest neighbors.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/indexes/{index_name}/upsert

Upsert Vectors (Deprecated)

operationId: `vectorize-(-deprecated)-upsert-vector`

**Request** (application/x-ndjson)

string

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
