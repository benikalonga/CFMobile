# Radar Search

1 endpoints.

## GET /radar/search/global

Search for locations, ASes, reports, and more

operationId: `radar-get-search-global` · query: `limit`, `limitPerGroup`, `query`, `include`, `exclude`, `format`

**Response** 200 → `result`

- `search`: object[] **required**
  [array of]
  - `code`: string **required**
  - `name`: string **required**
  - `type`: string **required**
