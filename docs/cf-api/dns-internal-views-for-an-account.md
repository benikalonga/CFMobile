# DNS Internal Views for an Account

5 endpoints.

## GET /accounts/{account_id}/dns_settings/views

List Internal DNS Views

operationId: `dns-views-for-an-account-list-internal-dns-views` · query: `name`, `name.exact`, `name.contains`, `name.startswith`, `name.endswith`, `zone_id`, `zone_name`, `match`, `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]
- `id`: string **required** — Identifier.

## POST /accounts/{account_id}/dns_settings/views

Create Internal DNS View

operationId: `dns-views-for-an-account-create-internal-dns-views`

**Request** (application/json)

- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]

**Response** 200 → `result`

- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]
- `id`: string **required** — Identifier.

## DELETE /accounts/{account_id}/dns_settings/views/{view_id}

Delete Internal DNS View

operationId: `dns-views-for-an-account-delete-internal-dns-view`

**Response** 200 → `result`

- `id`: string — Identifier.

## GET /accounts/{account_id}/dns_settings/views/{view_id}

DNS Internal View Details

operationId: `dns-views-for-an-account-get-internal-dns-view`

**Response** 200 → `result`

- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]
- `id`: string **required** — Identifier.

## PATCH /accounts/{account_id}/dns_settings/views/{view_id}

Update Internal DNS View

operationId: `dns-views-for-an-account-update-internal-dns-view`

**Request** (application/json)

- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]

**Response** 200 → `result`

- `created_time`: string — When the view was created.
- `modified_time`: string — When the view was last modified.
- `name`: string — The name of the view.
- `zones`: string[] — The list of zones linked to this view.
  [array]
- `id`: string **required** — Identifier.
