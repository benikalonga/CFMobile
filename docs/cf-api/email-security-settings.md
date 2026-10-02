# Email Security Settings

44 endpoints.

## GET /accounts/{account_id}/email-security/settings/allow_policies

List email allow policies

operationId: `email_security_list_allow_policies` · query: `page`, `per_page`, `search`, `order`, `direction`, `is_exempt_recipient`, `is_trusted_sender`, `is_acceptable_sender`, `verify_sender`, `pattern_type`, `pattern`

**Response** 200 → `result`

[array of]
- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

## POST /accounts/{account_id}/email-security/settings/allow_policies

Create email allow policy

operationId: `email_security_create_allow_policy`

**Request** (application/json)

- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

**Response** 201 → `result`

- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

## DELETE /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}

Delete an email allow policy

operationId: `email_security_delete_allow_policy`

**Response** 200 → `result`

- `id`: string **required** — Allow policy identifier.

## GET /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}

Get an email allow policy

operationId: `email_security_get_allow_policy`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

## PATCH /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}

Update an email allow policy

operationId: `email_security_update_allow_policy`

**Request** (application/json)

- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

**Response** 200 → `result`

- `comments`: string
- `created_at`: any **required**
- `id`: any **required**
- `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
- `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
- `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
- `is_regex`: boolean
- `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
- `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
- `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
- `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

## POST /accounts/{account_id}/email-security/settings/allow_policies/batch

Batch allow policies operations

operationId: `email_security_batch_allow_policies`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Allow policy identifier.
- `patches`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
  - `id`: any **required**
- `posts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
- `puts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
  - `id`: any **required**

**Response** 200 → `result`

- `deletes`: object[]
  [array of]
  - `id`: string **required** — Allow policy identifier.
- `patches`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
- `posts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.
- `puts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any **required**
  - `id`: any **required**
  - `is_acceptable_sender`: boolean — Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.
  - `is_exempt_recipient`: boolean — Bypasses all detections for messages to this recipient.
  - `is_recipient`: boolean — Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.
  - `is_regex`: boolean
  - `is_sender`: boolean — Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.
  - `is_spoof`: boolean — Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.
  - `is_trusted_sender`: boolean — Bypasses all detections and link following for messages from this sender.
  - `last_modified`: any **required** — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `verify_sender`: boolean — Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

## GET /accounts/{account_id}/email-security/settings/block_senders

List blocked email senders

operationId: `email_security_list_blocked_senders` · query: `page`, `per_page`, `search`, `order`, `direction`, `pattern_type`, `pattern`

**Response** 200 → `result`

[array of]
- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

## POST /accounts/{account_id}/email-security/settings/block_senders

Create blocked email sender

operationId: `email_security_create_blocked_sender`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

**Response** 201 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

## DELETE /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}

Delete a blocked email sender

operationId: `email_security_delete_blocked_sender`

**Response** 200 → `result`

- `id`: string **required** — Blocked sender pattern identifier.

## GET /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}

Get a blocked email sender

operationId: `email_security_get_blocked_sender`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

## PATCH /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}

Update a blocked email sender

operationId: `email_security_update_blocked_sender`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
- `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

## POST /accounts/{account_id}/email-security/settings/block_senders/batch

Batch blocked senders operations

operationId: `email_security_batch_blocked_senders`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Blocked sender pattern identifier.
- `patches`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `id`: any **required**
- `posts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `puts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
  - `id`: any **required**

**Response** 200 → `result`

- `deletes`: object[]
  [array of]
  - `id`: string **required** — Blocked sender pattern identifier.
- `patches`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `posts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.
- `puts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_regex`: boolean
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string — The pattern value to match. The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain 
  - `pattern_type`: string enum: `EMAIL`, `DOMAIN`, `IP`, `UNKNOWN` — Type of pattern matching.

## DELETE /accounts/{account_id}/email-security/settings/domains

Unprotect multiple email domains

operationId: `email_security_delete_domains`

**Request** (application/json)

[array of]
- `id`: string **required** — Domain identifier.

**Response** 200 → `result`

[array of]
- `id`: string **required** — Domain identifier.

## GET /accounts/{account_id}/email-security/settings/domains

List protected email domains

operationId: `email_security_list_domains` · query: `page`, `per_page`, `search`, `order`, `direction`, `allowed_delivery_mode`, `domain`, `active_delivery_mode`, `integration_id`, `status`

**Response** 200 → `result`

[array of]
- `allowed_delivery_modes`: string[]
  [array]
- `authorization`: object
  - `authorized`: boolean **required**
  - `status_message`: string
  - `timestamp`: string **required**
- `created_at`: any
- `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
- `domain`: string
- `drop_dispositions`: string[]
  [array]
