# MCP Portal

6 endpoints.

## GET /accounts/{account_id}/access/ai-controls/mcp/portals

List MCP Portals

operationId: `mcp-portals-api-list-portals` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

[array of]
- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `created_at`: string
- `created_by`: string
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `modified_at`: string
- `modified_by`: string
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[] **required**
  [array of]
  - `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
    - `auth_mode`: string enum: `dcr`, `manual`
    - `client_secret_version`: number
    - `config`: object
    - `has_client_secret`: boolean
    - `registration_info`: object
  - `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
  - `created_at`: string
  - `created_by`: string
  - `default_disabled`: boolean default: `false`
  - `description`: string
  - `error`: string
  - `error_details`: object
    - `cause`: string — Underlying error message
    - `is_upstream`: boolean — True = MCP server returned an error. False = couldn't reach the server
    - `mcp_code`: number — MCP protocol error code
    - `retryable`: boolean — Whether the error is transient and worth retrying
    - `status_code`: number — HTTP status code from the server
  - `hostname`: string **required**
  - `id`: string **required** — server id
  - `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
  - `last_successful_sync`: string
  - `last_synced`: string
  - `modified_at`: string
  - `modified_by`: string
  - `name`: string **required**
  - `on_behalf`: boolean default: `true`
  - `prompts`: object[] **required**
    [array]
  - `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
  - `server_id`: string **required** — server id
  - `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
  - `tools`: object[] **required**
    [array]
  - `updated_prompts`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string
  - `updated_tools`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string

## POST /accounts/{account_id}/access/ai-controls/mcp/portals

Create a new MCP Portal

operationId: `mcp-portals-api-create-portals`

**Request** (application/json)

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[]
  [array of]
  - `default_disabled`: boolean default: `false`
  - `on_behalf`: boolean default: `true`
  - `server_id`: string **required** — server id
  - `updated_prompts`: object[]
    [array of]
    - `alias`: string
    - `description`: string
    - `enabled`: boolean
    - `name`: string **required**
  - `updated_tools`: object[]
    [array of]
    - `alias`: string
    - `description`: string
    - `enabled`: boolean
    - `name`: string **required**

**Response** 201 → `result`

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `created_at`: string
- `created_by`: string
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `modified_at`: string
- `modified_by`: string
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[] **required**
  [array of]
  - `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
    - `auth_mode`: string enum: `dcr`, `manual`
    - `client_secret_version`: number
    - `config`: object
    - `has_client_secret`: boolean
    - `registration_info`: object
  - `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
  - `created_at`: string
  - `created_by`: string
  - `default_disabled`: boolean default: `false`
  - `description`: string
  - `error`: string
  - `error_details`: object
    - `cause`: string — Underlying error message
    - `is_upstream`: boolean — True = MCP server returned an error. False = couldn't reach the server
    - `mcp_code`: number — MCP protocol error code
    - `retryable`: boolean — Whether the error is transient and worth retrying
    - `status_code`: number — HTTP status code from the server
  - `hostname`: string **required**
  - `id`: string **required** — server id
  - `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
  - `last_successful_sync`: string
  - `last_synced`: string
  - `modified_at`: string
  - `modified_by`: string
  - `name`: string **required**
  - `on_behalf`: boolean default: `true`
  - `prompts`: object[] **required**
    [array]
  - `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
  - `server_id`: string **required** — server id
  - `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
  - `tools`: object[] **required**
    [array]
  - `updated_prompts`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string
  - `updated_tools`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string

## DELETE /accounts/{account_id}/access/ai-controls/mcp/portals/{id}

Delete a MCP Portal

operationId: `mcp-portals-api-delete-portals`

**Response** 200 → `result`

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `created_at`: string
- `created_by`: string
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `modified_at`: string
- `modified_by`: string
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway

## GET /accounts/{account_id}/access/ai-controls/mcp/portals/{id}

Read details of an MCP Portal

operationId: `mcp-portals-api-fetch-gateways`

