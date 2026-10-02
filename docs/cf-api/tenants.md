# Tenants

5 endpoints.

## GET /tenants/{tenant_id}

Get tenant

operationId: `Tenants_retrieveTenant`

**Response** 200 → `result`

- `cdate`: string **required**
- `customer_id`: string
- `edate`: string **required**
- `tenant_contacts`: object **required**
  - `email`: string
  - `website`: string
- `tenant_labels`: string[] **required**
  [array]
- `tenant_metadata`: object **required**
  - `dns`: object
    - `ns_pool`: object **required**
- `tenant_name`: string **required**
- `tenant_network`: object **required**
- `tenant_status`: string **required**
- `tenant_tag`: string **required**
- `tenant_type`: string **required**
- `tenant_units`: object[] **required**
  [array of]
  - `unit_memberships`: object[] **required**
    [array]
  - `unit_metadata`: object **required**
  - `unit_name`: string **required**
  - `unit_status`: string **required**
  - `unit_tag`: string **required**

## GET /tenants/{tenant_id}/account_types

Get tenant account types

operationId: `Tenants_validAccountTypes`

**Response** 200 → `result`

[array of]
string

## GET /tenants/{tenant_id}/accounts

List tenant accounts

operationId: `Tenants_listAccounts`

**Response** 200 → `result`

[array of]
- `created_on`: string **required**
- `id`: string **required**
- `name`: string **required**
- `settings`: object **required**
  - `abuse_contact_email`: string **required**
  - `access_approval_expiry`: string **required**
  - `api_access_enabled`: boolean **required**
  - `default_nameservers`: string **required** — Use [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-list-dns-settings) instead. Deprecated.
  - `enforce_twofactor`: boolean **required**
  - `use_account_custom_ns_by_default`: boolean **required** — Use [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-list-dns-settings) instead. Deprecated.
- `type`: string **required** enum: `standard`, `enterprise`

## GET /tenants/{tenant_id}/entitlements

List tenant entitlements

operationId: `Tenants_listEntitlements`

**Response** 200 → `result`

- `allow_add_subdomain`: object **required**
  - `type`: string **required** enum: `bool`
  - `value`: boolean **required**
- `allow_auto_accept_invites`: object **required**
  - `type`: string **required** enum: `bool`
  - `value`: boolean **required**
- `cname_setup_allowed`: object **required**
  - `type`: string **required** enum: `bool`
  - `value`: boolean **required**
- `custom_entitlements`: object[] **required**
  [array of]
  - `allocation`: any **required**
  - `feature`: object **required**
    - `key`: string **required**
- `mhs_certificate_count`: object **required**
  - `type`: string **required** enum: `max_count`
  - `value`: integer **required**
- `partial_setup_allowed`: object **required**
  - `type`: string **required** enum: `bool`
  - `value`: boolean **required**

## GET /tenants/{tenant_id}/memberships

List tenant memberships

operationId: `Tenants_listMemberships`

**Response** 200 → `result`

[array of]
- `user_email`: string **required**
- `user_name`: string **required**
- `user_tag`: string **required**
