# Rules

15 endpoints.

## DELETE /accounts/{account_id}/cloudforce-one/rules

Delete all rules

operationId: `cloudforce-one-delete-all-rules`

**Response** 200 → `result`

- `deleted`: number **required**

## GET /accounts/{account_id}/cloudforce-one/rules

List rules

operationId: `cloudforce-one-list-rules` · query: `namespace`, `path`, `recursive`, `search`, `is_public`, `limit`, `offset`

**Response** 200 → `result`

- `rules`: object[] **required**
  [array of]
  - `content`: string **required**
  - `created_at`: number **required**
  - `created_by`: string **required**
  - `description`: string **required**
  - `enabled`: boolean **required** — Whether this rule is active for dice consumers.
  - `id`: string **required**
  - `is_public`: boolean **required** — Whether this rule is visible to other internal accounts.
  - `meta`: object[] — Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
    [array of]
    - `key`: string **required**
    - `type`: string **required** enum: `string`, `bool`, `int`
    - `value`: any **required**
  - `name`: string **required**
  - `namespaces`: string[] **required**
    [array]
  - `path`: string **required**
  - `pending_approval_id`: number **required** — ID of an open approval workflow targeting this rule, or null if none is pending.
  - `structured_source`: string — Original JSON payload for rules created via the structured rules API. Null for hand-written rules.
  - `updated_at`: number **required**
  - `updated_by`: string **required**
- `total`: number **required**

## POST /accounts/{account_id}/cloudforce-one/rules

Create a rule

operationId: `cloudforce-one-create-rule`

**Request** (application/json)

- `actions`: object[]
  [array of]
  - `action_config`: object **required** — Action-specific configuration parameters.
  - `action_type`: string **required** enum: `alert_gchat`, `webhook`, `logging`, `email`, `pipeline`, `remediation`, `throttle`, `delete`
  - `enabled`: boolean default: `true`
- `commit_message`: string — Human-readable justification for this change. Required for internal-account submissions; optional for customer accounts and automated sync.
- `content`: string **required**
- `description`: string — Human-readable description of the rule. Auto-extracted from YARA meta if present.
- `enabled`: boolean default: `true` — Whether this rule is active for dice consumers.
- `is_public`: boolean default: `false` — Whether this rule is visible to other internal accounts.
- `meta`: object[] — Additional YARA meta entries appended to the rule's meta block (and stored in rule_meta alongside meta parsed from the content). Keys must b
  [array of]
  - `key`: string **required**
  - `value`: any **required**
- `name`: string **required**
- `namespaces`: string[] default: `` — Optional WfP deployment tags (customer rules only). Internal rules leave empty.
  [array]
- `path`: string **required**

**Response** 201 → `result`

- `content`: string **required**
- `created_at`: number **required**
- `created_by`: string **required**
- `description`: string **required**
- `enabled`: boolean **required** — Whether this rule is active for dice consumers.
- `id`: string **required**
- `is_public`: boolean **required** — Whether this rule is visible to other internal accounts.
- `meta`: object[] — Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
  [array of]
  - `key`: string **required**
  - `type`: string **required** enum: `string`, `bool`, `int`
  - `value`: any **required**
- `name`: string **required**
- `namespaces`: string[] **required**
  [array]
- `path`: string **required**
- `pending_approval_id`: number **required** — ID of an open approval workflow targeting this rule, or null if none is pending.
- `structured_source`: string — Original JSON payload for rules created via the structured rules API. Null for hand-written rules.
- `updated_at`: number **required**
- `updated_by`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/rules/{id}

Delete a rule

operationId: `cloudforce-one-delete-rule`

**Request** (application/json)

- `commit_message`: string — Human-readable justification for the deletion. Required for internal-account submissions; optional for customer accounts and automated sync.

**Response** 200 → `result`

- `success`: boolean **required**

## GET /accounts/{account_id}/cloudforce-one/rules/{id}

Get a rule

operationId: `cloudforce-one-get-rule`

**Response** 200 → `result`

