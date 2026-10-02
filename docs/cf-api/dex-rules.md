# DEX Rules

5 endpoints.

## GET /accounts/{account_id}/dex/rules

List DEX Rules

operationId: `list-dex-rules` · query: `page`, `per_page`, `sort_order`, `sort_by`, `name`

**Response** 200 → `result`

- `rules`: object[]
  [array of]
  - `created_at`: string **required**
  - `description`: string
  - `id`: any **required**
  - `match`: string **required**
  - `name`: string **required**
  - `targeted_tests`: object[]
    [array of]
    - `data`: any **required**
    - `enabled`: boolean **required**
    - `name`: string **required**
    - `test_id`: string **required**
  - `updated_at`: string

## POST /accounts/{account_id}/dex/rules

Create a DEX Rule

operationId: `create-dex-rule`

**Request** (application/json)

- `description`: string
- `match`: string **required** — The wirefilter expression to match.
- `name`: string **required** — The name of the Rule.

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: any **required**
- `match`: string **required**
- `name`: string **required**
- `targeted_tests`: object[]
  [array of]
  - `data`: any **required**
  - `enabled`: boolean **required**
  - `name`: string **required**
  - `test_id`: string **required**
- `updated_at`: string

## DELETE /accounts/{account_id}/dex/rules/{rule_id}

Delete a DEX Rule

operationId: `delete-dex-rule`

**Response** 200 → `result`

boolean

## GET /accounts/{account_id}/dex/rules/{rule_id}

Get DEX Rule

operationId: `get-dex-rule`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: any **required**
- `match`: string **required**
- `name`: string **required**
- `targeted_tests`: object[]
  [array of]
  - `data`: any **required**
  - `enabled`: boolean **required**
  - `name`: string **required**
  - `test_id`: string **required**
- `updated_at`: string

## PATCH /accounts/{account_id}/dex/rules/{rule_id}

Update a DEX Rule

operationId: `update-dex-rule`

**Request** (application/json)

- `description`: string
- `match`: string — The wirefilter expression to match.
- `name`: string — The name of the Rule.

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string
- `id`: any **required**
- `match`: string **required**
- `name`: string **required**
- `targeted_tests`: object[]
  [array of]
  - `data`: any **required**
  - `enabled`: boolean **required**
  - `name`: string **required**
  - `test_id`: string **required**
- `updated_at`: string
