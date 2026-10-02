# dos-flowtrackd-api_other

45 endpoints.

## DELETE /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules

Delete all DNS Protection rules.

operationId: `deleteDnsProtectionRulesForAccount`

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

## GET /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules

List all DNS Protection rules.

operationId: `listDnsProtectionRulesForAccount` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `block_any_queries`: boolean **required** — Whether to block DNS ANY queries. Defaults to true.
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the DNS Protection rule.
- `id`: string **required** — The unique ID of the DNS Protection rule.
- `mode`: string **required** — The mode for DNS Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the DNS Protection rule.
- `name`: string **required** — The name of the DNS Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `profile_sensitivity`: string **required** — The profile sensitivity. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the DNS Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## POST /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules

Create DNS Protection rule.

operationId: `createDnsProtectionRule`

**Request** (application/json)

- `block_any_queries`: boolean — Whether to block DNS ANY queries. Optional. Defaults to true.
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `mode`: string **required** — The mode for DNS Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `name`: string **required** — The name of the DNS Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `profile_sensitivity`: string **required** — The profile sensitivity. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the DNS Protection rule. Must be one of 'global', 'region', or 'datacenter'.

**Response** 200 → `result`

- `block_any_queries`: boolean **required** — Whether to block DNS ANY queries. Defaults to true.
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the DNS Protection rule.
- `id`: string **required** — The unique ID of the DNS Protection rule.
- `mode`: string **required** — The mode for DNS Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the DNS Protection rule.
- `name`: string **required** — The name of the DNS Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `profile_sensitivity`: string **required** — The profile sensitivity. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the DNS Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## DELETE /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}

Delete DNS Protection rule.

operationId: `deleteDnsProtectionRule`

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

## GET /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}

Get DNS Protection rule.

operationId: `getDnsProtectionRule`

**Response** 200 → `result`

- `block_any_queries`: boolean **required** — Whether to block DNS ANY queries. Defaults to true.
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the DNS Protection rule.
- `id`: string **required** — The unique ID of the DNS Protection rule.
- `mode`: string **required** — The mode for DNS Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the DNS Protection rule.
- `name`: string **required** — The name of the DNS Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `profile_sensitivity`: string **required** — The profile sensitivity. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the DNS Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## PATCH /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}

Update DNS Protection rule.

operationId: `updateDnsProtectionRule`

**Request** (application/json)

- `block_any_queries`: boolean — The new value for whether to block DNS ANY queries. Optional.
- `burst_sensitivity`: string — The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'.
- `mode`: string — The new mode for DNS Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.
- `profile_sensitivity`: string — The new profile sensitivity. Optional. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string — The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'.

**Response** 200 → `result`

- `block_any_queries`: boolean **required** — Whether to block DNS ANY queries. Defaults to true.
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the DNS Protection rule.
- `id`: string **required** — The unique ID of the DNS Protection rule.
- `mode`: string **required** — The mode for DNS Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the DNS Protection rule.
- `name`: string **required** — The name of the DNS Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `profile_sensitivity`: string **required** — The profile sensitivity. Recommended setting is 'low'. Must be one of 'low', 'medium', 'high', or 'very_high'.
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the DNS Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist

Delete all allowlist prefixes.

operationId: `deleteAllowlistPrefixesForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist

List all allowlist prefixes.

operationId: `listAllowlistPrefixesForAccount` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `comment`: string **required** — An optional comment describing the allowlist prefix.
- `created_on`: string **required** — The creation timestamp of the allowlist prefix.
- `enabled`: boolean **required** — Whether to enable the allowlist prefix into effect. Defaults to false.
- `id`: string **required** — The unique ID of the allowlist prefix.
- `modified_on`: string **required** — The last modification timestamp of the allowlist prefix.
- `prefix`: string **required** — The allowlist prefix in CIDR format.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist

Create allowlist prefix.

operationId: `createAllowlistedPrefix`

**Request** (application/json)

- `comment`: string **required** — An comment describing the allowlist prefix.
- `enabled`: boolean **required** — Whether to enable the allowlist prefix into effect.
- `prefix`: string **required** — The allowlist prefix to add in CIDR format.

**Response** 200 → `result`

- `comment`: string **required** — An optional comment describing the allowlist prefix.
- `created_on`: string **required** — The creation timestamp of the allowlist prefix.
- `enabled`: boolean **required** — Whether to enable the allowlist prefix into effect. Defaults to false.
- `id`: string **required** — The unique ID of the allowlist prefix.
- `modified_on`: string **required** — The last modification timestamp of the allowlist prefix.
- `prefix`: string **required** — The allowlist prefix in CIDR format.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}

Delete allowlist prefix.

operationId: `deleteAllowlistPrefix`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}

Get allowlist prefix.

operationId: `getAllowlistPrefix`

**Response** 200 → `result`

- `comment`: string **required** — An optional comment describing the allowlist prefix.
- `created_on`: string **required** — The creation timestamp of the allowlist prefix.
- `enabled`: boolean **required** — Whether to enable the allowlist prefix into effect. Defaults to false.
- `id`: string **required** — The unique ID of the allowlist prefix.
- `modified_on`: string **required** — The last modification timestamp of the allowlist prefix.
- `prefix`: string **required** — The allowlist prefix in CIDR format.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}

Update allowlist prefix.

operationId: `updateAllowlistPrefix`

**Request** (application/json)

- `comment`: string — A comment describing the allowlist prefix. Optional.
- `enabled`: boolean — Whether to enable the allowlist prefix into effect. Optional.

**Response** 200 → `result`

- `comment`: string **required** — An optional comment describing the allowlist prefix.
- `created_on`: string **required** — The creation timestamp of the allowlist prefix.
- `enabled`: boolean **required** — Whether to enable the allowlist prefix into effect. Defaults to false.
- `id`: string **required** — The unique ID of the allowlist prefix.
- `modified_on`: string **required** — The last modification timestamp of the allowlist prefix.
- `prefix`: string **required** — The allowlist prefix in CIDR format.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes

Delete all prefixes.

operationId: `deletePrefixesForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes

List all prefixes.

operationId: `listPrefixesForAccount` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `comment`: string **required** — A comment describing the prefix.
- `created_on`: string **required** — The creation timestamp of the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `id`: string **required** — The unique ID of the prefix.
- `modified_on`: string **required** — The last modification timestamp of the prefix.
- `prefix`: string **required** — The prefix in CIDR format.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes

Create prefix.

operationId: `createPrefix`

**Request** (application/json)

- `comment`: string **required** — A comment describing the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `prefix`: string **required** — The prefix to add in CIDR format.

**Response** 200 → `result`

- `comment`: string **required** — A comment describing the prefix.
- `created_on`: string **required** — The creation timestamp of the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `id`: string **required** — The unique ID of the prefix.
- `modified_on`: string **required** — The last modification timestamp of the prefix.
- `prefix`: string **required** — The prefix in CIDR format.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}

Delete prefix.

operationId: `deletePrefix`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}

Get prefix.

operationId: `getPrefix`

**Response** 200 → `result`

- `comment`: string **required** — A comment describing the prefix.
- `created_on`: string **required** — The creation timestamp of the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `id`: string **required** — The unique ID of the prefix.
- `modified_on`: string **required** — The last modification timestamp of the prefix.
- `prefix`: string **required** — The prefix in CIDR format.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}

Update prefix.

operationId: `updatePrefix`

**Request** (application/json)

- `comment`: string — A new comment for the prefix. Optional.
- `excluded`: boolean — Whether to exclude the prefix from protection. Optional.

**Response** 200 → `result`

