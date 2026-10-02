# Notification Silences

5 endpoints.

## GET /accounts/{account_id}/alerting/v3/silences

List Silences

operationId: `notification-silences-list-silences`

**Response** 200 → `result`

[array of]
- `created_at`: string — When the silence was created.
- `end_time`: string — When the silence ends.
- `id`: string — Silence ID
- `policy_id`: string — The unique identifier of a notification policy
- `start_time`: string — When the silence starts.
- `updated_at`: string — When the silence was modified.

## POST /accounts/{account_id}/alerting/v3/silences

Create Silences

operationId: `notification-silences-create-silences`

**Request** (application/json)

[array of]
- `end_time`: string — When the silence ends.
- `policy_id`: string — The unique identifier of a notification policy
- `start_time`: string — When the silence starts.

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

## PUT /accounts/{account_id}/alerting/v3/silences

Update Silences

operationId: `notification-silences-update-silences`

**Request** (application/json)

[array of]
- `end_time`: string — When the silence ends.
- `id`: string — Silence ID
- `start_time`: string — When the silence starts.

**Response** 200 → `result`

[array of]
- `created_at`: string — When the silence was created.
- `end_time`: string — When the silence ends.
- `id`: string — Silence ID
- `policy_id`: string — The unique identifier of a notification policy
- `start_time`: string — When the silence starts.
- `updated_at`: string — When the silence was modified.

## DELETE /accounts/{account_id}/alerting/v3/silences/{silence_id}

Delete Silence

operationId: `notification-silences-delete-silences`

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

## GET /accounts/{account_id}/alerting/v3/silences/{silence_id}

Get Silence

operationId: `notification-silences-get-silence`

**Response** 200 → `result`

- `created_at`: string — When the silence was created.
- `end_time`: string — When the silence ends.
- `id`: string — Silence ID
- `policy_id`: string — The unique identifier of a notification policy
- `start_time`: string — When the silence starts.
- `updated_at`: string — When the silence was modified.
