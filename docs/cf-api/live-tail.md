# Live Tail

2 endpoints.

## POST /accounts/{account_id}/workers/observability/telemetry/live-tail

Prepare live tail

operationId: `telemetry.live-tail.post`

**Request** (application/json)

- `filterCombination`: string enum: `and`, `or`, `AND`, `OR` default: `and` — Set a flag to describe how to combine the filters on the query.
- `filters`: object[] default: `` — Apply filters to the query. Supports nested groups via kind: 'group'.
  [array of]
  - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
  - `filters`: object[] **required**
    [array of]
    - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
    - `filters`: object[] **required**
    - `kind`: string **required** enum: `group`
  - `kind`: string **required** enum: `group`
  - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR` — Logical operator for combining child filters: 'and' (all must match) or 'or' (any must match).
  - `filters`: object[] **required** — Child filter nodes. Each can be a leaf filter or another nested group.
    [array of]
    - `filterCombination`: string **required** enum: `and`, `or`, `AND`, `OR`
    - `filters`: object[] **required**
    - `kind`: string **required** enum: `group`
  - `kind`: string **required** enum: `group` — Discriminator indicating this is a nested filter group.
- `scriptId`: string

**Response** 200 → `result`

- `wsUrl`: string **required** — WebSocket URL clients connect to in order to stream live tail events.

## POST /accounts/{account_id}/workers/observability/telemetry/live-tail/heartbeat

Live tail heartbeat

operationId: `telemetry.live-tail.heartbeat.get`

**Request** (application/json)

- `scriptId`: string

**Response** 200 → `result`

object
