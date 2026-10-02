# Evaluation

2 endpoints.

## GET /accounts/{account_id}/flagship/apps/{app_id}/evaluate

Evaluate flag

operationId: `flagship_evaluate_flag` · query: `flagKey`, `targetingKey`

**Response** 200 → `result`

- `flagKey`: string **required**
- `reason`: string **required** enum: `TARGETING_MATCH`, `DEFAULT`, `DISABLED`, `SPLIT`
- `value`: any
- `variant`: string **required**

## POST /accounts/{account_id}/flagship/apps/{app_id}/evaluate

Evaluate flag (POST)

operationId: `flagship_evaluate_flag_post`

**Request** (application/json)

- `context`: object default: `[object Object]`
- `flagKey`: string **required**

**Response** 200 → `result`

- `flagKey`: string **required**
- `reason`: string **required** enum: `TARGETING_MATCH`, `DEFAULT`, `DISABLED`, `SPLIT`
- `value`: any
- `variant`: string **required**
