# Priority Intelligence Requirements (PIR)

6 endpoints.

## POST /accounts/{account_id}/cloudforce-one/requests/priority

List Priority Intelligence Requirements

operationId: `cloudforce-one-priority-list`

**Request** (application/json)

- `page`: integer **required** — Page number of results.
- `per_page`: integer **required** — Number of results per page.

**Response** 200 → `result`

[array of]
- `created`: any **required** — Priority creation time.
- `id`: string **required** — UUID.
- `labels`: string[] **required** — List of labels.
  [array]
- `priority`: integer **required** — Priority.
- `requirement`: string **required** — Requirement.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).
- `updated`: any **required** — Priority last updated time.

## DELETE /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}

Delete a Priority Intelligence Requirement

operationId: `cloudforce-one-priority-delete`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.

## GET /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}

Get a Priority Intelligence Requirement

operationId: `cloudforce-one-priority-get`

**Response** 200 → `result`

- `completed`: string
- `content`: string **required** — Request content.
- `created`: string **required**
- `id`: string **required** — UUID.
- `message_tokens`: integer — Tokens for the request messages.
- `priority`: string **required**
- `readable_id`: string — Readable Request ID.
- `request`: string **required** — Requested information from request.
- `status`: string enum: `open`, `accepted`, `reported`, `approved`, `completed`, `declined` — Request Status.
- `summary`: string **required** — Brief description of the request.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).
- `tokens`: integer — Tokens for the request.
- `updated`: string **required**

## PUT /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}

Update a Priority Intelligence Requirement

operationId: `cloudforce-one-priority-update`

**Request** (application/json)

- `labels`: string[] **required** — List of labels.
  [array]
- `priority`: integer **required** — Priority.
- `requirement`: string **required** — Requirement.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).

**Response** 200 → `result`

- `completed`: string
- `content`: string **required** — Request content.
- `created`: string **required**
- `id`: string **required** — UUID.
- `message_tokens`: integer — Tokens for the request messages.
- `priority`: string **required**
- `readable_id`: string — Readable Request ID.
- `request`: string **required** — Requested information from request.
- `status`: string enum: `open`, `accepted`, `reported`, `approved`, `completed`, `declined` — Request Status.
- `summary`: string **required** — Brief description of the request.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).
- `tokens`: integer — Tokens for the request.
- `updated`: string **required**

## POST /accounts/{account_id}/cloudforce-one/requests/priority/new

Create a New Priority Intelligence Requirement

operationId: `cloudforce-one-priority-new`

**Request** (application/json)

- `labels`: string[] **required** — List of labels.
  [array]
- `priority`: integer **required** — Priority.
- `requirement`: string **required** — Requirement.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).

**Response** 200 → `result`

- `created`: any **required** — Priority creation time.
- `id`: string **required** — UUID.
- `labels`: string[] **required** — List of labels.
  [array]
- `priority`: integer **required** — Priority.
- `requirement`: string **required** — Requirement.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).
- `updated`: any **required** — Priority last updated time.

## GET /accounts/{account_id}/cloudforce-one/requests/priority/quota

Get Priority Intelligence Requirement Quota

operationId: `cloudforce-one-priority-quota`

**Response** 200 → `result`

- `anniversary_date`: any — Anniversary date is when annual quota limit is refreshed.
- `quarter_anniversary_date`: any — Quarter anniversary date is when quota limit is refreshed each quarter.
- `quota`: integer — Tokens for the quarter.
- `remaining`: integer — Tokens remaining for the quarter.
