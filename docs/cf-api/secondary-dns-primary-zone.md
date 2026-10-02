# Secondary DNS (Primary Zone)

8 endpoints.

## DELETE /zones/{zone_id}/secondary_dns/outgoing

Delete Primary Zone Configuration

operationId: `secondary-dns-(-primary-zone)-delete-primary-zone-configuration`

**Response** 200 → `result`

- `id`: string

## GET /zones/{zone_id}/secondary_dns/outgoing

Primary Zone Configuration Details

operationId: `secondary-dns-(-primary-zone)-primary-zone-configuration-details`

**Response** 200 → `result`

- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `last_transferred_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.

## POST /zones/{zone_id}/secondary_dns/outgoing

Create Primary Zone Configuration

operationId: `secondary-dns-(-primary-zone)-create-primary-zone-configuration`

**Request** (application/json)

- `id`: string **required**
- `name`: string **required** — Zone name.
- `peers`: string[] **required** — A list of peer tags.
  [array]

**Response** 200 → `result`

- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `last_transferred_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.

## PUT /zones/{zone_id}/secondary_dns/outgoing

Update Primary Zone Configuration

operationId: `secondary-dns-(-primary-zone)-update-primary-zone-configuration`

**Request** (application/json)

- `id`: string **required**
- `name`: string **required** — Zone name.
- `peers`: string[] **required** — A list of peer tags.
  [array]

**Response** 200 → `result`

- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `last_transferred_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.

## POST /zones/{zone_id}/secondary_dns/outgoing/disable

Disable Outgoing Zone Transfers

operationId: `secondary-dns-(-primary-zone)-disable-outgoing-zone-transfers`

**Response** 200 → `result`

string

## POST /zones/{zone_id}/secondary_dns/outgoing/enable

Enable Outgoing Zone Transfers

operationId: `secondary-dns-(-primary-zone)-enable-outgoing-zone-transfers`

**Response** 200 → `result`

string

## POST /zones/{zone_id}/secondary_dns/outgoing/force_notify

Force DNS NOTIFY

operationId: `secondary-dns-(-primary-zone)-force-dns-notify`

**Response** 200 → `result`

string

## GET /zones/{zone_id}/secondary_dns/outgoing/status

Get Outgoing Zone Transfer Status

operationId: `secondary-dns-(-primary-zone)-get-outgoing-zone-transfer-status`

**Response** 200 → `result`

string
