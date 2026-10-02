# Indicator

9 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators

Lists indicators

operationId: `get_IndicatorListLegacy` · query: `page`, `pageSize`, `name`, `indicatorType`, `relatedEvent`

**Response** 200 → `result`

- `indicators`: object[] **required**
  [array of]
  - `createdAt`: string **required**
  - `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
  - `indicatorType`: string **required**
  - `relatedEvents`: object[]
    [array of]
    - `datasetId`: string **required**
    - `eventId`: string **required**
  - `tags`: object[]
    [array of]
    - `categoryName`: string
    - `uuid`: string
    - `value`: string
  - `updatedAt`: string **required**
  - `uuid`: string **required**
  - `value`: string **required**
- `pagination`: object **required**
  - `page`: number **required**
  - `pageSize`: number **required**
  - `totalCount`: number **required**
  - `totalPages`: number **required**

## DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}

Deletes an indicator

operationId: `delete_IndicatorDelete`

**Response** 200 → `result`

- `message`: string
- `success`: boolean

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}

Reads an indicator

operationId: `get_IndicatorRead`

**Response** 200 → `result`

- `createdAt`: string **required**
- `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
- `indicatorType`: string **required**
- `relatedEvents`: object[]
  [array of]
  - `datasetId`: string **required**
  - `eventId`: string **required**
- `tags`: object[]
  [array of]
  - `categoryName`: string
  - `uuid`: string
  - `value`: string
- `updatedAt`: string **required**
- `uuid`: string **required**
- `value`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}

Updates an indicator

operationId: `patch_IndicatorUpdate`

**Request** (application/json)

- `indicatorType`: string
- `relatedEvents`: object[]
  [array of]
  - `datasetId`: string **required**
  - `eventId`: string **required**
- `tags`: object[]
  [array]
- `value`: string

**Response** 200 → `result`

- `createdAt`: string **required**
- `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
- `indicatorType`: string **required**
- `relatedEvents`: object[]
  [array of]
  - `datasetId`: string **required**
  - `eventId`: string **required**
- `tags`: object[]
  [array of]
  - `categoryName`: string
  - `uuid`: string
  - `value`: string
- `updatedAt`: string **required**
- `uuid`: string **required**
- `value`: string **required**

## POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk

Creates multiple indicators in bulk

operationId: `post_IndicatorCreateBulk`

**Request** (application/json)

- `autoCreateType`: boolean — Global flag to automatically create indicator types if they don't exist. Individual indicators can override this with their own autoCreateTy
- `indicators`: object[] **required**
  [array of]
  - `autoCreateType`: boolean — If true, automatically create the indicator type if it doesn't exist. If false (default), throw an error when the indicator type doesn't exi
  - `indicatorType`: string **required**
  - `relatedEvents`: object[]
    [array of]
    - `datasetId`: string **required**
    - `eventId`: string **required**
  - `tags`: object[]
    [array]
  - `value`: string **required**

**Response** 200 → `result`

number

## POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create

Creates a new indicator

operationId: `post_IndicatorCreate`

**Request** (application/json)

- `autoCreateType`: boolean — If true, automatically create the indicator type if it doesn't exist. If false (default), throw an error when the indicator type doesn't exi
- `indicatorType`: string **required**
- `relatedEvents`: object[]
  [array of]
  - `datasetId`: string **required**
  - `eventId`: string **required**
- `tags`: object[]
  [array]
- `value`: string **required**

**Response** 200 → `result`

- `createdAt`: string **required**
- `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
- `indicatorType`: string **required**
- `relatedEvents`: object[]
  [array of]
  - `datasetId`: string **required**
  - `eventId`: string **required**
- `tags`: object[]
  [array of]
  - `categoryName`: string
  - `uuid`: string
  - `value`: string
- `updatedAt`: string **required**
- `uuid`: string **required**
- `value`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags

List mirrored tags for an indicator dataset

operationId: `get_IndicatorTagsList`

**Response** 200 → `result`

[array of]
object

## GET /accounts/{account_id}/cloudforce-one/events/indicators

Lists indicators across multiple datasets

operationId: `get_IndicatorList` · query: `datasetIds`, `page`, `pageSize`, `search`, `name`, `indicatorType`, `relatedEvents`, `tags`, `tagSearch`, `createdAfter`, `createdBefore`, `relatedEventsLimit`, `includeTags`, `includeTotalCount`, `format`, `source`, `cache`

**Response** 200 → `result`

- `properties`: object **required**
  - `indicators`: object **required**
    - `items`: object **required**
    - `type`: string **required**
  - `pagination`: object **required**
    - `properties`: object **required**
    - `type`: string **required**
- `type`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/indicators/aggregate

Aggregate indicators by column(s)

operationId: `get_IndicatorAggregate` · query: `aggregateBy`, `measure`, `tagUuid`, `datasetIds`, `createdAfter`, `createdBefore`, `eventDateAfter`, `eventDateBefore`, `limit`

**Response** 200 → `result`

- `aggregateBy`: string **required** — Column(s) that were aggregated by
- `aggregations`: object[] **required** — Array of aggregation results with dynamic fields based on aggregateBy columns
  [array of]
  - `count`: number **required** — Number of indicators for this aggregation
- `failedDatasets`: number **required** — Number of datasets whose aggregation failed and were excluded from the result
- `total`: number **required** — Total count in the aggregation: indicator rows when measure=indicators, or linked-event rows when measure=relationships
