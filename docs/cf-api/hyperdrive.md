# Hyperdrive

7 endpoints.

## GET /accounts/{account_id}/hyperdrive/configs

List Hyperdrives

operationId: `list-hyperdrive` · query: `page`, `per_page`

**Response** 200 → `result`

object

## POST /accounts/{account_id}/hyperdrive/configs

Create Hyperdrive

operationId: `create-hyperdrive`

**Request** (application/json)

- `caching`: object
- `created_on`: string — Defines the creation time of the Hyperdrive configuration.
- `id`: string **required** — Define configurations using a unique string identifier.
- `modified_on`: string — Defines the last modified time of the Hyperdrive configuration.
- `mtls`: object — mTLS configuration for the origin connection. Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.
  - `ca_certificate_id`: string — Define CA certificate ID obtained after uploading CA cert.
  - `mtls_certificate_id`: string — Define mTLS certificate ID obtained after uploading client cert.
  - `sslmode`: string — Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.
- `name`: string **required** — The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.
- `origin`: object **required**
- `origin_connection_limit`: integer — The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.
- `restarted_on`: string — Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. Omitted if the pool has never been e

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}

Delete Hyperdrive

operationId: `delete-hyperdrive`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}

Get Hyperdrive

operationId: `get-hyperdrive`

**Response** 200 → `result`

object

## PATCH /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}

Patch Hyperdrive

operationId: `patch-hyperdrive`

**Request** (application/json)

- `caching`: object
- `mtls`: object — mTLS configuration for the origin connection. Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.
  - `ca_certificate_id`: string — Define CA certificate ID obtained after uploading CA cert.
  - `mtls_certificate_id`: string — Define mTLS certificate ID obtained after uploading client cert.
  - `sslmode`: string — Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.
- `name`: string — The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.
- `origin`: object
- `origin_connection_limit`: integer — The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

**Response** 200 → `result`

object

## PUT /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}

Update Hyperdrive

operationId: `update-hyperdrive`

**Request** (application/json)

- `caching`: object
- `created_on`: string — Defines the creation time of the Hyperdrive configuration.
- `id`: string **required** — Define configurations using a unique string identifier.
- `modified_on`: string — Defines the last modified time of the Hyperdrive configuration.
- `mtls`: object — mTLS configuration for the origin connection. Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.
  - `ca_certificate_id`: string — Define CA certificate ID obtained after uploading CA cert.
  - `mtls_certificate_id`: string — Define mTLS certificate ID obtained after uploading client cert.
  - `sslmode`: string — Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.
- `name`: string **required** — The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.
- `origin`: object **required**
- `origin_connection_limit`: integer — The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.
- `restarted_on`: string — Defines the last time the Hyperdrive connection pool was explicitly restarted via the restart endpoint. Omitted if the pool has never been e

**Response** 200 → `result`

object

## POST /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart

Restart Hyperdrive

operationId: `restart-hyperdrive`

**Response** 200 → `result`

object
