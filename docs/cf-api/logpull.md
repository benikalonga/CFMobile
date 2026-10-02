# Logpull

2 endpoints.

## GET /accounts/{account_id}/logs/list

List log files

operationId: `logpull-list-log-files` · query: `start`, `end`, `bucket`, `prefix`, `limit`

**Response** 200 → `result`

- `keys`: string[] — Array of object keys containing logs that match the query.
  [array]

## GET /accounts/{account_id}/logs/retrieve

Retrieve logs

operationId: `logpull-retrieve-logs` · query: `start`, `end`, `bucket`, `prefix`
