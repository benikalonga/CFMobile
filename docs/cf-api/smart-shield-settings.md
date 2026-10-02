# Smart Shield Settings

2 endpoints.

## GET /zones/{zone_id}/smart_shield

Get Smart Shield Settings

operationId: `smart-shield-get-settings`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /zones/{zone_id}/smart_shield

Patch Smart Shield Settings

operationId: `smart-shield-patch-settings`

**Request** (application/json)

- `cache_reserve`: object
  - `value`: string enum: `on`, `off` — Specifies the enablement value of Cache Reserve.
- `regional_tiered_cache`: object
  - `value`: string enum: `on`, `off` — Specifies the enablement value of Regional Tiered Cache.
- `smart_routing`: object
  - `value`: string enum: `on`, `off` — Specifies the enablement value of Smart Routing.
- `smart_tiered_cache`: object
  - `value`: string enum: `on`, `off` — Specifies the enablement value of Smart Tiered Cache.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
