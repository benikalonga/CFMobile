# Account Roles

2 endpoints.

## GET /accounts/{account_id}/roles

List Roles

operationId: `account-roles-list-roles` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `description`: string **required** — Description of role's permissions.
- `id`: string **required** — Role identifier tag.
- `name`: string **required** — Role name.
- `permissions`: any **required**

## GET /accounts/{account_id}/roles/{role_id}

Role Details

operationId: `account-roles-role-details`

**Response** 200 → `result`

- `description`: string **required** — Description of role's permissions.
- `id`: string **required** — Role identifier tag.
- `name`: string **required** — Role name.
- `permissions`: any **required**
