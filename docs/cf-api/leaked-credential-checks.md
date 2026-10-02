# Leaked Credential Checks

7 endpoints.

## GET /zones/{zone_id}/leaked-credential-checks

Get Leaked Credential Checks Status

operationId: `waf-product-api-leaked-credentials-get-status`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/leaked-credential-checks

Set Leaked Credential Checks Status

operationId: `waf-product-api-leaked-credentials-set-status`

**Request** (application/json)

- `enabled`: boolean — Determines whether or not Leaked Credential Checks are enabled.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/leaked-credential-checks/detections

List Leaked Credential Checks Custom Detections

operationId: `waf-product-api-leaked-credentials-list-detections`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/leaked-credential-checks/detections

Create Leaked Credential Checks Custom Detection

operationId: `waf-product-api-leaked-credentials-create-detection`

**Request** (application/json)

- `id`: any — Defines the unique ID for this custom detection.
- `password`: string — Defines ehe ruleset expression to use in matching the password in a request.
- `username`: string — Defines the ruleset expression to use in matching the username in a request.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}

Delete Leaked Credential Checks Custom Detection

operationId: `waf-product-api-leaked-credentials-delete-detection`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}

Get Leaked Credential Checks Custom Detection

operationId: `waf-product-api-leaked-credentials-get-detection`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}

Update Leaked Credential Checks Custom Detection

operationId: `waf-product-api-leaked-credentials-update-detection`

**Request** (application/json)

- `id`: any — Defines the unique ID for this custom detection.
- `password`: string — Defines ehe ruleset expression to use in matching the password in a request.
- `username`: string — Defines the ruleset expression to use in matching the username in a request.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
