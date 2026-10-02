# Secondary DNS (TSIG)

5 endpoints.

## GET /accounts/{account_id}/secondary_dns/tsigs

List TSIGs

operationId: `secondary-dns-(-tsig)-list-tsi-gs`

**Response** 200 → `result`

[array of]
- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.

## POST /accounts/{account_id}/secondary_dns/tsigs

Create TSIG

operationId: `secondary-dns-(-tsig)-create-tsig`

**Request** (application/json)

- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.

**Response** 200 → `result`

- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.

## DELETE /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}

Delete TSIG

operationId: `secondary-dns-(-tsig)-delete-tsig`

**Response** 200 → `result`

- `id`: string

## GET /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}

TSIG Details

operationId: `secondary-dns-(-tsig)-tsig-details`

**Response** 200 → `result`

- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.

## PUT /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}

Update TSIG

operationId: `secondary-dns-(-tsig)-update-tsig`

**Request** (application/json)

- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.

**Response** 200 → `result`

- `algo`: string **required** — TSIG algorithm.
- `id`: string **required**
- `name`: string **required** — TSIG key name.
- `secret`: string **required** — TSIG secret.
