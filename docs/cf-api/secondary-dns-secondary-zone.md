# Secondary DNS (Secondary Zone)

5 endpoints.

## POST /zones/{zone_id}/secondary_dns/force_axfr

Force AXFR

operationId: `secondary-dns-(-secondary-zone)-force-axfr`

**Response** 200 → `result`

string

## DELETE /zones/{zone_id}/secondary_dns/incoming

Delete Secondary Zone Configuration

operationId: `secondary-dns-(-secondary-zone)-delete-secondary-zone-configuration`

**Response** 200 → `result`

- `id`: string

## GET /zones/{zone_id}/secondary_dns/incoming

Secondary Zone Configuration Details

operationId: `secondary-dns-(-secondary-zone)-secondary-zone-configuration-details`

**Response** 200 → `result`

- `auto_refresh_seconds`: number default: `86400` — How often should a secondary zone auto refresh regardless of DNS NOTIFY.
- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `modified_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.

## POST /zones/{zone_id}/secondary_dns/incoming

Create Secondary Zone Configuration

operationId: `secondary-dns-(-secondary-zone)-create-secondary-zone-configuration`

**Request** (application/json)

- `auto_refresh_seconds`: number **required** default: `86400` — How often should a secondary zone auto refresh regardless of DNS NOTIFY.
- `id`: string **required**
- `name`: string **required** — Zone name.
- `peers`: string[] **required** — A list of peer tags.
  [array]

**Response** 200 → `result`

- `auto_refresh_seconds`: number default: `86400` — How often should a secondary zone auto refresh regardless of DNS NOTIFY.
- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `modified_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.

## PUT /zones/{zone_id}/secondary_dns/incoming

Update Secondary Zone Configuration

operationId: `secondary-dns-(-secondary-zone)-update-secondary-zone-configuration`

**Request** (application/json)

- `auto_refresh_seconds`: number **required** default: `86400` — How often should a secondary zone auto refresh regardless of DNS NOTIFY.
- `id`: string **required**
- `name`: string **required** — Zone name.
- `peers`: string[] **required** — A list of peer tags.
  [array]

**Response** 200 → `result`

- `auto_refresh_seconds`: number default: `86400` — How often should a secondary zone auto refresh regardless of DNS NOTIFY.
- `checked_time`: string — The time for a specific event.
- `created_time`: string — The time for a specific event.
- `id`: string
- `modified_time`: string — The time for a specific event.
- `name`: string — Zone name.
- `peers`: string[] — A list of peer tags.
  [array]
- `soa_serial`: number — The serial number of the SOA for the given zone.
