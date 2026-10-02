# Zone Holds

5 endpoints.

## DELETE /zones/{zone_id}/hold

Remove Zone Hold

operationId: `zones-0-hold-delete` · query: `hold_after`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/hold

Get Zone Hold

operationId: `zones-0-hold-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /zones/{zone_id}/hold

Update Zone Hold

operationId: `zones-0-hold-patch`

**Request** (application/json)

- `hold_after`: string default: `` — If `hold_after` is provided and future-dated, the hold will be temporarily disabled,
- `include_subdomains`: boolean default: `false` — If `true`, the zone hold will extend to block any subdomain of the given zone, as well

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/hold

Create Zone Hold

operationId: `zones-0-hold-post` · query: `include_subdomains`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/hold/{zone_name}

Get Zone Hold by Zone Name

operationId: `zones-0-hold-zone-name-get`

**Response** 200 → `result`

- `hold`: boolean — Whether the hostname is currently subject to a zone hold.
- `hold_after`: string — The RFC3339-formatted timestamp at which the hold will be automatically
- `include_subdomains`: boolean — Whether the hold extends to block subdomains of the held zone.
