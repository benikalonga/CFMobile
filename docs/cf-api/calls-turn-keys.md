# Calls TURN Keys

5 endpoints.

## GET /accounts/{account_id}/calls/turn_keys

List TURN Keys

operationId: `calls-turn-key-list`

**Response** 200 → `result`

[array of]
- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## POST /accounts/{account_id}/calls/turn_keys

Create a new TURN key

operationId: `calls-turn-key-create`

**Request** (application/json)

- `name`: string default: `` — A short description of a TURN key, not shown to end users.

**Response** 201 → `result`

- `created`: string — The date and time the item was created.
- `key`: string — Bearer token
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of a TURN key, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## DELETE /accounts/{account_id}/calls/turn_keys/{key_id}

Delete TURN key

operationId: `calls-delete-turn-key`

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## GET /accounts/{account_id}/calls/turn_keys/{key_id}

Retrieve TURN key details

operationId: `calls-retrieve-turn-key-details`

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.

## PUT /accounts/{account_id}/calls/turn_keys/{key_id}

Edit TURN key details

operationId: `calls-update-turn-key`

**Request** (application/json)

- `name`: string default: `` — A short description of a TURN key, not shown to end users.

**Response** 200 → `result`

- `created`: string — The date and time the item was created.
- `modified`: string — The date and time the item was last modified.
- `name`: string default: `` — A short description of Calls app, not shown to end users.
- `uid`: string — A Cloudflare-generated unique identifier for a item.
