# Triggers

5 endpoints.

## POST /accounts/{account_id}/builds/triggers

Create trigger

operationId: `createTrigger`

**Request** (application/json)

- `branch_excludes`: string[] **required**
  [array]
- `branch_includes`: string[] **required**
  [array]
- `build_caching_enabled`: boolean default: `false`
- `build_command`: string **required**
- `build_token_uuid`: string **required** — Build token UUID.
- `deploy_command`: string **required**
- `external_script_id`: string **required** — System-generated worker script tag.
- `path_excludes`: string[] **required**
  [array]
- `path_includes`: string[] **required** default: `*`
  [array]
- `repo_connection_uuid`: string **required** — Repository connection UUID.
- `root_directory`: string **required** — Root directory path.
- `trigger_name`: string **required**

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}

Delete trigger

operationId: `deleteTrigger`

**Response** 200 → `result`

object

## PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}

Update trigger

operationId: `updateTrigger`

**Request** (application/json)

- `branch_excludes`: string[]
  [array]
- `branch_includes`: string[]
  [array]
- `build_caching_enabled`: boolean default: `false`
- `build_command`: string
- `build_token_uuid`: string — Build token UUID.
- `deploy_command`: string
- `path_excludes`: string[]
  [array]
- `path_includes`: string[] default: `*`
  [array]
- `root_directory`: string — Root directory path.
- `trigger_name`: string

**Response** 200 → `result`

object

## POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/builds

Create manual build

operationId: `createManualBuild`

**Request** (application/json)

(one of 2 variants; showing the first)

**Response** 200 → `result`

object

## POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache

Purge build cache

operationId: `purgeBuildCache`

**Response** 200 → `result`

object
