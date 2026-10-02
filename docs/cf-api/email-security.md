# Email Security

20 endpoints.

## GET /accounts/{account_id}/email-security/investigate

Search email messages

operationId: `email_security_investigate` · query: `start`, `end`, `query`, `detections_only`, `final_disposition`, `metric`, `message_action`, `recipient`, `sender`, `alert_id`, `domain`, `message_id`, `subject`, `delivery_status`, `cursor`, `per_page`, `page`

**Response** 200 → `result`

[array of]
- `action_log`: object[] **required** — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  [array of]
  - `completed_at`: string **required** — Timestamp when action completed.
  - `completed_timestamp`: string — Deprecated, use `completed_at` instead. End of life: November 1, 2026.
  - `operation`: string **required** enum: `MOVE`, `RELEASE`, `RECLASSIFY`, `SUBMISSION`, `QUARANTINE_RELEASE`, `PREVIEW` — Type of action performed.
  - `properties`: object — Additional properties for the action.
    - `folder`: string — Target folder for move operations.
    - `requested_by`: string — User who requested the action.
  - `status`: string — Status of the action.
- `alert_id`: string
- `client_recipients`: string[] **required**
  [array]
- `delivery_mode`: string enum: `DIRECT`, `BCC`, `JOURNAL`, `REVIEW_SUBMISSION`, `DMARC_UNVERIFIED`, `DMARC_FAILURE_REPORT`, `DMARC_AGGREGATE_REPORT`, `THREAT_INTEL_SUBMISSION`
- `delivery_status`: string[]
  [array]
- `detection_reasons`: string[] **required**
  [array]
- `edf_hash`: string
- `envelope_from`: string
- `envelope_to`: string[]
  [array]
- `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `findings`: object[] — Deprecated, use the `findings` field from `GET /investigate/{investigate_id}/detections` instead. End of life: November 1, 2026. Detection f
  [array of]
  - `attachment`: string
  - `detail`: string
  - `detection`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `field`: string
  - `name`: string
  - `portion`: string
  - `reason`: string
  - `score`: number
  - `value`: string
- `from`: string
- `from_name`: string
- `htmltext_structure_hash`: string
- `id`: any **required**
- `is_phish_submission`: boolean **required**
- `is_quarantined`: boolean **required**
- `message_id`: string
- `post_delivery_operations`: string[] — Post-delivery operations performed on this message.
  [array]
- `postfix_id`: string **required** — The identifier of the message.
- `postfix_id_outbound`: string
- `properties`: object **required** — Message processing properties.
  - `allowlisted_pattern`: string — Pattern that allowlisted this message.
  - `allowlisted_pattern_type`: string enum: `quarantine_release`, `acceptable_sender`, `allowed_sender`, `allowed_recipient`, `domain_similarity`, `domain_recency`, `managed_acceptable_sender`, `outbound_ndr` — Type of allowlist pattern.
  - `blocklisted_message`: boolean — Whether message was blocklisted.
  - `blocklisted_pattern`: string — Pattern that blocklisted this message.
  - `whitelisted_pattern_type`: string enum: `quarantine_release`, `acceptable_sender`, `allowed_sender`, `allowed_recipient`, `domain_similarity`, `domain_recency`, `managed_acceptable_sender`, `outbound_ndr` — Legacy field for allowlist pattern type.
- `replyto`: string
- `scanned_at`: string — When the message was scanned (UTC).
- `sent_at`: string — When the message was sent (UTC).
- `sent_date`: string
- `smtp_helo_server_ip`: string
- `smtp_previous_hop_ip`: string
- `subject`: string
- `threat_categories`: string[]
  [array]
- `to`: string[]
  [array]
- `to_name`: string[]
  [array]
- `ts`: string **required** — Deprecated, use `scanned_at` instead. End of life: November 1, 2026.
- `validation`: object
  - `comment`: string
  - `dkim`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `dmarc`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `spf`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
- `x_originating_ip`: string

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}

Get message details

operationId: `email_security_get_message` · query: `submission`

**Response** 200 → `result`

- `action_log`: object[] **required** — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  [array of]
  - `completed_at`: string **required** — Timestamp when action completed.
  - `completed_timestamp`: string — Deprecated, use `completed_at` instead. End of life: November 1, 2026.
  - `operation`: string **required** enum: `MOVE`, `RELEASE`, `RECLASSIFY`, `SUBMISSION`, `QUARANTINE_RELEASE`, `PREVIEW` — Type of action performed.
  - `properties`: object — Additional properties for the action.
    - `folder`: string — Target folder for move operations.
    - `requested_by`: string — User who requested the action.
  - `status`: string — Status of the action.
- `alert_id`: string
- `client_recipients`: string[] **required**
  [array]
- `delivery_mode`: string enum: `DIRECT`, `BCC`, `JOURNAL`, `REVIEW_SUBMISSION`, `DMARC_UNVERIFIED`, `DMARC_FAILURE_REPORT`, `DMARC_AGGREGATE_REPORT`, `THREAT_INTEL_SUBMISSION`
- `delivery_status`: string[]
  [array]
- `detection_reasons`: string[] **required**
  [array]
- `edf_hash`: string
- `envelope_from`: string
- `envelope_to`: string[]
  [array]
- `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `findings`: object[] — Deprecated, use the `findings` field from `GET /investigate/{investigate_id}/detections` instead. End of life: November 1, 2026. Detection f
  [array of]
  - `attachment`: string
  - `detail`: string
  - `detection`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `field`: string
  - `name`: string
  - `portion`: string
  - `reason`: string
  - `score`: number
  - `value`: string
