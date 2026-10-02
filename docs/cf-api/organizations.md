# Organizations

8 endpoints.

## GET /organizations

List organizations the user has access to

operationId: `Organization_listOrganizations` · query: `id`, `name`, `name.startsWith`, `name.endsWith`, `name.contains`, `containing.account`, `containing.user`, `containing.organization`, `parent.id`, `page_token`, `page_size`

**Response** 200 → `result`

[array of]
- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

## POST /organizations

Create organization

operationId: `Organizations_createUserOrganization`

**Request** (application/json)

- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

**Response** 200 → `result`

- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

## DELETE /organizations/{organization_id}

Delete organization.

operationId: `Organizations_delete`

**Response** 200 → `result`

- `id`: string **required**

## GET /organizations/{organization_id}

Get organization

operationId: `Organizations_retrieve`

**Response** 200 → `result`

- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

## PUT /organizations/{organization_id}

Modify organization.

operationId: `Organizations_modify`

**Request** (application/json)

- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

**Response** 200 → `result`

- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**

## GET /organizations/{organization_id}/accounts

Get organization accounts

operationId: `Organizations_getAccounts` · query: `account_pubname`, `account_pubname.startsWith`, `account_pubname.endsWith`, `account_pubname.contains`, `name`, `name.startsWith`, `name.endsWith`, `name.contains`, `order_by`, `direction`, `page_token`, `page_size`

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

## GET /organizations/{organization_id}/profile

Get organization profile

operationId: `Organizations_getProfile`

**Response** 200 → `result`

- `business_address`: string **required**
- `business_email`: string **required**
- `business_name`: string **required**
- `business_phone`: string **required**
- `external_metadata`: string **required**

## PUT /organizations/{organization_id}/profile

Modify organization profile.

operationId: `Organizations_modifyProfile`

**Request** (application/json)

- `business_address`: string **required**
- `business_email`: string **required**
- `business_name`: string **required**
- `business_phone`: string **required**
- `external_metadata`: string **required**
