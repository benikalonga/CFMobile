# brand_protection

23 endpoints.

## GET /accounts/{account_id}/brand-protection/alerts

Read all alerts on submitted domains

operationId: `getAccountsAccountIdBrandProtectionAlerts`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/alerts

Update alerts on submitted domains by ID

operationId: `patchAccountsAccountIdBrandProtectionAlerts`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/alerts/clear

Update verification statuses of tracked URLs to awaiting by ID

operationId: `patchAccountsAccountIdBrandProtectionAlertsClear`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/alerts/refute

Update verification statuses of tracked URLs to disproven by ID

operationId: `patchAccountsAccountIdBrandProtectionAlertsRefute`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/alerts/verify

Update verification statuses of tracked URLs to confirmed by ID

operationId: `patchAccountsAccountIdBrandProtectionAlertsVerify`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## DELETE /accounts/{account_id}/brand-protection/brands

Delete brands by ID

operationId: `deleteAccountsAccountIdBrandProtectionBrands`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/brands

Read all brands

operationId: `getAccountsAccountIdBrandProtectionBrands`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## POST /accounts/{account_id}/brand-protection/brands

Create new brands

operationId: `postAccountsAccountIdBrandProtectionBrands`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## DELETE /accounts/{account_id}/brand-protection/brands/patterns

Delete patterns for brands by ID

operationId: `deleteAccountsAccountIdBrandProtectionBrandsPatterns`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/brands/patterns

Read patterns for brands by ID

operationId: `getAccountsAccountIdBrandProtectionBrandsPatterns`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## POST /accounts/{account_id}/brand-protection/brands/patterns

Create new patterns for brands by ID

operationId: `postAccountsAccountIdBrandProtectionBrandsPatterns`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/clear

Update verification statuses of submitted URLs to awaiting by ID

operationId: `patchAccountsAccountIdBrandProtectionClear`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/domain-info

Read submitted domains by ID

operationId: `getAccountsAccountIdBrandProtectionDomainInfo`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/recent-submissions

Read recent URL submissions

operationId: `getAccountsAccountIdBrandProtectionRecentSubmissions`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## PATCH /accounts/{account_id}/brand-protection/refute

Update verification statuses of submitted URLs to disproven by ID

operationId: `patchAccountsAccountIdBrandProtectionRefute`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/submission-info

Read URL submissions by ID

operationId: `getAccountsAccountIdBrandProtectionSubmissionInfo`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## POST /accounts/{account_id}/brand-protection/submit

Create new URL submissions

operationId: `postAccountsAccountIdBrandProtectionSubmit`

**Response** 201 → `result`

- `skipped_urls`: object[]
  [array]
- `submitted_urls`: object[]
  [array]

## GET /accounts/{account_id}/brand-protection/tracked-domains

Read submitted domains by pattern

operationId: `getAccountsAccountIdBrandProtectionTrackedDomains`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /accounts/{account_id}/brand-protection/url-info

Read submitted URLs by ID

operationId: `getAccountsAccountIdBrandProtectionUrlInfo`

**Response** 200 → `result`

[array of]
object

## PATCH /accounts/{account_id}/brand-protection/verify

Update verification statuses of submitted URLs to confirmed by ID

operationId: `patchAccountsAccountIdBrandProtectionVerify`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## POST /internal/submit

Internal route for testing URL submissions

operationId: `postInternalSubmit`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /live

Run liveness checks

operationId: `getLive`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name

## GET /ready

Run readiness checks

operationId: `getReady`

**Response** default → `result`

- `code`: integer — Error code
- `errors`: object — Errors
- `message`: string — Error message
- `status`: string — Error name
