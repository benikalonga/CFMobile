# Country

1 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/countries

Retrieves countries information for all countries

operationId: `get_CountryRead`

**Response** 200 → `result`

[array of]
- `result`: object[] **required**
  [array of]
  - `alpha2`: string **required**
  - `alpha3`: string **required**
  - `name`: string **required**
- `success`: string **required**
