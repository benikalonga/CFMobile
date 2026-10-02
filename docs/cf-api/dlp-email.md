# DLP Email

8 endpoints.

## GET /accounts/{account_id}/dlp/email/account_mapping

Get mapping

operationId: `dlp-email-scanner-get-account-mapping`

**Response** 200 → `result`

- `addin_identifier_token`: string **required**
- `auth_requirements`: any **required**

## POST /accounts/{account_id}/dlp/email/account_mapping

Create mapping

operationId: `dlp-email-scanner-create-account-mapping`

**Request** (application/json)

- `auth_requirements`: any **required**

**Response** 200 → `result`

- `addin_identifier_token`: string **required**
- `auth_requirements`: any **required**

## GET /accounts/{account_id}/dlp/email/rules

List all email scanner rules

operationId: `dlp-email-scanner-list-all-rules`

**Response** 200 → `result`

[array of]
- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**

## PATCH /accounts/{account_id}/dlp/email/rules

Update email scanner rule priorities

operationId: `dlp-email-scanner-update-rule-priorities`

**Request** (application/json)

- `new_priorities`: object **required**

**Response** 200 → `result`

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**

## POST /accounts/{account_id}/dlp/email/rules

Create email scanner rule

operationId: `dlp-email-scanner-create-rule`

**Request** (application/json)

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**

**Response** 200 → `result`

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/email/rules/{rule_id}

Delete email scanner rule

operationId: `dlp-email-scanner-delete-rule`

**Response** 200 → `result`

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**

## GET /accounts/{account_id}/dlp/email/rules/{rule_id}

Get an email scanner rule

operationId: `dlp-email-scanner-get-rule`

**Response** 200 → `result`

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/email/rules/{rule_id}

Update email scanner rule

operationId: `dlp-email-scanner-update-rule`

**Request** (application/json)

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**

**Response** 200 → `result`

- `action`: any **required**
- `conditions`: object[] **required** — Triggered if all conditions match.
  [array of]
  - `operator`: string **required** enum: `InList`, `NotInList`, `MatchRegex`, `NotMatchRegex`
  - `selector`: string **required** enum: `Recipients`, `Sender`, `DLPProfiles`
  - `value`: any **required**
- `created_at`: string **required**
- `description`: string
- `enabled`: boolean **required**
- `name`: string **required**
- `priority`: integer **required**
- `rule_id`: string **required**
- `updated_at`: string **required**