- `from`: string
- `from_name`: string
- `htmltext_structure_hash`: string
- `id`: any **required**
- `is_phish_submission`: boolean **required**
- `is_quarantined`: boolean **required**
- `message_id`: string
- `post_delivery_operations`: string[] — Post-delivery operations performed on this message.
  [array]
- `postfix_id`: string **required** — The identifier of the message.
- `postfix_id_outbound`: string
- `properties`: object **required** — Message processing properties.
  - `allowlisted_pattern`: string — Pattern that allowlisted this message.
  - `allowlisted_pattern_type`: string enum: `quarantine_release`, `acceptable_sender`, `allowed_sender`, `allowed_recipient`, `domain_similarity`, `domain_recency`, `managed_acceptable_sender`, `outbound_ndr` — Type of allowlist pattern.
  - `blocklisted_message`: boolean — Whether message was blocklisted.
  - `blocklisted_pattern`: string — Pattern that blocklisted this message.
  - `whitelisted_pattern_type`: string enum: `quarantine_release`, `acceptable_sender`, `allowed_sender`, `allowed_recipient`, `domain_similarity`, `domain_recency`, `managed_acceptable_sender`, `outbound_ndr` — Legacy field for allowlist pattern type.
- `replyto`: string
- `scanned_at`: string — When the message was scanned (UTC).
- `sent_at`: string — When the message was sent (UTC).
- `sent_date`: string
- `smtp_helo_server_ip`: string
- `smtp_previous_hop_ip`: string
- `subject`: string
- `threat_categories`: string[]
  [array]
- `to`: string[]
  [array]
- `to_name`: string[]
  [array]
- `ts`: string **required** — Deprecated, use `scanned_at` instead. End of life: November 1, 2026.
- `validation`: object
  - `comment`: string
  - `dkim`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `dmarc`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `spf`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
- `x_originating_ip`: string

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}/action_log

Get action log for a message

operationId: `email_security_get_message_action_log`

**Response** 200 → `result`

[array of]
- `completed_at`: string — Timestamp when the action completed.
- `operation`: string **required** enum: `PREVIEW`, `QUARANTINE_RELEASE`, `SUBMISSION`, `MOVE`
- `properties`: object
- `started_at`: string — Timestamp when the action was initiated.
- `status`: string
- `success`: boolean

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}/detections

Get message detection details

