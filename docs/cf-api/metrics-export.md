# Metrics Export

3 endpoints.

## DELETE /accounts/{account_id}/workers/observability/metricsexport

Delete Metrics Export

operationId: `metricsExport.delete`

**Request** (application/json)

- `meta`: string
- `resourceId`: string **required**
- `resourceType`: string **required**

**Response** 200 → `result`

- `deleted`: boolean **required**

## GET /accounts/{account_id}/workers/observability/metricsexport

List Metrics Exports

operationId: `metricsExport.list`

**Response** 200 → `result`

[array of]
- `createdAt`: string **required**
- `destinations`: string[] **required**
  [array]
- `meta`: string
- `resourceId`: string **required**
- `resourceType`: string **required**
- `updatedAt`: string **required**

## POST /accounts/{account_id}/workers/observability/metricsexport

Upsert Metrics Exports

operationId: `metricsExport.upsert`

**Request** (application/json)

(one of 3 variants; showing the first)
- `destinations`: string[] **required**
  [array]
- `meta`: string
- `resourceId`: string **required**
- `resourceType`: string **required**

**Response** 201 → `result`

[array of]
- `createdAt`: string **required**
- `destinations`: string[] **required**
  [array]
- `meta`: string
- `resourceId`: string **required**
- `resourceType`: string **required**
- `updatedAt`: string **required**
