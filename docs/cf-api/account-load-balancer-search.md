# Account Load Balancer Search

1 endpoints.

## GET /accounts/{account_id}/load_balancers/search

Search Resources

operationId: `account-load-balancer-search-search-resources` · query: `query`, `references`, `page`, `per_page`

**Response** 200 → `result`

- `resources`: object[] — A list of resources matching the search query.
  [array of]
  - `reference_type`: string enum: `referral`, `referrer` — When listed as a reference, the type (direction) of the reference.
  - `references`: object[] — A list of references to (referrer) or from (referral) this resource.
    [array]
  - `resource_id`: string
  - `resource_name`: string — The human-identifiable name of the resource.
  - `resource_type`: string enum: `load_balancer`, `monitor`, `pool` — The type of the resource.
