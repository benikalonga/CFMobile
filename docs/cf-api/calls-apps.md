# Calls Apps

5 endpoints.

## GET /accounts/{account_id}/calls/apps

List apps

operationId: `calls-apps-list`

**Response** 200 → `result`

[array of]
- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## POST /accounts/{account_id}/calls/apps

Create a new app

operationId: `calls-apps-create-a-new-app`

**Request** (application/json)

- `name`: string default: `` — A short description of Calls app, not shown to end users.

**Response** 201 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `secret`: string — Bearer token
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## DELETE /accounts/{account_id}/calls/apps/{app_id}

Delete app

operationId: `calls-apps-delete-app`

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## GET /accounts/{account_id}/calls/apps/{app_id}

Retrieve app details

operationId: `calls-apps-retrieve-app-details`

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## PUT /accounts/{account_id}/calls/apps/{app_id}

Edit app details

operationId: `calls-apps-update-app-details`

**Request** (application/json)

- `name`: string default: `` — A short description of Calls app, not shown to end users.

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.
