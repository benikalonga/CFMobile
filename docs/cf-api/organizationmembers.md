# OrganizationMembers

5 endpoints.

## GET /organizations/{organization_id}/members

List organization members

operationId: `Members_list` · query: `status`, `user.email`, `user.email.contains`, `user.email.startsWith`, `user.email.endsWith`, `page_token`, `page_size`

**Response** 200 → `result`

[array of]
- `create_time`: string **required**
- `id`: string **required** — Organization Member ID
- `meta`: object **required**
- `status`: string **required** enum: `active`, `pending`, `rejected`, `canceled`
- `update_time`: string **required**
- `user`: object **required**
  - `email`: string **required**
  - `id`: string **required**
  - `name`: string **required**
  - `two_factor_authentication_enabled`: boolean **required**

## POST /organizations/{organization_id}/members

Create organization member

operationId: `Members_create`

**Request** (application/json)

- `member`: object **required**
  - `status`: string enum: `active`, `canceled`
  - `user`: object **required**
    - `email`: string **required**

**Response** 200 → `result`

- `create_time`: string **required**
- `id`: string **required** — Organization Member ID
- `meta`: object **required**
- `status`: string **required** enum: `active`, `pending`, `rejected`, `canceled`
- `update_time`: string **required**
- `user`: object **required**
  - `email`: string **required**
  - `id`: string **required**
  - `name`: string **required**
  - `two_factor_authentication_enabled`: boolean **required**

## POST /organizations/{organization_id}/members:batchCreate

Batch create organization members

operationId: `Members_batchCreate`

**Request** (application/json)

- `members`: object[] **required**
  [array of]
  - `status`: string enum: `active`, `canceled`
  - `user`: object **required**
    - `email`: string **required**

**Response** 200 → `result`

[array of]
- `create_time`: string **required**
- `id`: string **required** — Organization Member ID
- `meta`: object **required**
- `status`: string **required** enum: `active`, `pending`, `rejected`, `canceled`
- `update_time`: string **required**
- `user`: object **required**
  - `email`: string **required**
  - `id`: string **required**
  - `name`: string **required**
  - `two_factor_authentication_enabled`: boolean **required**

## DELETE /organizations/{organization_id}/members/{member_id}

Delete organization member

operationId: `Members_delete`

**Request** (application/json)

- `member_id`: string **required** — Organization Member ID

## GET /organizations/{organization_id}/members/{member_id}

Get organization member

operationId: `Members_retrieve`

**Response** 200 → `result`

- `create_time`: string **required**
- `id`: string **required** — Organization Member ID
- `meta`: object **required**
- `status`: string **required** enum: `active`, `pending`, `rejected`, `canceled`
- `update_time`: string **required**
- `user`: object **required**
  - `email`: string **required**
  - `id`: string **required**
  - `name`: string **required**
  - `two_factor_authentication_enabled`: boolean **required**
