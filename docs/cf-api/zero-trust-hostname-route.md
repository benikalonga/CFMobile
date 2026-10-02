# Zero Trust Hostname Route

5 endpoints.

## GET /accounts/{account_id}/zerotrust/routes/hostname

List hostname routes

operationId: `zero-trust-networks-route-hostname-list` · query: `id`, `hostname`, `tunnel_id`, `comment`, `existed_at`, `is_deleted`, `per_page`, `page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/zerotrust/routes/hostname

Create hostname route

operationId: `zero-trust-networks-route-hostname-create`

**Request** (application/json)

- `comment`: string — An optional description of the hostname route.
- `hostname`: string — The hostname of the route.
- `tunnel_id`: string — UUID of the tunnel.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}

Delete hostname route

operationId: `zero-trust-networks-route-hostname-delete`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}

Get hostname route

operationId: `zero-trust-networks-route-hostname-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}

Update hostname route

operationId: `zero-trust-networks-route-hostname-update`

**Request** (application/json)

- `comment`: string — An optional description of the hostname route.
- `hostname`: string — The hostname of the route.
- `tunnel_id`: string — UUID of the tunnel.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
