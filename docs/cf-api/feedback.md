# Feedback

2 endpoints.

## GET /zones/{zone_id}/bot_management/feedback

List zone feedback reports

operationId: `bot-management-zone-feedback-list`

**Response** 200 → `result`

[array of]
- `created_at`: string
- `description`: string **required**
- `expression`: string **required** — Wirefilter expression describing the traffic being reported.
- `first_request_seen_at`: string **required**
- `last_request_seen_at`: string **required**
- `requests`: integer **required**
- `requests_by_attribute`: object **required** — Top attributes contributing to the feedback sample. Keys include topASNs, topCountries, topHosts, topIPs, topJA3Hashes, topJA4s, topPaths, t
- `requests_by_score`: object **required** — Map of bot scores (1-99) to request counts. Sum must equal `requests`.
- `requests_by_score_src`: object **required** — Map of score source to request counts. Sum must equal `requests`.
- `subtype`: string
- `type`: string **required** enum: `false_positive`, `false_negative` — Type of feedback report.

## POST /zones/{zone_id}/bot_management/feedback

Submit a feedback report

operationId: `bot-management-zone-feedback-create`

**Request** (application/json)

- `created_at`: string
- `description`: string **required**
- `expression`: string **required** — Wirefilter expression describing the traffic being reported.
- `first_request_seen_at`: string **required**
- `last_request_seen_at`: string **required**
- `requests`: integer **required**
- `requests_by_attribute`: object **required** — Top attributes contributing to the feedback sample. Keys include topASNs, topCountries, topHosts, topIPs, topJA3Hashes, topJA4s, topPaths, t
- `requests_by_score`: object **required** — Map of bot scores (1-99) to request counts. Sum must equal `requests`.
- `requests_by_score_src`: object **required** — Map of score source to request counts. Sum must equal `requests`.
- `subtype`: string
- `type`: string **required** enum: `false_positive`, `false_negative` — Type of feedback report.
