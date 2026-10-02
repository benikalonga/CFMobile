# AI Gateway Provider Configs

4 endpoints.

## GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs

List Provider Configs

operationId: `aig-config-list-providers` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `alias`: string **required**
- `default_config`: boolean **required**
- `gateway_id`: string **required** — gateway id
- `id`: string **required**
- `modified_at`: string **required**
- `provider_slug`: string **required**
- `rate_limit`: number
- `rate_limit_period`: number default: `60`
- `secret_id`: string **required**
- `secret_preview`: string **required**

## POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs

Create a new Provider Configs

operationId: `aig-config-create-providers`

**Request** (application/json)

- `alias`: string **required**
- `default_config`: boolean **required**
- `provider_slug`: string **required**
- `rate_limit`: number
- `rate_limit_period`: number default: `60`
- `secret`: string
- `secret_id`: string

**Response** 200 → `result`

- `alias`: string **required**
- `default_config`: boolean **required**
- `gateway_id`: string **required** — gateway id
- `id`: string **required**
- `modified_at`: string **required**
- `provider_slug`: string **required**
- `rate_limit`: number
- `rate_limit_period`: number default: `60`
- `secret_id`: string **required**
- `secret_preview`: string **required**

## DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}

Delete a Provider Configs

operationId: `aig-config-delete-providers`

**Response** 200 → `result`

- `alias`: string **required**
- `default_config`: boolean **required**
- `gateway_id`: string **required** — gateway id
- `id`: string **required**
- `modified_at`: string **required**
- `provider_slug`: string **required**
- `rate_limit`: number
- `rate_limit_period`: number default: `60`
- `secret_id`: string **required**
- `secret_preview`: string **required**

## PUT /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}

Update a Provider Configs

operationId: `aig-config-update-providers`

**Request** (application/json)

- `secret`: string **required**

**Response** 200 → `result`

- `alias`: string **required**
- `default_config`: boolean **required**
- `gateway_id`: string **required** — gateway id
- `id`: string **required**
- `modified_at`: string **required**
- `provider_slug`: string **required**
- `rate_limit`: number
- `rate_limit_period`: number default: `60`
- `secret_id`: string **required**
- `secret_preview`: string **required**
