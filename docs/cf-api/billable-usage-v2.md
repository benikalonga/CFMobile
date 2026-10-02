# Billable Usage V2

2 endpoints.

## GET /accounts/{account_id}/billable/usage

Get Account Usage (Version 2, Alpha, Restricted)

operationId: `billable-usage-v2-get-account-usage` · query: `from`, `to`, `metric_id`

**Response** 200 → `result`

[array of]
- `BilledCost`: number — A charge serving as the basis for invoicing, inclusive of all reduced rates and discounts while excluding the amortization of upfront charge
- `BillingAccountId`: string **required** — Public identifier of the Cloudflare account (account tag).
- `BillingAccountName`: string **required** — Display name of the Cloudflare account.
- `BillingCurrency`: string — Currency that a charge was billed in (ISO 4217).
- `BillingPeriodEnd`: string — Exclusive end of the billing cycle that contains this usage record.
- `BillingPeriodStart`: string — Inclusive start of the billing cycle that contains this usage record.
- `ChargeCategory`: string **required** enum: `Usage` — Highest-level classification of a charge based on the nature of how it gets billed. Currently only "Usage" is supported.
- `ChargeClass`: string enum: `Correction` — Indicates whether the row represents a correction to one or more charges invoiced in a previous billing period.
- `ChargeDescription`: string **required** — Self-contained summary of the charge's purpose and price.
- `ChargeFrequency`: string **required** enum: `Usage-Based` — Indicates how often a charge occurs. Currently only "Usage-Based" is supported.
- `ChargePeriodEnd`: string **required** — Exclusive end of the time interval during which the usage was consumed.
- `ChargePeriodStart`: string **required** — Inclusive start of the time interval during which the usage was consumed.
- `ConsumedQuantity`: number **required** — Measured usage amount within the charge period. Reflects raw metered consumption before pricing transformations.
- `ConsumedUnit`: string **required** — Unit of measure for the consumed quantity (e.g., "GB", "Requests", "vCPU-Hours").
- `ContractedCost`: number — Cost calculated by multiplying ContractedUnitPrice and the corresponding PricingQuantity.
- `ContractedUnitPrice`: number — The agreed-upon unit price for a single PricingUnit of the associated billable metric, inclusive of negotiated discounts, if present, while 
- `EffectiveCost`: number — The amortized cost of the charge after applying all reduced rates, discounts, and the applicable portion of relevant, prepaid purchases (one
- `HostProviderName`: string **required** — Name of the entity providing the underlying infrastructure or platform.
- `InvoiceIssuerName`: string **required** — Name of the entity responsible for invoicing for the services consumed.
- `ListCost`: number — Cost calculated by multiplying ListUnitPrice and the corresponding PricingQuantity.
- `ListUnitPrice`: number — Suggested provider-published unit price for a single PricingUnit of the associated billable metric, exclusive of any discounts.
- `PricingQuantity`: number — Volume of a given service used or purchased, based on the PricingUnit.
- `PricingUnit`: string — Provider-specified measurement unit for determining unit prices, indicating how the provider rates measured usage after applying pricing rul
- `RegionId`: string — Provider-assigned identifier for an isolated geographic area where a service is provided.
- `RegionName`: string — Name of an isolated geographic area where a service is provided.
- `ServiceProviderName`: string **required** — Name of the entity that made the services available for purchase.
- `SubAccountId`: string — Unique identifier assigned to a grouping of services. For Cloudflare, this is the subscription or contract ID.
- `SubAccountName`: string — Name assigned to a grouping of services. For Cloudflare, this is the subscription or contract display name.
- `x_BillableMetricId`: string — The unique identifier for the billable metric in the Cloudflare catalog. Cloudflare extension; replaces FOCUS SkuId.
- `x_BillableMetricName`: string **required** — The display name of the billable metric. Cloudflare extension; replaces FOCUS SkuMeter.
- `x_ProductCategoryName`: string — The product category the charge belongs to (e.g., "Developer", "Cloudflare One"). Cloudflare extension; replaces FOCUS ServiceCategory.
- `x_ProductFamilyName`: string — The product family the charge belongs to (e.g., "R2", "Workers"). Cloudflare extension; replaces FOCUS ServiceName.
- `x_ZoneId`: string — The identifier for the Cloudflare zone (zone tag). Cloudflare extension.
- `x_ZoneName`: string — The display name of the Cloudflare zone. Cloudflare extension.

## GET /organizations/{organization_id}/billable/usage

Get Organization Usage (Version 2, Alpha, Restricted)

operationId: `billable-usage-v2-get-organization-usage` · query: `from`, `to`

**Response** 200 → `result`

[array of]
- `BilledCost`: number — A charge serving as the basis for invoicing, inclusive of all reduced rates and discounts while excluding the amortization of upfront charge
- `BillingAccountId`: string **required** — Public identifier of the Cloudflare account (account tag).
- `BillingAccountName`: string **required** — Display name of the Cloudflare account.
- `BillingCurrency`: string — Currency that a charge was billed in (ISO 4217).
- `BillingPeriodEnd`: string — Exclusive end of the billing cycle that contains this usage record.
- `BillingPeriodStart`: string — Inclusive start of the billing cycle that contains this usage record.
- `ChargeCategory`: string **required** enum: `Usage` — Highest-level classification of a charge based on the nature of how it gets billed. Currently only "Usage" is supported.
- `ChargeClass`: string enum: `Correction` — Indicates whether the row represents a correction to one or more charges invoiced in a previous billing period.
- `ChargeDescription`: string **required** — Self-contained summary of the charge's purpose and price.
- `ChargeFrequency`: string **required** enum: `Usage-Based` — Indicates how often a charge occurs. Currently only "Usage-Based" is supported.
- `ChargePeriodEnd`: string **required** — Exclusive end of the time interval during which the usage was consumed.
- `ChargePeriodStart`: string **required** — Inclusive start of the time interval during which the usage was consumed.
- `ConsumedQuantity`: number **required** — Measured usage amount within the charge period. Reflects raw metered consumption before pricing transformations.
- `ConsumedUnit`: string **required** — Unit of measure for the consumed quantity (e.g., "GB", "Requests", "vCPU-Hours").
- `ContractedCost`: number — Cost calculated by multiplying ContractedUnitPrice and the corresponding PricingQuantity.
- `ContractedUnitPrice`: number — The agreed-upon unit price for a single PricingUnit of the associated billable metric, inclusive of negotiated discounts, if present, while 
- `EffectiveCost`: number — The amortized cost of the charge after applying all reduced rates, discounts, and the applicable portion of relevant, prepaid purchases (one
- `HostProviderName`: string **required** — Name of the entity providing the underlying infrastructure or platform.
- `InvoiceIssuerName`: string **required** — Name of the entity responsible for invoicing for the services consumed.
- `ListCost`: number — Cost calculated by multiplying ListUnitPrice and the corresponding PricingQuantity.
- `ListUnitPrice`: number — Suggested provider-published unit price for a single PricingUnit of the associated billable metric, exclusive of any discounts.
- `PricingQuantity`: number — Volume of a given service used or purchased, based on the PricingUnit.
- `PricingUnit`: string — Provider-specified measurement unit for determining unit prices, indicating how the provider rates measured usage after applying pricing rul
- `RegionId`: string — Provider-assigned identifier for an isolated geographic area where a service is provided.
- `RegionName`: string — Name of an isolated geographic area where a service is provided.
- `ServiceProviderName`: string **required** — Name of the entity that made the services available for purchase.
- `SubAccountId`: string — Unique identifier assigned to a grouping of services. For Cloudflare, this is the subscription or contract ID.
- `SubAccountName`: string — Name assigned to a grouping of services. For Cloudflare, this is the subscription or contract display name.
- `x_BillableMetricId`: string — The unique identifier for the billable metric in the Cloudflare catalog. Cloudflare extension; replaces FOCUS SkuId.
- `x_BillableMetricName`: string **required** — The display name of the billable metric. Cloudflare extension; replaces FOCUS SkuMeter.
- `x_ProductCategoryName`: string — The product category the charge belongs to (e.g., "Developer", "Cloudflare One"). Cloudflare extension; replaces FOCUS ServiceCategory.
- `x_ProductFamilyName`: string — The product family the charge belongs to (e.g., "R2", "Workers"). Cloudflare extension; replaces FOCUS ServiceName.
- `x_ZoneId`: string — The identifier for the Cloudflare zone (zone tag). Cloudflare extension.
- `x_ZoneName`: string — The display name of the Cloudflare zone. Cloudflare extension.
