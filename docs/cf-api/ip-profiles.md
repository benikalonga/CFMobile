# IP Profiles

5 endpoints.

## GET /accounts/{account_id}/devices/ip-profiles

List IP profiles

operationId: `list-ip-profiles` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was created.
- `description`: string **required** — An optional description of the Device IP profile.
- `enabled`: boolean **required** — Whether the Device IP profile is enabled.
- `id`: string **required** — The ID of the Device IP profile.
- `match`: string **required** — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string **required** — A user-friendly name for the Device IP profile.
- `precedence`: integer **required** — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string **required** — The ID of the Subnet.
- `updated_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was last updated.

## POST /accounts/{account_id}/devices/ip-profiles

Create IP profile

operationId: `create-ip-profile`

**Request** (application/json)

- `description`: string — An optional description of the Device IP profile.
- `enabled`: boolean default: `true` — Whether the Device IP profile will be applied to matching devices.
- `match`: string **required** — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string **required** — A user-friendly name for the Device IP profile.
- `precedence`: integer **required** — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string **required** — The ID of the Subnet.

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was created.
- `description`: string **required** — An optional description of the Device IP profile.
- `enabled`: boolean **required** — Whether the Device IP profile is enabled.
- `id`: string **required** — The ID of the Device IP profile.
- `match`: string **required** — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string **required** — A user-friendly name for the Device IP profile.
- `precedence`: integer **required** — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string **required** — The ID of the Subnet.
- `updated_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was last updated.

## DELETE /accounts/{account_id}/devices/ip-profiles/{profile_id}

Delete IP profile

operationId: `delete-ip-profile`

**Response** 200 → `result`

- `id`: string — ID of the deleted Device IP profile.

## GET /accounts/{account_id}/devices/ip-profiles/{profile_id}

Get IP profile

operationId: `get-ip-profile`

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was created.
- `description`: string **required** — An optional description of the Device IP profile.
- `enabled`: boolean **required** — Whether the Device IP profile is enabled.
- `id`: string **required** — The ID of the Device IP profile.
- `match`: string **required** — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string **required** — A user-friendly name for the Device IP profile.
- `precedence`: integer **required** — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string **required** — The ID of the Subnet.
- `updated_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was last updated.

## PATCH /accounts/{account_id}/devices/ip-profiles/{profile_id}

Update IP profile

operationId: `update-ip-profile`

**Request** (application/json)

- `description`: string — An optional description of the Device IP profile.
- `enabled`: boolean — Whether the Device IP profile is enabled.
- `match`: string — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string — A user-friendly name for the Device IP profile.
- `precedence`: integer — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string — The ID of the Subnet.

**Response** 200 → `result`

- `created_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was created.
- `description`: string **required** — An optional description of the Device IP profile.
- `enabled`: boolean **required** — Whether the Device IP profile is enabled.
- `id`: string **required** — The ID of the Device IP profile.
- `match`: string **required** — The wirefilter expression to match registrations. Available values: "identity.name", "identity.email", "identity.groups.id", "identity.group
- `name`: string **required** — A user-friendly name for the Device IP profile.
- `precedence`: integer **required** — The precedence of the Device IP profile. Lower values indicate higher precedence. Device IP profile will be evaluated in ascending order of 
- `subnet_id`: string **required** — The ID of the Subnet.
- `updated_at`: string **required** — The RFC3339Nano timestamp when the Device IP profile was last updated.