- `content`: string **required**
- `created_at`: number **required**
- `created_by`: string **required**
- `description`: string **required**
- `enabled`: boolean **required** — Whether this rule is active for dice consumers.
- `id`: string **required**
- `is_public`: boolean **required** — Whether this rule is visible to other internal accounts.
- `meta`: object[] — Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
  [array of]
  - `key`: string **required**
  - `type`: string **required** enum: `string`, `bool`, `int`
  - `value`: any **required**
- `name`: string **required**
- `namespaces`: string[] **required**
  [array]
- `path`: string **required**
- `pending_approval_id`: number **required** — ID of an open approval workflow targeting this rule, or null if none is pending.
- `structured_source`: string — Original JSON payload for rules created via the structured rules API. Null for hand-written rules.
- `updated_at`: number **required**
- `updated_by`: string **required**

## PUT /accounts/{account_id}/cloudforce-one/rules/{id}

Update a rule

operationId: `cloudforce-one-update-rule`

**Request** (application/json)

- `commit_message`: string — Human-readable justification for this change. Required for internal-account submissions; optional for customer accounts and automated sync.
- `content`: string
- `description`: string — Human-readable description of the rule. Auto-extracted from YARA meta if present.
- `enabled`: boolean — Whether this rule is active for dice consumers.
- `is_public`: boolean — Whether this rule is visible to other internal accounts.
- `meta`: object[] — Additional YARA meta entries appended to the rule's meta block (and stored in rule_meta alongside meta parsed from the content). Keys must b
  [array of]
  - `key`: string **required**
  - `value`: any **required**
- `name`: string
- `namespaces`: string[]
  [array]
- `path`: string — Path change goes through approval workflow.

**Response** 200 → `result`

- `content`: string **required**
- `created_at`: number **required**
- `created_by`: string **required**
- `description`: string **required**
- `enabled`: boolean **required** — Whether this rule is active for dice consumers.
- `id`: string **required**
- `is_public`: boolean **required** — Whether this rule is visible to other internal accounts.
- `meta`: object[] — Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
  [array of]
  - `key`: string **required**
  - `type`: string **required** enum: `string`, `bool`, `int`
  - `value`: any **required**
- `name`: string **required**
- `namespaces`: string[] **required**
  [array]
- `path`: string **required**
- `pending_approval_id`: number **required** — ID of an open approval workflow targeting this rule, or null if none is pending.
- `structured_source`: string — Original JSON payload for rules created via the structured rules API. Null for hand-written rules.
- `updated_at`: number **required**
- `updated_by`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/rules/exemptions

Remove patterns from exemption rules

operationId: `cloudforce-one-remove-account-exemptions`

**Request** (application/json)

- `namespace`: string[]
  [array]
- `tag_match`: string[]
  [array]
- `worker_name`: string[]
  [array]

**Response** 200 → `result`

- `namespace`: string[] **required**
  [array]
- `tag_match`: string[] **required**
  [array]
- `worker_name`: string[] **required**
  [array]

## GET /accounts/{account_id}/cloudforce-one/rules/exemptions

Get exemption rules for an account

operationId: `cloudforce-one-get-exemptions`

**Response** 200 → `result`

- `namespace`: string[] **required**
  [array]
- `tag_match`: string[] **required**
  [array]
- `worker_name`: string[] **required**
  [array]

## POST /accounts/{account_id}/cloudforce-one/rules/exemptions

Add patterns to exemption rules

operationId: `cloudforce-one-add-account-exemptions`

**Request** (application/json)

- `namespace`: string[]
  [array]
- `tag_match`: string[]
  [array]
- `worker_name`: string[]
  [array]

**Response** 200 → `result`

- `namespace`: string[] **required**
  [array]
- `tag_match`: string[] **required**
  [array]
- `worker_name`: string[] **required**
  [array]

## PUT /accounts/{account_id}/cloudforce-one/rules/exemptions

Update exemption rule patterns

operationId: `cloudforce-one-update-account-exemptions`

**Request** (application/json)

- `namespace`: object[]
  [array of]
  - `new_pattern`: string **required**
  - `old_pattern`: string **required**
