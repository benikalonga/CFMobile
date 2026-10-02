# AI Gateway

13 endpoints.

## GET /accounts/{account_id}/ai-gateway/billing/credit-balance

Get credit balance

operationId: `aig-billing-get-credit-balance`

**Response** 200 → `result`

- `balance`: number **required**
- `first_topup_success`: boolean
- `has_default_payment_method`: boolean **required**
- `payment_method`: object **required**
  - `brand`: string
  - `last4`: string
- `topup_config`: object **required**
  - `amount`: number **required**
  - `disabledReason`: string **required**
  - `error`: string **required**
  - `lastFailedAt`: number **required**
  - `threshold`: number **required**

## GET /accounts/{account_id}/ai-gateway/billing/invoice-history

Get invoice history

operationId: `aig-billing-get-invoice-history` · query: `type`

**Response** 200 → `result`

- `invoices`: object[] **required**
  [array of]
  - `amount_due`: number **required**
  - `amount_paid`: number **required**
  - `amount_remaining`: number **required**
  - `attempt_count`: number
  - `attempted`: boolean
  - `auto_advance`: boolean
  - `created`: number
  - `created_by`: string
  - `currency`: string **required**
  - `description`: string
  - `id`: string
  - `invoice_origin`: string
  - `invoice_pdf`: string
  - `status`: string
- `pagination`: object **required**
  - `has_more`: boolean **required**
  - `page`: number **required**
  - `per_page`: number **required**
  - `total_count`: number **required**

## GET /accounts/{account_id}/ai-gateway/billing/invoice-preview

Get invoice preview

operationId: `aig-billing-get-invoice-preview`

**Response** 200 → `result`

- `amount_due`: number **required**
- `amount_paid`: number **required**
- `amount_remaining`: number **required**
- `currency`: string **required**
- `id`: string **required**
- `invoice_lines`: object[] **required**
  [array of]
  - `amount`: number **required**
  - `currency`: string **required**
  - `description`: string **required**
  - `period`: object **required**
    - `end`: number **required**
    - `start`: number **required**
  - `pretax_credit_amounts`: object[]
    [array of]
    - `amount`: number **required**
    - `credit_balance_transaction`: string
    - `discount`: string
    - `type`: string **required**
  - `pricing`: object **required**
    - `unit_amount_decimal`: string **required**
  - `quantity`: number **required**
- `period_end`: number **required**
- `period_start`: number **required**
- `status`: string **required** enum: `draft`, `open`, `paid`, `uncollectible`, `void`

## DELETE /accounts/{account_id}/ai-gateway/billing/spending-limit

Delete spending limit

operationId: `aig-billing-delete-spending-limit`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/ai-gateway/billing/spending-limit

Get spending limit

operationId: `aig-billing-get-spending-limit`

**Response** 200 → `result`

- `config`: object **required**
  - `amount`: number **required**
  - `duration`: string **required**
  - `strategy`: string **required**
- `enabled`: boolean **required**

## POST /accounts/{account_id}/ai-gateway/billing/spending-limit

Set spending limit (deprecated)

operationId: `aig-billing-set-spending-limit`

**Request** (application/json)

- `amount`: integer **required** — Spending limit amount in cents (min 100).
- `duration`: string **required** enum: `daily`, `weekly`, `monthly` — Spending limit duration.
- `strategy`: string **required** enum: `fixed`, `sliding` — Spending limit strategy.

**Response** 201 → `result`

object

## POST /accounts/{account_id}/ai-gateway/billing/topup

Create a top-up

operationId: `aig-billing-create-topup`

**Request** (application/json)

- `amount`: integer **required** — Top-up amount in cents (min 1000).

**Response** 200 → `result`

- `brand`: string — Card brand (visa, mastercard, etc.).
- `client_secret`: string **required** — Stripe PaymentIntent client secret.
- `last4`: string — Last 4 digits of card.
- `onboarding`: boolean **required** — Whether the user was already onboarded.
- `payment_intent_id`: string **required** — Stripe invoice ID.

## DELETE /accounts/{account_id}/ai-gateway/billing/topup/config

Delete auto top-up configuration

operationId: `aig-billing-delete-topup-config`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/ai-gateway/billing/topup/config

Get auto top-up configuration

operationId: `aig-billing-get-topup-config`

**Response** 200 → `result`

- `amount`: number **required**
- `disabledReason`: string **required**
- `error`: string **required**
- `lastFailedAt`: number **required**
- `threshold`: number **required**

## POST /accounts/{account_id}/ai-gateway/billing/topup/config

Set auto top-up configuration

operationId: `aig-billing-set-topup-config`

**Request** (application/json)

- `amount`: integer **required** — Auto top-up amount in cents (min 1000).
- `threshold`: integer **required** — Balance threshold in cents that triggers auto top-up (min 500).

**Response** 200 → `result`

- `amount`: number **required**
- `threshold`: number **required**

## GET /accounts/{account_id}/ai-gateway/billing/topup/limits

Get account top-up limits

operationId: `aig-billing-get-topup-limits`

**Response** 200 → `result`

- `currency`: string **required** — ISO 4217 currency code.
- `max_cents`: integer **required**
- `min_cents`: integer **required** — Minimum allowed top-up amount in cents.

## POST /accounts/{account_id}/ai-gateway/billing/topup/status

Check top-up status

operationId: `aig-billing-check-topup-status`

**Request** (application/json)

- `payment_intent_id`: string **required** — Stripe invoice ID to check status for.

**Response** 200 → `result`

- `payment_intent_id`: string **required**
- `status`: string **required** enum: `completed`, `pending`

## GET /accounts/{account_id}/ai-gateway/billing/usage-history

Get usage history

operationId: `aig-billing-get-usage-history` · query: `value_grouping_window`, `start_time`, `end_time`

**Response** 200 → `result`

- `history`: object[] **required**
  [array of]
  - `aggregated_value`: number **required**
  - `end_time`: number **required**
  - `id`: string **required**
  - `start_time`: number **required**
