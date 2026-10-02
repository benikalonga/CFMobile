# Account Resource Groups

5 endpoints.

## GET /accounts/{account_id}/iam/resource_groups

List Resource Groups

operationId: `account-resource-group-list` · query: `id`, `name`

**Response** 200 → `result`

[array of]
- `id`: string **required** — Identifier of the resource group.
- `meta`: object — Attributes associated to the resource group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the resource group.
- `scope`: object **required** — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)

## POST /accounts/{account_id}/iam/resource_groups

Create Resource Group

operationId: `account-resource-group-create`

**Request** (application/json)

- `name`: string **required** — Name of the resource group
- `scope`: object **required** — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context. The number of Scope objects should not be zero.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)

**Response** 200 → `result`

- `id`: string **required** — Identifier of the resource group.
- `meta`: object — Attributes associated to the resource group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the resource group.
- `scope`: object **required** — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)

## DELETE /accounts/{account_id}/iam/resource_groups/{resource_group_id}

Remove Resource Group

operationId: `account-resource-group-delete`

**Response** 200 → `result`

- `id`: string **required** — Identifier

## GET /accounts/{account_id}/iam/resource_groups/{resource_group_id}

Resource Group Details

operationId: `account-resource-group-details`

**Response** 200 → `result`

- `id`: string **required** — Identifier of the resource group.
- `meta`: object — Attributes associated to the resource group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the resource group.
- `scope`: object **required** — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)

## PUT /accounts/{account_id}/iam/resource_groups/{resource_group_id}

Update Resource Group

operationId: `account-resource-group-update`

**Request** (application/json)

- `name`: string — Name of the resource group
- `scope`: object — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context. The number of Scope objects should not be zero.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)

**Response** 200 → `result`

- `id`: string **required** — Identifier of the resource group.
- `meta`: object — Attributes associated to the resource group.
  - `key`: string
  - `value`: string
- `name`: string — Name of the resource group.
- `scope`: object **required** — A scope is a combination of scope objects which provides additional context.
  - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Account ID etc.)
  - `objects`: object[] **required** — A list of scope objects for additional context.
    [array of]
    - `key`: any **required** — This is a combination of pre-defined resource name and identifier (like Zone ID etc.)
