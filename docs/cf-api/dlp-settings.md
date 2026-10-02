# DLP Settings

8 endpoints.

## GET /accounts/{account_id}/dlp/limits

Fetch limits associated with DLP for account

operationId: `dlp-limits-get`

**Response** 200 → `result`

- `max_custom_regex_entries`: integer **required** — Maximum number of custom regex entries allowed for the account.
- `max_dataset_cells`: integer **required** — Maximum number of dataset cells allowed for the account, across all EDM and CWL datasets.
- `max_document_fingerprints`: integer **required** — Maximum number of document fingerprints allowed for the account.
- `used_custom_regex_entries`: integer **required** — Number of custom regex entries currently configured for the account.
- `used_dataset_cells`: integer **required** — Number of dataset cells currently configured for the account, across all EDM and CWL datasets. Document fingerprints do not count towards th
- `used_document_fingerprints`: integer **required** — Number of document fingerprints currently configured for the account.

## POST /accounts/{account_id}/dlp/patterns/validate

Validate a DLP regex pattern

operationId: `dlp-pattern-validate`

**Request** (application/json)

- `max_match_bytes`: integer — Maximum number of bytes that the regular expression can match.
- `regex`: string **required**

**Response** 200 → `result`

- `valid`: boolean **required**

## GET /accounts/{account_id}/dlp/payload_log

Get payload log settings

operationId: `dlp-payload-log-get`

**Response** 200 → `result`

- `masking_level`: any
- `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
- `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/payload_log

Set payload log settings

operationId: `dlp-payload-log-put`

**Request** (application/json)

- `masking_level`: any
- `public_key`: string — Base64-encoded public key for encrypting payload logs.

**Response** 200 → `result`

- `masking_level`: any
- `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
- `updated_at`: string **required**

## DELETE /accounts/{account_id}/dlp/settings

Delete (reset) DLP account-level settings to initial values.

operationId: `dlp-settings-delete`

**Response** 200 → `result`

- `ai_context_analysis`: boolean **required** — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean **required** — Whether OCR is enabled at the account level.
- `payload_logging`: object **required**
  - `masking_level`: any
  - `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
  - `updated_at`: string **required**

## GET /accounts/{account_id}/dlp/settings

Get DLP account-level settings.

operationId: `dlp-settings-get`

**Response** 200 → `result`

- `ai_context_analysis`: boolean **required** — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean **required** — Whether OCR is enabled at the account level.
- `payload_logging`: object **required**
  - `masking_level`: any
  - `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
  - `updated_at`: string **required**

## PATCH /accounts/{account_id}/dlp/settings

Partially update DLP account-level settings.

operationId: `dlp-settings-edit`

**Request** (application/json)

- `ai_context_analysis`: boolean default: `false` — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean default: `false` — Whether OCR is enabled at the account level.
- `payload_logging`: any

**Response** 200 → `result`

- `ai_context_analysis`: boolean **required** — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean **required** — Whether OCR is enabled at the account level.
- `payload_logging`: object **required**
  - `masking_level`: any
  - `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
  - `updated_at`: string **required**

## PUT /accounts/{account_id}/dlp/settings

Update DLP account-level settings (full replacement).

operationId: `dlp-settings-update`

**Request** (application/json)

- `ai_context_analysis`: boolean default: `false` — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean default: `false` — Whether OCR is enabled at the account level.
- `payload_logging`: any

**Response** 200 → `result`

- `ai_context_analysis`: boolean **required** — Whether AI context analysis is enabled at the account level.
- `ocr`: boolean **required** — Whether OCR is enabled at the account level.
- `payload_logging`: object **required**
  - `masking_level`: any
  - `public_key`: string — Base64-encoded public key for encrypting payload logs. Null when payload logging is disabled.
  - `updated_at`: string **required**
