# DEX Remote Commands

5 endpoints.

## GET /accounts/{account_id}/dex/commands

List account commands

operationId: `get-commands` · query: `page`, `per_page`, `from`, `to`, `device_id`, `user_email`, `command_type`, `status`

**Response** 200 → `result`

- `commands`: object[]
  [array of]
  - `completed_date`: string
  - `created_date`: string
  - `device_id`: string
  - `filename`: string
  - `id`: string
  - `registration_id`: string — Unique identifier for the device registration
  - `status`: string
  - `type`: string
  - `user_email`: string

## POST /accounts/{account_id}/dex/commands

Create account commands

operationId: `post-commands`

**Request** (application/json)

- `commands`: object[] **required** — List of device-level commands to execute
  [array of]
  - `args`: object — Command arguments. Allowed fields depend on `type`.
  - `device_id`: string **required** — Unique identifier for the physical device
  - `registration_id`: string — Unique identifier for the device registration. Required for multi-user devices to target the correct user session.
  - `type`: string **required** enum: `pcap`, `speed-test`, `warp-diag` — Type of command to execute on the device
  - `user_email`: string **required** — Email tied to the device

**Response** 200 → `result`

- `commands`: object[] — List of created commands
  [array of]
  - `args`: object — Command arguments
  - `device_id`: string — Identifier for the device associated with the command
  - `id`: string — Unique identifier for the command
  - `registration_id`: string — Unique identifier for the device registration
  - `status`: string enum: `PENDING_EXEC`, `PENDING_UPLOAD`, `SUCCESS`, `FAILED` — Current status of the command
  - `type`: string — Type of the command (e.g., "pcap", "speed-test", or "warp-diag")

## GET /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}

Download command output file

operationId: `get-commands-command-id-downloads-filename`

**Response** 200 → `result`

string

## GET /accounts/{account_id}/dex/commands/devices

List devices eligible for remote captures

operationId: `get-commands-eligible-devices` · query: `page`, `per_page`, `search`

**Response** 200 → `result`

- `devices`: object[] — List of eligible devices
  [array of]
  - `deviceId`: string — Device identifier (UUID v4)
  - `deviceName`: string — Device identifier (human readable)
  - `eligible`: boolean — Whether the device is eligible for remote captures
  - `ineligibleReason`: string — If the device is not eligible, the reason why.
  - `personEmail`: string — User contact email address
  - `platform`: string — Operating system.
  - `registrationId`: string — Device registration identifier (UUID v4). On multi-user devices, this uniquely identifies a user's registration on the device.
  - `status`: string — Network status.
  - `timestamp`: string
  - `version`: string — WARP client version.

## GET /accounts/{account_id}/dex/commands/quota

Returns account commands usage, quota, and reset time

operationId: `get-commands-quota`

**Response** 200 → `result`

- `quota`: number **required** — The total number of commands that can be initiated for an account.
- `quota_usage`: number **required** — The number of commands that have been initiated for an account.
- `reset_time`: string **required** — The time when the quota resets.
