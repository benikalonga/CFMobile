# Email Routing suppressions

8 endpoints.

## GET /accounts/{account_id}/email/routing/suppression

List account email suppressions

operationId: `get_publicListSuppressionRouting` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## POST /accounts/{account_id}/email/routing/suppression

Create account email suppression

operationId: `post_publicNewSuppressionRouting`

**Request** (application/json)

- `email`: string **required**
- `expires_at`: string

**Response** 200 → `result`

- `id`: string **required**

## DELETE /accounts/{account_id}/email/routing/suppression/{suppression_id}

Delete account email suppression

operationId: `delete_publicDeleteSuppressionRouting`

**Response** 200 → `result`

- `success`: boolean **required**

## GET /accounts/{account_id}/email/routing/suppression/{suppression_id}

Get account email suppression

operationId: `get_publicGetSuppressionRouting`

**Response** 200 → `result`

- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## GET /zones/{zone_id}/email/routing/suppression

List zone email suppressions

operationId: `get_publicListSuppressionZoneRouting` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]

## POST /zones/{zone_id}/email/routing/suppression

Create zone email suppression

operationId: `post_publicNewSuppressionZoneRouting`

**Request** (application/json)

- `email`: string **required**
- `expires_at`: string

**Response** 200 → `result`

- `id`: string **required**

## DELETE /zones/{zone_id}/email/routing/suppression/{suppression_id}

Delete zone email suppression

operationId: `delete_publicDeleteSuppressionZoneRouting`

**Response** 200 → `result`

- `success`: boolean **required**

## GET /zones/{zone_id}/email/routing/suppression/{suppression_id}

Get zone email suppression

operationId: `get_publicGetSuppressionZoneRouting`

**Response** 200 → `result`

- `created_at`: string **required**
- `email`: string **required**
- `expires_at`: string **required**
- `id`: string **required**
- `reason`: string **required**
- `zones`: string[] default: ``
  [array]
