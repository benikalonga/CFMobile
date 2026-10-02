# DLP Integration Entries

3 endpoints.

## POST /accounts/{account_id}/dlp/entries/integration

Create integration entry

operationId: `dlp-entries-create-integration-entry`

**Request** (application/json)

- `enabled`: boolean **required**
- `entry_id`: string **required**
- `profile_id`: string — This field is not used as the owning profile.

**Response** 200 → `result`

- `created_at`: string **required**
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/entries/integration/{entry_id}

Delete integration entry

operationId: `dlp-entries-delete-integration-entry`

**Response** 200 → `result`

object

## PUT /accounts/{account_id}/dlp/entries/integration/{entry_id}

Update integration entry

operationId: `dlp-entries-update-integration-entry`

**Request** (application/json)

- `enabled`: boolean **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `enabled`: boolean **required**
- `id`: string **required**
- `name`: string **required**
- `profile_id`: string
- `updated_at`: string **required**
