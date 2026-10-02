# Integrations

7 endpoints.

## GET /accounts/{account_id}/one/integrations

List integrations

operationId: `list_integrations_v2` · query: `application`, `direction`, `dlp_enabled`, `order`, `page`, `page_size`, `search`, `status`, `use_cases`

## POST /accounts/{account_id}/one/integrations

Create integration

operationId: `create_integration_v2`

**Response** 201 → `result`

- `application`: object **required**
- `auth_method`: object **required** — The integration's authentication method.
- `authorization_link`: object **required** — Authorization link for the integration.
  - `components`: object **required**
  - `link`: string **required**
- `created`: string **required** — When the integration was created.
- `credentials_expiry`: string **required** — Credentials expiry time.
- `dlp_profiles`: string[] **required** — DLP Profiles enabled for the integration.
  [array]
- `health_details`: object[] **required** — Health details with remediation hints.
  [array]
- `id`: string **required** — Integration ID.
- `is_paused`: boolean **required** — Whether the user paused the integration.
- `last_hydrated`: string **required** — Last time the integration was hydrated.
- `name`: string **required** — Name of the integration.
- `organization_id`: integer **required** — Organization ID.
- `status`: string **required** — Integration status.
- `updated`: string **required** — When the integration was last updated.
- `use_cases`: object[] **required** — Use cases enabled for the integration.
  [array]

## DELETE /accounts/{account_id}/one/integrations/{id}

Delete integration

operationId: `delete_integration_v2`

## GET /accounts/{account_id}/one/integrations/{id}

Get integration details

operationId: `get_integration_v2`

**Response** 200 → `result`

- `application`: object **required**
- `auth_method`: object **required** — The integration's authentication method.
- `authorization_link`: object **required** — Authorization link for the integration.
  - `components`: object **required**
  - `link`: string **required**
- `created`: string **required** — When the integration was created.
- `credentials_expiry`: string **required** — Credentials expiry time.
- `dlp_profiles`: string[] **required** — DLP Profiles enabled for the integration.
  [array]
- `health_details`: object[] **required** — Health details with remediation hints.
  [array]
- `id`: string **required** — Integration ID.
- `is_paused`: boolean **required** — Whether the user paused the integration.
- `last_hydrated`: string **required** — Last time the integration was hydrated.
- `name`: string **required** — Name of the integration.
- `organization_id`: integer **required** — Organization ID.
- `status`: string **required** — Integration status.
- `updated`: string **required** — When the integration was last updated.
- `use_cases`: object[] **required** — Use cases enabled for the integration.
  [array]

## PATCH /accounts/{account_id}/one/integrations/{id}

Update integration

operationId: `update_integration_v2`

**Response** 200 → `result`

- `application`: object **required**
- `auth_method`: object **required** — The integration's authentication method.
- `authorization_link`: object **required** — Authorization link for the integration.
  - `components`: object **required**
  - `link`: string **required**
- `created`: string **required** — When the integration was created.
- `credentials_expiry`: string **required** — Credentials expiry time.
- `dlp_profiles`: string[] **required** — DLP Profiles enabled for the integration.
  [array]
- `health_details`: object[] **required** — Health details with remediation hints.
  [array]
- `id`: string **required** — Integration ID.
- `is_paused`: boolean **required** — Whether the user paused the integration.
- `last_hydrated`: string **required** — Last time the integration was hydrated.
- `name`: string **required** — Name of the integration.
- `organization_id`: integer **required** — Organization ID.
- `status`: string **required** — Integration status.
- `updated`: string **required** — When the integration was last updated.
- `use_cases`: object[] **required** — Use cases enabled for the integration.
  [array]

## POST /accounts/{account_id}/one/integrations/{id}/pause

Pause integration

operationId: `pause_integration_v2`

**Response** 200 → `result`

- `application`: object **required**
- `auth_method`: object **required** — The integration's authentication method.
- `authorization_link`: object **required** — Authorization link for the integration.
  - `components`: object **required**
  - `link`: string **required**
- `created`: string **required** — When the integration was created.
- `credentials_expiry`: string **required** — Credentials expiry time.
- `dlp_profiles`: string[] **required** — DLP Profiles enabled for the integration.
  [array]
- `health_details`: object[] **required** — Health details with remediation hints.
  [array]
- `id`: string **required** — Integration ID.
- `is_paused`: boolean **required** — Whether the user paused the integration.
- `last_hydrated`: string **required** — Last time the integration was hydrated.
- `name`: string **required** — Name of the integration.
- `organization_id`: integer **required** — Organization ID.
- `status`: string **required** — Integration status.
- `updated`: string **required** — When the integration was last updated.
- `use_cases`: object[] **required** — Use cases enabled for the integration.
  [array]

## POST /accounts/{account_id}/one/integrations/{id}/resume

Resume integration

operationId: `resume_integration_v2`

**Response** 200 → `result`

- `application`: object **required**
- `auth_method`: object **required** — The integration's authentication method.
- `authorization_link`: object **required** — Authorization link for the integration.
  - `components`: object **required**
  - `link`: string **required**
- `created`: string **required** — When the integration was created.
- `credentials_expiry`: string **required** — Credentials expiry time.
- `dlp_profiles`: string[] **required** — DLP Profiles enabled for the integration.
  [array]
- `health_details`: object[] **required** — Health details with remediation hints.
  [array]
- `id`: string **required** — Integration ID.
- `is_paused`: boolean **required** — Whether the user paused the integration.
- `last_hydrated`: string **required** — Last time the integration was hydrated.
- `name`: string **required** — Name of the integration.
- `organization_id`: integer **required** — Organization ID.
- `status`: string **required** — Integration status.
- `updated`: string **required** — When the integration was last updated.
- `use_cases`: object[] **required** — Use cases enabled for the integration.
  [array]
