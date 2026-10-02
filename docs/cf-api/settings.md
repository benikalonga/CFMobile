# Settings

2 endpoints.

## GET /accounts/{account_id}/cni/settings

Get the current settings for the active account

operationId: `get_settings`

**Response** 200 → `result`

- `default_asn`: integer **required**

## PUT /accounts/{account_id}/cni/settings

Update the current settings for the active account

operationId: `update_settings`

**Request** (application/json)

- `default_asn`: integer

**Response** 200 → `result`

- `default_asn`: integer **required**
