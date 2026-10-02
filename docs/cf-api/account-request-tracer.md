# Account Request Tracer

1 endpoints.

## POST /accounts/{account_id}/request-tracer/trace

Request Trace

operationId: `account-request-tracer-request-trace`

**Request** (application/json)

- `body`: object
  - `base64`: string — Base64 encoded request body
  - `json`: object — Arbitrary json as request body
  - `plain_text`: string — Request body as plain text
- `context`: object — Additional request parameters
  - `bot_score`: integer — Bot score used for evaluating tracing request processing
  - `geoloc`: object — Geodata for tracing request
    - `city`: string
    - `continent`: string
    - `is_eu_country`: boolean
    - `iso_code`: string
    - `latitude`: number
    - `longitude`: number
    - `postal_code`: string
    - `region_code`: string
    - `subdivision_2_iso_code`: string
    - `timezone`: string
  - `skip_challenge`: boolean — Whether to skip any challenges for tracing request (e.g.: captcha)
  - `threat_score`: integer — Threat score used for evaluating tracing request processing
- `cookies`: object — Cookies added to tracing request
- `headers`: object — Headers added to tracing request
- `method`: string **required** — HTTP Method of tracing request
- `protocol`: string — HTTP Protocol of tracing request
- `skip_response`: boolean — Skip sending the request to the Origin server after all rules evaluation
- `url`: string **required** — URL to which perform tracing request

**Response** 200 → `result`

- `status_code`: integer — HTTP Status code of zone response
- `trace`: object[]
  [array of]
  - `action`: string — If step type is rule, then action performed by this rule
  - `action_parameters`: object — If step type is rule, then action parameters of this rule as JSON
  - `description`: string — If step type is rule or ruleset, the description of this entity
  - `expression`: string — If step type is rule, then expression used to match for this rule
  - `kind`: string — If step type is ruleset, then kind of this ruleset
  - `matched`: boolean — Whether tracing step affected tracing request/response
  - `name`: string — If step type is ruleset, then name of this ruleset
  - `step_name`: string — Tracing step identifying name
  - `trace`: object[]
    [array of]
    - `action`: string — If step type is rule, then action performed by this rule
    - `action_parameters`: object — If step type is rule, then action parameters of this rule as JSON
    - `description`: string — If step type is rule or ruleset, the description of this entity
    - `expression`: string — If step type is rule, then expression used to match for this rule
    - `kind`: string — If step type is ruleset, then kind of this ruleset
    - `matched`: boolean — Whether tracing step affected tracing request/response
    - `name`: string — If step type is ruleset, then name of this ruleset
    - `step_name`: string — Tracing step identifying name
    - `trace`: object[]
    - `type`: string — Tracing step type
  - `type`: string — Tracing step type
