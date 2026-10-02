# Registrar Registration

12 endpoints.

## GET /accounts/{account_id}/registrar-sandbox/registrations

List Registrations

operationId: `sandbox-registrar-domain-registration-list` · query: `cursor`, `per_page`, `direction`, `sort_by`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/registrar-sandbox/registrations

Create Registration

operationId: `sandbox-registrar-domain-registration-create`

**Request** (application/json)

- `acknowledgements`: object — User acknowledgements required by a specific extension or premium
- `auto_renew`: boolean default: `false` — Enable or disable automatic renewal. Defaults to `false` if omitted.
- `contact_extensions`: object — Registry-specific contact extension values for the registrant. The
- `contacts`: object — Contact data for the registration request.
  - `administrator`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `billing`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `registrant`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `technical`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
- `domain_name`: string **required** — Fully qualified domain name (FQDN) including the extension
- `privacy_mode`: string enum: `false`, `redaction` default: `redaction` — WHOIS privacy mode for the registration. Defaults to `redaction`.
- `years`: integer — Number of years to register (1–10). If omitted, defaults to the

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}

Get Registration

operationId: `sandbox-registrar-domain-registration-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}

Update Registration

operationId: `sandbox-registrar-domain-registration-update`

**Request** (application/json)

- `auto_renew`: boolean — Enable or disable automatic renewal.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}/registration-status

Get Registration Status

operationId: `sandbox-registrar-domain-registration-get-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}/update-status

Get Update Status

operationId: `sandbox-registrar-domain-registration-get-update-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/registrations

List Registrations

operationId: `registrar-domain-registration-list` · query: `cursor`, `per_page`, `direction`, `sort_by`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/registrar/registrations

Create Registration

operationId: `registrar-domain-registration-create`

**Request** (application/json)

- `acknowledgements`: object — User acknowledgements required by a specific extension or premium
- `auto_renew`: boolean default: `false` — Enable or disable automatic renewal. Defaults to `false` if omitted.
- `contact_extensions`: object — Registry-specific contact extension values for the registrant. The
- `contacts`: object — Contact data for the registration request.
  - `administrator`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `billing`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `registrant`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
  - `technical`: object — Contact data for the domain registration. This information
    - `email`: string **required** — Email address for the registrant. Used for domain-related
    - `fax`: string — Fax number in E.164 format (e.g., `+1.5555555555`). Optional.
    - `phone`: string **required** — Phone number in E.164 format: `+{country_code}.{number}` with no
    - `postal_info`: object **required** — Postal/mailing information for the contact. The `name` field is the
- `domain_name`: string **required** — Fully qualified domain name (FQDN) including the extension
- `privacy_mode`: string enum: `false`, `redaction` default: `redaction` — WHOIS privacy mode for the registration. Defaults to `redaction`.
- `years`: integer — Number of years to register (1–10). If omitted, defaults to the

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/registrations/{domain_name}

Get Registration

operationId: `registrar-domain-registration-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/registrar/registrations/{domain_name}

Update Registration

operationId: `registrar-domain-registration-update`

**Request** (application/json)

- `auto_renew`: boolean — Enable or disable automatic renewal.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/registrations/{domain_name}/registration-status

Get Registration Status

operationId: `registrar-domain-registration-get-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/registrations/{domain_name}/update-status

Get Update Status

operationId: `registrar-domain-registration-get-update-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
