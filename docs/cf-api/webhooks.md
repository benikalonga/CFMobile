# Webhooks

7 endpoints.

## GET /accounts/{account_id}/realtime/kit/{app_id}/webhooks

Fetch all webhooks details

operationId: `getAllWebhooks`

**Response** 200 → `result`

- `data`: object[] **required**
  [array of]
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## POST /accounts/{account_id}/realtime/kit/{app_id}/webhooks

Add a webhook

operationId: `addWebhook`

**Request** (application/json)

- `enabled`: boolean default: `true` — Set whether or not the webhook should be active when created
- `events`: string[] **required** — Events that this webhook will get triggered by
  [array]
- `name`: string **required** — Name of the webhook
- `url`: string **required** — URL this webhook will send events to

**Response** 201 → `result`

- `data`: object **required**
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## DELETE /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}

Delete a webhook

operationId: `deleteWebhook`

**Response** 200 → `result`

- `data`: object **required**
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## GET /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}

Fetch details of a webhook

operationId: `getWebhook`

**Response** 200 → `result`

- `data`: object **required**
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## PATCH /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}

Edit a webhook

operationId: `editWebhook`

**Request** (application/json)

- `enabled`: boolean default: `true`
- `events`: string[] — Events that the webhook will get triggered by
  [array]
- `name`: string — Name of the webhook
- `url`: string — URL the webhook will send events to

**Response** 200 → `result`

- `data`: object **required**
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## PUT /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}

Replace a webhook

operationId: `replaceWebhook`

**Request** (application/json)

- `enabled`: boolean default: `true` — Set whether or not the webhook should be active when created
- `events`: string[] **required** — Events that this webhook will get triggered by
  [array]
- `name`: string **required** — Name of the webhook
- `url`: string **required** — URL this webhook will send events to

**Response** 200 → `result`

- `data`: object **required**
  - `created_at`: string **required** — Timestamp when this webhook was created
  - `enabled`: boolean **required** — Set to true if the webhook is active
  - `events`: string[] **required** — Events this webhook will send updates for
    [array]
  - `id`: string **required** — ID of the webhook
  - `name`: string **required** — Name of the webhook
  - `updated_at`: string **required** — Timestamp when this webhook was updated
  - `url`: string **required** — URL the webhook will send events to
- `success`: boolean **required**

## GET /accounts/{account_id}/realtime/kit/{app_id}/webhooks/all

Fetch all supported webhook events

operationId: `getAllWebhookEvents`

**Response** 200 → `result`

- `data`: string[] **required**
  [array]
- `success`: boolean **required**