- `emails_processed`: object
  - `timestamp`: string **required**
  - `total_emails_processed`: integer **required**
  - `total_emails_processed_previous`: integer **required**
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `id`: string — Domain identifier.
- `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `lookback_hops`: integer
- `modified_at`: any
- `o365_tenant_id`: string
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
- `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
- `transport`: string

## POST /accounts/{account_id}/email-security/settings/domains

Add a new email domain

operationId: `email_security_create_domains`

**Request** (application/json)

- `allowed_delivery_modes`: string[] **required**
  [array]
- `domain`: string **required**
- `drop_dispositions`: string[] **required**
  [array]
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `integration_id`: string
- `ip_restrictions`: string[] **required**
  [array]
- `lookback_hops`: integer
- `regions`: string[] **required**
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `transport`: string

**Response** 201 → `result`

- `allowed_delivery_modes`: string[]
  [array]
- `authorization`: object
  - `authorized`: boolean **required**
  - `status_message`: string
  - `timestamp`: string **required**
- `created_at`: any
- `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
- `domain`: string
- `drop_dispositions`: string[]
  [array]
- `emails_processed`: object
  - `timestamp`: string **required**
  - `total_emails_processed`: integer **required**
  - `total_emails_processed_previous`: integer **required**
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `id`: string — Domain identifier.
- `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `lookback_hops`: integer
- `modified_at`: any
- `o365_tenant_id`: string
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
- `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
- `transport`: string

## DELETE /accounts/{account_id}/email-security/settings/domains/{domain_id}

Unprotect an email domain

operationId: `email_security_delete_domain`

**Response** 200 → `result`

- `id`: string **required** — Domain identifier.

## GET /accounts/{account_id}/email-security/settings/domains/{domain_id}

Get an email domain

operationId: `email_security_get_domain`

**Response** 200 → `result`

- `allowed_delivery_modes`: string[]
  [array]
- `authorization`: object
  - `authorized`: boolean **required**
  - `status_message`: string
  - `timestamp`: string **required**
- `created_at`: any
- `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
- `domain`: string
- `drop_dispositions`: string[]
  [array]
- `emails_processed`: object
  - `timestamp`: string **required**
  - `total_emails_processed`: integer **required**
  - `total_emails_processed_previous`: integer **required**
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `id`: string — Domain identifier.
- `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `lookback_hops`: integer
- `modified_at`: any
- `o365_tenant_id`: string
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
- `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
- `transport`: string

## PATCH /accounts/{account_id}/email-security/settings/domains/{domain_id}

Update an email domain

operationId: `email_security_update_domain`

**Request** (application/json)

- `allowed_delivery_modes`: string[]
  [array]
- `drop_dispositions`: string[]
  [array]
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `lookback_hops`: integer
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `transport`: string

**Response** 200 → `result`

- `allowed_delivery_modes`: string[]
  [array]
- `authorization`: object
  - `authorized`: boolean **required**
  - `status_message`: string
  - `timestamp`: string **required**
- `created_at`: any
- `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
- `domain`: string
- `drop_dispositions`: string[]
  [array]
- `emails_processed`: object
  - `timestamp`: string **required**
  - `total_emails_processed`: integer **required**
  - `total_emails_processed_previous`: integer **required**
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `id`: string — Domain identifier.
- `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `lookback_hops`: integer
- `modified_at`: any
- `o365_tenant_id`: string
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
- `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
- `transport`: string

## PUT /accounts/{account_id}/email-security/settings/domains/{domain_id}

Replace an email domain

operationId: `email_security_replace_domain`

**Request** (application/json)

- `allowed_delivery_modes`: string[] **required**
  [array]
- `drop_dispositions`: string[] **required**
  [array]
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `integration_id`: string
- `ip_restrictions`: string[] **required**
  [array]
- `lookback_hops`: integer **required**
- `regions`: string[] **required**
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `transport`: string

**Response** 200 → `result`

- `allowed_delivery_modes`: string[]
  [array]
- `authorization`: object
  - `authorized`: boolean **required**
  - `status_message`: string
  - `timestamp`: string **required**
- `created_at`: any
- `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
- `domain`: string
- `drop_dispositions`: string[]
  [array]
