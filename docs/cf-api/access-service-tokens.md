# Access service tokens

7 endpoints.

## GET /accounts/{account_id}/access/service_tokens

List service tokens

operationId: `access-service-tokens-list-service-tokens` · query: `name`, `search`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## POST /accounts/{account_id}/access/service_tokens

Create a service token

operationId: `access-service-tokens-create-a-service-token`

**Request** (application/json)

- `client_secret_version`: number default: `1` — A version number identifying the current `client_secret` associated with the service token. Incrementing it triggers a rotation; the previou
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `name`: string **required** — The name of the service token.
- `previous_client_secret_expires_at`: string — The expiration of the previous `client_secret`. This can be modified at any point after a rotation. For example, you may extend it further i

**Response** 201 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `client_secret`: string — The Client Secret for the service token. Access will check for this value in the `CF-Access-Client-Secret` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `id`: string — The ID of the service token.
- `name`: string — The name of the service token.
- `updated_at`: any

## DELETE /accounts/{account_id}/access/service_tokens/{service_token_id}

Delete a service token

operationId: `access-service-tokens-delete-a-service-token`

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## GET /accounts/{account_id}/access/service_tokens/{service_token_id}

Get a service token

operationId: `access-service-tokens-get-a-service-token`

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## PUT /accounts/{account_id}/access/service_tokens/{service_token_id}

Update a service token

operationId: `access-service-tokens-update-a-service-token`

**Request** (application/json)

- `client_secret_version`: number default: `1` — A version number identifying the current `client_secret` associated with the service token. Incrementing it triggers a rotation; the previou
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `name`: string — The name of the service token.
- `previous_client_secret_expires_at`: string — The expiration of the previous `client_secret`. This can be modified at any point after a rotation. For example, you may extend it further i

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## POST /accounts/{account_id}/access/service_tokens/{service_token_id}/refresh

Refresh a service token

operationId: `access-service-tokens-refresh-a-service-token`

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## POST /accounts/{account_id}/access/service_tokens/{service_token_id}/rotate

Rotate a service token

operationId: `access-service-tokens-rotate-a-service-token`

**Request** (application/json)

- `previous_client_secret_expires_at`: string — The expiration of the previous `client_secret`. If not provided, it defaults to the current timestamp in order to immediately expire the pre

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `client_secret`: string — The Client Secret for the service token. Access will check for this value in the `CF-Access-Client-Secret` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `id`: string — The ID of the service token.
- `name`: string — The name of the service token.
- `updated_at`: any
