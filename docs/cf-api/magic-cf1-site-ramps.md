# Magic CF1 Site Ramps

4 endpoints.

## GET /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}/ramps

List CF1 Site Ramps

operationId: `magic-cf1-sites-list-cf1-site-ramps`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}/ramps

Create CF1 Site Ramps

operationId: `magic-cf1-sites-create-cf1-site-ramps`

**Request** (application/json)

[array of]
- `source_ramp_id`: any **required** — Identifier of the source network resource to associate as a ramp.
- `type`: string **required** enum: `gre`, `gre_interconnect`, `mpls_interconnect`, `mconn`, `ipsec` — The type of network connection (ramp) linking a CF1 Site to Cloudflare's network.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}/ramps/{ramp_id}

Delete CF1 Site Ramp

operationId: `magic-cf1-sites-delete-cf1-site-ramp`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}/ramps/{ramp_id}

Get CF1 Site Ramp

operationId: `magic-cf1-sites-get-cf1-site-ramp`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
