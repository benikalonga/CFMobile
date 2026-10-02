# Magic Interconnects

4 endpoints.

## GET /accounts/{account_id}/magic/cf_interconnects

List interconnects

operationId: `magic-interconnects-list-interconnects`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/cf_interconnects

Update multiple interconnects

operationId: `magic-interconnects-update-multiple-interconnects`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}

List interconnect Details

operationId: `magic-interconnects-list-interconnect-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}

Update interconnect

operationId: `magic-interconnects-update-interconnect`

**Request** (application/json)

- `automatic_return_routing`: boolean default: `false` — True if automatic stateful return routing should be enabled for a tunnel, false otherwise. Requires the `coupler_integration` account flag t
- `description`: string — An optional description of the interconnect.
- `gre`: object — The configuration specific to GRE interconnects.
  - `cloudflare_endpoint`: string — The IP address assigned to the Cloudflare side of the GRE tunnel created as part of the Interconnect.
- `health_check`: object
  - `enabled`: boolean default: `true` — Determines whether to run healthchecks for a tunnel.
  - `rate`: string enum: `low`, `mid`, `high` default: `mid` — How frequent the health check is run. The default value is `mid`.
  - `target`: any — The destination address in a request type health check. After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP ec
  - `type`: string enum: `reply`, `request` default: `reply` — The type of healthcheck to run, reply or request. The default value is `reply`.
- `interface_address`: string — The IPv4 interface address for the interconnect. For MPLS Interconnects,
- `interface_address6`: string — A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the add
- `mtu`: integer default: `1476` — The Maximum Transmission Unit (MTU) in bytes for the interconnect. The minimum value is 576.
- `name`: string — The name of the interconnect. The name cannot share a name with other tunnels.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
