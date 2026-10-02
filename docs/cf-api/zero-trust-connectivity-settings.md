# Zero Trust Connectivity Settings

2 endpoints.

## GET /accounts/{account_id}/zerotrust/connectivity_settings

Get Zero Trust Connectivity Settings

operationId: `zero-trust-accounts-get-connectivity-settings`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/zerotrust/connectivity_settings

Updates the Zero Trust Connectivity Settings

operationId: `zero-trust-accounts-patch-connectivity-settings`

**Request** (application/json)

- `icmp_proxy_enabled`: boolean — A flag to enable the ICMP proxy for the account network.
- `offramp_warp_enabled`: boolean — A flag to enable WARP to WARP traffic.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
