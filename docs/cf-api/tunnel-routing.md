# Tunnel Routing

9 endpoints.

## GET /accounts/{account_id}/teamnet/routes

List tunnel routes

operationId: `tunnel-route-list-tunnel-routes` · query: `comment`, `is_deleted`, `network_subset`, `network_superset`, `existed_at`, `tunnel_id`, `route_id`, `tun_types`, `virtual_network_id`, `per_page`, `page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/teamnet/routes

Create a tunnel route

operationId: `tunnel-route-create-a-tunnel-route`

**Request** (application/json)

- `comment`: string default: `` — Optional remark describing the route.
- `network`: string **required** — The private IPv4 or IPv6 range connected by the route, in CIDR notation.
- `tunnel_id`: string **required** — UUID of the tunnel.
- `virtual_network_id`: string — UUID of the virtual network.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/teamnet/routes/{route_id}

Delete a tunnel route

operationId: `tunnel-route-delete-a-tunnel-route`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/teamnet/routes/{route_id}

Get tunnel route

operationId: `tunnel-route-get-tunnel-route`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/teamnet/routes/{route_id}

Update a tunnel route

operationId: `tunnel-route-update-a-tunnel-route`

**Request** (application/json)

- `comment`: string default: `` — Optional remark describing the route.
- `network`: string — The private IPv4 or IPv6 range connected by the route, in CIDR notation.
- `tunnel_id`: string — UUID of the tunnel.
- `virtual_network_id`: string — UUID of the virtual network.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/teamnet/routes/ip/{ip}

Get tunnel route by IP

operationId: `tunnel-route-get-tunnel-route-by-ip` · query: `virtual_network_id`, `default_virtual_network_fallback`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}

Delete a tunnel route (CIDR Endpoint)

operationId: `tunnel-route-delete-a-tunnel-route-with-cidr` · query: `virtual_network_id`, `tun_type`, `tunnel_id`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}

Update a tunnel route (CIDR Endpoint)

operationId: `tunnel-route-update-a-tunnel-route-with-cidr`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}

Create a tunnel route (CIDR Endpoint)

operationId: `tunnel-route-create-a-tunnel-route-with-cidr`

**Request** (application/json)

- `comment`: string default: `` — Optional remark describing the route.
- `tunnel_id`: string **required** — UUID of the tunnel.
- `virtual_network_id`: string — UUID of the virtual network.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
