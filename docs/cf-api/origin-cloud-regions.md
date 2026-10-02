# Origin Cloud Regions

15 endpoints.

## GET /zones/{zone_id}/cache/origin_cloud_regions

List origin cloud region mappings

operationId: `origin-cloud-regions-list`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping set was last modified. Null when no mappings exist.
- `value`: object[] **required**
  [array of]
  - `modified_on`: string — Time this mapping was last modified.
  - `origin-ip`: string **required** — The origin IP address (IPv4 or IPv6, canonicalized).
  - `region`: string **required** — Cloud vendor region identifier.
  - `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## PATCH /zones/{zone_id}/cache/origin_cloud_regions

Create or update an origin cloud region mapping

operationId: `origin-cloud-regions-upsert`

**Request** (application/json)

- `ip`: string **required** — Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin. Must be one of the supported vendors.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping set was last modified. Null when no mappings exist.
- `value`: object[] **required**
  [array of]
  - `modified_on`: string — Time this mapping was last modified.
  - `origin-ip`: string **required** — The origin IP address (IPv4 or IPv6, canonicalized).
  - `region`: string **required** — Cloud vendor region identifier.
  - `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## POST /zones/{zone_id}/cache/origin_cloud_regions

Create an origin cloud region mapping

operationId: `origin-cloud-regions-create`

**Request** (application/json)

- `ip`: string **required** — Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin. Must be one of the supported vendors.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping was last modified.
- `value`: object **required** — A single origin IP-to-cloud-region mapping.
  - `modified_on`: string — Time this mapping was last modified.
  - `origin-ip`: string **required** — The origin IP address (IPv4 or IPv6, canonicalized).
  - `region`: string **required** — Cloud vendor region identifier.
  - `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## DELETE /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}

Delete an origin cloud region mapping

operationId: `origin-cloud-regions-delete`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping was last modified.
- `value`: object **required** — A single origin IP-to-cloud-region mapping.
  - `modified_on`: string — Time this mapping was last modified.
  - `origin-ip`: string **required** — The origin IP address (IPv4 or IPv6, canonicalized).
  - `region`: string **required** — Cloud vendor region identifier.
  - `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## GET /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}

Get an origin cloud region mapping

operationId: `origin-cloud-regions-get`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping was last modified.
- `value`: object **required** — A single origin IP-to-cloud-region mapping.
  - `modified_on`: string — Time this mapping was last modified.
  - `origin-ip`: string **required** — The origin IP address (IPv4 or IPv6, canonicalized).
  - `region`: string **required** — Cloud vendor region identifier.
  - `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## DELETE /zones/{zone_id}/cache/origin_cloud_regions/batch

Batch delete origin cloud region mappings

operationId: `origin-cloud-regions-batch-delete`

**Request** (application/json)

[array of]
string

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping set was last modified. Null when no items were successfully applied.
- `value`: object **required**
  - `failed`: object[] **required** — Items that could not be applied, with error details.
    [array of]
    - `error`: string — Error message explaining why the item failed. Present only on failed items.
    - `origin-ip`: string **required** — The origin IP address for this item.
    - `region`: string — Cloud vendor region identifier. Present on succeeded items for patch operations.
    - `vendor`: string — Cloud vendor identifier. Present on succeeded items for patch operations.
  - `succeeded`: object[] **required** — Items that were successfully applied.
    [array of]
    - `error`: string — Error message explaining why the item failed. Present only on failed items.
    - `origin-ip`: string **required** — The origin IP address for this item.
    - `region`: string — Cloud vendor region identifier. Present on succeeded items for patch operations.
    - `vendor`: string — Cloud vendor identifier. Present on succeeded items for patch operations.

## PATCH /zones/{zone_id}/cache/origin_cloud_regions/batch

Batch create or update origin cloud region mappings

operationId: `origin-cloud-regions-batch-upsert`

**Request** (application/json)

[array of]
- `ip`: string **required** — Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin. Must be one of the supported vendors.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting can be modified by the current user.
- `id`: string **required** enum: `origin_public_cloud_region`
- `modified_on`: string — Time the mapping set was last modified. Null when no items were successfully applied.
- `value`: object **required**
  - `failed`: object[] **required** — Items that could not be applied, with error details.
    [array of]
    - `error`: string — Error message explaining why the item failed. Present only on failed items.
    - `origin-ip`: string **required** — The origin IP address for this item.
    - `region`: string — Cloud vendor region identifier. Present on succeeded items for patch operations.
    - `vendor`: string — Cloud vendor identifier. Present on succeeded items for patch operations.
  - `succeeded`: object[] **required** — Items that were successfully applied.
    [array of]
    - `error`: string — Error message explaining why the item failed. Present only on failed items.
    - `origin-ip`: string **required** — The origin IP address for this item.
    - `region`: string — Cloud vendor region identifier. Present on succeeded items for patch operations.
    - `vendor`: string — Cloud vendor identifier. Present on succeeded items for patch operations.

## GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions

List supported cloud vendors and regions

operationId: `origin-cloud-regions-supported-regions`

**Response** 200 → `result`

- `obtained_codes`: boolean **required** — Whether Cloudflare airport codes (IATA colo identifiers) were successfully resolved for the `upper_tier_colos` field on each region. When `f
- `vendors`: object **required** — Map of vendor name to list of supported regions.

