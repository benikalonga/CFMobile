# Email Sending

4 endpoints.

## GET /accounts/{account_id}/email/sending/limits

Get sending limits

operationId: `email-sending-get-sending-limits`

**Response** 200 → `result`

- `quota`: object — The resolved daily sending quota for the account. Null when the quota is not yet available.
  - `unit`: string enum: `day`, `hour` — The time period for the quota.
  - `value`: integer — The quota limit.
- `usage`: object — The account's current daily sending usage. Null when there is no resolved quota or usage is temporarily unavailable.
  - `over_quota`: boolean — Whether the account has exceeded its daily sending quota.
  - `resets_at`: string — When the current daily quota window resets. Null when there is no active window.
  - `sent`: integer — Emails sent against the daily quota in the current window.

## GET /accounts/{account_id}/email/sending/messages/{message_id}

Fetch an email message

operationId: `email-sending-get-email-message`

**Response** 200 → `result`

string

## POST /accounts/{account_id}/email/sending/send

Send an email

operationId: `email-sending-account-send-builder`

**Request** (application/json)

- `attachments`: object[] — File attachments and inline images.
  [array of]
  - `content`: string **required** — Base64-encoded content of the attachment.
  - `content_id`: string **required** — Content ID used to reference this attachment in HTML via cid: URI (e.g., <img src="cid:logo">).
  - `disposition`: string **required** enum: `inline` — Must be 'inline'. Embeds the attachment in the email body.
  - `filename`: string **required** — Filename for the attachment.
  - `type`: string **required** — MIME type of the attachment (e.g., 'image/png', 'text/plain').
- `bcc`: any
- `cc`: any
- `from`: any **required** — Sender email address. Either a plain string or an object with address and name.
- `headers`: object — Custom email headers as key-value pairs.
- `html`: string — HTML body of the email. Provide at least one of text or html (non-empty).
- `reply_to`: any — Reply-to address. Either a plain string or an object with address and name.
- `subject`: string **required** — Email subject line.
- `text`: string — Plain text body of the email. Provide at least one of text or html (non-empty).
- `to`: any — Recipient(s). Optional if cc or bcc is provided. A single email string, a named address object, or an array of either.

**Response** 200 → `result`

- `delivered`: string[] **required** — Email addresses to which the message was delivered immediately.
  [array]
- `message_id`: string **required** — Message ID of the sent email.
- `permanent_bounces`: string[] **required** — Email addresses that permanently bounced.
  [array]
- `queued`: string[] **required** — Email addresses for which delivery was queued for later.
  [array]

## POST /accounts/{account_id}/email/sending/send_raw

Send a raw MIME email

operationId: `email-sending-account-send-raw-message`

**Request** (application/json)

- `from`: string **required** — Sender email address.
- `mime_message`: string **required** — The full MIME-encoded email message. Should include standard RFC 5322 headers such as From, To, Subject, and Content-Type. The from and reci
- `recipients`: string[] **required** — List of recipient email addresses.
  [array]

**Response** 200 → `result`

- `delivered`: string[] **required** — Email addresses to which the message was delivered immediately.
  [array]
- `message_id`: string **required** — Message ID of the sent email.
- `permanent_bounces`: string[] **required** — Email addresses that permanently bounced.
  [array]
- `queued`: string[] **required** — Email addresses for which delivery was queued for later.
  [array]
