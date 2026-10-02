# Attacker

1 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/attackers

Lists attackers across multiple datasets

operationId: `get_AttackerList` · query: `datasetIds`

**Response** 200 → `result`

- `items`: object **required**
  - `type`: string **required**
- `type`: string **required**
