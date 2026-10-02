# Magic Site NetFlow Config

5 endpoints.

## DELETE /accounts/{account_id}/magic/sites/{site_id}/netflow_config

Delete NetFlow Configuration

operationId: `magic-site-netflow-config-delete-netflow-config`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/sites/{site_id}/netflow_config

NetFlow Configuration Details

operationId: `magic-site-netflow-config-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/magic/sites/{site_id}/netflow_config

Update NetFlow Configuration

operationId: `magic-site-netflow-config-patch-netflow-config`

**Request** (application/json)

- `active_timeout`: integer — Timeout in seconds for active flows.
- `collector_ip`: string — IPv4 address of the NetFlow collector.
- `collector_port`: integer — UDP port of the NetFlow collector.
- `inactive_timeout`: integer — Timeout in seconds for inactive flows.
- `sampling_rate`: integer — Sampling rate for NetFlow records (1 = every packet).

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/sites/{site_id}/netflow_config

Create NetFlow Configuration

operationId: `magic-site-netflow-config-create-netflow-config`

**Request** (application/json)

- `active_timeout`: integer — Timeout in seconds for active flows.
- `collector_ip`: string — IPv4 address of the NetFlow collector.
- `collector_port`: integer — UDP port of the NetFlow collector.
- `inactive_timeout`: integer — Timeout in seconds for inactive flows.
- `sampling_rate`: integer — Sampling rate for NetFlow records (1 = every packet).

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/sites/{site_id}/netflow_config

Update NetFlow Configuration

operationId: `magic-site-netflow-config-update-netflow-config`

**Request** (application/json)

- `active_timeout`: integer — Timeout in seconds for active flows.
- `collector_ip`: string — IPv4 address of the NetFlow collector.
- `collector_port`: integer — UDP port of the NetFlow collector.
- `inactive_timeout`: integer — Timeout in seconds for inactive flows.
- `sampling_rate`: integer — Sampling rate for NetFlow records (1 = every packet).

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
