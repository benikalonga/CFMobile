# Billable Usage

2 endpoints.

## GET /accounts/{account_id}/paygo-usage

Get PayGo Account Billable Usage (Version 1, Alpha)

operationId: `billable-usage-get-paygo-account-usage` · query: `from`, `to`

**Response** 200 → `result`

[array of]
- `BillingCurrency`: string **required** — Specifies the billing currency code (ISO 4217).
- `BillingPeriodStart`: string **required** — Indicates the start of the billing period.
- `ChargePeriodEnd`: string **required** — Indicates the end of the charge period.
- `ChargePeriodStart`: string **required** — Indicates the start of the charge period.
- `ConsumedQuantity`: number **required** — Specifies the quantity consumed during this charge period.
- `ConsumedUnit`: string **required** — A display name for the unit of measurement used for the product (for example, "GB-months", "GB-seconds"). May be empty when the unit is impl
- `ContractedCost`: number **required** — Specifies the cost for this charge period in the billing currency.
- `CumulatedContractedCost`: number **required** — Specifies the cumulated cost for the billing period in the billing currency.
- `CumulatedPricingQuantity`: integer **required** — Specifies the cumulated pricing quantity for the billing period.
- `PricingQuantity`: integer **required** — Specifies the pricing quantity for this charge period.
- `ServiceFamilyName`: string — Identifies the product family for the Cloudflare service.
- `ServiceName`: string **required** — Identifies the Cloudflare service.
- `SubscriptionId`: string — The identifier for the Cloudflare subscription.
- `ZoneId`: string — The identifier for the Cloudflare zone (zone tag).
- `ZoneName`: string — The display name of the Cloudflare zone.

## GET /accounts/{account_id}/paygo-usage-info

Get PayGo Account Billable Usage Info (Version 1, Alpha)

operationId: `billable-usage-get-paygo-account-usage-info`

**Response** 200 → `result`

- `covered`: boolean **required** — Indicates whether the account is covered.
- `subscriptions`: object[] **required** — List of subscriptions for the account.
  [array of]
  - `billing_cycle_anchor_timestamp`: string **required** — The subscription billing cycle anchor timestamp.
  - `end_timestamp`: string — The subscription end timestamp. Omitted for active subscriptions; present only when the subscription has been cancelled.
  - `id`: string **required** — The identifier for the Cloudflare subscription.
  - `start_timestamp`: string **required** — The subscription start timestamp.
