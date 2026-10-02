# User API Tokens

8 endpoints.

## GET /user/tokens

List Tokens

operationId: `user-api-tokens-list-tokens` · query: `page`, `per_page`, `direction`, `include_expired`

**Response** 200 → `result`

[array of]
- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string — Token identifier tag.
- `issued_on`: string — The time on which the token was created.
- `last_used_on`: string — Last time the token was used.
- `modified_on`: string — Last time the token was modified.
- `name`: string — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.
- `status`: string enum: `active`, `disabled`, `expired` — Status of the token.

## POST /user/tokens

Create Token

operationId: `user-api-tokens-create-token`

**Request** (application/json)

- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `name`: string **required** — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] **required** — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.

**Response** 200 → `result`

- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string — Token identifier tag.
- `issued_on`: string — The time on which the token was created.
- `last_used_on`: string — Last time the token was used.
- `modified_on`: string — Last time the token was modified.
- `name`: string — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.
- `status`: string enum: `active`, `disabled`, `expired` — Status of the token.
- `value`: string — The token value.

## DELETE /user/tokens/{token_id}

Delete Token

operationId: `user-api-tokens-delete-token`

**Response** 200 → `result`

- `id`: string **required** — Identifier

## GET /user/tokens/{token_id}

Token Details

operationId: `user-api-tokens-token-details`

**Response** 200 → `result`

- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string — Token identifier tag.
- `issued_on`: string — The time on which the token was created.
- `last_used_on`: string — Last time the token was used.
- `modified_on`: string — Last time the token was modified.
- `name`: string — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.
- `status`: string enum: `active`, `disabled`, `expired` — Status of the token.

## PUT /user/tokens/{token_id}

Update Token

operationId: `user-api-tokens-update-token`

**Request** (application/json)

- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string — Token identifier tag.
- `issued_on`: string — The time on which the token was created.
- `last_used_on`: string — Last time the token was used.
- `modified_on`: string — Last time the token was modified.
- `name`: string — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.
- `status`: string enum: `active`, `disabled`, `expired` — Status of the token.
object

**Response** 200 → `result`

- `condition`: object
  - `request_ip`: object — Client IP restrictions.
    - `in`: string[] — List of IPv4/IPv6 CIDR addresses.
    - `not_in`: string[] — List of IPv4/IPv6 CIDR addresses.
- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string — Token identifier tag.
- `issued_on`: string — The time on which the token was created.
- `last_used_on`: string — Last time the token was used.
- `modified_on`: string — Last time the token was modified.
- `name`: string — Token name.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `policies`: object[] — List of access policies assigned to the token.
  [array of]
  - `effect`: string **required** enum: `allow`, `deny` — Allow or deny operations against the resources.
  - `id`: string **required** — Policy identifier.
  - `permission_groups`: object[] **required** — A set of permission groups that are specified to the policy.
    [array of]
    - `id`: string **required** — Identifier of the permission group.
    - `meta`: object — Attributes associated to the permission group.
    - `name`: string — Name of the permission group.
  - `resources`: any **required** — A list of resource names that the policy applies to.
- `status`: string enum: `active`, `disabled`, `expired` — Status of the token.

## PUT /user/tokens/{token_id}/value

Roll Token

operationId: `user-api-tokens-roll-token`

**Request** (application/json)

object

**Response** 200 → `result`

string

## GET /user/tokens/permission_groups

List Token Permission Groups

operationId: `permission-groups-list-permission-groups` · query: `name`, `scope`

**Response** 200 → `result`

[array of]
- `category`: string enum: `developer_platform`, `ai_and_machine_learning`, `dns_and_zones`, `app_security`, `rules_and_configuration`, `cloudflare_one_and_zero_trust`, `analytics_and_logs`, `network_services` — Product category that this permission group belongs to.
- `id`: string — Public ID.
- `name`: string — Permission Group Name
- `scopes`: string[] — Resources to which the Permission Group is scoped
  [array]

## GET /user/tokens/verify

Verify Token

operationId: `user-api-tokens-verify-token`

**Response** 200 → `result`

- `expires_on`: string — The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `id`: string **required** — Token identifier tag.
- `not_before`: string — The time before which the token MUST NOT be accepted for processing.
- `status`: string **required** enum: `active`, `disabled`, `expired` — Status of the token.
