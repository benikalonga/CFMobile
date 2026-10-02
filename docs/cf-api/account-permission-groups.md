# Account Permission Groups

2 endpoints.

## GET /accounts/{account_id}/iam/permission_groups

List Account Permission Groups

operationId: `account-permission-group-list` · query: `id`, `name`, `label`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `id`: string **required** — Identifier of the permission group.
- `meta`: object — Attributes associated to the permission group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the permission group.

## GET /accounts/{account_id}/iam/permission_groups/{permission_group_id}

Permission Group Details

operationId: `account-permission-group-details`

**Response** 200 → `result`

- `id`: string **required** — Identifier of the permission group.
- `meta`: object — Attributes associated to the permission group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the permission group.
