# SSO

6 endpoints.

## GET /accounts/{account_id}/sso_connectors

Get all SSO connectors

operationId: `get-all-sso-connectors`

**Response** 200 → `result`

[array of]
- `created_on`: string — Timestamp for the creation of the SSO connector
- `email_domain`: string
- `enabled`: boolean
- `id`: any — SSO Connector identifier tag.
- `updated_on`: string — Timestamp for the last update of the SSO connector
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login
- `verification`: object
  - `code`: string — DNS verification code. Add this entire string to the DNS TXT record of the email domain to validate ownership.
  - `status`: string enum: `awaiting`, `pending`, `failed`, `verified` — The status of the verification code from the verification process.

## POST /accounts/{account_id}/sso_connectors

Initialize new SSO connector

operationId: `init-new-sso-connector`

**Request** (application/json)

- `begin_verification`: boolean default: `true` — Begin the verification process after creation
- `email_domain`: string **required** — Email domain of the new SSO connector
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the SSO connector
- `email_domain`: string
- `enabled`: boolean
- `id`: any — SSO Connector identifier tag.
- `updated_on`: string — Timestamp for the last update of the SSO connector
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login
- `verification`: object
  - `code`: string — DNS verification code. Add this entire string to the DNS TXT record of the email domain to validate ownership.
  - `status`: string enum: `awaiting`, `pending`, `failed`, `verified` — The status of the verification code from the verification process.

## DELETE /accounts/{account_id}/sso_connectors/{sso_connector_id}

Delete SSO connector

operationId: `delete-sso-connector`

**Response** 200 → `result`

- `id`: string **required** — Identifier

## GET /accounts/{account_id}/sso_connectors/{sso_connector_id}

Get single SSO connector

operationId: `get-sso-connector`

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the SSO connector
- `email_domain`: string
- `enabled`: boolean
- `id`: any — SSO Connector identifier tag.
- `updated_on`: string — Timestamp for the last update of the SSO connector
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login
- `verification`: object
  - `code`: string — DNS verification code. Add this entire string to the DNS TXT record of the email domain to validate ownership.
  - `status`: string enum: `awaiting`, `pending`, `failed`, `verified` — The status of the verification code from the verification process.

## PATCH /accounts/{account_id}/sso_connectors/{sso_connector_id}

Update SSO connector state

operationId: `update-sso-connector-state`

**Request** (application/json)

- `enabled`: boolean — SSO Connector enabled state
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login

**Response** 200 → `result`

- `created_on`: string — Timestamp for the creation of the SSO connector
- `email_domain`: string
- `enabled`: boolean
- `id`: any — SSO Connector identifier tag.
- `updated_on`: string — Timestamp for the last update of the SSO connector
- `use_fedramp_language`: boolean default: `false` — Controls the display of FedRAMP language to the user during SSO login
- `verification`: object
  - `code`: string — DNS verification code. Add this entire string to the DNS TXT record of the email domain to validate ownership.
  - `status`: string enum: `awaiting`, `pending`, `failed`, `verified` — The status of the verification code from the verification process.

## POST /accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification

Begin SSO connector verification

operationId: `begin-sso-connector-verification`

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
