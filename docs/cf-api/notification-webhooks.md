# Notification webhooks

5 endpoints.

## GET /accounts/{account_id}/alerting/v3/destinations/webhooks

List webhooks

operationId: `notification-webhooks-list-webhooks`

**Response** 200 → `result`

[array of]
- `created_at`: string — Timestamp of when the webhook destination was created.
- `id`: string — The unique identifier of a webhook
- `last_failure`: string — Timestamp of the last time an attempt to dispatch a notification to this webhook failed.
- `last_success`: string — Timestamp of the last time Cloudflare was able to successfully dispatch a notification using this webhook.
- `name`: string — The name of the webhook destination. This will be included in the request body when you receive a webhook notification.
- `secret`: string — Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supporte
- `type`: string enum: `datadog`, `discord`, `feishu`, `gchat`, `generic`, `opsgenie`, `slack`, `splunk` — Type of webhook endpoint.
- `url`: string — The POST endpoint to call when dispatching a notification.

## POST /accounts/{account_id}/alerting/v3/destinations/webhooks

Create a webhook

operationId: `notification-webhooks-create-a-webhook`

**Request** (application/json)

- `name`: string **required** — The name of the webhook destination. This will be included in the request body when you receive a webhook notification.
- `secret`: string — Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supporte
- `url`: string **required** — The POST endpoint to call when dispatching a notification.

**Response** 201 → `result`

- `id`: string — UUID

## DELETE /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}

Delete a webhook

operationId: `notification-webhooks-delete-a-webhook`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer
  - `message`: string **required**
- `messages`: object[] **required**
  [array of]
  - `code`: integer
  - `message`: string **required**
- `success`: boolean **required** enum: `true` — Whether the API call was successful

## GET /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}

Get a webhook

operationId: `notification-webhooks-get-a-webhook`

**Response** 200 → `result`

- `created_at`: string — Timestamp of when the webhook destination was created.
- `id`: string — The unique identifier of a webhook
- `last_failure`: string — Timestamp of the last time an attempt to dispatch a notification to this webhook failed.
- `last_success`: string — Timestamp of the last time Cloudflare was able to successfully dispatch a notification using this webhook.
- `name`: string — The name of the webhook destination. This will be included in the request body when you receive a webhook notification.
- `secret`: string — Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supporte
- `type`: string enum: `datadog`, `discord`, `feishu`, `gchat`, `generic`, `opsgenie`, `slack`, `splunk` — Type of webhook endpoint.
- `url`: string — The POST endpoint to call when dispatching a notification.

## PUT /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}

Update a webhook

operationId: `notification-webhooks-update-a-webhook`

**Request** (application/json)

- `name`: string **required** — The name of the webhook destination. This will be included in the request body when you receive a webhook notification.
- `secret`: string — Optional secret that will be passed in the `cf-webhook-auth` header when dispatching generic webhook notifications or formatted for supporte
- `url`: string **required** — The POST endpoint to call when dispatching a notification.

**Response** 200 → `result`

- `id`: string — UUID
