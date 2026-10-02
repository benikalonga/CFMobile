# Table Maintenance Configuration

2 endpoints.

## GET /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs

Get table maintenance configuration

operationId: `get-table-maintenance-config`

**Response** 200 → `result`

- `maintenance_config`: object **required** — Configures maintenance for the table.
  - `compaction`: object — Configures compaction settings for table optimization.
    - `state`: string **required** enum: `enabled`, `disabled` — Specifies the state of maintenance operations.
    - `target_size_mb`: string **required** enum: `64`, `128`, `256`, `512` — Sets the target file size for compaction in megabytes. Defaults to "128".
  - `snapshot_expiration`: object — Configures snapshot expiration settings.
    - `max_snapshot_age`: string **required** — Specifies the maximum age for snapshots. The system deletes snapshots older than this age.
    - `min_snapshots_to_keep`: integer **required** — Specifies the minimum number of snapshots to retain. Defaults to 100.
    - `state`: string **required** enum: `enabled`, `disabled` — Specifies the state of maintenance operations.

## POST /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs

Update table maintenance configuration

operationId: `update-table-maintenance-config`

**Request** (application/json)

- `compaction`: object — Updates compaction configuration (all fields optional).
  - `state`: any — Updates the state optionally.
  - `target_size_mb`: any — Updates the target file size optionally.
- `snapshot_expiration`: object — Updates snapshot expiration configuration (all fields optional).
  - `max_snapshot_age`: string — Updates the maximum age for snapshots optionally.
  - `min_snapshots_to_keep`: integer — Updates the minimum number of snapshots to retain optionally.
  - `state`: any — Updates the state optionally.

**Response** 200 → `result`

- `compaction`: object — Configures compaction settings for table optimization.
  - `state`: string **required** enum: `enabled`, `disabled` — Specifies the state of maintenance operations.
  - `target_size_mb`: string **required** enum: `64`, `128`, `256`, `512` — Sets the target file size for compaction in megabytes. Defaults to "128".
- `snapshot_expiration`: object — Configures snapshot expiration settings.
  - `max_snapshot_age`: string **required** — Specifies the maximum age for snapshots. The system deletes snapshots older than this age.
  - `min_snapshots_to_keep`: integer **required** — Specifies the minimum number of snapshots to retain. Defaults to 100.
  - `state`: string **required** enum: `enabled`, `disabled` — Specifies the state of maintenance operations.
