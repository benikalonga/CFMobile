# Account-Level Custom Nameservers Usage for a Zone

2 endpoints.

## GET /zones/{zone_id}/custom_ns

Get Account Custom Nameserver Related Zone Metadata

operationId: `account-level-custom-nameservers-usage-for-a-zone-get-account-custom-nameserver-related-zone-metadata`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.
- `result_info`: object
  - `count`: number — Total number of results for the requested service.
  - `page`: number — Current page within paginated list of results.
  - `per_page`: number — Number of results per page of results.
  - `total_count`: number — Total results available without any search parameters.
  - `total_pages`: number — The number of total pages in the entire result set.
- `enabled`: boolean — Whether zone uses account-level custom nameservers.
- `ns_set`: number default: `1` — The number of the name server set to assign to the zone.

## PUT /zones/{zone_id}/custom_ns

Set Account Custom Nameserver Related Zone Metadata

operationId: `account-level-custom-nameservers-usage-for-a-zone-set-account-custom-nameserver-related-zone-metadata`

**Request** (application/json)

- `enabled`: boolean — Whether zone uses account-level custom nameservers.
- `ns_set`: number default: `1` — The number of the name server set to assign to the zone.

**Response** 200 → `result`

[array of]
string
