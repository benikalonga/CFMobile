# Custom CSRs for a Zone

4 endpoints.

## GET /zones/{zone_id}/custom_csrs

List Custom CSRs

operationId: `custom-csrs-for-a-zone-list-custom-csrs` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `common_name`: string — The common name (domain) for the CSR.
- `country`: string — Two-letter ISO 3166-1 alpha-2 country code.
- `created_at`: string **required** — When the CSR was created.
- `csr`: string — The PEM-encoded Certificate Signing Request.
- `id`: string **required** — Custom CSR identifier tag.
- `key_type`: string **required** enum: `rsa2048`, `p256v1` — The key algorithm used to generate the CSR.
- `locality`: string — City or locality name.
- `organization`: string — Organization name.
- `organizational_unit`: string — Organizational unit for the CSR subject.
- `sans`: string[] — Subject Alternative Names included in the CSR.
  [array]
- `state`: string — State or province name.

## POST /zones/{zone_id}/custom_csrs

Create Custom CSR

operationId: `custom-csrs-for-a-zone-create-custom-csr`

**Request** (application/json)

- `common_name`: string **required** — The common name (domain) for the CSR. Must be at most 64 characters.
- `country`: string **required** — Two-letter ISO 3166-1 alpha-2 country code.
- `key_type`: string enum: `rsa2048`, `p256v1` default: `rsa2048` — Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.
- `locality`: string **required** — City or locality name.
- `organization`: string **required** — Organization name.
- `organizational_unit`: string — Organizational unit name.
- `sans`: string[] **required** — Subject Alternative Names for the CSR. At least one SAN is required. The list should include the common name.
  [array]
- `state`: string **required** — State or province name.

**Response** 201 → `result`

- `common_name`: string — The common name (domain) for the CSR.
- `country`: string — Two-letter ISO 3166-1 alpha-2 country code.
- `created_at`: string **required** — When the CSR was created.
- `csr`: string — The PEM-encoded Certificate Signing Request.
- `id`: string **required** — Custom CSR identifier tag.
- `key_type`: string **required** enum: `rsa2048`, `p256v1` — The key algorithm used to generate the CSR.
- `locality`: string — City or locality name.
- `organization`: string — Organization name.
- `organizational_unit`: string — Organizational unit for the CSR subject.
- `sans`: string[] — Subject Alternative Names included in the CSR.
  [array]
- `state`: string — State or province name.

## DELETE /zones/{zone_id}/custom_csrs/{custom_csr_id}

Delete Custom CSR

operationId: `custom-csrs-for-a-zone-delete-custom-csr`

**Response** 200 → `result`

- `id`: string — Custom CSR identifier tag.

## GET /zones/{zone_id}/custom_csrs/{custom_csr_id}

Custom CSR Details

operationId: `custom-csrs-for-a-zone-custom-csr-details`

**Response** 200 → `result`

- `common_name`: string — The common name (domain) for the CSR.
- `country`: string — Two-letter ISO 3166-1 alpha-2 country code.
- `created_at`: string **required** — When the CSR was created.
- `csr`: string — The PEM-encoded Certificate Signing Request.
- `id`: string **required** — Custom CSR identifier tag.
- `key_type`: string **required** enum: `rsa2048`, `p256v1` — The key algorithm used to generate the CSR.
- `locality`: string — City or locality name.
- `organization`: string — Organization name.
- `organizational_unit`: string — Organizational unit for the CSR subject.
- `sans`: string[] — Subject Alternative Names included in the CSR.
  [array]
- `state`: string — State or province name.
