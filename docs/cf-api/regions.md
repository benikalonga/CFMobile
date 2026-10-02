# Regions

2 endpoints.

## GET /accounts/{account_id}/dls/regions

List DLS regions for an account

operationId: `publicListRegions` · query: `cursor`, `per_page`, `type`

**Response** 200 → `result`

[array of]
- `created_on`: string **required**
- `id`: string **required**
- `modified_on`: string **required**
- `name`: string **required**
- `region_key`: string **required**
- `version`: integer **required**
- `version_created_on`: string **required**

## GET /accounts/{account_id}/dls/regions/{region_id}

Get a DLS region

operationId: `publicGetRegion`

**Response** 200 → `result`

- `created_on`: string **required**
- `id`: string **required**
- `modified_on`: string **required**
- `name`: string **required**
- `region_key`: string **required**
- `version`: integer **required**
- `version_created_on`: string **required**
