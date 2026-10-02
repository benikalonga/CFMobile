# Content Scanning

7 endpoints.

## POST /zones/{zone_id}/content-upload-scan/disable

Disable Content Scanning

operationId: `waf-content-scanning-disable`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/content-upload-scan/enable

Enable Content Scanning

operationId: `waf-content-scanning-enable`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/content-upload-scan/payloads

List Existing Custom Scan Expressions

operationId: `waf-content-scanning-list-custom-scan-expressions`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/content-upload-scan/payloads

Add Custom Scan Expressions

operationId: `waf-content-scanning-add-custom-scan-expressions`

**Request** (application/json)

[array of]
- `payload`: string **required** — Defines the ruleset expression to use in matching content objects.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/content-upload-scan/payloads/{expression_id}

Delete a Custom Scan Expression

operationId: `waf-content-scanning-delete-custom-scan-expressions`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/content-upload-scan/settings

Get Content Scanning Status

operationId: `waf-content-scanning-get-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/content-upload-scan/settings

Update Content Scanning Status

operationId: `waf-content-scanning-update-settings`

**Request** (application/json)

- `value`: string **required** enum: `enabled`, `disabled` — The status value for Content Scanning.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
