# Magic Site WANs

6 endpoints.

## GET /accounts/{account_id}/magic/sites/{site_id}/wans

List Site WANs

operationId: `magic-site-wans-list-wans`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/sites/{site_id}/wans

Create a new Site WAN

operationId: `magic-site-wans-create-wan`

**Request** (application/json)

- `name`: string
- `physport`: integer **required**
- `priority`: integer
- `static_addressing`: object — (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.
  - `address`: string **required** — A valid CIDR notation representing an IP range.
  - `gateway_address`: string **required** — A valid IPv4 address.
  - `secondary_address`: string — A valid CIDR notation representing an IP range.
- `vlan_tag`: integer — VLAN ID. Use zero for untagged.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}

Delete Site WAN

operationId: `magic-site-wans-delete-wan`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}

Site WAN Details

operationId: `magic-site-wans-wan-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}

Patch Site WAN

operationId: `magic-site-wans-patch-wan`

**Request** (application/json)

- `name`: string
- `physport`: integer
- `priority`: integer
- `static_addressing`: object — (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.
  - `address`: string **required** — A valid CIDR notation representing an IP range.
  - `gateway_address`: string **required** — A valid IPv4 address.
  - `secondary_address`: string — A valid CIDR notation representing an IP range.
- `vlan_tag`: integer — VLAN ID. Use zero for untagged.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}

Update Site WAN

operationId: `magic-site-wans-update-wan`

**Request** (application/json)

- `name`: string
- `physport`: integer
- `priority`: integer
- `static_addressing`: object — (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.
  - `address`: string **required** — A valid CIDR notation representing an IP range.
  - `gateway_address`: string **required** — A valid IPv4 address.
  - `secondary_address`: string — A valid CIDR notation representing an IP range.
- `vlan_tag`: integer — VLAN ID. Use zero for untagged.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