operationId: `email_security_get_message_detections`

**Response** 200 → `result`

- `action`: string **required**
- `attachments`: object[] **required**
  [array of]
  - `content_type`: string — MIME type of the attachment.
  - `detection`: string — Detection result for this attachment.
  - `encrypted`: boolean — Whether the attachment is encrypted.
  - `filename`: string — Name of the attached file.
  - `md5`: string — MD5 hash of the attachment.
  - `name`: string — Attachment name (alternative to filename).
  - `sha1`: string — SHA1 hash of the attachment.
  - `sha256`: string — SHA256 hash of the attachment.
  - `size`: integer **required** — Size of the attachment in bytes.
- `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `findings`: object[] **required**
  [array of]
  - `attachment`: string
  - `detail`: string
  - `detection`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `field`: string
  - `name`: string
  - `portion`: string
  - `reason`: string
  - `score`: number
  - `value`: string
- `headers`: object[] **required**
  [array of]
  - `name`: string **required**
  - `value`: string **required**
- `links`: object[] **required**
  [array of]
  - `href`: string **required**
  - `text`: string
- `sender_info`: object **required**
  - `as_name`: string — The name of the autonomous system.
  - `as_number`: integer — The number of the autonomous system.
  - `geo`: string
  - `ip`: string
  - `pld`: string
- `threat_categories`: object[] **required**
  [array of]
  - `description`: string
  - `id`: integer
  - `name`: string
- `validation`: object **required**
  - `comment`: string
  - `dkim`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `dmarc`: string enum: `pass`, `neutral`, `fail`, `error`, `none`
  - `spf`: string enum: `pass`, `neutral`, `fail`, `error`, `none`

## POST /accounts/{account_id}/email-security/investigate/{investigate_id}/move

Move a message

operationId: `email_security_post_message_move`

**Request** (application/json)

- `destination`: string **required** enum: `Inbox`, `JunkEmail`, `DeletedItems`, `RecoverableItemsDeletions`, `RecoverableItemsPurges`
- `expected_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`

**Response** 200 → `result`

[array of]
- `completed_at`: string — When the move operation completed (UTC).
- `completed_timestamp`: string — Deprecated, use `completed_at` instead. End of life: November 1, 2026.
- `destination`: string — Destination folder for the message.
- `item_count`: integer — Number of items moved. End of life: November 1, 2026.
- `message_id`: string — Message identifier.
- `operation`: string — Type of operation performed.
- `recipient`: string — Recipient email address.
- `status`: string — Operation status.
- `success`: boolean **required** — Whether the operation succeeded.

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}/preview

Get email preview

operationId: `email_security_get_message_preview`

**Response** 200 → `result`

- `screenshot`: string **required** — A base64 encoded PNG image of the email.

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}/raw

Get raw email content

operationId: `email_security_get_message_raw`

**Response** 200 → `result`

- `raw`: string **required** — A UTF-8 encoded eml file of the email.

## POST /accounts/{account_id}/email-security/investigate/{investigate_id}/reclassify

Change email classification

operationId: `email_security_post_reclassify`

**Request** (application/json)

- `eml_content`: string — Base64 encoded content of the EML file.
- `escalated_submission_id`: string
- `expected_disposition`: string **required** enum: `NONE`, `BULK`, `MALICIOUS`, `SPAM`, `SPOOF`, `SUSPICIOUS`

**Response** 202 → `result`

object

## GET /accounts/{account_id}/email-security/investigate/{investigate_id}/trace

Get email trace

operationId: `email_security_get_message_trace`

**Response** 200 → `result`

- `inbound`: object **required**
  - `lines`: object[]
    [array of]
    - `lineno`: integer — Line number in the trace log.
    - `logged_at`: string
    - `message`: string
    - `ts`: string — Deprecated, use `logged_at` instead. End of life: November 1, 2026.
  - `pending`: boolean
- `outbound`: object **required**
  - `lines`: object[]
    [array of]
    - `lineno`: integer — Line number in the trace log.
    - `logged_at`: string
    - `message`: string
    - `ts`: string — Deprecated, use `logged_at` instead. End of life: November 1, 2026.
  - `pending`: boolean

## GET /accounts/{account_id}/email-security/investigate/bulk

List bulk action jobs

operationId: `email_security_get_bulk_jobs` · query: `page`, `per_page`, `action_type`, `status`

**Response** 200 → `result`

[array of]
- `action_params`: any **required**
- `action_type`: string **required** enum: `MOVE`, `RELEASE`
- `comment`: string
- `completed_at`: string
- `created_at`: string **required**
- `job_id`: string **required**
- `messages_failed`: integer **required**
- `messages_pending`: integer **required**
- `messages_successful`: integer **required**
- `search_params`: object **required**
  - `action_log`: boolean default: `false` — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  - `alert_id`: string
  - `delivery_status`: string enum: `delivered`, `moved`, `quarantined`, `rejected`, `deferred`, `bounced`, `queued` — Delivery status of the message.
  - `detections_only`: boolean default: `true`
  - `domain`: string
  - `end`: string — End of search date range.
  - `exact_subject`: string
  - `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `message_action`: string enum: `PREVIEW`, `QUARANTINE_RELEASED`, `MOVED`
  - `message_id`: string
  - `metric`: string
  - `query`: string
  - `recipient`: string
  - `sender`: string
  - `start`: string — Beginning of search date range.
  - `subject`: string
  - `submissions`: boolean default: `false`
