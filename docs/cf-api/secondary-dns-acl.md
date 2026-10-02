# Secondary DNS (ACL)

5 endpoints.

## GET /accounts/{account_id}/secondary_dns/acls

List ACLs

operationId: `secondary-dns-(-acl)-list-ac-ls`

**Response** 200 → `result`

[array of]
- `id`: string **required**
- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.

## POST /accounts/{account_id}/secondary_dns/acls

Create ACL

operationId: `secondary-dns-(-acl)-create-acl`

**Request** (application/json)

- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.

**Response** 200 → `result`

- `id`: string **required**
- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.

## DELETE /accounts/{account_id}/secondary_dns/acls/{acl_id}

Delete ACL

operationId: `secondary-dns-(-acl)-delete-acl`

**Response** 200 → `result`

- `id`: string

## GET /accounts/{account_id}/secondary_dns/acls/{acl_id}

ACL Details

operationId: `secondary-dns-(-acl)-acl-details`

**Response** 200 → `result`

- `id`: string **required**
- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.

## PUT /accounts/{account_id}/secondary_dns/acls/{acl_id}

Update ACL

operationId: `secondary-dns-(-acl)-update-acl`

**Request** (application/json)

- `id`: string **required**
- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.

**Response** 200 → `result`

- `id`: string **required**
- `ip_range`: string **required** — Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to al
- `name`: string **required** — The name of the acl.
