# AI Security for Apps

4 endpoints.

## GET /zones/{zone_id}/ai-security/custom-topics

Get AI Security for Apps Custom Topics

operationId: `ai-security-custom-topics-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/ai-security/custom-topics

Set AI Security for Apps Custom Topics

operationId: `ai-security-custom-topics-put`

**Request** (application/json)

- `topics`: object[] — Custom topic categories for AI Security for Apps content detection.
  [array of]
  - `label`: string **required** — Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens.
  - `topic`: string **required** — Description of the topic category. Must contain only printable ASCII characters.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/ai-security/settings

Get AI Security for Apps Status

operationId: `ai-security-settings-get`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/ai-security/settings

Set AI Security for Apps Status

operationId: `ai-security-settings-put`

**Request** (application/json)

- `enabled`: boolean — Whether AI Security for Apps is enabled on the zone.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
