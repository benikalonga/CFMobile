# Worker Deployments

4 endpoints.

## GET /accounts/{account_id}/workers/scripts/{script_name}/deployments

List Deployments

operationId: `worker-deployments-list-deployments`

**Response** 200 → `result`

- `deployments`: object[] **required**
  [array of]
  - `annotations`: object
    - `workers/message`: string — Human-readable message about the deployment. Truncated to 1000 bytes if longer.
    - `workers/triggered_by`: string — Operation that triggered the creation of the deployment.
  - `author_email`: string
  - `created_on`: string **required**
  - `id`: string **required**
  - `source`: string **required**
  - `strategy`: string **required** enum: `percentage`
  - `versions`: object[] **required**
    [array of]
    - `percentage`: number **required**
    - `version_id`: string **required**

## POST /accounts/{account_id}/workers/scripts/{script_name}/deployments

Create Deployment

operationId: `worker-deployments-create-deployment` · query: `force`

**Request** (application/json)

- `annotations`: object
  - `workers/message`: string — Human-readable message about the deployment. Truncated to 1000 bytes if longer.
  - `workers/triggered_by`: string — Operation that triggered the creation of the deployment.
- `author_email`: string
- `created_on`: string **required**
- `id`: string **required**
- `source`: string **required**
- `strategy`: string **required** enum: `percentage`
- `versions`: object[] **required**
  [array of]
  - `percentage`: number **required**
  - `version_id`: string **required**

**Response** 200 → `result`

- `annotations`: object
  - `workers/message`: string — Human-readable message about the deployment. Truncated to 1000 bytes if longer.
  - `workers/triggered_by`: string — Operation that triggered the creation of the deployment.
- `author_email`: string
- `created_on`: string **required**
- `id`: string **required**
- `source`: string **required**
- `strategy`: string **required** enum: `percentage`
- `versions`: object[] **required**
  [array of]
  - `percentage`: number **required**
  - `version_id`: string **required**

## DELETE /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}

Delete Deployment

operationId: `worker-deployments-delete-deployment`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.

## GET /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}

Get Deployment

operationId: `worker-deployments-get-deployment`

**Response** 200 → `result`

- `annotations`: object
  - `workers/message`: string — Human-readable message about the deployment. Truncated to 1000 bytes if longer.
  - `workers/triggered_by`: string — Operation that triggered the creation of the deployment.
- `author_email`: string
- `created_on`: string **required**
- `id`: string **required**
- `source`: string **required**
- `strategy`: string **required** enum: `percentage`
- `versions`: object[] **required**
  [array of]
  - `percentage`: number **required**
  - `version_id`: string **required**
