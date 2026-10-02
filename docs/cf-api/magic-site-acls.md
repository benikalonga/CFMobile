# Magic Site ACLs

6 endpoints.

## GET /accounts/{account_id}/magic/sites/{site_id}/acls

List Site ACLs

operationId: `magic-site-acls-list-acls`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/sites/{site_id}/acls

Create a new Site ACL

operationId: `magic-site-acls-create-acl`

**Request** (application/json)

- `description`: string — Description for the ACL.
- `forward_locally`: boolean — The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the p
- `lan_1`: object **required**
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `lan_2`: object **required**
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `name`: string **required** — The name of the ACL.
- `protocols`: string[]
  [array]
- `unidirectional`: boolean — The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the pol

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}

Delete Site ACL

operationId: `magic-site-acls-delete-acl`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}

Site ACL Details

operationId: `magic-site-acls-acl-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}

Patch Site ACL

operationId: `magic-site-acls-patch-acl`

**Request** (application/json)

- `description`: string — Description for the ACL.
- `forward_locally`: boolean — The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the p
- `lan_1`: object
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `lan_2`: object
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `name`: string — The name of the ACL.
- `protocols`: string[]
  [array]
- `unidirectional`: boolean — The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the pol

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}

Update Site ACL

operationId: `magic-site-acls-update-acl`

**Request** (application/json)

- `description`: string — Description for the ACL.
- `forward_locally`: boolean — The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the p
- `lan_1`: object
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `lan_2`: object
  - `lan_id`: string **required** — The identifier for the LAN you want to create an ACL policy with.
  - `lan_name`: string — The name of the LAN based on the provided lan_id.
  - `port_ranges`: string[] — Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any po
    [array]
  - `ports`: integer[] — Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on t
    [array]
  - `subnets`: object[] — Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN ar
    [array]
- `name`: string — The name of the ACL.
- `protocols`: string[]
  [array]
- `unidirectional`: boolean — The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the pol

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
