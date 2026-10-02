# IP Address Management Leases

1 endpoints.

## GET /accounts/{account_id}/addressing/leases

List Leases

operationId: `ip-address-management-list-leases`

**Response** 200 → `result`

[array of]
- `active_from`: string — Timestamp of the moment the lease was created.
- `cidrs`: string[] — CIDRs attached to the lease
  [array]
- `created_at`: string — Timestamp of the moment the object was created.
- `id`: string — Identifier for the lease
- `modified_at`: string — Timestamp of the moment the object was modified.
- `owner_id`: string — Cloudflare account ID of the account owning the lease.
- `purpose`: string — Describes the purpose of the addresses.
