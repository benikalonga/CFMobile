# Zone-Level Access groups

5 endpoints.

## GET /zones/{zone_id}/access/groups

List Access groups

operationId: `zone-level-access-groups-list-access-groups`

**Response** 200 → `result`

[array of]
- `created_at`: string
- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `id`: string — UUID.
- `include`: object[] — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `updated_at`: string

## POST /zones/{zone_id}/access/groups

Create an Access group

operationId: `zone-level-access-groups-create-an-access-group`

**Request** (application/json)

- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `include`: object[] **required** — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string **required** — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.

**Response** 201 → `result`

- `created_at`: string
- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `id`: string — UUID.
- `include`: object[] — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `updated_at`: string

## DELETE /zones/{zone_id}/access/groups/{group_id}

Delete an Access group

operationId: `zone-level-access-groups-delete-an-access-group`

**Response** 202 → `result`

- `id`: string — UUID.

## GET /zones/{zone_id}/access/groups/{group_id}

Get an Access group

operationId: `zone-level-access-groups-get-an-access-group`

**Response** 200 → `result`

- `created_at`: string
- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `id`: string — UUID.
- `include`: object[] — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `updated_at`: string

## PUT /zones/{zone_id}/access/groups/{group_id}

Update an Access group

operationId: `zone-level-access-groups-update-an-access-group`

**Request** (application/json)

- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `include`: object[] **required** — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string **required** — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.

**Response** 200 → `result`

- `created_at`: string
- `exclude`: object[] — Rules evaluated with a NOT logical operator. To match a policy, a user cannot meet any of the Exclude rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `id`: string — UUID.
- `include`: object[] — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `name`: string — The name of the Access group.
- `require`: object[] — Rules evaluated with an AND logical operator. To match a policy, a user must meet all of the Require rules.
  [array of]
  - `group`: object **required**
    - `id`: string **required** — The ID of a previously created Access group.
- `updated_at`: string
