# Interconnects

6 endpoints.

## GET /accounts/{account_id}/cni/interconnects

List existing interconnects

operationId: `list_interconnects` · query: `site`, `type`, `cursor`, `limit`

**Response** 200 → `result`

- `items`: object[] **required**
  [array of]
  - `account`: string **required**
  - `name`: string **required**
  - `owner`: string
  - `type`: string **required**
  - `facility`: object **required**
    - `address`: string[] **required**
    - `name`: string **required**
  - `site`: string **required** — A Cloudflare site name.
  - `slot_id`: string **required**
  - `speed`: string **required**
- `next`: integer

## POST /accounts/{account_id}/cni/interconnects

Create a new interconnect

operationId: `create_interconnect`

**Request** (application/json)

(one of 2 variants; showing the first)
- `account`: string **required**
- `type`: string **required**
- `slot_id`: string **required**
- `speed`: string

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `account`: string **required**
- `name`: string **required**
- `owner`: string
- `type`: string **required**
- `facility`: object **required**
  - `address`: string[] **required**
    [array]
  - `name`: string **required**
- `site`: string **required** — A Cloudflare site name.
- `slot_id`: string **required**
- `speed`: string **required**

## DELETE /accounts/{account_id}/cni/interconnects/{icon}

Delete an interconnect object

operationId: `delete_interconnect`

## GET /accounts/{account_id}/cni/interconnects/{icon}

Get information about an interconnect object

operationId: `get_interconnect`

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `account`: string **required**
- `name`: string **required**
- `owner`: string
- `type`: string **required**
- `facility`: object **required**
  - `address`: string[] **required**
    [array]
  - `name`: string **required**
- `site`: string **required** — A Cloudflare site name.
- `slot_id`: string **required**
- `speed`: string **required**

## GET /accounts/{account_id}/cni/interconnects/{icon}/loa

Generate the Letter of Authorization (LOA) for a given interconnect

operationId: `get_interconnect_loa`

## GET /accounts/{account_id}/cni/interconnects/{icon}/status

Get the current status of an interconnect object

operationId: `get_interconnect_status`

**Response** 200 → `result`

(one of 4 variants; showing the first)
- `state`: string **required** enum: `Pending`
