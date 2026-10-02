# Access custom pages

5 endpoints.

## GET /accounts/{account_id}/access/custom_pages

List custom pages

operationId: `access-custom-pages-list-custom-pages` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any

## POST /accounts/{account_id}/access/custom_pages

Create a custom page

operationId: `access-custom-pages-create-a-custom-page`

**Request** (application/json)

- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `custom_html`: string **required** — Custom page HTML.
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any

**Response** 201 → `result`

- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any

## DELETE /accounts/{account_id}/access/custom_pages/{custom_page_id}

Delete a custom page

operationId: `access-custom-pages-delete-a-custom-page`

**Response** 202 → `result`

- `id`: string — UUID.

## GET /accounts/{account_id}/access/custom_pages/{custom_page_id}

Get a custom page

operationId: `access-custom-pages-get-a-custom-page`

**Response** 200 → `result`

- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `custom_html`: string **required** — Custom page HTML.
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any

## PUT /accounts/{account_id}/access/custom_pages/{custom_page_id}

Update a custom page

operationId: `access-custom-pages-update-a-custom-page`

**Request** (application/json)

- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `custom_html`: string **required** — Custom page HTML.
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any

**Response** 200 → `result`

- `app_count`: integer — Number of apps the custom page is assigned to.
- `created_at`: any
- `name`: string **required** — Custom page name.
- `type`: string **required** enum: `identity_denied`, `forbidden` — Custom page type.
- `uid`: string — UUID.
- `updated_at`: any
