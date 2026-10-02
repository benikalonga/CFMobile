# Client Versions

2 endpoints.

## GET /accounts/{account_id}/devices/client-versions

List client versions

operationId: `list-client-versions` · query: `target_environment`, `release_track`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `package_size`: integer — Size of the package in bytes.
- `package_url`: string — URL to download the package.
- `release_date`: string **required** — The release date timestamp.
- `release_notes`: string — Release notes for this version.
- `version`: string **required** — The client version string.

## GET /accounts/{account_id}/devices/client-versions/target-environments

List available target environments

operationId: `list-client-target-environments`

**Response** 200 → `result`

[array of]
- `display_name`: string **required** — A human-readable name for the target environment.
- `target_environment`: string **required** — The target environment identifier.