- `comment`: string **required** — A comment describing the prefix.
- `created_on`: string **required** — The creation timestamp of the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `id`: string **required** — The unique ID of the prefix.
- `modified_on`: string **required** — The last modification timestamp of the prefix.
- `prefix`: string **required** — The prefix in CIDR format.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/bulk

Create multiple prefixes.

operationId: `bulkCreatePrefixes`

**Request** (application/json)

[array of]
- `comment`: string **required** — A comment describing the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `prefix`: string **required** — The prefix to add in CIDR format.

**Response** 200 → `result`

[array of]
- `comment`: string **required** — A comment describing the prefix.
- `created_on`: string **required** — The creation timestamp of the prefix.
- `excluded`: boolean **required** — Whether to exclude the prefix from protection.
- `id`: string **required** — The unique ID of the prefix.
- `modified_on`: string **required** — The last modification timestamp of the prefix.
- `prefix`: string **required** — The prefix in CIDR format.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters

Delete all SYN Protection filters.

operationId: `deleteSynProtectionFiltersForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters

List all SYN Protection filters.

operationId: `listSynProtectionFiltersForAccount` · query: `mode`, `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters

Create a SYN Protection filter.

operationId: `createSynProtectionFilter`

**Request** (application/json)

- `expression`: string **required** — The filter expression.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}

Delete SYN Protection filter.

operationId: `deleteSynProtectionFilter`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}

Get SYN Protection filter.

operationId: `getSynProtectionFilter`

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}

Update SYN Protection filter.

operationId: `updateSynProtectionFilter`

**Request** (application/json)

- `expression`: string — The new filter expression. Optional.
- `mode`: string — The new mode for the filter. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules

Delete all SYN Protection rules.

operationId: `deleteSynProtectionRulesForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules

List all SYN Protection rules.

operationId: `listSynProtectionRulesForAccount` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the SYN Protection rule.
- `id`: string **required** — The unique ID of the SYN Protection rule.
- `mitigation_type`: string **required** — The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'.
- `mode`: string **required** — The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the SYN Protection rule.
- `name`: string **required** — The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules

Create SYN Protection rule.

operationId: `createSynProtectionRule`

**Request** (application/json)

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `mitigation_type`: string — The type of mitigation. Must be one of 'challenge' or 'retransmit'. Optional. Defaults to 'challenge'.
- `mode`: string **required** — The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `name`: string **required** — The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'.

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the SYN Protection rule.
- `id`: string **required** — The unique ID of the SYN Protection rule.
- `mitigation_type`: string **required** — The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'.
- `mode`: string **required** — The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the SYN Protection rule.
- `name`: string **required** — The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}

Delete SYN Protection rule.

operationId: `deleteSynProtectionRule`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}

Get SYN Protection rule.

operationId: `getSynProtectionRule`

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the SYN Protection rule.
- `id`: string **required** — The unique ID of the SYN Protection rule.
- `mitigation_type`: string **required** — The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'.
- `mode`: string **required** — The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the SYN Protection rule.
- `name`: string **required** — The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}

Update SYN Protection rule.

operationId: `updateSynProtectionRule`

**Request** (application/json)

- `burst_sensitivity`: string — The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'.
- `mitigation_type`: string — The new mitigation type. Optional. Must be one of 'challenge' or 'retransmit'.
- `mode`: string — The new mode for SYN Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.
- `rate_sensitivity`: string — The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'.

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the SYN Protection rule.
- `id`: string **required** — The unique ID of the SYN Protection rule.
- `mitigation_type`: string **required** — The type of mitigation for SYN Protection. Must be one of 'challenge' or 'retransmit'.
- `mode`: string **required** — The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the SYN Protection rule.
- `name`: string **required** — The name of the SYN Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either the '
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the SYN Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters

Delete all TCP Flow Protection filters.

operationId: `deleteTcpFlowProtectionFiltersForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters

List all TCP Flow Protection filters.

