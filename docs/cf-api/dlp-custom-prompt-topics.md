# DLP Custom Prompt Topics

5 endpoints.

## GET /accounts/{account_id}/dlp/custom_prompt_topics

List custom prompt topics

operationId: `dlp-custom-prompt-topics-list`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `topic`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/custom_prompt_topics

Create custom prompt topic

operationId: `dlp-custom-prompt-topics-create`

**Request** (application/json)

- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `profile_id`: string
- `topic`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `topic`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}

Delete custom prompt topic

operationId: `dlp-custom-prompt-topics-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}

Get custom prompt topic

operationId: `dlp-custom-prompt-topics-get`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `topic`: string **required**
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/custom_prompt_topics/{entry_id}

Update custom prompt topic

operationId: `dlp-custom-prompt-topics-update`

**Request** (application/json)

- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `topic`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `topic`: string **required**
- `updated_at`: string **required**
