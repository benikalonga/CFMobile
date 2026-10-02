# Logs Received

5 endpoints.

## GET /zones/{zone_id}/logs/control/retention/flag

Get log retention flag

operationId: `get-zones-zone_id-logs-control-retention-flag`

**Response** 200 → `result`

- `flag`: boolean — The log retention flag for Logpull API.

## POST /zones/{zone_id}/logs/control/retention/flag

Update log retention flag

operationId: `post-zones-zone_id-logs-control-retention-flag`

**Request** (application/json)

- `flag`: boolean — The log retention flag for Logpull API.

**Response** 200 → `result`

- `flag`: boolean — The log retention flag for Logpull API.

## GET /zones/{zone_id}/logs/rayids/{ray_id}

Get logs RayIDs

operationId: `get-zones-zone_id-logs-rayids-ray_id` · query: `fields`, `timestamps`

**Response** 200 → `result`

(one of 2 variants; showing the first)
string

## GET /zones/{zone_id}/logs/received

Get logs received

operationId: `get-zones-zone_id-logs-received` · query: `start`, `end`, `fields`, `sample`, `count`, `timestamps`

**Response** 200 → `result`

(one of 2 variants; showing the first)
string

## GET /zones/{zone_id}/logs/received/fields

List fields

operationId: `get-zones-zone_id-logs-received-fields`

**Response** 200 → `result`

- `key`: string
