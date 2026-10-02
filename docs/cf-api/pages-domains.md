# Pages Domains

5 endpoints.

## GET /accounts/{account_id}/pages/projects/{project_name}/domains

Get domains

operationId: `pages-domains-get-domains`

**Response** 200 → `result`

[array of]
- `certificate_authority`: string **required** enum: `google`, `lets_encrypt`
- `created_on`: string **required**
- `domain_id`: string **required**
- `id`: string **required**
- `name`: string **required** — The domain name.
- `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `blocked`, `error`
- `validation_data`: object **required**
  - `error_message`: string
  - `method`: string **required** enum: `http`, `txt`
  - `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `error`
  - `txt_name`: string
  - `txt_value`: string
- `verification_data`: object **required**
  - `error_message`: string
  - `status`: string **required** enum: `pending`, `active`, `deactivated`, `blocked`, `error`
- `zone_tag`: string **required**

## POST /accounts/{account_id}/pages/projects/{project_name}/domains

Add domain

operationId: `pages-domains-add-domain`

**Request** (application/json)

- `name`: string **required** — The domain name.

**Response** 200 → `result`

- `certificate_authority`: string **required** enum: `google`, `lets_encrypt`
- `created_on`: string **required**
- `domain_id`: string **required**
- `id`: string **required**
- `name`: string **required** — The domain name.
- `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `blocked`, `error`
- `validation_data`: object **required**
  - `error_message`: string
  - `method`: string **required** enum: `http`, `txt`
  - `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `error`
  - `txt_name`: string
  - `txt_value`: string
- `verification_data`: object **required**
  - `error_message`: string
  - `status`: string **required** enum: `pending`, `active`, `deactivated`, `blocked`, `error`
- `zone_tag`: string **required**

## DELETE /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}

Delete domain

operationId: `pages-domains-delete-domain`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}

Get domain

operationId: `pages-domains-get-domain`

**Response** 200 → `result`

- `certificate_authority`: string **required** enum: `google`, `lets_encrypt`
- `created_on`: string **required**
- `domain_id`: string **required**
- `id`: string **required**
- `name`: string **required** — The domain name.
- `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `blocked`, `error`
- `validation_data`: object **required**
  - `error_message`: string
  - `method`: string **required** enum: `http`, `txt`
  - `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `error`
  - `txt_name`: string
  - `txt_value`: string
- `verification_data`: object **required**
  - `error_message`: string
  - `status`: string **required** enum: `pending`, `active`, `deactivated`, `blocked`, `error`
- `zone_tag`: string **required**

## PATCH /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}

Patch domain

operationId: `pages-domains-patch-domain`

**Response** 200 → `result`

- `certificate_authority`: string **required** enum: `google`, `lets_encrypt`
- `created_on`: string **required**
- `domain_id`: string **required**
- `id`: string **required**
- `name`: string **required** — The domain name.
- `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `blocked`, `error`
- `validation_data`: object **required**
  - `error_message`: string
  - `method`: string **required** enum: `http`, `txt`
  - `status`: string **required** enum: `initializing`, `pending`, `active`, `deactivated`, `error`
  - `txt_name`: string
  - `txt_value`: string
- `verification_data`: object **required**
  - `error_message`: string
  - `status`: string **required** enum: `pending`, `active`, `deactivated`, `blocked`, `error`
- `zone_tag`: string **required**
