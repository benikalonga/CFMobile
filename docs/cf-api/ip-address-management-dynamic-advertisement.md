# IP Address Management Dynamic Advertisement

2 endpoints.

## GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status

Get Advertisement Status

operationId: `ip-address-management-dynamic-advertisement-get-advertisement-status`

**Response** 200 → `result`

- `advertised`: boolean — Advertisement status of the prefix. If `true`, the BGP route for the prefix is advertised to the Internet. If
- `advertised_modified_at`: string — Last time the advertisement status was changed. This field is only not 'null' if on demand is enabled.

## PATCH /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status

Update Prefix Dynamic Advertisement Status

operationId: `ip-address-management-dynamic-advertisement-update-prefix-dynamic-advertisement-status`

**Request** (application/json)

- `advertised`: boolean **required** — Advertisement status of the prefix. If `true`, the BGP route for the prefix is advertised to the Internet. If

**Response** 200 → `result`

- `advertised`: boolean — Advertisement status of the prefix. If `true`, the BGP route for the prefix is advertised to the Internet. If
- `advertised_modified_at`: string — Last time the advertisement status was changed. This field is only not 'null' if on demand is enabled.
