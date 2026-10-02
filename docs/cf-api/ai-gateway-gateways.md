# AI Gateway Gateways

6 endpoints.

## GET /accounts/{account_id}/ai-gateway/gateways

List Gateways

operationId: `aig-config-list-gateway` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

[array of]
- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `created_at`: string **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `id`: string **required** — gateway id
- `is_default`: boolean
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `modified_at`: string **required**
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `42c0089f`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

## POST /accounts/{account_id}/ai-gateway/gateways

Create a new Gateway

operationId: `aig-config-create-gateway`

**Request** (application/json)

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `id`: string **required** — gateway id
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

**Response** 200 → `result`

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `created_at`: string **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `id`: string **required** — gateway id
- `is_default`: boolean
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `modified_at`: string **required**
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `413b5296`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

## GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}

Get Gateway URL

operationId: `aig-config-get-gateway-url`

**Response** 200 → `result`

string

## DELETE /accounts/{account_id}/ai-gateway/gateways/{id}

Delete a Gateway

operationId: `aig-config-delete-gateway`

**Response** 200 → `result`

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `created_at`: string **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `id`: string **required** — gateway id
- `is_default`: boolean
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `modified_at`: string **required**
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `91d7032e`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

## GET /accounts/{account_id}/ai-gateway/gateways/{id}

Fetch a Gateway

operationId: `aig-config-fetch-gateway`

**Response** 200 → `result`

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `created_at`: string **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `id`: string **required** — gateway id
- `is_default`: boolean
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `modified_at`: string **required**
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `2fda3fa3`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

## PUT /accounts/{account_id}/ai-gateway/gateways/{id}

Update a Gateway

operationId: `aig-config-update-gateway`

**Request** (application/json)

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `6092b66a`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean

**Response** 200 → `result`

- `authentication`: boolean
- `cache_invalidate_on_update`: boolean **required**
- `cache_ttl`: integer **required**
- `collect_logs`: boolean **required**
- `created_at`: string **required**
- `dlp`: any
- `guardrails`: object
  - `prompt`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
  - `response`: object **required**
    - `P1`: string enum: `FLAG`, `BLOCK`
    - `S1`: string enum: `FLAG`, `BLOCK`
    - `S10`: string enum: `FLAG`, `BLOCK`
    - `S11`: string enum: `FLAG`, `BLOCK`
    - `S12`: string enum: `FLAG`, `BLOCK`
    - `S13`: string enum: `FLAG`, `BLOCK`
    - `S2`: string enum: `FLAG`, `BLOCK`
    - `S3`: string enum: `FLAG`, `BLOCK`
    - `S4`: string enum: `FLAG`, `BLOCK`
    - `S5`: string enum: `FLAG`, `BLOCK`
    - `S6`: string enum: `FLAG`, `BLOCK`
    - `S7`: string enum: `FLAG`, `BLOCK`
    - `S8`: string enum: `FLAG`, `BLOCK`
    - `S9`: string enum: `FLAG`, `BLOCK`
- `id`: string **required** — gateway id
- `is_default`: boolean
- `log_management`: integer
- `log_management_strategy`: string enum: `STOP_INSERTING`, `DELETE_OLDEST`
- `logpush`: boolean
- `logpush_public_key`: string
- `modified_at`: string **required**
- `otel`: object[]
  [array of]
  - `authorization`: string
  - `content_type`: string enum: `json`, `protobuf` default: `json`
  - `headers`: object **required**
  - `url`: string **required**
- `rate_limiting_interval`: integer **required**
- `rate_limiting_limit`: integer **required**
- `rate_limiting_technique`: string enum: `fixed`, `sliding`
- `retry_backoff`: string enum: `constant`, `linear`, `exponential` — Backoff strategy for retry delays
- `retry_delay`: integer — Delay between retry attempts in milliseconds (0-5000)
- `retry_max_attempts`: integer — Maximum number of retry attempts for failed requests (1-5)
- `spend_limits`: object
  - `enabled`: boolean default: `false`
  - `rules`: object[] default: ``
    [array of]
    - `enabled`: boolean default: `true`
    - `id`: string default: `71833846`
    - `limit`: number **required**
    - `limitType`: string **required** enum: `cost`
    - `metadata`: object
    - `model`: object
    - `provider`: object
    - `technique`: string enum: `fixed`, `sliding` default: `sliding`
    - `window`: integer **required**
- `store_id`: string
- `stripe`: object
  - `authorization`: string **required**
  - `usage_events`: object[] **required**
    [array of]
    - `payload`: string **required**
- `workers_ai_billing_mode`: string enum: `postpaid` default: `postpaid` — Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported.
- `zdr`: boolean
