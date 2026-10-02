# Datasets

1 endpoints.

## POST /accounts/{account_id}/cloudforce-one/events/datasets/populate

Populate dataset-specific lookup tables from existing Events data with batch processing

operationId: `post_DatasetPopulate`

**Response** 200 → `result`

- `properties`: object **required**
  - `accountId`: object **required**
    - `type`: string **required**
  - `datasets`: object **required**
    - `items`: object **required**
    - `type`: string **required**
  - `errors`: object **required**
    - `items`: object **required**
    - `type`: string **required**
  - `summary`: object **required**
    - `properties`: object **required**
    - `type`: string **required**
- `type`: string **required**
