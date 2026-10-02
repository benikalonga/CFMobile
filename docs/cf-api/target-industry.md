# Target Industry

3 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries

Lists all target industries for a specific dataset

operationId: `get_TargetIndustryListByDataset`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/targetIndustries

Lists target industries across multiple datasets

operationId: `get_TargetIndustryList` · query: `datasetIds`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog

Lists all target industries from industry map catalog

operationId: `get_TargetIndustryListComplete`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**
