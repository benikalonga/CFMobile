# Analytics Engine

2 endpoints.

## GET /accounts/{account_id}/analytics_engine/sql

Execute an Analytics Engine SQL query via query parameter

operationId: `analytics-engine-sql-query-get` · query: `query`

**Response** 200 → `result`

- `data`: object[] **required** — Array of result rows. Each row is an object with keys corresponding to the selected columns.
  [array]
- `meta`: object[] **required** — Column metadata describing the name and type of each column in the result set.
  [array of]
  - `name`: string **required** — Column name.
  - `type`: string **required** — Column data type.
- `rows`: integer **required** — Total number of rows in the result set.

## POST /accounts/{account_id}/analytics_engine/sql

Execute an Analytics Engine SQL query via request body

operationId: `analytics-engine-sql-query-post`

**Request** (text/plain)

string

**Response** 200 → `result`

- `data`: object[] **required** — Array of result rows. Each row is an object with keys corresponding to the selected columns.
  [array]
- `meta`: object[] **required** — Column metadata describing the name and type of each column in the result set.
  [array of]
  - `name`: string **required** — Column name.
  - `type`: string **required** — Column data type.
- `rows`: integer **required** — Total number of rows in the result set.
