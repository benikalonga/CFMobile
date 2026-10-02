# Prefix Bindings

5 endpoints.

## GET /accounts/{account_id}/dls/regional_services/prefix_bindings

List DLS prefix bindings for an account

operationId: `publicListPrefixBindings` · query: `cursor`, `per_page`

**Response** 200 → `result`

[array of]
- `cidr`: string **required** — The CIDR that is bound.
- `id`: string **required** — The ID of the binding.
- `prefix_id`: string **required** — The ID of the parent prefix.
- `region_key`: string **required** — The region key used for the binding.

## POST /accounts/{account_id}/dls/regional_services/prefix_bindings

Create a DLS prefix binding

operationId: `publicCreatePrefixBinding`

**Request** (application/json)

- `cidr`: string **required** — IP prefix in CIDR notation to bind.
- `prefix_id`: string **required** — The ID of the parent IP prefix that contains the CIDR.
- `region_key`: string **required** — Region key from managed regions (e.g., "us", "eu").

**Response** 201 → `result`

- `cidr`: string **required** — The CIDR that is bound.
- `id`: string **required** — The ID of the binding.
- `prefix_id`: string **required** — The ID of the parent prefix.
- `region_key`: string **required** — The region key used for the binding.

## DELETE /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}

Delete a DLS prefix binding

operationId: `publicDeletePrefixBinding`

**Response** 200 → `result`

- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `error_chain`: object[] — Optional upstream error context for APIv4 errors that wrap downstream service failures.
    [array of]
    - `code`: integer **required**
    - `error_chain`: object[] — Optional upstream error context for APIv4 errors that wrap downstream service failures.
    - `message`: string **required**
  - `message`: string **required**
- `success`: boolean **required**
- `errors`: object[]
  [array of]
  - `code`: integer **required**
  - `error_chain`: object[] — Optional upstream error context for APIv4 errors that wrap downstream service failures.
    [array of]
    - `code`: integer **required**
    - `error_chain`: object[] — Optional upstream error context for APIv4 errors that wrap downstream service failures.
    - `message`: string **required**
  - `message`: string **required**

## GET /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}

Get a DLS prefix binding

operationId: `publicGetPrefixBinding`

**Response** 200 → `result`

- `cidr`: string **required** — The CIDR that is bound.
- `id`: string **required** — The ID of the binding.
- `prefix_id`: string **required** — The ID of the parent prefix.
- `region_key`: string **required** — The region key used for the binding.

## PATCH /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}

Update a DLS prefix binding

operationId: `publicPatchPrefixBinding`

**Request** (application/json)

- `region_key`: string **required** — New region key to assign (e.g., "us", "eu", "cfcanary").

**Response** 200 → `result`

- `cidr`: string **required** — The CIDR that is bound.
- `id`: string **required** — The ID of the binding.
- `prefix_id`: string **required** — The ID of the parent prefix.
- `region_key`: string **required** — The region key used for the binding.