operationId: `listTcpFlowProtectionFiltersForAccount` · query: `mode`, `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters

Create a TCP Flow Protection filter.

operationId: `createTcpFlowProtectionFilter`

**Request** (application/json)

- `expression`: string **required** — The filter expression.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}

Delete TCP Flow Protection filter.

operationId: `deleteTcpFlowProtectionFilter`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}

Get TCP Flow Protection filter.

operationId: `getTcpFlowProtectionFilter`

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}

Update TCP Flow Protection filter.

operationId: `updateTcpFlowProtectionFilter`

**Request** (application/json)

- `expression`: string — The new filter expression. Optional.
- `mode`: string — The new mode for the filter. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.

**Response** 200 → `result`

- `created_on`: string **required** — The creation timestamp of the expression filter.
- `expression`: string **required** — The filter expression.
- `id`: string **required** — The unique ID of the expression filter.
- `mode`: string **required** — The filter's mode. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the expression filter.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules

Delete all TCP Flow Protection rules.

operationId: `deleteTcpFlowProtectionRulesForAccount`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules

List all TCP Flow Protection rules.

operationId: `listTcpFlowProtectionRulesForAccount` · query: `page`, `per_page`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the TCP Flow Protection rule.
- `id`: string **required** — The unique ID of the TCP Flow Protection rule.
- `mode`: string **required** — The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the TCP Flow Protection rule.
- `name`: string **required** — The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either 
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules

Create TCP Flow Protection rule.

operationId: `createTcpFlowProtectionRule`

**Request** (application/json)

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `mode`: string **required** — The mode for the TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `name`: string **required** — The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either 
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the TCP Flow Protection rule.

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the TCP Flow Protection rule.
- `id`: string **required** — The unique ID of the TCP Flow Protection rule.
- `mode`: string **required** — The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the TCP Flow Protection rule.
- `name`: string **required** — The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either 
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}

Delete TCP Flow Protection rule.

operationId: `deleteTcpFlowProtectionRule`

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

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}

Get TCP Flow Protection rule.

operationId: `getTcpFlowProtectionRule`

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the TCP Flow Protection rule.
- `id`: string **required** — The unique ID of the TCP Flow Protection rule.
- `mode`: string **required** — The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the TCP Flow Protection rule.
- `name`: string **required** — The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either 
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}

Update TCP Flow Protection rule.

operationId: `updateTcpFlowProtectionRule`

**Request** (application/json)

- `burst_sensitivity`: string — The new burst sensitivity. Optional. Must be one of 'low', 'medium', 'high'.
- `mode`: string — The new mode for TCP Flow Protection. Optional. Must be one of 'enabled', 'disabled', 'monitoring'.
- `rate_sensitivity`: string — The new rate sensitivity. Optional. Must be one of 'low', 'medium', 'high'.

**Response** 200 → `result`

- `burst_sensitivity`: string **required** — The burst sensitivity. Must be one of 'low', 'medium', 'high'.
- `created_on`: string **required** — The creation timestamp of the TCP Flow Protection rule.
- `id`: string **required** — The unique ID of the TCP Flow Protection rule.
- `mode`: string **required** — The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
- `modified_on`: string **required** — The last modification timestamp of the TCP Flow Protection rule.
- `name`: string **required** — The name of the TCP Flow Protection rule. Value is relative to the 'scope' setting. For 'global' scope, name should be 'global'. For either 
- `rate_sensitivity`: string **required** — The rate sensitivity. Must be one of 'low', 'medium', 'high'.
- `scope`: string **required** — The scope for the TCP Flow Protection rule. Must be one of 'global', 'region', or 'datacenter'.

## GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status

Get protection status.

operationId: `getProtectionStatus`

**Response** 200 → `result`

- `enabled`: boolean **required**

## PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status

Update protection status.

operationId: `updateProtectionStatus`

**Request** (application/json)

- `enabled`: boolean **required** — Enables or disables protection.

**Response** 200 → `result`

- `enabled`: boolean **required**