- `tag_match`: object[]
  [array of]
  - `new_pattern`: string **required**
  - `old_pattern`: string **required**
- `worker_name`: object[]
  [array of]
  - `new_pattern`: string **required**
  - `old_pattern`: string **required**

**Response** 200 → `result`

- `namespace`: string[] **required**
  [array]
- `tag_match`: string[] **required**
  [array]
- `worker_name`: string[] **required**
  [array]

## GET /accounts/{account_id}/cloudforce-one/rules/managed

Get managed rules

operationId: `cloudforce-one-get-managed-rules`

**Response** 200 → `result`

- `metadata`: object **required**
  - `fetched_at`: string **required**
  - `total_rules`: number **required**
- `rules`: object[] **required**
  [array of]
  - `description`: string **required**
  - `name`: string **required**

## GET /accounts/{account_id}/cloudforce-one/rules/search

Search rules

operationId: `cloudforce-one-search-rules` · query: `namespace`, `path`, `recursive`, `search`, `is_public`, `limit`, `offset`, `query`, `mode`, `language`

**Response** 200 → `result`

- `fallback`: boolean — True when AI Search was unavailable and the response is from a fallback path.
- `interpreted`: object — Parsed natural-language interpretation of the query, when available.
  - `filters`: object — Filters applied during retrieval (account ACL plus user-supplied facets).
  - `retrieval_type`: string **required**
- `mode`: string **required** — Retrieval strategy actually used to produce results.
- `results`: object[] **required**
  [array of]
  - `content`: string **required**
  - `created_at`: number **required**
  - `created_by`: string **required**
  - `description`: string **required**
  - `enabled`: boolean **required** — Whether this rule is active for dice consumers.
  - `id`: string **required**
  - `is_public`: boolean **required** — Whether this rule is visible to other internal accounts.
  - `meta`: object[] — Structured meta entries for the rule (parsed from content plus any request-supplied meta). Returned in source order.
    [array of]
    - `key`: string **required**
    - `type`: string **required** enum: `string`, `bool`, `int`
    - `value`: any **required**
  - `name`: string **required**
  - `namespaces`: string[] **required**
    [array]
  - `path`: string **required**
  - `pending_approval_id`: number **required** — ID of an open approval workflow targeting this rule, or null if none is pending.
  - `structured_source`: string — Original JSON payload for rules created via the structured rules API. Null for hand-written rules.
  - `updated_at`: number **required**
  - `updated_by`: string **required**
  - `score`: number — Relevance score in [0,1]. Present only when AI Search powers the query.
  - `scoring_details`: object — Per-component scoring breakdown returned by AI Search hybrid retrieval.
    - `fusion_method`: string
    - `keyword_rank`: number
    - `keyword_score`: number
    - `reranking_score`: number
    - `vector_rank`: number
    - `vector_score`: number
- `total`: integer **required**

## GET /accounts/{account_id}/cloudforce-one/rules/stats

Get dashboard stats

operationId: `cloudforce-one-get-rule-stats`

**Response** 200 → `result`

- `pending_approvals`: number **required**
- `rules_by_namespace`: object **required**
- `total_rules`: number **required**

## GET /accounts/{account_id}/cloudforce-one/rules/tree

Get folder tree structure

operationId: `cloudforce-one-get-rule-tree`

**Response** 200 → `result`

- `tree`: object[] **required**
  [array of]
  - `children`: object[] **required**
    [array of]
    - `children`: object[] **required**
    - `count`: number **required**
    - `name`: string **required**
    - `path`: string **required**
  - `count`: number **required**
  - `name`: string **required**
  - `path`: string **required**

## POST /accounts/{account_id}/cloudforce-one/rules/validate

Validate rule with context

operationId: `cloudforce-one-validate-rule`

**Request** (application/json)

- `content`: string **required**
- `excludeRuleId`: string
- `name`: string **required**
- `namespaces`: string[] default: ``
  [array]
- `path`: string

**Response** 200 → `result`

- `error`: string
- `valid`: boolean **required**
