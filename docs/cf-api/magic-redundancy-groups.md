# Magic Redundancy Groups

5 endpoints.

## GET /accounts/{account_id}/magic/redundancy_groups

List Redundancy Groups

operationId: `magic-redundancy-groups-list-redundancy-groups`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/redundancy_groups

Create a Redundancy Group

operationId: `magic-redundancy-groups-create-redundancy-group`

**Request** (application/json)

- `description`: string default: `` — Optional description
- `members`: object[] default: `` — Tunnels to add to the group
  [array of]
  - `id`: string **required** — UUID of the tunnel or interconnect
  - `type`: string **required** enum: `gre`, `ipsec`, `cni` — Tunnel type: gre, ipsec, or cni
- `name`: string **required** — Human-readable name for the redundancy group

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/redundancy_groups/{redundancy_group_id}

Delete a Redundancy Group

operationId: `magic-redundancy-groups-delete-redundancy-group`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/redundancy_groups/{redundancy_group_id}

Get Redundancy Group Details

operationId: `magic-redundancy-groups-get-redundancy-group`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/redundancy_groups/{redundancy_group_id}

Update a Redundancy Group

operationId: `magic-redundancy-groups-update-redundancy-group`

**Request** (application/json)

- `description`: string default: `` — Optional description
- `members`: object[] default: `` — Tunnels to add to the group
  [array of]
  - `id`: string **required** — UUID of the tunnel or interconnect
  - `type`: string **required** enum: `gre`, `ipsec`, `cni` — Tunnel type: gre, ipsec, or cni
- `name`: string **required** — Human-readable name for the redundancy group

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
