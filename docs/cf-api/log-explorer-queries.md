# Log Explorer Queries

4 endpoints.

## GET /accounts/{account_id}/logs/explorer/query/sql

Run a log query

operationId: `accounts-logs-explorer-query-get` · query: `query`

**Response** 200 → `result`

[array of]
object

## POST /accounts/{account_id}/logs/explorer/query/sql

Run a log query

operationId: `accounts-logs-explorer-query-post`

**Request** (text/plain)

string

**Response** 200 → `result`

[array of]
object

## GET /zones/{zone_id}/logs/explorer/query/sql

Run a log query

operationId: `zones-logs-explorer-query-get` · query: `query`

**Response** 200 → `result`

[array of]
object

## POST /zones/{zone_id}/logs/explorer/query/sql

Run a log query

operationId: `zones-logs-explorer-query-post`

**Request** (text/plain)

string

**Response** 200 → `result`

[array of]
object