**Response** 200 → `result`

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `created_at`: string
- `created_by`: string
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `modified_at`: string
- `modified_by`: string
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[] **required**
  [array of]
  - `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
    - `auth_mode`: string enum: `dcr`, `manual`
    - `client_secret_version`: number
    - `config`: object
    - `has_client_secret`: boolean
    - `registration_info`: object
  - `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
  - `created_at`: string
  - `created_by`: string
  - `default_disabled`: boolean default: `false`
  - `description`: string
  - `error`: string
  - `error_details`: object
    - `cause`: string — Underlying error message
    - `is_upstream`: boolean — True = MCP server returned an error. False = couldn't reach the server
    - `mcp_code`: number — MCP protocol error code
    - `retryable`: boolean — Whether the error is transient and worth retrying
    - `status_code`: number — HTTP status code from the server
  - `hostname`: string **required**
  - `id`: string **required** — server id
  - `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
  - `last_successful_sync`: string
  - `last_synced`: string
  - `modified_at`: string
  - `modified_by`: string
  - `name`: string **required**
  - `on_behalf`: boolean default: `true`
  - `prompts`: object[] **required**
    [array]
  - `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
  - `server_id`: string **required** — server id
  - `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
  - `tools`: object[] **required**
    [array]
  - `updated_prompts`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string
  - `updated_tools`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string

## PUT /accounts/{account_id}/access/ai-controls/mcp/portals/{id}

Update a MCP Portal

operationId: `mcp-portals-api-update-portals`

**Request** (application/json)

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `description`: string
- `hostname`: string
- `name`: string
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[]
  [array of]
  - `default_disabled`: boolean default: `false`
  - `on_behalf`: boolean default: `true`
  - `server_id`: string **required** — server id
  - `updated_prompts`: object[]
    [array of]
    - `alias`: string
    - `description`: string
    - `enabled`: boolean
    - `name`: string **required**
  - `updated_tools`: object[]
    [array of]
    - `alias`: string
    - `description`: string
    - `enabled`: boolean
    - `name`: string **required**

**Response** 200 → `result`

- `allow_code_mode`: boolean default: `true` — Allow remote code execution in Dynamic Workers (beta)
- `created_at`: string
- `created_by`: string
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — portal id
- `modified_at`: string
- `modified_by`: string
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound MCP traffic through Zero Trust Secure Web Gateway
- `servers`: object[] **required**
  [array of]
  - `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
    - `auth_mode`: string enum: `dcr`, `manual`
    - `client_secret_version`: number
    - `config`: object
    - `has_client_secret`: boolean
    - `registration_info`: object
  - `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
  - `created_at`: string
  - `created_by`: string
  - `default_disabled`: boolean default: `false`
  - `description`: string
  - `error`: string
  - `error_details`: object
    - `cause`: string — Underlying error message
    - `is_upstream`: boolean — True = MCP server returned an error. False = couldn't reach the server
    - `mcp_code`: number — MCP protocol error code
    - `retryable`: boolean — Whether the error is transient and worth retrying
    - `status_code`: number — HTTP status code from the server
  - `hostname`: string **required**
  - `id`: string **required** — server id
  - `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
  - `last_successful_sync`: string
  - `last_synced`: string
  - `modified_at`: string
  - `modified_by`: string
  - `name`: string **required**
  - `on_behalf`: boolean default: `true`
  - `prompts`: object[] **required**
    [array]
  - `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
  - `server_id`: string **required** — server id
  - `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
  - `tools`: object[] **required**
    [array]
  - `updated_prompts`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string
  - `updated_tools`: object[]
    [array of]
    - `enabled`: boolean
    - `name`: string **required**
    - `portal_alias`: string
    - `portal_description`: string
    - `server_alias`: string
    - `server_description`: string

## GET /accounts/{account_id}/access/ai-controls/mcp/portals/{portal_id}/servers/{server_id}/effective-redirect-uri

Resolve the OAuth redirect_uri the admin must register at the upstream

operationId: `mcp-portals-api-effective-redirect-uri`

**Response** 200 → `result`

- `redirect_uri`: string **required**
- `source`: string **required** enum: `per_portal`, `shared_mcp22`
