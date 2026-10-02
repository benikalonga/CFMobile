# Email Sending suppressions

13 endpoints.

## GET /accounts/{account_id}/email/sending/suppression

List account email suppressions

operationId: `get_publicListSuppressionSending` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## POST /accounts/{account_id}/email/sending/suppression

Create account email suppression

operationId: `post_publicNewSuppressionSending`

**Request** (application/json)

- `email`: string **required**
- `expires_at`: string

**Response** 200 → `result`

- `id`: string **required**

## DELETE /accounts/{account_id}/email/sending/suppression/{suppression_id}

Delete account email suppression

operationId: `delete_publicDeleteSuppressionSending`

**Response** 200 → `result`

- `success`: boolean **required**

## GET /accounts/{account_id}/email/sending/suppression/{suppression_id}

Get account email suppression

operationId: `get_publicGetSuppressionSending`

**Response** 200 → `result`

- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## GET /accounts/{account_id}/email/sending/suppressions

List account Email Sending suppressions

operationId: `get_publicListSendingSuppressions` · query: `per_page`, `cursor`, `email`, `reason`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**

## POST /accounts/{account_id}/email/sending/suppressions

Create account Email Sending suppression

operationId: `post_publicCreateSendingSuppression`

**Request** (application/json)

- `email`: string **required**
- `expires_at`: string
- `note`: string

**Response** 200 → `result`

- `id`: string **required**

## DELETE /accounts/{account_id}/email/sending/suppressions/{suppression_id}

Delete account Email Sending suppression

operationId: `delete_publicDeleteSendingSuppression`

**Response** 200 → `result`

- `id`: string **required**

## GET /accounts/{account_id}/email/sending/suppressions/{suppression_id}

Get account Email Sending suppression

operationId: `get_publicGetSendingSuppression`

**Response** 200 → `result`

- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**

## POST /accounts/{account_id}/email/sending/suppressions/bulk

Bulk import account Email Sending suppressions

operationId: `post_publicBulkCreateSendingSuppressions`

**Request** (application/json)

- `items`: object[] **required**
  [array of]
  - `email`: string **required**
  - `expires_at`: string
  - `note`: string

**Response** 200 → `result`

- `deduplicated`: integer **required**
- `errors`: integer **required**
- `invalid`: integer **required**
- `items`: object[] **required**
  [array of]
  - `email`: string
  - `error`: string
  - `id`: string
  - `index`: integer **required**
  - `status`: string **required** enum: `processed`, `invalid`, `error`, `skipped`
- `processed`: integer **required**
- `skipped`: integer **required**
- `total`: integer **required**

## GET /zones/{zone_id}/email/sending/suppression

List zone email suppressions

operationId: `get_publicListSuppressionZoneSending` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## POST /zones/{zone_id}/email/sending/suppression

Create zone email suppression

operationId: `post_publicNewSuppressionZoneSending`

**Request** (application/json)

- `email`: string **required**
- `expires_at`: string

**Response** 200 → `result`

- `id`: string **required**

## DELETE /zones/{zone_id}/email/sending/suppression/{suppression_id}

Delete zone email suppression

operationId: `delete_publicDeleteSuppressionZoneSending`

**Response** 200 → `result`

- `success`: boolean **required**

## GET /zones/{zone_id}/email/sending/suppression/{suppression_id}

Get zone email suppression

operationId: `get_publicGetSuppressionZoneSending`

**Response** 200 → `result`

- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]
