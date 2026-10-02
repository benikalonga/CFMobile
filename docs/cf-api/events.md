# Events

1 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/graph

Query graph neighborhood from R2 Data Catalog

operationId: `get_EventGraph` · query: `seeds`, `direction`, `hydration`, `limit`, `max_nodes`, `relationshipTypes`, `datasetIds`, `cursor`, `expand`

**Response** 200 → `result`

- `edges`: object[] **required**
  [array of]
  - `id`: string **required** — Deterministic composite edge id (source→target:relationshipType)
  - `relationshipType`: string **required**
  - `source`: string **required** — Compact id of the source node (type:uuid)
  - `sourceId`: string **required**
  - `sourceType`: string **required**
  - `target`: string **required** — Compact id of the target node (type:uuid)
  - `targetId`: string **required**
  - `targetType`: string **required**
- `node`: object **required** — Focal node object (legacy single-seed). Null when unavailable.
- `nodes`: object[] **required**
  [array]
