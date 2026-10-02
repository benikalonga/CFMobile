# Accounts

10 endpoints.

## GET /accounts

List Accounts

operationId: `accounts-list-accounts` · query: `name`, `page`, `per_page`, `direction`

**Response** 200 → `result`

[array of]
- `created_on`: string — Timestamp for the creation of the account
- `id`: string **required** — Identifier
- `managed_by`: object — Parent container details
  - `parent_org_id`: string — ID of the parent Organization, if one exists
  - `parent_org_name`: string — Name of the parent Organization, if one exists
- `name`: string **required** — Account name
- `settings`: object — Account settings
  - `abuse_contact_email`: string — Sets an abuse contact email to notify for abuse reports.
  - `enforce_twofactor`: boolean default: `false` — Indicates whether membership in this account requires that
- `type`: any **required** enum: `standard`, `enterprise`

## POST /accounts

Create an account

operationId: `account-creation`

**Request** (application/json)

- `name`: string **required** — Account name
- `type`: any enum: `standard`, `enterprise`
- `unit`: object — information related to the tenant unit, and optionally, an id of the unit to create the account on. see https://developers.cloudflare.com/te
  - `id`: string — Tenant unit ID

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the account
- `id`: string **required** — Identifier
- `managed_by`: object — Parent container details
  - `parent_org_id`: string — ID of the parent Organization, if one exists
  - `parent_org_name`: string — Name of the parent Organization, if one exists
- `name`: string **required** — Account name
- `settings`: object — Account settings
  - `abuse_contact_email`: string — Sets an abuse contact email to notify for abuse reports.
  - `enforce_twofactor`: boolean default: `false` — Indicates whether membership in this account requires that
- `type`: any **required** enum: `standard`, `enterprise`

## DELETE /accounts/{account_id}

Delete a specific account

operationId: `account-deletion`

**Response** 200 → `result`

- `id`: string **required** — Identifier

## GET /accounts/{account_id}

Account Details

operationId: `accounts-account-details`

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the account
- `id`: string **required** — Identifier
- `managed_by`: object — Parent container details
  - `parent_org_id`: string — ID of the parent Organization, if one exists
  - `parent_org_name`: string — Name of the parent Organization, if one exists
- `name`: string **required** — Account name
- `settings`: object — Account settings
  - `abuse_contact_email`: string — Sets an abuse contact email to notify for abuse reports.
  - `enforce_twofactor`: boolean default: `false` — Indicates whether membership in this account requires that
- `type`: any **required** enum: `standard`, `enterprise`

## PUT /accounts/{account_id}

Update Account

operationId: `accounts-update-account`

**Request** (application/json)

- `created_on`: string — Timestamp for the creation of the account
- `id`: string **required** — Identifier
- `managed_by`: object — Parent container details
  - `parent_org_id`: string — ID of the parent Organization, if one exists
  - `parent_org_name`: string — Name of the parent Organization, if one exists
- `name`: string **required** — Account name
- `settings`: object — Account settings
  - `abuse_contact_email`: string — Sets an abuse contact email to notify for abuse reports.
  - `enforce_twofactor`: boolean default: `false` — Indicates whether membership in this account requires that
- `type`: any **required** enum: `standard`, `enterprise`

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the account
- `id`: string **required** — Identifier
- `managed_by`: object — Parent container details
  - `parent_org_id`: string — ID of the parent Organization, if one exists
  - `parent_org_name`: string — Name of the parent Organization, if one exists
- `name`: string **required** — Account name
- `settings`: object — Account settings
  - `abuse_contact_email`: string — Sets an abuse contact email to notify for abuse reports.
  - `enforce_twofactor`: boolean default: `false` — Indicates whether membership in this account requires that
- `type`: any **required** enum: `standard`, `enterprise`

## POST /accounts/{account_id}/move

Move account

operationId: `Accounts_moveAccounts`

**Request** (application/json)

- `destination_organization_id`: string **required**

**Response** 200 → `result`

- `account_id`: string **required**
- `destination_organization_id`: string **required**
- `source_organization_id`: string **required**

## GET /accounts/{account_id}/organizations

List account organizations

operationId: `Accounts_listAccountOrganizations`

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

## GET /accounts/{account_id}/profile

Get account profile

operationId: `Accounts_getAccountProfile`

**Response** 200 → `result`

- `business_address`: string **required**
- `business_email`: string **required**
- `business_name`: string **required**
- `business_phone`: string **required**
- `external_metadata`: string **required**

## PUT /accounts/{account_id}/profile

Modify account profile

operationId: `Accounts_modifyAccountProfile`

**Request** (application/json)

- `business_address`: string **required**
- `business_email`: string **required**
- `business_name`: string **required**
- `business_phone`: string **required**
- `external_metadata`: string **required**

## POST /accounts/move

Batch move accounts

operationId: `Accounts_batchMoveAccounts`

**Request** (application/json)

- `account_ids`: string[] **required** — Move these accounts to the destination organization.
  [array]
- `destination_organization_id`: string **required** — Move accounts to this organization ID.

**Response** 200 → `result`

- `statuses`: object **required**
  - `message`: string
  - `moved`: boolean **required**
  - `tag`: string **required**
