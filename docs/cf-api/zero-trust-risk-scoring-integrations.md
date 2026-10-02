# Zero Trust Risk Scoring Integrations

6 endpoints.

## GET /accounts/{account_id}/zt_risk_scoring/integrations

List all risk score integrations for the account.

operationId: `dlp-zt-risk-score-integration-list`

**Response** 200 → `result`

[array of]
- `account_tag`: string **required** — The Cloudflare account tag.
- `active`: boolean **required** — Whether this integration is enabled and should export changes in risk score.
- `created_at`: string **required** — When the integration was created in RFC3339 format.
- `id`: string **required** — The id of the integration, a UUIDv4.
- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string **required** — A reference ID defined by the client.
- `tenant_url`: string **required** — The base URL for the tenant. E.g. "https://tenant.okta.com".
- `well_known_url`: string **required** — The URL for the Shared Signals Framework configuration, e.g. "/.well-known/sse-configuration/{integration_uuid}/". https://openid.net/specs/

## POST /accounts/{account_id}/zt_risk_scoring/integrations

Create new risk score integration.

operationId: `dlp-zt-risk-score-integration-create`

**Request** (application/json)

- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string — A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
- `tenant_url`: string **required** — The base url of the tenant, e.g. "https://tenant.okta.com".

**Response** 200 → `result`

- `account_tag`: string **required** — The Cloudflare account tag.
- `active`: boolean **required** — Whether this integration is enabled and should export changes in risk score.
- `created_at`: string **required** — When the integration was created in RFC3339 format.
- `id`: string **required** — The id of the integration, a UUIDv4.
- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string **required** — A reference ID defined by the client.
- `tenant_url`: string **required** — The base URL for the tenant. E.g. "https://tenant.okta.com".
- `well_known_url`: string **required** — The URL for the Shared Signals Framework configuration, e.g. "/.well-known/sse-configuration/{integration_uuid}/". https://openid.net/specs/

## DELETE /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}

Delete a risk score integration.

operationId: `dlp-zt-risk-score-integration-delete`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}

Get risk score integration by id.

operationId: `dlp-zt-risk-score-integration-get`

**Response** 200 → `result`

- `account_tag`: string **required** — The Cloudflare account tag.
- `active`: boolean **required** — Whether this integration is enabled and should export changes in risk score.
- `created_at`: string **required** — When the integration was created in RFC3339 format.
- `id`: string **required** — The id of the integration, a UUIDv4.
- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string **required** — A reference ID defined by the client.
- `tenant_url`: string **required** — The base URL for the tenant. E.g. "https://tenant.okta.com".
- `well_known_url`: string **required** — The URL for the Shared Signals Framework configuration, e.g. "/.well-known/sse-configuration/{integration_uuid}/". https://openid.net/specs/

## PUT /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}

Update a risk score integration.

operationId: `dlp-zt-risk-score-integration-update`

**Request** (application/json)

- `active`: boolean **required** — Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.
- `reference_id`: string — A reference id that can be supplied by the client. Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
- `tenant_url`: string **required** — The base url of the tenant, e.g. "https://tenant.okta.com".

**Response** 200 → `result`

- `account_tag`: string **required** — The Cloudflare account tag.
- `active`: boolean **required** — Whether this integration is enabled and should export changes in risk score.
- `created_at`: string **required** — When the integration was created in RFC3339 format.
- `id`: string **required** — The id of the integration, a UUIDv4.
- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string **required** — A reference ID defined by the client.
- `tenant_url`: string **required** — The base URL for the tenant. E.g. "https://tenant.okta.com".
- `well_known_url`: string **required** — The URL for the Shared Signals Framework configuration, e.g. "/.well-known/sse-configuration/{integration_uuid}/". https://openid.net/specs/

## GET /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}

Get risk score integration by reference id.

operationId: `dlp-zt-risk-score-integration-get-by-reference-id`

**Response** 200 → `result`

- `account_tag`: string **required** — The Cloudflare account tag.
- `active`: boolean **required** — Whether this integration is enabled and should export changes in risk score.
- `created_at`: string **required** — When the integration was created in RFC3339 format.
- `id`: string **required** — The id of the integration, a UUIDv4.
- `integration_type`: string **required** enum: `Okta`
- `reference_id`: string **required** — A reference ID defined by the client.
- `tenant_url`: string **required** — The base URL for the tenant. E.g. "https://tenant.okta.com".
- `well_known_url`: string **required** — The URL for the Shared Signals Framework configuration, e.g. "/.well-known/sse-configuration/{integration_uuid}/". https://openid.net/specs/
