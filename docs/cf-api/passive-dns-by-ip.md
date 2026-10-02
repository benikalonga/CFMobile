# Passive DNS by IP

1 endpoints.

## GET /accounts/{account_id}/intel/dns

Get Passive DNS by IP

operationId: `passive-dns-by-ip-get-passive-dns-by-ip` · query: `start_end_params`, `ipv4`, `page`, `per_page`

**Response** 200 → `result`

- `count`: number — Total results returned based on your search parameters.
- `page`: number — Current page within paginated list of results.
- `per_page`: number — Number of results per page of results.
- `reverse_records`: object[] — Reverse DNS look-ups observed during the time period.
  [array of]
  - `first_seen`: string — First seen date of the DNS record during the time period.
  - `hostname`: string — Hostname that the IP was observed resolving to.
  - `last_seen`: string — Last seen date of the DNS record during the time period.
