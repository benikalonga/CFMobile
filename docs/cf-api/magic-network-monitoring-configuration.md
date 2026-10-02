# Magic Network Monitoring Configuration

6 endpoints.

## DELETE /accounts/{account_id}/mnm/config

Delete account configuration

operationId: `magic-network-monitoring-configuration-delete-account-configuration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/mnm/config

List account configuration

operationId: `magic-network-monitoring-configuration-list-account-configuration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/mnm/config

Update account configuration fields

operationId: `magic-network-monitoring-configuration-update-account-configuration-fields`

**Request** (application/json)

- `default_sampling`: number default: `1` — Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the route
- `name`: string — The account name.
- `router_ips`: string[]
  [array]
- `warp_devices`: object[]
  [array of]
  - `id`: string **required** — Unique identifier for the warp device.
  - `name`: string **required** — Name of the warp device.
  - `router_ip`: string **required** — IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/mnm/config

Create account configuration

operationId: `magic-network-monitoring-configuration-create-account-configuration`

**Request** (application/json)

- `default_sampling`: number **required** default: `1` — Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the route
- `name`: string **required** — The account name.
- `router_ips`: string[]
  [array]
- `warp_devices`: object[]
  [array of]
  - `id`: string **required** — Unique identifier for the warp device.
  - `name`: string **required** — Name of the warp device.
  - `router_ip`: string **required** — IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/mnm/config

Update an entire account configuration

operationId: `magic-network-monitoring-configuration-update-an-entire-account-configuration`

**Request** (application/json)

- `default_sampling`: number **required** default: `1` — Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the route
- `name`: string **required** — The account name.
- `router_ips`: string[]
  [array]
- `warp_devices`: object[]
  [array of]
  - `id`: string **required** — Unique identifier for the warp device.
  - `name`: string **required** — Name of the warp device.
  - `router_ip`: string **required** — IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/mnm/config/full

List rules and account configuration

operationId: `magic-network-monitoring-configuration-list-rules-and-account-configuration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
