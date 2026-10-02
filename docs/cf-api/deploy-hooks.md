# Deploy Hooks

6 endpoints.

## GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks

List deploy hooks

operationId: `listDeployHooks`

**Response** 200 → `result`

object

## POST /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks

Create deploy hook

operationId: `createDeployHook`

**Request** (application/json)

- `branch`: string **required** — Git branch name.
- `deploy_hook_name`: string **required** — Deploy hook name (1-58 characters).

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}

Delete deploy hook

operationId: `deleteDeployHook`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}

Get deploy hook

operationId: `getDeployHook`

**Response** 200 → `result`

object

## PUT /accounts/{account_id}/builds/workers/{script_name}/deploy_hooks/{deploy_hook_uuid}

Update deploy hook

operationId: `updateDeployHook`

**Request** (application/json)

- `branch`: string **required** — Git branch name.
- `deploy_hook_name`: string **required** — Deploy hook name (1-58 characters).

**Response** 200 → `result`

object

## POST /workers/builds/deploy_hooks/{deploy_hook_uuid}

Trigger deploy hook

operationId: `triggerDeployHook`

**Response** 200 → `result`

object
