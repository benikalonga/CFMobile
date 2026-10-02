# DLS Regional Services

6 endpoints.

## GET /accounts/{account_id}/addressing/regional_hostnames/regions

List Regions

operationId: `dls-account-regional-hostnames-list-regions`

**Response** 200 → `result`

[array of]
- `key`: string — Identifying key for the region
- `label`: string — Human-readable text label for the region

## GET /zones/{zone_id}/addressing/regional_hostnames

List Regional Hostnames

operationId: `dls-zone-regional-hostnames-list`

**Response** 200 → `result`

[array of]
- `created_on`: any **required**
- `hostname`: string **required** — DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
- `region_key`: string **required** — Identifying key for the region
- `routing`: string **required** default: `dns` — Configure which routing method to use for the regional hostname

## POST /zones/{zone_id}/addressing/regional_hostnames

Create Regional Hostname

operationId: `dls-zone-regional-hostnames-create`

**Request** (application/json)

- `hostname`: string **required** — DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
- `region_key`: string **required** — Identifying key for the region
- `routing`: string default: `dns` — Configure which routing method to use for the regional hostname

**Response** 200 → `result`

- `created_on`: any **required**
- `hostname`: string **required** — DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
- `region_key`: string **required** — Identifying key for the region
- `routing`: string **required** default: `dns` — Configure which routing method to use for the regional hostname

## DELETE /zones/{zone_id}/addressing/regional_hostnames/{hostname}

Delete Regional Hostname

operationId: `dls-zone-regional-hostnames-delete`

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

## GET /zones/{zone_id}/addressing/regional_hostnames/{hostname}

Fetch Regional Hostname

operationId: `dls-zone-regional-hostnames-fetch`

**Response** 200 → `result`

- `created_on`: any **required**
- `hostname`: string **required** — DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
- `region_key`: string **required** — Identifying key for the region
- `routing`: string **required** default: `dns` — Configure which routing method to use for the regional hostname

## PATCH /zones/{zone_id}/addressing/regional_hostnames/{hostname}

Update Regional Hostname

operationId: `dls-zone-regional-hostnames-patch`

**Request** (application/json)

- `region_key`: string **required** — Identifying key for the region

**Response** 200 → `result`

- `created_on`: any **required**
- `hostname`: string **required** — DNS hostname to be regionalized, must be a subdomain of the zone. Wildcards are supported for one level, e.g `*.example.com`
- `region_key`: string **required** — Identifying key for the region
- `routing`: string **required** default: `dns` — Configure which routing method to use for the regional hostname
