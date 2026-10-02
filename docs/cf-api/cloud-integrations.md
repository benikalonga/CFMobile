# Cloud Integrations

9 endpoints.

## GET /accounts/{account_id}/magic/cloud/providers

List Cloud Integrations

operationId: `providers-list` · query: `status`, `order_by`, `desc`, `cloudflare`

**Response** 200 → `result`

[array of]
- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**
- `gcp_project_id`: string
- `gcp_service_account_email`: string
- `id`: string **required**
- `last_updated`: string **required**
- `lifecycle_state`: string **required** enum: `ACTIVE`, `PENDING_SETUP`, `RETIRED`
- `state`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `state_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `status`: object
  - `credentials_good_since`: string
  - `credentials_missing_since`: string
  - `credentials_rejected_since`: string
  - `discovery_message`: string
  - `discovery_message_v2`: string
  - `discovery_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `discovery_progress_v2`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `in_use_by`: object[]
    [array of]
    - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
    - `id`: string **required**
    - `name`: string **required**
  - `last_discovery_completed_at`: string
  - `last_discovery_completed_at_v2`: string
  - `last_discovery_started_at`: string
  - `last_discovery_started_at_v2`: string
  - `last_discovery_status`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_discovery_status_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_updated`: string
  - `regions`: string[] **required**
    [array]

## POST /accounts/{account_id}/magic/cloud/providers

Create Cloud Integration

operationId: `providers-create`

**Request** (application/json)

- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**

**Response** 201 → `result`

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**
- `gcp_project_id`: string
- `gcp_service_account_email`: string
- `id`: string **required**
- `last_updated`: string **required**
- `lifecycle_state`: string **required** enum: `ACTIVE`, `PENDING_SETUP`, `RETIRED`
- `state`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `state_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `status`: object
  - `credentials_good_since`: string
  - `credentials_missing_since`: string
  - `credentials_rejected_since`: string
  - `discovery_message`: string
  - `discovery_message_v2`: string
  - `discovery_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `discovery_progress_v2`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `in_use_by`: object[]
    [array of]
    - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
    - `id`: string **required**
    - `name`: string **required**
  - `last_discovery_completed_at`: string
  - `last_discovery_completed_at_v2`: string
  - `last_discovery_started_at`: string
  - `last_discovery_started_at_v2`: string
  - `last_discovery_status`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_discovery_status_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_updated`: string
  - `regions`: string[] **required**
    [array]

## DELETE /accounts/{account_id}/magic/cloud/providers/{provider_id}

Delete Cloud Integration

operationId: `providers-delete`

**Response** 200 → `result`

- `id`: string **required**

## GET /accounts/{account_id}/magic/cloud/providers/{provider_id}

Read Cloud Integration

operationId: `providers-read` · query: `status`

**Response** 200 → `result`

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**
- `gcp_project_id`: string
- `gcp_service_account_email`: string
- `id`: string **required**
- `last_updated`: string **required**
- `lifecycle_state`: string **required** enum: `ACTIVE`, `PENDING_SETUP`, `RETIRED`
- `state`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `state_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `status`: object
  - `credentials_good_since`: string
  - `credentials_missing_since`: string
  - `credentials_rejected_since`: string
  - `discovery_message`: string
  - `discovery_message_v2`: string
  - `discovery_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `discovery_progress_v2`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `in_use_by`: object[]
    [array of]
    - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
    - `id`: string **required**
    - `name`: string **required**
  - `last_discovery_completed_at`: string
  - `last_discovery_completed_at_v2`: string
  - `last_discovery_started_at`: string
  - `last_discovery_started_at_v2`: string
  - `last_discovery_status`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_discovery_status_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_updated`: string
  - `regions`: string[] **required**
    [array]

## PATCH /accounts/{account_id}/magic/cloud/providers/{provider_id}

Patch Cloud Integration

operationId: `providers-patch`

**Request** (application/json)

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `description`: string
- `friendly_name`: string
- `gcp_project_id`: string
- `gcp_service_account_email`: string

**Response** 200 → `result`

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**
- `gcp_project_id`: string
- `gcp_service_account_email`: string
- `id`: string **required**
- `last_updated`: string **required**
- `lifecycle_state`: string **required** enum: `ACTIVE`, `PENDING_SETUP`, `RETIRED`
- `state`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `state_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `status`: object
  - `credentials_good_since`: string
  - `credentials_missing_since`: string
  - `credentials_rejected_since`: string
  - `discovery_message`: string
  - `discovery_message_v2`: string
  - `discovery_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `discovery_progress_v2`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `in_use_by`: object[]
    [array of]
    - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
    - `id`: string **required**
    - `name`: string **required**
  - `last_discovery_completed_at`: string
  - `last_discovery_completed_at_v2`: string
  - `last_discovery_started_at`: string
  - `last_discovery_started_at_v2`: string
  - `last_discovery_status`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_discovery_status_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_updated`: string
  - `regions`: string[] **required**
    [array]

## PUT /accounts/{account_id}/magic/cloud/providers/{provider_id}

Update Cloud Integration

operationId: `providers-update`

**Request** (application/json)

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `description`: string
- `friendly_name`: string
- `gcp_project_id`: string
- `gcp_service_account_email`: string

**Response** 200 → `result`

- `aws_arn`: string
- `azure_subscription_id`: string
- `azure_tenant_id`: string
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `description`: string
- `friendly_name`: string **required**
- `gcp_project_id`: string
- `gcp_service_account_email`: string
- `id`: string **required**
- `last_updated`: string **required**
- `lifecycle_state`: string **required** enum: `ACTIVE`, `PENDING_SETUP`, `RETIRED`
- `state`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `state_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
- `status`: object
  - `credentials_good_since`: string
  - `credentials_missing_since`: string
  - `credentials_rejected_since`: string
  - `discovery_message`: string
  - `discovery_message_v2`: string
  - `discovery_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `discovery_progress_v2`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
    - `unit`: string **required**
  - `in_use_by`: object[]
    [array of]
    - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
    - `id`: string **required**
    - `name`: string **required**
  - `last_discovery_completed_at`: string
  - `last_discovery_completed_at_v2`: string
  - `last_discovery_started_at`: string
  - `last_discovery_started_at_v2`: string
  - `last_discovery_status`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_discovery_status_v2`: string **required** enum: `UNSPECIFIED`, `PENDING`, `DISCOVERING`, `FAILED`, `SUCCEEDED`
  - `last_updated`: string
  - `regions`: string[] **required**
    [array]

## POST /accounts/{account_id}/magic/cloud/providers/{provider_id}/discover

Run Discovery

operationId: `providers-discover` · query: `v2`

**Response** 202 → `result`

- `messages`: object[] **required**
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string
- `success`: boolean **required**
- `errors`: object[]
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string

## GET /accounts/{account_id}/magic/cloud/providers/{provider_id}/initial_setup

Get Cloud Integration Setup Config

operationId: `providers-initial-setup`

**Response** 200 → `result`

(one of 3 variants; showing the first)
- `aws_trust_policy`: string **required**
- `item_type`: string **required**

## POST /accounts/{account_id}/magic/cloud/providers/discover

Run Discovery for All Integrations

operationId: `providers-discover-all`

**Response** 202 → `result`

- `messages`: object[] **required**
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string
- `success`: boolean **required**
- `errors`: object[]
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string
