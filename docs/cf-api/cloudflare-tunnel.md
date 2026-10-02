# Cloudflare Tunnel

20 endpoints.

## GET /accounts/{account_id}/cfd_tunnel

List Cloudflare Tunnels

operationId: `cloudflare-tunnel-list-cloudflare-tunnels` · query: `name`, `is_deleted`, `existed_at`, `uuid`, `was_active_at`, `was_inactive_at`, `include_prefix`, `exclude_prefix`, `status`, `per_page`, `page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/cfd_tunnel

Create a Cloudflare Tunnel

operationId: `cloudflare-tunnel-create-a-cloudflare-tunnel`

**Request** (application/json)

- `config_src`: string enum: `local`, `cloudflare` default: `local` — Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `clo
- `name`: string **required** — A user-friendly name for a tunnel.
- `tunnel_secret`: string — Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}

Delete a Cloudflare Tunnel

operationId: `cloudflare-tunnel-delete-a-cloudflare-tunnel`

**Request** (application/json)

object

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}

Get a Cloudflare Tunnel

operationId: `cloudflare-tunnel-get-a-cloudflare-tunnel`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/cfd_tunnel/{tunnel_id}

Update a Cloudflare Tunnel

operationId: `cloudflare-tunnel-update-a-cloudflare-tunnel`

**Request** (application/json)

- `name`: string — A user-friendly name for a tunnel.
- `tunnel_secret`: string — Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections

Clean up Cloudflare Tunnel connections

operationId: `cloudflare-tunnel-clean-up-cloudflare-tunnel-connections` · query: `client_id`

**Request** (application/json)

object

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections

List Cloudflare Tunnel connections

operationId: `cloudflare-tunnel-list-cloudflare-tunnel-connections`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}

Get Cloudflare Tunnel connector

operationId: `cloudflare-tunnel-get-cloudflare-tunnel-connector`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management

Get a Cloudflare Tunnel management token

operationId: `cloudflare-tunnel-get-a-cloudflare-tunnel-management-token`

**Request** (application/json)

- `resources`: string[] **required**
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token

Get a Cloudflare Tunnel token

operationId: `cloudflare-tunnel-get-a-cloudflare-tunnel-token`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/tunnels

List All Tunnels

operationId: `cloudflare-tunnel-list-all-tunnels` · query: `name`, `is_deleted`, `existed_at`, `uuid`, `was_active_at`, `was_inactive_at`, `include_prefix`, `exclude_prefix`, `tun_types`, `status`, `per_page`, `page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/warp_connector

List Warp Connector Tunnels

operationId: `cloudflare-tunnel-list-warp-connector-tunnels` · query: `name`, `is_deleted`, `existed_at`, `uuid`, `was_active_at`, `was_inactive_at`, `include_prefix`, `exclude_prefix`, `status`, `per_page`, `page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/warp_connector

Create a Warp Connector Tunnel

operationId: `cloudflare-tunnel-create-a-warp-connector-tunnel`

**Request** (application/json)

- `ha`: boolean default: `false` — Indicates that the tunnel will be created to be highly available. If omitted, defaults to false.
- `name`: string **required** — A user-friendly name for a tunnel.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/warp_connector/{tunnel_id}

Delete a Warp Connector Tunnel

operationId: `cloudflare-tunnel-delete-a-warp-connector-tunnel`

**Request** (application/json)

object

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/warp_connector/{tunnel_id}

Get a Warp Connector Tunnel

operationId: `cloudflare-tunnel-get-a-warp-connector-tunnel`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/warp_connector/{tunnel_id}

Update a Warp Connector Tunnel

operationId: `cloudflare-tunnel-update-a-warp-connector-tunnel`

**Request** (application/json)

- `name`: string — A user-friendly name for a tunnel.
- `tunnel_secret`: string — Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/warp_connector/{tunnel_id}/connections

List WARP Connector Tunnel connections

operationId: `cloudflare-tunnel-list-warp-connector-tunnel-connections`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}

Get WARP Connector Tunnel connector

operationId: `cloudflare-tunnel-get-warp-connector-tunnel-connector`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/warp_connector/{tunnel_id}/failover

Trigger a manual failover for a WARP Connector Tunnel

operationId: `cloudflare-tunnel-manual-failover-warp-connector-tunnel`

**Request** (application/json)

- `client_id`: string **required** — UUID of the Cloudflare Tunnel connector.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/warp_connector/{tunnel_id}/token

Get a Warp Connector Tunnel token

operationId: `cloudflare-tunnel-get-a-warp-connector-tunnel-token`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
