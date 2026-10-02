# WARP Change Events

1 endpoints.

## GET /accounts/{account_id}/dex/warp-change-events

List WARP change events.

operationId: `list-warp-change-events` · query: `page`, `per_page`, `from`, `to`, `type`, `toggle`, `config_name`, `account_name`, `sort_order`

**Response** 200 → `result`

[array of]
(one of 2 variants; showing the first)
- `account_name`: string — The account name.
- `account_tag`: string — The public account identifier.
- `device_id`: any — The device ID.
- `device_registration`: any — Deprecated: use registration_id. The device registration ID.
- `hostname`: string — The hostname of the machine the event is from.
- `registration_id`: any — The device registration ID.
- `serial_number`: string — The serial number of the machine the event is from.
- `timestamp`: any — The event time.
- `toggle`: string enum: `on`, `off` — The state of the WARP toggle.
- `user_email`: string — Email tied to the device.
