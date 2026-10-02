# Notification destinations with PagerDuty

4 endpoints.

## DELETE /accounts/{account_id}/alerting/v3/destinations/pagerduty

Delete PagerDuty Services

operationId: `notification-destinations-with-pager-duty-delete-pager-duty-services`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer
  - `message`: string **required**
- `messages`: object[] **required**
  [array of]
  - `code`: integer
  - `message`: string **required**
- `success`: boolean **required** enum: `true` — Whether the API call was successful

## GET /accounts/{account_id}/alerting/v3/destinations/pagerduty

List PagerDuty services

operationId: `notification-destinations-with-pager-duty-list-pager-duty-services`

**Response** 200 → `result`

[array of]
- `id`: string — UUID
- `name`: string — The name of the pagerduty service.

## POST /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect

Create PagerDuty integration token

operationId: `notification-destinations-with-pager-duty-connect-pager-duty`

**Response** 201 → `result`

- `id`: string — token in form of UUID

## GET /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}

Connect PagerDuty

operationId: `notification-destinations-with-pager-duty-connect-pager-duty-token`

**Response** 200 → `result`

- `id`: string — UUID