- `started_at`: string
- `status`: string **required** enum: `PENDING`, `DISCOVERING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `SKIPPED`
- `status_message`: string
- `total_messages_discovered`: integer **required**

## POST /accounts/{account_id}/email-security/investigate/bulk

Create a bulk action job

operationId: `email_security_create_bulk_job`

**Request** (application/json)

- `action`: string **required** enum: `MOVE`, `RELEASE`
- `comment`: string
- `destination`: string enum: `Inbox`, `JunkEmail`, `DeletedItems`, `RecoverableItemsDeletions`, `RecoverableItemsPurges`
- `expected_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `search_params`: object **required**
  - `action_log`: boolean default: `false` — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  - `alert_id`: string
  - `delivery_status`: string enum: `delivered`, `moved`, `quarantined`, `rejected`, `deferred`, `bounced`, `queued` — Delivery status of the message.
  - `detections_only`: boolean default: `true`
  - `domain`: string
  - `end`: string — End of search date range.
  - `exact_subject`: string
  - `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `message_action`: string enum: `PREVIEW`, `QUARANTINE_RELEASED`, `MOVED`
  - `message_id`: string
  - `metric`: string
  - `query`: string
  - `recipient`: string
  - `sender`: string
  - `start`: string — Beginning of search date range.
  - `subject`: string
  - `submissions`: boolean default: `false`

**Response** 201 → `result`

- `action_params`: any **required**
- `action_type`: string **required** enum: `MOVE`, `RELEASE`
- `comment`: string
- `completed_at`: string
- `created_at`: string **required**
- `job_id`: string **required**
- `messages_failed`: integer **required**
- `messages_pending`: integer **required**
- `messages_successful`: integer **required**
- `search_params`: object **required**
  - `action_log`: boolean default: `false` — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  - `alert_id`: string
  - `delivery_status`: string enum: `delivered`, `moved`, `quarantined`, `rejected`, `deferred`, `bounced`, `queued` — Delivery status of the message.
  - `detections_only`: boolean default: `true`
  - `domain`: string
  - `end`: string — End of search date range.
  - `exact_subject`: string
  - `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `message_action`: string enum: `PREVIEW`, `QUARANTINE_RELEASED`, `MOVED`
  - `message_id`: string
  - `metric`: string
  - `query`: string
  - `recipient`: string
  - `sender`: string
  - `start`: string — Beginning of search date range.
  - `subject`: string
  - `submissions`: boolean default: `false`
