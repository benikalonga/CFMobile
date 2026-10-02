# Deployment Groups

5 endpoints.

## GET /accounts/{account_id}/devices/deployment-groups

List deployment groups

operationId: `list-deployment-groups` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — The RFC3339Nano timestamp when the deployment group was created.
- `id`: string **required** — The ID of the deployment group.
- `name`: string **required** — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Contains a list of policy IDs assigned to this deployment group.
  [array]
- `updated_at`: string **required** — The RFC3339Nano timestamp when the deployment group was last updated.
- `version_config`: object[] **required** — Contains version configurations for different target environments.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.

## POST /accounts/{account_id}/devices/deployment-groups

Create deployment group

operationId: `create-deployment-group`

**Request** (application/json)

- `name`: string **required** — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Contains an optional list of policy IDs assigned to a group.
  [array]
- `version_config`: object[] **required** — Contains at least one version configuration.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the deployment group was created.
- `id`: string **required** — The ID of the deployment group.
- `name`: string **required** — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Contains a list of policy IDs assigned to this deployment group.
  [array]
- `updated_at`: string **required** — The RFC3339Nano timestamp when the deployment group was last updated.
- `version_config`: object[] **required** — Contains version configurations for different target environments.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.

## DELETE /accounts/{account_id}/devices/deployment-groups/{group_id}

Delete deployment group

operationId: `delete-deployment-group`

**Response** 200 → `result`

- `id`: string — The ID of a deleted deployment group.

## GET /accounts/{account_id}/devices/deployment-groups/{group_id}

Get deployment group

operationId: `get-deployment-group`

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the deployment group was created.
- `id`: string **required** — The ID of the deployment group.
- `name`: string **required** — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Contains a list of policy IDs assigned to this deployment group.
  [array]
- `updated_at`: string **required** — The RFC3339Nano timestamp when the deployment group was last updated.
- `version_config`: object[] **required** — Contains version configurations for different target environments.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.

## PATCH /accounts/{account_id}/devices/deployment-groups/{group_id}

Update deployment group

operationId: `update-deployment-group`

**Request** (application/json)

- `name`: string — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Replaces the entire list of policy IDs.
  [array]
- `version_config`: object[] — Replaces the entire version_config array.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the deployment group was created.
- `id`: string **required** — The ID of the deployment group.
- `name`: string **required** — A user-friendly name for the deployment group.
- `policy_ids`: string[] — Contains a list of policy IDs assigned to this deployment group.
  [array]
- `updated_at`: string **required** — The RFC3339Nano timestamp when the deployment group was last updated.
- `version_config`: object[] **required** — Contains version configurations for different target environments.
  [array of]
  - `target_environment`: string **required** — The target environment for the client version (e.g., windows, macos).
  - `version`: string **required** — The specific client version to deploy.