- `emails_processed`: object
  - `timestamp`: string **required**
  - `total_emails_processed`: integer **required**
  - `total_emails_processed_previous`: integer **required**
- `folder`: string enum: `AllItems`, `Inbox`, `null`
- `id`: string — Domain identifier.
- `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
- `integration_id`: string
- `ip_restrictions`: string[]
  [array]
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `lookback_hops`: integer
- `modified_at`: any
- `o365_tenant_id`: string
- `regions`: string[]
  [array]
- `require_tls_inbound`: boolean
- `require_tls_outbound`: boolean
- `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
- `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
- `transport`: string

## GET /accounts/{account_id}/email-security/settings/domains/{domain_id}/verification

Get domain verification details

operationId: `email_security_get_domain_verification`

**Response** 200 → `result`

- `last_checked_at`: string **required** — When the last DNS TXT check was attempted, if any.
- `status`: string **required** enum: `pending`, `active`, `failed`, `timeout`, `null`
- `txt_record_name`: string **required** — Full DNS TXT record name (e.g. `_cf-email-sec-challenge.example.com`).
- `txt_record_value`: string **required** — Token value to publish in the TXT record.

## POST /accounts/{account_id}/email-security/settings/domains/batch

Batch domain operations

operationId: `email_security_batch_domains`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Domain identifier.
- `patches`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[]
    [array]
  - `drop_dispositions`: string[]
    [array]
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[]
    [array]
  - `lookback_hops`: integer
  - `regions`: string[]
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `transport`: string
  - `id`: string **required** — Domain identifier.
- `posts`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[] **required**
    [array]
  - `domain`: string **required**
  - `drop_dispositions`: string[] **required**
    [array]
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[] **required**
    [array]
  - `lookback_hops`: integer
  - `regions`: string[] **required**
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `transport`: string
- `puts`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[] **required**
    [array]
  - `drop_dispositions`: string[] **required**
    [array]
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[] **required**
    [array]
  - `lookback_hops`: integer **required**
  - `regions`: string[] **required**
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `transport`: string
  - `id`: string **required** — Domain identifier.

**Response** 200 → `result`

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Domain identifier.
- `patches`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[]
    [array]
  - `authorization`: object
    - `authorized`: boolean **required**
    - `status_message`: string
    - `timestamp`: string **required**
  - `created_at`: any
  - `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
  - `domain`: string
  - `drop_dispositions`: string[]
    [array]
  - `emails_processed`: object
    - `timestamp`: string **required**
    - `total_emails_processed`: integer **required**
    - `total_emails_processed_previous`: integer **required**
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `id`: string — Domain identifier.
  - `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[]
    [array]
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `lookback_hops`: integer
  - `modified_at`: any
  - `o365_tenant_id`: string
  - `regions`: string[]
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
  - `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
  - `transport`: string
