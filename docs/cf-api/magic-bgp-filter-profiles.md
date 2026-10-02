# Magic BGP Filter Profiles

5 endpoints.

## GET /accounts/{account_id}/magic/bgp/filter_profiles

List BGP Filter Profiles

operationId: `magic-bgp-list-filter-profiles`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/bgp/filter_profiles

Create BGP Filter Profile

operationId: `magic-bgp-create-filter-profile`

**Request** (application/json)

- `description`: string default: `` — Description of the filter profile
- `match_action`: string **required** enum: `allow`, `deny` — Action to take when a route matches one of the targets in this profile
- `name`: string **required** — Friendly name for the filter profile
- `targets`: string[] **required** — List of CIDR prefixes. Each entry may carry an optional suffix that specifies which prefix lengths to match relative to the prefix length N:
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/bgp/filter_profiles/{profile_id}

Delete BGP Filter Profile

operationId: `magic-bgp-delete-filter-profile`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/bgp/filter_profiles/{profile_id}

Get BGP Filter Profile

operationId: `magic-bgp-get-filter-profile`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/bgp/filter_profiles/{profile_id}

Update BGP Filter Profile

operationId: `magic-bgp-update-filter-profile`

**Request** (application/json)

- `description`: string — Description of the filter profile
- `match_action`: string enum: `allow`, `deny` — Action to take when a route matches one of the targets in this profile
- `name`: string — Friendly name for the filter profile
- `targets`: string[] — List of CIDR prefixes. Each entry may carry an optional suffix that specifies which prefix lengths to match relative to the prefix length N:
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
