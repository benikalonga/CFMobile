# Zero Trust seats

1 endpoints.

## PATCH /accounts/{account_id}/access/seats

Update a user seat

operationId: `zero-trust-seats-update-a-user-seat`

**Request** (application/json)

[array of]
- `access_seat`: boolean **required** — True if the seat is part of Access.
- `gateway_seat`: boolean **required** — True if the seat is part of Gateway.
- `seat_uid`: string **required** — The unique API identifier for the Zero Trust seat.

**Response** 200 → `result`

[array of]
- `access_seat`: boolean — True if the seat is part of Access.
- `created_at`: string
- `gateway_seat`: boolean — True if the seat is part of Gateway.
- `seat_uid`: string — The unique API identifier for the Zero Trust seat.
- `updated_at`: string
