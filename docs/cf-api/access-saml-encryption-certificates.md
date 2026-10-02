# Access SAML encryption certificates

4 endpoints.

## GET /accounts/{account_id}/access/saml_certificates

List SAML certificate sets

operationId: `access-saml-certificates-list-certificate-sets` · query: `page`, `per_page`, `id`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — When the certificate set was created
- `current_certificate`: any — The current active certificate
- `previous_certificate`: object — The previous certificate (maintained during rotation period). May be null when no rotation has occurred. Mirrors the structure of `saml_cert
- `uid`: string **required** — Unique identifier for the certificate set
- `updated_at`: string **required** — When the certificate set was last updated

## GET /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}

Get SAML certificate set

operationId: `access-saml-certificates-get-certificate-set`

**Response** 200 → `result`

- `created_at`: string **required** — When the certificate set was created
- `current_certificate`: any — The current active certificate
- `previous_certificate`: object — The previous certificate (maintained during rotation period). May be null when no rotation has occurred. Mirrors the structure of `saml_cert
- `uid`: string **required** — Unique identifier for the certificate set
- `updated_at`: string **required** — When the certificate set was last updated

## GET /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/pem

Download current certificate in PEM format

operationId: `access-saml-certificates-get-pem`

**Response** 200 → `result`

string

## POST /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/rotate

Rotate SAML certificate

operationId: `access-saml-certificates-rotate-certificate`

**Response** 200 → `result`

- `created_at`: string **required** — When the certificate set was created
- `current_certificate`: any — The current active certificate
- `previous_certificate`: object — The previous certificate (maintained during rotation period). May be null when no rotation has occurred. Mirrors the structure of `saml_cert
- `uid`: string **required** — Unique identifier for the certificate set
- `updated_at`: string **required** — When the certificate set was last updated
