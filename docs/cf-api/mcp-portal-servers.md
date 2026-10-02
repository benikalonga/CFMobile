# MCP Portal Servers

6 endpoints.

## GET /accounts/{account_id}/access/ai-controls/mcp/servers

List MCP Servers

operationId: `mcp-portals-api-list-servers` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

[array of]
- `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
  - `auth_mode`: string enum: `dcr`, `manual`
  - `client_secret_version`: number
  - `config`: object
    - `authorization_endpoint`: string
    - `issuer`: string
    - `resource`: string
    - `revocation_endpoint`: string
    - `token_endpoint`: string
  - `has_client_secret`: boolean
  - `registration_info`: object
    - `client_id`: string
    - `redirect_uris`: string[]
    - `scope`: string
    - `token_endpoint_auth_method`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `created_at`: string
- `created_by`: string
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
- `prompts`: object[] **required**
  [array]
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
- `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
- `tools`: object[] **required**
  [array]
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

## POST /accounts/{account_id}/access/ai-controls/mcp/servers

Create a new MCP Server

operationId: `mcp-portals-api-create-servers`

**Request** (application/json)

- `auth_credentials`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `client_secret`: string — Pre-registered OAuth client_secret. Write-only - accepted on create/update when auth_credentials.auth_mode is 'manual'. Stored AES-GCM-encry
- `description`: string
- `hostname`: string **required**
- `id`: string **required** — server id
- `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
- `name`: string **required**
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
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

- `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
  - `auth_mode`: string enum: `dcr`, `manual`
  - `client_secret_version`: number
  - `config`: object
    - `authorization_endpoint`: string
    - `issuer`: string
    - `resource`: string
    - `revocation_endpoint`: string
    - `token_endpoint`: string
  - `has_client_secret`: boolean
  - `registration_info`: object
    - `client_id`: string
    - `redirect_uris`: string[]
    - `scope`: string
    - `token_endpoint_auth_method`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `created_at`: string
- `created_by`: string
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
- `prompts`: object[] **required**
  [array]
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
- `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
- `tools`: object[] **required**
  [array]
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

## DELETE /accounts/{account_id}/access/ai-controls/mcp/servers/{id}

Delete a MCP Server

operationId: `mcp-portals-api-delete-servers`

**Response** 200 → `result`

- `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
  - `auth_mode`: string enum: `dcr`, `manual`
  - `client_secret_version`: number
  - `config`: object
    - `authorization_endpoint`: string
    - `issuer`: string
    - `resource`: string
    - `revocation_endpoint`: string
    - `token_endpoint`: string
  - `has_client_secret`: boolean
  - `registration_info`: object
    - `client_id`: string
    - `redirect_uris`: string[]
    - `scope`: string
    - `token_endpoint_auth_method`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `created_at`: string
- `created_by`: string
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
- `prompts`: object[] **required**
  [array]
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
- `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
- `tools`: object[] **required**
  [array]
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

## GET /accounts/{account_id}/access/ai-controls/mcp/servers/{id}

Read the details of a MCP Server

operationId: `mcp-portals-api-fetch-servers`

**Response** 200 → `result`

- `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
  - `auth_mode`: string enum: `dcr`, `manual`
  - `client_secret_version`: number
  - `config`: object
    - `authorization_endpoint`: string
    - `issuer`: string
    - `resource`: string
    - `revocation_endpoint`: string
    - `token_endpoint`: string
  - `has_client_secret`: boolean
  - `registration_info`: object
    - `client_id`: string
    - `redirect_uris`: string[]
    - `scope`: string
    - `token_endpoint_auth_method`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `created_at`: string
- `created_by`: string
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
- `prompts`: object[] **required**
  [array]
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
- `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
- `tools`: object[] **required**
  [array]
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

## PUT /accounts/{account_id}/access/ai-controls/mcp/servers/{id}

Update a MCP Server

operationId: `mcp-portals-api-update-servers`

**Request** (application/json)

- `auth_credentials`: string
- `client_secret`: string — Pre-registered OAuth client_secret. Write-only - accepted on create/update when auth_credentials.auth_mode is 'manual'. Stored AES-GCM-encry
- `description`: string
- `is_shared_oauth_callback_enabled`: boolean default: `false` — When true, the gateway worker uses the shared Cloudflare-owned OAuth callback endpoint as the redirect_uri for upstream on-behalf OAuth, ins
- `name`: string
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
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

- `auth_config_summary`: object — Safe subset of auth_credentials surfaced to the dashboard. Includes auth_mode (dcr|manual), has_client_secret, client_secret_version, and th
  - `auth_mode`: string enum: `dcr`, `manual`
  - `client_secret_version`: number
  - `config`: object
    - `authorization_endpoint`: string
    - `issuer`: string
    - `resource`: string
    - `revocation_endpoint`: string
    - `token_endpoint`: string
  - `has_client_secret`: boolean
  - `registration_info`: object
    - `client_id`: string
    - `redirect_uris`: string[]
    - `scope`: string
    - `token_endpoint_auth_method`: string
- `auth_type`: string **required** enum: `oauth`, `bearer`, `unauthenticated`
- `created_at`: string
- `created_by`: string
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
- `prompts`: object[] **required**
  [array]
- `secure_web_gateway`: boolean default: `false` — Route outbound traffic to this MCP server through Zero Trust Secure Web Gateway
- `status`: string enum: `waiting`, `ready`, `stale`, `error` default: `waiting` — Current sync state of the server
- `tools`: object[] **required**
  [array]
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

## POST /accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync

Sync MCP Server Capabilities

operationId: `mcp-portals-api-sync-server`

**Response** 200 → `result`

- `error`: string
- `error_details`: object
  - `cause`: string — Underlying error message
  - `is_upstream`: boolean — True = MCP server returned an error. False = couldn't reach the server
  - `mcp_code`: number — MCP protocol error code
  - `retryable`: boolean — Whether the error is transient and worth retrying
  - `status_code`: number — HTTP status code from the server
- `status`: string enum: `waiting`, `ready`, `stale`, `error`
