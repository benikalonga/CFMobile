# Resource Sharing

16 endpoints.

## GET /accounts/{account_id}/shares

List account shares

operationId: `shares-list` · query: `status`, `kind`, `target_type`, `resource_types`, `order`, `direction`, `page`, `per_page`, `include_resources`, `include_recipient_counts`, `tag`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/shares

Create a new share

operationId: `share-create`

**Request** (application/json)

- `name`: string **required** — The name of the share.
- `recipients`: object[] **required**
  [array of]
  - `account_id`: any — Deprecated alias for `recipient_account_id`. Use `recipient_account_id` instead.
  - `organization_id`: string — Organization identifier.
  - `recipient_account_id`: any — The account that will receive the share.
- `resources`: object[] **required**
  [array of]
  - `meta`: object **required** — Resource Metadata.
  - `resource_account_id`: string **required** — Account identifier.
  - `resource_id`: string **required** — Share Resource identifier.
  - `resource_type`: string **required** enum: `custom-ruleset`, `gateway-policy`, `gateway-destination-ip`, `gateway-block-page-settings`, `gateway-extended-email-matching`, `idp-federation-grant` — Resource Type.

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/shares/{share_id}

Delete a share

operationId: `share-delete`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/shares/{share_id}

Get account share by ID

operationId: `shares-get-by-id` · query: `include_resources`, `include_recipient_counts`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/shares/{share_id}

Update a share

operationId: `share-update`

**Request** (application/json)

- `name`: string **required** — The name of the share.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/shares/{share_id}/recipients

List share recipients by share ID

operationId: `share-recipients-list` · query: `include_resources`, `page`, `per_page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/shares/{share_id}/recipients

Create a new share recipient

operationId: `share-recipient-create`

**Request** (application/json)

- `account_id`: any — Deprecated alias for `recipient_account_id`. Use `recipient_account_id` instead.
- `organization_id`: string — Organization identifier.
- `recipient_account_id`: any — The account that will receive the share.

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/shares/{share_id}/recipients

Update a share's recipients

operationId: `share-recipients-update`

**Request** (application/json)

[array of]
- `account_id`: any — Deprecated alias for `recipient_account_id`. Use `recipient_account_id` instead.
- `organization_id`: string — Organization identifier.
- `recipient_account_id`: any — The account that will receive the share.

## DELETE /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}

Delete a share recipient

operationId: `share-recipient-delete`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}

Get share recipient by ID

operationId: `share-recipients-get-by-id` · query: `include_resources`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/shares/{share_id}/resources

List share resources by share ID

operationId: `share-resources-list` · query: `status`, `resource_type`, `page`, `per_page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/shares/{share_id}/resources

Create a new share resource

operationId: `share-resource-create`

**Request** (application/json)

- `meta`: object **required** — Resource Metadata.
- `resource_account_id`: string **required** — Account identifier.
- `resource_id`: string **required** — Share Resource identifier.
- `resource_type`: string **required** enum: `custom-ruleset`, `gateway-policy`, `gateway-destination-ip`, `gateway-block-page-settings`, `gateway-extended-email-matching`, `idp-federation-grant` — Resource Type.

**Response** 201 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}

Delete a share resource

operationId: `share-resource-delete`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}

Get share resource by ID

operationId: `share-resources-get-by-id`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}

Update a share resource

operationId: `share-resource-update`

**Request** (application/json)

- `meta`: object **required** — Resource Metadata.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /organizations/{organization_id}/shares

List organization shares

operationId: `organization-shares-list` · query: `status`, `kind`, `target_type`, `resource_types`, `order`, `direction`, `page`, `per_page`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
