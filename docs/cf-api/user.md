# User

3 endpoints.

## GET /user

User Details

operationId: `user-user-details`

**Response** 200 → `result`

- `betas`: string[] — Lists the betas that the user is participating in.
  [array]
- `country`: string — The country in which the user lives.
- `email`: string **required** — Current email address of the user.
- `first_name`: string — User's first name
- `has_business_zones`: boolean default: `false` — Indicates whether user has any business zones
- `has_enterprise_zones`: boolean default: `false` — Indicates whether user has any enterprise zones
- `has_pro_zones`: boolean default: `false` — Indicates whether user has any pro zones
- `id`: string **required** — Identifier of the user.
- `last_name`: string — User's last name
- `organizations`: object[]
  [array of]
  - `id`: string — Identifier
  - `name`: string — Organization name.
  - `permissions`: string[] — Access permissions for this User.
    [array]
  - `roles`: string[] — List of roles that a user has within an organization.
    [array]
  - `status`: string enum: `member`, `invited` — Whether the user is a member of the organization or has an invitation pending.
- `suspended`: boolean default: `false` — Indicates whether user has been suspended
- `telephone`: string — User's telephone number
- `two_factor_authentication_enabled`: boolean default: `false` — Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication.
- `two_factor_authentication_locked`: boolean default: `false` — Indicates whether two-factor authentication is required by one of the accounts that the user is a member of.
- `zipcode`: string — The zipcode or postal code where the user lives.

## PATCH /user

Edit User

operationId: `user-edit-user`

**Request** (application/json)

- `country`: string — The country in which the user lives.
- `first_name`: string — User's first name
- `last_name`: string — User's last name
- `telephone`: string — User's telephone number
- `zipcode`: string — The zipcode or postal code where the user lives.

**Response** 200 → `result`

- `betas`: string[] — Lists the betas that the user is participating in.
  [array]
- `country`: string — The country in which the user lives.
- `email`: string **required** — Current email address of the user.
- `first_name`: string — User's first name
- `has_business_zones`: boolean default: `false` — Indicates whether user has any business zones
- `has_enterprise_zones`: boolean default: `false` — Indicates whether user has any enterprise zones
- `has_pro_zones`: boolean default: `false` — Indicates whether user has any pro zones
- `id`: string **required** — Identifier of the user.
- `last_name`: string — User's last name
- `organizations`: object[]
  [array of]
  - `id`: string — Identifier
  - `name`: string — Organization name.
  - `permissions`: string[] — Access permissions for this User.
    [array]
  - `roles`: string[] — List of roles that a user has within an organization.
    [array]
  - `status`: string enum: `member`, `invited` — Whether the user is a member of the organization or has an invitation pending.
- `suspended`: boolean default: `false` — Indicates whether user has been suspended
- `telephone`: string — User's telephone number
- `two_factor_authentication_enabled`: boolean default: `false` — Indicates whether two-factor authentication is enabled for the user account. Does not apply to API authentication.
- `two_factor_authentication_locked`: boolean default: `false` — Indicates whether two-factor authentication is required by one of the accounts that the user is a member of.
- `zipcode`: string — The zipcode or postal code where the user lives.

## GET /user/tenants

List user tenants

operationId: `User_listUserTenants`

**Response** 200 → `result`

[array of]
- `create_time`: string **required**
- `id`: any **required**
- `meta`: object **required**
  - `flags`: any
  - `hierarchy_tags`: string[] — Ordered chain of organization tags from the root organization down to
    [array]
  - `managed_by`: string
- `name`: string **required**
- `parent`: object
  - `id`: string **required**
  - `name`: string **required**
- `profile`: object
  - `business_address`: string **required**
  - `business_email`: string **required**
  - `business_name`: string **required**
  - `business_phone`: string **required**
  - `external_metadata`: string **required**
