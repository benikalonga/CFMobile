# domain_search

9 endpoints.

## GET /accounts/{account_id}/brand-protection/matches

Read matches for string queries by ID

operationId: `getAccountsAccountIdBrandProtectionMatches` · query: `id`, `offset`, `limit`, `include_domain_id`

**Response** 200 → `result`

- `matches`: object[]
  [array]
- `total`: integer

## GET /accounts/{account_id}/brand-protection/matches/download

Download matches for string queries by ID

operationId: `getAccountsAccountIdBrandProtectionMatchesDownload` · query: `id`, `offset`, `limit`, `include_domain_id`

**Response** 200 → `result`

- `matches`: object[]
  [array]
- `total`: integer

## DELETE /accounts/{account_id}/brand-protection/queries

Delete saved string queries by ID

operationId: `deleteAccountsAccountIdBrandProtectionQueries` · query: `id`, `tag`, `scan`

## GET /accounts/{account_id}/brand-protection/queries

Read string queries by ID

operationId: `getAccountsAccountIdBrandProtectionQueries`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/queries

Update saved string queries by ID

operationId: `patchAccountsAccountIdBrandProtectionQueries`

**Request** (application/json)

- `id`: integer — The query ID to update (required when updating tag or scan)
- `scan`: boolean — Whether to scan matches
- `string_matches`: object[] — Updated pattern match constraints. When provided, replaces the existing string_matches.
  [array of]
  - `max_edit_distance`: number — Maximum Levenshtein edit distance for fuzzy matching
  - `pattern`: string **required** — The pattern to match against
- `tag`: string — Query tag. Required as identifier when updating string_matches.

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## POST /accounts/{account_id}/brand-protection/queries

Create new saved string queries

operationId: `postAccountsAccountIdBrandProtectionQueries` · query: `id`, `tag`, `scan`

**Request** (application/json)

- `max_time`: string
- `min_time`: string
- `scan`: boolean
- `string_matches`: any
- `tag`: string

## POST /accounts/{account_id}/brand-protection/queries/bulk

Create new saved string queries in bulk

operationId: `postAccountsAccountIdBrandProtectionQueriesBulk`

**Request** (application/json)

- `queries`: object[]
  [array]

## POST /accounts/{account_id}/brand-protection/search

Create new string queries

operationId: `postAccountsAccountIdBrandProtectionSearch`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/total-queries

Read the total number of saved string queries

operationId: `getAccountsAccountIdBrandProtectionTotalQueries`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name