## GET /zones/{zone_id}/origin/cloud_regions

List origin cloud region mappings

operationId: `origin-cloud-regions-v2-list` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `modified_on`: string — Time this mapping was last modified.
- `origin_ip`: string **required** — The origin IP address (IPv4 or IPv6). Normalized to canonical form (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## DELETE /zones/{zone_id}/origin/cloud_regions/{origin_ip}

Delete an origin cloud region mapping

operationId: `origin-cloud-regions-v2-delete`

**Response** 200 → `result`

- `origin_ip`: string **required** — The origin IP address whose mapping was deleted.

## GET /zones/{zone_id}/origin/cloud_regions/{origin_ip}

Get an origin cloud region mapping

operationId: `origin-cloud-regions-v2-get`

**Response** 200 → `result`

- `modified_on`: string — Time this mapping was last modified.
- `origin_ip`: string **required** — The origin IP address (IPv4 or IPv6). Normalized to canonical form (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}

Create or replace an origin cloud region mapping

operationId: `origin-cloud-regions-v2-upsert`

**Request** (application/json)

- `origin_ip`: string **required** — Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path para
- `region`: string **required** — Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin. Must be one of the supported vendors.

**Response** 200 → `result`

- `modified_on`: string — Time this mapping was last modified.
- `origin_ip`: string **required** — The origin IP address (IPv4 or IPv6). Normalized to canonical form (RFC 5952 for IPv6).
- `region`: string **required** — Cloud vendor region identifier.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin.

## DELETE /zones/{zone_id}/origin/cloud_regions/batch

Batch delete origin cloud region mappings

operationId: `origin-cloud-regions-v2-batch-delete`

**Request** (application/json)

[array of]
string

**Response** 200 → `result`

- `failed`: object[] **required** — Items that could not be applied, with error details.
  [array of]
  - `error`: string — Error message explaining why the item failed. Present only on failed items.
  - `origin_ip`: string **required** — The origin IP address for this item.
  - `region`: string — Cloud vendor region identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
  - `vendor`: string — Cloud vendor identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
- `succeeded`: object[] **required** — Items that were successfully applied.
  [array of]
  - `error`: string — Error message explaining why the item failed. Present only on failed items.
  - `origin_ip`: string **required** — The origin IP address for this item.
  - `region`: string — Cloud vendor region identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
  - `vendor`: string — Cloud vendor identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).

## PUT /zones/{zone_id}/origin/cloud_regions/batch

Batch create or replace origin cloud region mappings

operationId: `origin-cloud-regions-v2-batch-upsert`

**Request** (application/json)

[array of]
- `origin_ip`: string **required** — Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path para
- `region`: string **required** — Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.
- `vendor`: string **required** enum: `aws`, `azure`, `gcp`, `oci` — Cloud vendor hosting the origin. Must be one of the supported vendors.

**Response** 200 → `result`

- `failed`: object[] **required** — Items that could not be applied, with error details.
  [array of]
  - `error`: string — Error message explaining why the item failed. Present only on failed items.
  - `origin_ip`: string **required** — The origin IP address for this item.
  - `region`: string — Cloud vendor region identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
  - `vendor`: string — Cloud vendor identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
- `succeeded`: object[] **required** — Items that were successfully applied.
  [array of]
  - `error`: string — Error message explaining why the item failed. Present only on failed items.
  - `origin_ip`: string **required** — The origin IP address for this item.
  - `region`: string — Cloud vendor region identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).
  - `vendor`: string — Cloud vendor identifier. Present on succeeded items (the new value for upsert, the deleted value for delete).

## GET /zones/{zone_id}/origin/cloud_regions/supported_regions

List supported cloud vendors and regions

operationId: `origin-cloud-regions-v2-supported-regions`

**Response** 200 → `result`

- `obtained_codes`: boolean **required** — Whether Cloudflare airport codes (IATA colo identifiers) were successfully resolved for the `upper_tier_colos` field on each region. When `f
- `vendors`: object **required** — Map of vendor name to list of supported regions.
