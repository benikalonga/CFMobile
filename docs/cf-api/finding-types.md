# finding_types

3 endpoints.

## GET /accounts/{account_id}/data-security/posture/finding_types

List all finding types

operationId: `ListFindingTypes` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `category`: object **required** — Category information for a finding.
  - `observation`: string **required** enum: `Issue`, `Insight`, `Activity` — The type of the observation.
  - `product`: string **required** enum: `SaaS`, `Cloud` — The product category.
  - `type`: string **required** enum: `Content`, `Posture` — The type of the finding category.
- `id`: string **required** — The unique identifier of the finding.
- `name`: string **required** — The name of the finding.
- `severity`: string **required** enum: `Critical`, `High`, `Medium`, `Low` — The severity level of a finding.
- `vendor`: string **required** — The SaaS/Cloud vendor of the platform with which the finding is associated.

## GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}

Get finding by ID

operationId: `GetFindingType`

**Response** 200 → `result`

- `category`: object **required** — Category information for a finding.
  - `observation`: string **required** enum: `Issue`, `Insight`, `Activity` — The type of the observation.
  - `product`: string **required** enum: `SaaS`, `Cloud` — The product category.
  - `type`: string **required** enum: `Content`, `Posture` — The type of the finding category.
- `id`: string **required** — The unique identifier of the finding.
- `name`: string **required** — The name of the finding.
- `severity`: string **required** enum: `Critical`, `High`, `Medium`, `Low` — The severity level of a finding.
- `vendor`: string **required** — The SaaS/Cloud vendor of the platform with which the finding is associated.

## GET /accounts/{account_id}/data-security/posture/finding_types/{finding_type_id}/remediation_types

List remediation types for a finding type

operationId: `GetRemediationTypesForFindingType` · query: `integration_id`, `cursor`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `description`: string **required** — A description of the action(s) taken by the remediation type.
- `display_name`: string **required** — The name of the remediation type as displayed in the cloudflare dashboard.
- `finding_type_id`: string **required** — The identifier of the finding_type which this remediation type should remediate.
- `id`: string **required** — The identifier for the remediation type.
- `remediation_type`: string **required** — The name of the remediation type.
