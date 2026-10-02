# Request for Information (RFI)

17 endpoints.

## POST /accounts/{account_id}/cloudforce-one/requests

List Requests

operationId: `cloudforce-one-request-list`

**Request** (application/json)

- `completed_after`: any — Retrieve requests completed after this time.
- `completed_before`: any — Retrieve requests completed before this time.
- `created_after`: any — Retrieve requests created after this time.
- `created_before`: any — Retrieve requests created before this time.
- `page`: integer **required** — Page number of results.
- `per_page`: integer **required** — Number of results per page.
- `request_type`: string — Requested information from request.
- `sort_by`: string — Field to sort results by.
- `sort_order`: string enum: `asc`, `desc` — Sort order (asc or desc).
- `status`: string enum: `open`, `accepted`, `reported`, `approved`, `completed`, `declined` — Request Status.

**Response** 200 → `result`

[array of]
- `completed`: any — Request completion time.
- `created`: any **required** — Request creation time.
- `id`: string **required** — UUID.
- `message_tokens`: integer — Tokens for the request messages.
- `priority`: string **required** enum: `routine`, `high`, `urgent`
- `readable_id`: string — Readable Request ID.
- `request`: string **required** — Requested information from request.
- `status`: string enum: `open`, `accepted`, `reported`, `approved`, `completed`, `declined` — Request Status.
- `summary`: string **required** — Brief description of the request.
- `tlp`: string **required** enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).
- `tokens`: integer — Tokens for the request.
- `updated`: any **required** — Request last updated time.

## DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}

Delete a Request

operationId: `cloudforce-one-request-delete`

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

## GET /accounts/{account_id}/cloudforce-one/requests/{request_id}

Get a Request

operationId: `cloudforce-one-request-get`

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

## PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}

Update a Request

operationId: `cloudforce-one-request-update`

**Request** (application/json)

- `content`: string — Request content.
- `priority`: string — Priority for analyzing the request.
- `request_type`: string — Requested information from request.
- `summary`: string — Brief description of the request.
- `tlp`: string enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).

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

## POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset

List Request Assets

operationId: `cloudforce-one-request-asset-list`

**Request** (application/json)

- `page`: integer **required** — Page number of results.
- `per_page`: integer **required** — Number of results per page.

**Response** 200 → `result`

[array of]
- `created`: any — Defines the asset creation time.
- `description`: string — Asset description.
- `file_type`: string — Asset file type.
- `id`: integer **required** — Asset ID.
- `name`: string **required** — Asset name.

## DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}

Delete a Request Asset

operationId: `cloudforce-one-request-asset-delete`

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

## GET /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}

Get a Request Asset

operationId: `cloudforce-one-request-asset-get`

**Response** 200 → `result`

[array of]
- `created`: any — Defines the asset creation time.
- `description`: string — Asset description.
- `file_type`: string — Asset file type.
- `id`: integer **required** — Asset ID.
- `name`: string **required** — Asset name.

## PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}

Update a Request Asset

operationId: `cloudforce-one-request-asset-update`

**Request** (application/json)

- `source`: string — Asset file to upload.

**Response** 200 → `result`

- `created`: any — Defines the asset creation time.
- `description`: string — Asset description.
- `file_type`: string — Asset file type.
- `id`: integer **required** — Asset ID.
- `name`: string **required** — Asset name.

## POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/new

Create a New Request Asset

operationId: `cloudforce-one-request-asset-new`

**Request** (multipart/form-data)

- `source`: string — Asset file to upload.

**Response** 200 → `result`

- `created`: any — Defines the asset creation time.
- `description`: string — Asset description.
- `file_type`: string — Asset file type.
- `id`: integer **required** — Asset ID.
- `name`: string **required** — Asset name.

## POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message

List Request Messages

operationId: `cloudforce-one-request-message-list`

**Request** (application/json)

- `after`: any — Retrieve mes  ges created after this time.
- `before`: any — Retrieve messages created before this time.
- `page`: integer **required** — Page number of results.
- `per_page`: integer **required** — Number of results per page.
- `sort_by`: string — Field to sort results by.
- `sort_order`: string enum: `asc`, `desc` — Sort order (asc or desc).

**Response** 200 → `result`

[array of]
- `author`: string **required** — Author of message.
- `content`: string **required** — Content of message.
- `created`: any — Defines the message creation time.
- `id`: integer **required** — Message ID.
- `is_follow_on_request`: boolean **required** — Whether the message is a follow-on request.
- `updated`: any **required** — Defines the message last updated time.

## DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}

Delete a Request Message

operationId: `cloudforce-one-request-message-delete`

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

## PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}

Update a Request Message

operationId: `cloudforce-one-request-message-update`

**Request** (application/json)

- `content`: string — Content of message.

**Response** 200 → `result`

- `author`: string **required** — Author of message.
- `content`: string **required** — Content of message.
- `created`: any — Defines the message creation time.
- `id`: integer **required** — Message ID.
- `is_follow_on_request`: boolean **required** — Whether the message is a follow-on request.
- `updated`: any **required** — Defines the message last updated time.

## POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new

Create a New Request Message

operationId: `cloudforce-one-request-message-new`

**Request** (application/json)

- `content`: string — Content of message.

**Response** 200 → `result`

- `author`: string **required** — Author of message.
- `content`: string **required** — Content of message.
- `created`: any — Defines the message creation time.
- `id`: integer **required** — Message ID.
- `is_follow_on_request`: boolean **required** — Whether the message is a follow-on request.
- `updated`: any **required** — Defines the message last updated time.

## GET /accounts/{account_id}/cloudforce-one/requests/constants

Get Request Priority, Status, and TLP constants

operationId: `cloudforce-one-request-constants`

**Response** 200 → `result`

- `priority`: string[]
  [array]
- `status`: string[]
  [array]
- `tlp`: string[]
  [array]

## POST /accounts/{account_id}/cloudforce-one/requests/new

Create a New Request.

operationId: `cloudforce-one-request-new`

**Request** (application/json)

- `content`: string — Request content.
- `priority`: string — Priority for analyzing the request.
- `request_type`: string — Requested information from request.
- `summary`: string — Brief description of the request.
- `tlp`: string enum: `clear`, `amber`, `amber-strict`, `green`, `red` — The CISA defined Traffic Light Protocol (TLP).

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

## GET /accounts/{account_id}/cloudforce-one/requests/quota

Get Request Quota

operationId: `cloudforce-one-request-quota`

**Response** 200 → `result`

- `anniversary_date`: any — Anniversary date is when annual quota limit is refreshed.
- `quarter_anniversary_date`: any — Quarter anniversary date is when quota limit is refreshed each quarter.
- `quota`: integer — Tokens for the quarter.
- `remaining`: integer — Tokens remaining for the quarter.

## GET /accounts/{account_id}/cloudforce-one/requests/types

Get Request Types

operationId: `cloudforce-one-request-types`

**Response** 200 → `result`

[array of]
string
