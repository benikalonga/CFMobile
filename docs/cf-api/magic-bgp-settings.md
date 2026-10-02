# Magic BGP Settings

2 endpoints.

## GET /accounts/{account_id}/magic/bgp/settings

Get BGP Settings

operationId: `magic-bgp-get-settings`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/bgp/settings

Update BGP Settings

operationId: `magic-bgp-update-settings`

**Request** (application/json)

- `cloudflare_asn`: integer — Route advertisements from Cloudflare to ramps in this account will use this ASN.
- `redistribute`: object — Per-source toggles controlling which route sources are redistributed into BGP. Each property enables redistribution for one route source.
  - `static:wan`: boolean — Redistribute static WAN routes into BGP

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
