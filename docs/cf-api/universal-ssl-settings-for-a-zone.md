# Universal SSL Settings for a Zone

2 endpoints.

## GET /zones/{zone_id}/ssl/universal/settings

Universal SSL Settings Details

operationId: `universal-ssl-settings-for-a-zone-universal-ssl-settings-details`

**Response** 200 → `result`

- `enabled`: boolean — Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universa

## PATCH /zones/{zone_id}/ssl/universal/settings

Edit Universal SSL Settings

operationId: `universal-ssl-settings-for-a-zone-edit-universal-ssl-settings`

**Request** (application/json)

- `enabled`: boolean — Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universa

**Response** 200 → `result`

- `enabled`: boolean — Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universa
