# Email Routing destination addresses

5 endpoints.

## GET /accounts/{account_id}/email/routing/addresses

List destination addresses

operationId: `email-routing-destination-addresses-list-destination-addresses` · query: `page`, `per_page`, `direction`, `verified`

**Response** 200 → `result`

[array of]
- `created`: string — The date and time the destination address has been created.
- `email`: string — The contact email address of the user.
- `id`: string — Destination address identifier.
- `modified`: string — The date and time the destination address was last modified.
- `tag`: string — Destination address tag. (Deprecated, replaced by destination address identifier)
- `verified`: string — The date and time the destination address has been verified. Null means not verified yet.

## POST /accounts/{account_id}/email/routing/addresses

Create a destination address

operationId: `email-routing-destination-addresses-create-a-destination-address`

**Request** (application/json)

- `email`: string **required** — The contact email address of the user.

**Response** 200 → `result`

- `created`: string — The date and time the destination address has been created.
- `email`: string — The contact email address of the user.
- `id`: string — Destination address identifier.
- `modified`: string — The date and time the destination address was last modified.
- `tag`: string — Destination address tag. (Deprecated, replaced by destination address identifier)
- `verified`: string — The date and time the destination address has been verified. Null means not verified yet.

## DELETE /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}

Delete destination address

operationId: `email-routing-destination-addresses-delete-destination-address`

**Response** 200 → `result`

- `created`: string — The date and time the destination address has been created.
- `email`: string — The contact email address of the user.
- `id`: string — Destination address identifier.
- `modified`: string — The date and time the destination address was last modified.
- `tag`: string — Destination address tag. (Deprecated, replaced by destination address identifier)
- `verified`: string — The date and time the destination address has been verified. Null means not verified yet.

## GET /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}

Get a destination address

operationId: `email-routing-destination-addresses-get-a-destination-address`

**Response** 200 → `result`

- `created`: string — The date and time the destination address has been created.
- `email`: string — The contact email address of the user.
- `id`: string — Destination address identifier.
- `modified`: string — The date and time the destination address was last modified.
- `tag`: string — Destination address tag. (Deprecated, replaced by destination address identifier)
- `verified`: string — The date and time the destination address has been verified. Null means not verified yet.

## PATCH /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}

Update destination address

operationId: `email-routing-destination-addresses-update-destination-address`

**Request** (application/json)

- `status`: string **required** enum: `unverified`, `verified` — Destination address status. Non-admin callers may only set verified addresses back to unverified; setting to verified requires admin privile

**Response** 200 → `result`

- `created`: string — The date and time the destination address has been created.
- `email`: string — The contact email address of the user.
- `id`: string — Destination address identifier.
- `modified`: string — The date and time the destination address was last modified.
- `tag`: string — Destination address tag. (Deprecated, replaced by destination address identifier)
- `verified`: string — The date and time the destination address has been verified. Null means not verified yet.