- `posts`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[]
    [array]
  - `authorization`: object
    - `authorized`: boolean **required**
    - `status_message`: string
    - `timestamp`: string **required**
  - `created_at`: any
  - `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
  - `domain`: string
  - `drop_dispositions`: string[]
    [array]
  - `emails_processed`: object
    - `timestamp`: string **required**
    - `total_emails_processed`: integer **required**
    - `total_emails_processed_previous`: integer **required**
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `id`: string — Domain identifier.
  - `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[]
    [array]
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `lookback_hops`: integer
  - `modified_at`: any
  - `o365_tenant_id`: string
  - `regions`: string[]
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
  - `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
  - `transport`: string
- `puts`: object[] **required**
  [array of]
  - `allowed_delivery_modes`: string[]
    [array]
  - `authorization`: object
    - `authorized`: boolean **required**
    - `status_message`: string
    - `timestamp`: string **required**
  - `created_at`: any
  - `dmarc_status`: string enum: `none`, `good`, `invalid`, `null`
  - `domain`: string
  - `drop_dispositions`: string[]
    [array]
  - `emails_processed`: object
    - `timestamp`: string **required**
    - `total_emails_processed`: integer **required**
    - `total_emails_processed_previous`: integer **required**
  - `folder`: string enum: `AllItems`, `Inbox`, `null`
  - `id`: string — Domain identifier.
  - `inbox_provider`: string enum: `Microsoft`, `Google`, `null`
  - `integration_id`: string
  - `ip_restrictions`: string[]
    [array]
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `lookback_hops`: integer
  - `modified_at`: any
  - `o365_tenant_id`: string
  - `regions`: string[]
    [array]
  - `require_tls_inbound`: boolean
  - `require_tls_outbound`: boolean
  - `spf_status`: string enum: `none`, `good`, `neutral`, `open`, `invalid`, `null`
  - `status`: string enum: `pending`, `active`, `failed`, `timeout`, `null`
  - `transport`: string

## GET /accounts/{account_id}/email-security/settings/impersonation_registry

List entries in impersonation registry

operationId: `email_security_list_impersonation_registry` · query: `page`, `per_page`, `search`, `order`, `direction`, `provenance`

**Response** 200 → `result`

[array of]
- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

## POST /accounts/{account_id}/email-security/settings/impersonation_registry

Create impersonation registry entry

operationId: `email_security_create_impersonation_registry`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

**Response** 201 → `result`

- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

## DELETE /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}

Delete an impersonation registry entry

operationId: `email_security_delete_impersonation_registry`

**Response** 200 → `result`

- `id`: string **required** — Impersonation registry entry identifier.

## GET /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}

Get an impersonation registry entry

operationId: `email_security_get_impersonation_registry`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

## PATCH /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}

Update an impersonation registry entry

operationId: `email_security_update_impersonation_registry`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `directory_id`: integer
- `directory_node_id`: integer
- `email`: string
- `external_directory_node_id`: string
- `id`: any
- `is_email_regex`: boolean
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `name`: string
- `provenance`: string enum: `A1S_INTERNAL`, `SNOOPY-CASB_OFFICE_365`, `SNOOPY-OFFICE_365`, `SNOOPY-GOOGLE_DIRECTORY`

## GET /accounts/{account_id}/email-security/settings/sending_domain_restrictions

List sending domain restrictions

operationId: `email_security_list_sending_domain_restrictions` · query: `page`, `per_page`, `search`, `order`, `direction`

**Response** 200 → `result`

[array of]
- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

## POST /accounts/{account_id}/email-security/settings/sending_domain_restrictions

Create a sending domain restriction

operationId: `email_security_create_sending_domain_restriction`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

**Response** 201 → `result`

- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

## DELETE /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}

Delete a sending domain restriction

operationId: `email_security_delete_sending_domain_restriction`

**Response** 200 → `result`

- `id`: string **required** — Sending domain restriction identifier.

## GET /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}

Get a sending domain restriction

operationId: `email_security_get_sending_domain_restriction`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

## PATCH /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}

Update a sending domain restriction

operationId: `email_security_update_sending_domain_restriction`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `domain`: string — Domain that requires TLS enforcement.
- `exclude`: string[] — Subdomains to exempt from TLS requirements.
  [array]
- `id`: any
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any

## POST /accounts/{account_id}/email-security/settings/sending_domain_restrictions/batch

Batch sending domain restrictions operations

operationId: `email_security_batch_sending_domain_restrictions`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Sending domain restriction identifier.

**Response** 200 → `result`

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Sending domain restriction identifier.

## GET /accounts/{account_id}/email-security/settings/trusted_domains

List trusted email domains

operationId: `email_security_list_trusted_domains` · query: `page`, `per_page`, `search`, `order`, `direction`, `is_recent`, `is_similarity`, `pattern`

**Response** 200 → `result`

[array of]
- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

## POST /accounts/{account_id}/email-security/settings/trusted_domains

Create trusted email domain

operationId: `email_security_create_trusted_domain`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

**Response** 201 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

## DELETE /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}

Delete a trusted email domain

operationId: `email_security_delete_trusted_domain`

**Response** 200 → `result`

- `id`: string **required** — Trusted domain identifier.

## GET /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}

Get a trusted email domain

operationId: `email_security_get_trusted_domain`

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

## PATCH /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}

Update a trusted email domain

operationId: `email_security_update_trusted_domain`

**Request** (application/json)

- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

**Response** 200 → `result`

- `comments`: string
- `created_at`: any
- `id`: any
- `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
- `is_regex`: boolean
- `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
- `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: any
- `pattern`: string

