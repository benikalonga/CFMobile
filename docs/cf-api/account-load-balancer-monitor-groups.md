# Account Load Balancer Monitor Groups

7 endpoints.

## GET /accounts/{account_id}/load_balancers/monitor_groups

List Monitor Groups

operationId: `account-load-balancer-monitor-groups-list-monitor-groups`

**Response** 200 → `result`

[array of]
- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## POST /accounts/{account_id}/load_balancers/monitor_groups

Create Monitor Group

operationId: `account-load-balancer-monitor-groups-create-monitor-group`

**Request** (application/json)

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

**Response** 200 → `result`

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## DELETE /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}

Delete Monitor Group

operationId: `account-load-balancer-monitor-groups-delete-monitor-group`

**Response** 200 → `result`

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## GET /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}

Monitor Group Details

operationId: `account-load-balancer-monitor-groups-monitor-group-details`

**Response** 200 → `result`

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## PATCH /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}

Patch Monitor Group

operationId: `account-load-balancer-monitor-groups-patch-monitor-group`

**Request** (application/json)

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

**Response** 200 → `result`

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## PUT /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}

Update Monitor Group

operationId: `account-load-balancer-monitor-groups-update-monitor-group`

**Request** (application/json)

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

**Response** 200 → `result`

- `created_on`: string — The timestamp of when the monitor group was created
- `description`: string **required** — A short description of the monitor group
- `id`: any **required**
- `members`: object[] **required** — List of monitors in this group
  [array of]
  - `created_at`: string — The timestamp of when the monitor was added to the group
  - `enabled`: boolean **required** — Whether this monitor is enabled in the group
  - `monitor_id`: string **required** — The ID of the Monitor to use for checking the health of origins within this pool.
  - `monitoring_only`: boolean **required** — Whether this monitor is used for monitoring only (does not affect pool health)
  - `must_be_healthy`: boolean **required** — Whether this monitor must be healthy for the pool to be considered healthy
  - `updated_at`: string — The timestamp of when the monitor group member was last updated
- `modified_on`: string — The timestamp of when the monitor group was last updated

## GET /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}/references

List Monitor Group References

operationId: `account-load-balancer-monitor-groups-list-monitor-group-references`

**Response** 200 → `result`

[array of]
- `reference_type`: string enum: `*`, `referral`, `referrer`
- `resource_id`: string
- `resource_name`: string
- `resource_type`: string
