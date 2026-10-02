# Indicator Types

2 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/indicator-types

Lists indicator types across multiple datasets

operationId: `get_IndicatorTypesList` · query: `datasetIds`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/indicatorTypes

Lists all indicator types

operationId: `get_LegacyIndicatorTypesList`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**
