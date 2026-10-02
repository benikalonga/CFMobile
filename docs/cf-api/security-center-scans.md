# Security Center Scans

4 endpoints.

## GET /accounts/{account_id}/security-center/insights/scans

Get Recent Account Scans

operationId: `get-security-center-account-scans`

**Response** 200 → `result`

- `quota`: object **required** — Quota information for on-demand scans. Scans are rate limited per account per 24-hour rolling window.
  - `available`: integer **required** — The number of on-demand scans remaining in the current 24-hour window.
  - `used`: integer **required** — The number of on-demand scans initiated in the current 24-hour window.
- `scans`: object[] **required** — List of on-demand scans.
  [array of]
  - `scan_id`: string **required** — An opaque identifier for the scan.
  - `started_at`: string **required** — The time at which the scan was started, in RFC 3339 format.
  - `status`: string **required** enum: `in_progress`, `completed` — The current status of the scan.

## POST /accounts/{account_id}/security-center/insights/scans

Start On-Demand Account Scan

operationId: `start-security-center-account-scan`

**Request** (application/json)

(one of 3 variants; showing the first)
- `issue_type`: string **required** enum: `compliance_violation`, `email_security`, `exposed_infrastructure`, `insecure_configuration`, `weak_authentication`, `configuration_suggestion`

**Response** 200 → `result`

- `scan_id`: string — An opaque identifier for the initiated scan.

## GET /zones/{zone_id}/security-center/insights/scans

Get Recent Zone Scans

operationId: `get-security-center-zone-scans`

**Response** 200 → `result`

- `quota`: object **required** — Quota information for on-demand scans. Scans are rate limited per account per 24-hour rolling window.
  - `available`: integer **required** — The number of on-demand scans remaining in the current 24-hour window.
  - `used`: integer **required** — The number of on-demand scans initiated in the current 24-hour window.
- `scans`: object[] **required** — List of on-demand scans.
  [array of]
  - `scan_id`: string **required** — An opaque identifier for the scan.
  - `started_at`: string **required** — The time at which the scan was started, in RFC 3339 format.
  - `status`: string **required** enum: `in_progress`, `completed` — The current status of the scan.

## POST /zones/{zone_id}/security-center/insights/scans

Start On-Demand Zone Scan

operationId: `start-security-center-zone-scan`

**Request** (application/json)

(one of 3 variants; showing the first)
- `issue_type`: string **required** enum: `compliance_violation`, `email_security`, `exposed_infrastructure`, `insecure_configuration`, `weak_authentication`, `configuration_suggestion`

**Response** 200 → `result`

- `scan_id`: string — An opaque identifier for the initiated scan.
