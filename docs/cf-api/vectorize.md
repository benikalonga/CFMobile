# Vectorize

14 endpoints.

## GET /accounts/{account_id}/vectorize/v2/indexes

List Vectorize Indexes

operationId: `vectorize-list-vectorize-indexes`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes

Create Vectorize Index

operationId: `vectorize-create-vectorize-index`

**Request** (application/json)

- `config`: any **required**
- `description`: string — Specifies the description of the index.
- `name`: string **required**

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/vectorize/v2/indexes/{index_name}

Delete Vectorize Index

operationId: `vectorize-delete-vectorize-index`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}

Get Vectorize Index

operationId: `vectorize-get-vectorize-index`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids

Delete Vectors By Identifier

operationId: `vectorize-delete-vectors-by-id`

**Request** (application/json)

- `ids`: string[] — A list of vector identifiers to delete from the index indicated by the path.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids

Get Vectors By Identifier

operationId: `vectorize-get-vectors-by-id`

**Request** (application/json)

- `ids`: string[] — A list of vector identifiers to retrieve from the index indicated by the path.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/info

Get Vectorize Index Info

operationId: `vectorize-index-info`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert

Insert Vectors

operationId: `vectorize-insert-vector` · query: `unparsable-behavior`

**Request** (application/x-ndjson)

string

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/list

List Vectors

operationId: `vectorize-list-vectors` · query: `count`, `cursor`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create

Create Metadata Index

operationId: `vectorize-create-metadata-index`

**Request** (application/json)

- `indexType`: string **required** enum: `string`, `number`, `boolean` — Specifies the type of metadata property to index.
- `propertyName`: string **required** — Specifies the metadata property to index.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete

Delete Metadata Index

operationId: `vectorize-delete-metadata-index`

**Request** (application/json)

- `propertyName`: string **required** — Specifies the metadata property for which the index must be deleted.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list

List Metadata Indexes

operationId: `vectorize-list-metadata-indexes`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/query

Query Vectors

operationId: `vectorize-query-vector`

**Request** (application/json)

- `filter`: object — A metadata filter expression used to limit nearest neighbor results.
- `returnMetadata`: string enum: `none`, `indexed`, `all` default: `none` — Whether to return no metadata, indexed metadata or all metadata associated with the closest vectors.
- `returnValues`: boolean default: `false` — Whether to return the values associated with the closest vectors.
- `topK`: number default: `5` — The number of nearest neighbors to find.
- `vector`: number[] **required** — The search vector that will be used to find the nearest neighbors.
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert

Upsert Vectors

operationId: `vectorize-upsert-vector` · query: `unparsable-behavior`

**Request** (application/x-ndjson)

string

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
