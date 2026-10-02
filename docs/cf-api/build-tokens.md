# Build Tokens

3 endpoints.

## GET /accounts/{account_id}/builds/tokens

List build tokens

operationId: `listBuildTokens` · query: `page`, `per_page`

**Response** 200 → `result`

object

## POST /accounts/{account_id}/builds/tokens

Create build token

operationId: `createBuildToken`

**Request** (application/json)

- `build_token_name`: string **required**
- `build_token_secret`: string **required**
- `cloudflare_token_id`: string **required**

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/tokens/{build_token_uuid}

Delete build token

operationId: `deleteBuildToken`

**Response** 200 → `result`

object