- `started_at`: string
- `status`: string **required** enum: `PENDING`, `DISCOVERING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `SKIPPED`
- `status_message`: string
- `total_messages_discovered`: integer **required**

## DELETE /accounts/{account_id}/email-security/investigate/bulk/{job_id}

Delete a bulk action job

operationId: `email_security_delete_bulk_job`

**Response** 200 → `result`

- `id`: string **required**

## GET /accounts/{account_id}/email-security/investigate/bulk/{job_id}

Get bulk action job details

operationId: `email_security_get_bulk_job`

**Response** 200 → `result`

- `action_params`: any **required**
- `action_type`: string **required** enum: `MOVE`, `RELEASE`
- `comment`: string
- `completed_at`: string
- `created_at`: string **required**
- `job_id`: string **required**
- `messages_failed`: integer **required**
- `messages_pending`: integer **required**
- `messages_successful`: integer **required**
- `search_params`: object **required**
  - `action_log`: boolean default: `false` — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  - `alert_id`: string
  - `delivery_status`: string enum: `delivered`, `moved`, `quarantined`, `rejected`, `deferred`, `bounced`, `queued` — Delivery status of the message.
  - `detections_only`: boolean default: `true`
  - `domain`: string
  - `end`: string — End of search date range.
  - `exact_subject`: string
  - `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `message_action`: string enum: `PREVIEW`, `QUARANTINE_RELEASED`, `MOVED`
  - `message_id`: string
  - `metric`: string
  - `query`: string
  - `recipient`: string
  - `sender`: string
  - `start`: string — Beginning of search date range.
  - `subject`: string
  - `submissions`: boolean default: `false`
- `started_at`: string
- `status`: string **required** enum: `PENDING`, `DISCOVERING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `SKIPPED`
- `status_message`: string
- `total_messages_discovered`: integer **required**

## POST /accounts/{account_id}/email-security/investigate/bulk/{job_id}/cancel

Cancel a bulk action job

operationId: `email_security_cancel_bulk_job`

**Response** 200 → `result`

- `action_params`: any **required**
- `action_type`: string **required** enum: `MOVE`, `RELEASE`
- `comment`: string
- `completed_at`: string
- `created_at`: string **required**
- `job_id`: string **required**
- `messages_failed`: integer **required**
- `messages_pending`: integer **required**
- `messages_successful`: integer **required**
- `search_params`: object **required**
  - `action_log`: boolean default: `false` — Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026.
  - `alert_id`: string
  - `delivery_status`: string enum: `delivered`, `moved`, `quarantined`, `rejected`, `deferred`, `bounced`, `queued` — Delivery status of the message.
  - `detections_only`: boolean default: `true`
  - `domain`: string
  - `end`: string — End of search date range.
  - `exact_subject`: string
  - `final_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
  - `message_action`: string enum: `PREVIEW`, `QUARANTINE_RELEASED`, `MOVED`
  - `message_id`: string
  - `metric`: string
  - `query`: string
  - `recipient`: string
  - `sender`: string
  - `start`: string — Beginning of search date range.
  - `subject`: string
  - `submissions`: boolean default: `false`