## POST /accounts/{account_id}/email-security/settings/trusted_domains/batch

Batch trusted domains operations

operationId: `email_security_batch_trusted_domains`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — Trusted domain identifier.
- `patches`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string
  - `id`: any **required**
- `posts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string
- `puts`: object[] **required**
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string
  - `id`: any **required**

**Response** 200 → `result`

- `deletes`: object[]
  [array of]
  - `id`: string **required** — Trusted domain identifier.
- `patches`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string
- `posts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string
- `puts`: object[]
  [array of]
  - `comments`: string
  - `created_at`: any
  - `id`: any
  - `is_recent`: boolean — Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.
  - `is_regex`: boolean
  - `is_similarity`: boolean — Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a
  - `last_modified`: any — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: any
  - `pattern`: string

## GET /accounts/{account_id}/email-security/settings/url_ignore_patterns

List URL ignore patterns

operationId: `email_security_list_url_ignore_patterns` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `comments`: string — Optional note describing the reason for the ignore pattern.
- `created_at`: string **required**
- `id`: any **required**
- `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: string
- `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.

## POST /accounts/{account_id}/email-security/settings/url_ignore_patterns

Create a URL ignore pattern

operationId: `email_security_create_url_ignore_pattern`

**Request** (application/json)

- `comments`: string — Optional note describing the reason for the ignore pattern.
- `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.

**Response** 201 → `result`

- `comments`: string — Optional note describing the reason for the ignore pattern.
- `created_at`: string **required**
- `id`: any **required**
- `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: string
- `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.

## DELETE /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}

Delete a URL ignore pattern

operationId: `email_security_delete_url_ignore_pattern`

**Response** 200 → `result`

- `id`: string **required** — URL ignore pattern identifier.

## GET /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}

Get a URL ignore pattern

operationId: `email_security_get_url_ignore_pattern`

**Response** 200 → `result`

- `comments`: string — Optional note describing the reason for the ignore pattern.
- `created_at`: string **required**
- `id`: any **required**
- `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: string
- `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.

## PATCH /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}

Update a URL ignore pattern

operationId: `email_security_update_url_ignore_pattern`

**Request** (application/json)

- `comments`: string — Optional note describing the reason for the ignore pattern.
- `pattern`: string — Regular expression identifying URLs to exempt from rewriting.

**Response** 200 → `result`

- `comments`: string — Optional note describing the reason for the ignore pattern.
- `created_at`: string **required**
- `id`: any **required**
- `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
- `modified_at`: string
- `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.

## POST /accounts/{account_id}/email-security/settings/url_ignore_patterns/batch

Batch URL ignore patterns

operationId: `email_security_batch_url_ignore_patterns`

**Request** (application/json)

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — URL ignore pattern identifier.
- `patches`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `pattern`: string — Regular expression identifying URLs to exempt from rewriting.
  - `id`: any **required**
- `posts`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.
- `puts`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.
  - `id`: any **required**

**Response** 200 → `result`

- `deletes`: object[] **required**
  [array of]
  - `id`: string **required** — URL ignore pattern identifier.
- `patches`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `created_at`: string **required**
  - `id`: any **required**
  - `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: string
  - `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.
- `posts`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `created_at`: string **required**
  - `id`: any **required**
  - `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: string
  - `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.
- `puts`: object[] **required**
  [array of]
  - `comments`: string — Optional note describing the reason for the ignore pattern.
  - `created_at`: string **required**
  - `id`: any **required**
  - `last_modified`: string — Deprecated, use `modified_at` instead. End of life: November 1, 2026.
  - `modified_at`: string
  - `pattern`: string **required** — Regular expression identifying URLs to exempt from rewriting.
