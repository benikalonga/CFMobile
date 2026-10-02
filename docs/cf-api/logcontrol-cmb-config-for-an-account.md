# Logcontrol CMB config for an account

3 endpoints.

## DELETE /accounts/{account_id}/logs/control/cmb/config

Delete CMB config

operationId: `delete-accounts-account_id-logs-control-cmb-config`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/logs/control/cmb/config

Get CMB config

operationId: `get-accounts-account_id-logs-control-cmb-config`

**Response** 200 → `result`

- `allow_out_of_region_access`: boolean — Allow out of region access
- `regions`: string — Name of the region.

## POST /accounts/{account_id}/logs/control/cmb/config

Update CMB config

operationId: `post-accounts-account_id-logs-control-cmb-config`

**Request** (application/json)

- `allow_out_of_region_access`: boolean — Allow out of region access
- `regions`: string — Name of the region.

**Response** 200 → `result`

- `allow_out_of_region_access`: boolean — Allow out of region access
- `regions`: string — Name of the region.