- `started_at`: string
- `status`: string **required** enum: `PENDING`, `DISCOVERING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `SKIPPED`
- `status_message`: string
- `total_messages_discovered`: integer **required**

## GET /accounts/{account_id}/email-security/investigate/bulk/{job_id}/messages

List messages for a bulk action job

operationId: `email_security_get_bulk_job_messages` · query: `page`, `per_page`, `status`

**Response** 200 → `result`

[array of]
- `action_params`: any **required**
- `action_type`: string **required** enum: `MOVE`, `RELEASE`
- `alert_id`: string
- `created_at`: string **required**
- `email_message_id`: string
- `message_id`: string **required**
- `postfix_id`: string **required**
- `processed_at`: string
- `retry_after`: string — When to retry the action if it failed.
- `retry_count`: integer **required**
- `status`: string **required** enum: `PENDING`, `DISCOVERING`, `PROCESSING`, `COMPLETED`, `FAILED`, `CANCELLED`, `SKIPPED`
- `status_message`: string

## POST /accounts/{account_id}/email-security/investigate/move

Move multiple messages

operationId: `email_security_post_bulk_move`

**Request** (application/json)

- `destination`: string **required** enum: `Inbox`, `JunkEmail`, `DeletedItems`, `RecoverableItemsDeletions`, `RecoverableItemsPurges`
- `expected_disposition`: string enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `ids`: string[] — List of message IDs to move.
  [array]
- `postfix_ids`: string[] — Deprecated, use `ids` instead. End of life: November 1, 2026.
  [array]

**Response** 200 → `result`

[array of]
- `completed_at`: string — When the move operation completed (UTC).
- `completed_timestamp`: string — Deprecated, use `completed_at` instead. End of life: November 1, 2026.
- `destination`: string — Destination folder for the message.
- `item_count`: integer — Number of items moved. End of life: November 1, 2026.
- `message_id`: string — Message identifier.
- `operation`: string — Type of operation performed.
- `recipient`: string — Recipient email address.
- `status`: string — Operation status.
- `success`: boolean **required** — Whether the operation succeeded.

## POST /accounts/{account_id}/email-security/investigate/preview

Preview for non-detection messages

operationId: `email_security_post_preview`

**Request** (application/json)

- `postfix_id`: string **required** — The identifier of the message.

**Response** 200 → `result`

- `screenshot`: string **required** — A base64 encoded PNG image of the email.

## POST /accounts/{account_id}/email-security/investigate/release

Release messages from quarantine

operationId: `email_security_post_release`

**Request** (application/json)

[array of]
string

**Response** 200 → `result`

[array of]
- `delivered`: string[]
  [array]
- `failed`: string[]
  [array]
- `id`: any **required**
- `postfix_id`: any — Deprecated, use `id` instead. End of life: November 1, 2026.
- `undelivered`: string[]
  [array]

## GET /accounts/{account_id}/email-security/phishguard/reports

Get PhishGuard reports

operationId: `email_security_get_phishguard_reports` · query: `start`, `end`, `from_date`, `to_date`

**Response** 200 → `result`

[array of]
- `content`: string **required**
- `created_at`: string
- `disposition`: string **required** enum: `MALICIOUS`, `MALICIOUS-BEC`, `SUSPICIOUS`, `SPOOF`, `SPAM`, `BULK`, `ENCRYPTED`, `EXTERNAL`
- `fields`: object **required**
  - `from`: string
  - `occurred_at`: string
  - `postfix_id`: string
  - `to`: string[] **required**
    [array]
  - `ts`: string — Deprecated, use `occurred_at` instead.
- `id`: integer **required**
- `priority`: string **required**
- `tags`: object[]
  [array of]
  - `category`: string **required**
  - `value`: string **required**
- `title`: string **required**
- `ts`: string — Deprecated, use `created_at` instead.
- `updated_at`: string

## GET /accounts/{account_id}/email-security/submissions

Get reclassify submissions

operationId: `email_security_submissions` · query: `start`, `end`, `type`, `submission_id`, `original_disposition`, `requested_disposition`, `outcome_disposition`, `status`, `query`, `escalated_from_user`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `customer_status`: string enum: `escalated`, `reviewed`, `unreviewed`
- `escalated_as`: string
- `escalated_at`: string
- `escalated_by`: string
- `escalated_submission_id`: string
- `original_disposition`: string
- `original_edf_hash`: string
- `original_postfix_id`: string — The postfix ID of the original message that was submitted.
- `outcome`: string
- `outcome_disposition`: string
- `requested_at`: string **required** — When the submission was requested (UTC).
- `requested_by`: string
- `requested_disposition`: string
- `requested_ts`: string — Deprecated, use `requested_at` instead.
- `status`: string
- `subject`: string
- `submission_id`: string **required**
- `type`: string enum: `Team`, `User` — Indicates whether a team member or an end user created the submission.
