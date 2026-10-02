# ASN Intelligence

2 endpoints.

## GET /accounts/{account_id}/intel/asn/{asn}

Get ASN Overview.

operationId: `asn-intelligence-get-asn-overview`

**Response** 200 → `result`

integer

## GET /accounts/{account_id}/intel/asn/{asn}/subnets

Get ASN Subnets

operationId: `asn-intelligence-get-asn-subnets`

**Response** 200 → `result`

- `asn`: integer
- `count`: number — Total results returned based on your search parameters.
- `ip_count_total`: integer
- `page`: number — Current page within paginated list of results.
- `per_page`: number — Number of results per page of results.
- `subnets`: string[]
  [array]
