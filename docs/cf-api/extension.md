# Extension

4 endpoints.

## GET /accounts/{account_id}/registrar-sandbox/extensions

List extensions

operationId: `sandbox-registrar-extension-list` · query: `name`, `cursor`, `per_page`, `direction`, `sort_by`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar-sandbox/extensions/{extension}

Get extension

operationId: `sandbox-registrar-extension-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/extensions

List extensions

operationId: `registrar-extension-list` · query: `name`, `cursor`, `per_page`, `direction`, `sort_by`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/extensions/{extension}

Get extension

operationId: `registrar-extension-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
