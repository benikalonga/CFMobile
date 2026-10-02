# Origin CA

4 endpoints.

## GET /certificates

List Certificates

operationId: `origin-ca-list-certificates` · query: `zone_id`, `page`, `per_page`, `limit`, `offset`

**Response** 200 → `result`

[array of]
- `certificate`: string — The Origin CA certificate. Will be newline-encoded.
- `csr`: string **required** — The Certificate Signing Request (CSR). Must be newline-encoded.
- `expires_on`: string — When the certificate will expire.
- `hostnames`: string[] **required** — Array of hostnames or wildcard names bound to the certificate.
  [array]
- `id`: string — Identifier.
- `request_type`: string **required** enum: `origin-rsa`, `origin-ecc`, `keyless-certificate` — Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).
- `requested_validity`: number **required** enum: `7`, `30`, `90`, `365`, `730`, `1095`, `5475` default: `5475` — The number of days for which the certificate should be valid.

## POST /certificates

Create Certificate

operationId: `origin-ca-create-certificate`

**Request** (application/json)

- `csr`: string **required** — The Certificate Signing Request (CSR). Must be newline-encoded.
- `hostnames`: string[] **required** — Array of hostnames or wildcard names bound to the certificate.
  [array]
- `request_type`: string **required** enum: `origin-rsa`, `origin-ecc`, `keyless-certificate` — Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).
- `requested_validity`: number enum: `7`, `30`, `90`, `365`, `730`, `1095`, `5475` default: `5475` — The number of days for which the certificate should be valid.

**Response** 200 → `result`

- `certificate`: string — The Origin CA certificate. Will be newline-encoded.
- `csr`: string **required** — The Certificate Signing Request (CSR). Must be newline-encoded.
- `expires_on`: string — When the certificate will expire.
- `hostnames`: string[] **required** — Array of hostnames or wildcard names bound to the certificate.
  [array]
- `id`: string — Identifier.
- `request_type`: string **required** enum: `origin-rsa`, `origin-ecc`, `keyless-certificate` — Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).
- `requested_validity`: number **required** enum: `7`, `30`, `90`, `365`, `730`, `1095`, `5475` default: `5475` — The number of days for which the certificate should be valid.

## DELETE /certificates/{certificate_id}

Revoke Certificate

operationId: `origin-ca-revoke-certificate`

**Response** 200 → `result`

- `id`: string — Identifier.
- `revoked_at`: string — When the certificate was revoked.

## GET /certificates/{certificate_id}

Get Certificate

operationId: `origin-ca-get-certificate`

**Response** 200 → `result`

- `certificate`: string — The Origin CA certificate. Will be newline-encoded.
- `csr`: string **required** — The Certificate Signing Request (CSR). Must be newline-encoded.
- `expires_on`: string — When the certificate will expire.
- `hostnames`: string[] **required** — Array of hostnames or wildcard names bound to the certificate.
  [array]
- `id`: string — Identifier.
- `request_type`: string **required** enum: `origin-rsa`, `origin-ecc`, `keyless-certificate` — Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).
- `requested_validity`: number **required** enum: `7`, `30`, `90`, `365`, `730`, `1095`, `5475` default: `5475` — The number of days for which the certificate should be valid.
