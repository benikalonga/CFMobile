# remediations

2 endpoints.

## GET /accounts/{account_id}/data-security/posture/remediations/jobs

List remediation jobs

operationId: `ListRemediationJobs` · query: `cursor`, `page`, `per_page`, `search`, `min_updated_at`, `max_updated_at`, `status`, `triggered_by_actor`, `integration_id`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `asset`: object **required** — Asset information for a remediation job.
  - `category`: object **required** — Category information for a remediation job asset.
    - `service`: string **required** — Specific service within the vendor.
    - `type`: string **required** — Asset type.
    - `vendor`: string **required** enum: `AWS`, `Anthropic`, `Bitbucket`, `Box`, `Confluence`, `Dropbox`, `GitHub`, `Google Cloud Platform` — Display names for vendor types.
  - `external_id`: string **required** — External identifier from the source system.
  - `fields`: object[] **required** — Additional fields associated with the asset.
    [array of]
    - `link`: string — Optional link associated with the field.
    - `name`: string **required** — Field name.
    - `value`: string **required** — Field value (can be string, number, or boolean).
  - `id`: string **required** — Unique identifier for the asset.
  - `link`: string — Direct link to the asset.
  - `name`: string **required** — Human-readable name of the asset.
- `created_at`: string **required** — When the remediation job was created.
- `finding_id`: string **required** — Encoded finding ID.
- `finding_instance_id`: string **required** — ID of the finding instance being remediated.
- `finding_type_id`: string **required** — ID of the finding type.
- `finding_type_name`: string **required** — Name of the finding type.
- `id`: string **required** — Unique identifier for the remediation job.
- `integration_name`: string **required** — Name of the integration.
- `last_updated`: string **required** — When the remediation job was last updated.
- `remediation_type`: string **required** — Type of remediation being performed.
- `status`: string **required** enum: `pending`, `processing`, `completed`, `failed`, `validating` — Status of a remediation job.
- `triggered_by_actor`: string enum: `user`, `account_token`, `null` — Type of actor that triggered the remediation job. Null on legacy rows created before this column was populated.
- `triggered_by_id`: string — ID of the actor that triggered the job. Meaning depends on triggered_by_actor. Null on legacy rows.
- `triggered_by_user`: string **required** — Email of the user who triggered the remediation. For account-token actors this is the literal "Account API Token"; for policy actors this is

## POST /accounts/{account_id}/data-security/posture/remediations/jobs

Creates remediation jobs

operationId: `CreateRemediationJobs`

**Request** (application/json)

- `finding_instance_ids`: string[] **required** — UUIDs identifying Finding Instances.
  [array]
- `remediation_type_id`: string **required** — A UUID identifying this Remediation Type.

**Response** 200 → `result`

- `created`: object[] **required** — Successfully created remediation jobs.
  [array of]
  - `asset`: object **required** — Asset information for a remediation job.
    - `category`: object **required** — Category information for a remediation job asset.
    - `external_id`: string **required** — External identifier from the source system.
    - `fields`: object[] **required** — Additional fields associated with the asset.
    - `id`: string **required** — Unique identifier for the asset.
    - `link`: string — Direct link to the asset.
    - `name`: string **required** — Human-readable name of the asset.
  - `created_at`: string **required** — When the remediation job was created.
  - `finding_id`: string **required** — Encoded finding ID.
  - `finding_instance_id`: string **required** — ID of the finding instance being remediated.
  - `finding_type_id`: string **required** — ID of the finding type.
  - `finding_type_name`: string **required** — Name of the finding type.
  - `id`: string **required** — Unique identifier for the remediation job.
  - `integration_name`: string **required** — Name of the integration.
  - `last_updated`: string **required** — When the remediation job was last updated.
  - `remediation_type`: string **required** — Type of remediation being performed.
  - `status`: string **required** enum: `pending`, `processing`, `completed`, `failed`, `validating` — Status of a remediation job.
  - `triggered_by_actor`: string enum: `user`, `account_token`, `null` — Type of actor that triggered the remediation job. Null on legacy rows created before this column was populated.
  - `triggered_by_id`: string — ID of the actor that triggered the job. Meaning depends on triggered_by_actor. Null on legacy rows.
  - `triggered_by_user`: string **required** — Email of the user who triggered the remediation. For account-token actors this is the literal "Account API Token"; for policy actors this is
- `failed`: object[] **required** — Failed remediation job creation attempts.
  [array of]
  - `error`: string **required** — Error message describing the failure.
  - `finding_instance_id`: string **required** — ID of the finding instance that failed to create a remediation job.
