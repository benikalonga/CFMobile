# Builds

5 endpoints.

## GET /accounts/{account_id}/builds/builds

Get builds by version IDs

operationId: `getBuildsByVersionIds` · query: `version_ids`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/builds/{build_uuid}

Get build by UUID

operationId: `getBuildByUuid`

**Response** 200 → `result`

object

## PUT /accounts/{account_id}/builds/builds/{build_uuid}/cancel

Cancel build

operationId: `cancelBuildByUuid`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/builds/{build_uuid}/logs

Get build logs

operationId: `getBuildLogs` · query: `cursor`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/builds/latest

Get latest builds by script IDs

operationId: `getLatestBuildsByScripts` · query: `external_script_ids`

**Response** 200 → `result`

object
