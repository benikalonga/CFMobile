# SSL Verification

2 endpoints.

## GET /zones/{zone_id}/ssl/verification

SSL Verification Details

operationId: `ssl-verification-ssl-verification-details` · query: `retry`

**Response** 200 → `result`

[array of]
- `brand_check`: boolean — Certificate Authority is manually reviewing the order.
- `cert_pack_uuid`: string — Certificate Pack UUID.
- `certificate_status`: string **required** enum: `initializing`, `authorizing`, `active`, `expired`, `issuing`, `timing_out`, `pending_deployment` — Current status of certificate.
- `signature`: string enum: `ECDSAWithSHA256`, `SHA1WithRSA`, `SHA256WithRSA` — Certificate's signature algorithm.
- `validation_method`: string enum: `http`, `cname`, `txt` — Validation method in use for a certificate pack order.
- `verification_info`: object — Certificate's required verification information.
  - `record_name`: string enum: `record_name`, `http_url`, `cname`, `txt_name` — Name of CNAME record.
  - `record_target`: string enum: `record_value`, `http_body`, `cname_target`, `txt_value` — Target of CNAME record.
- `verification_status`: boolean — Status of the required verification information, omitted if verification status is unknown.
- `verification_type`: string enum: `cname`, `meta tag` — Method of verification.

## PATCH /zones/{zone_id}/ssl/verification/{certificate_pack_id}

Edit SSL Certificate Pack Validation Method

operationId: `ssl-verification-edit-ssl-certificate-pack-validation-method`

**Request** (application/json)

- `validation_method`: string **required** enum: `http`, `cname`, `txt`, `email` — Desired validation method.

**Response** 200 → `result`

- `status`: string — Result status.
- `validation_method`: string enum: `http`, `cname`, `txt`, `email` — Desired validation method.
