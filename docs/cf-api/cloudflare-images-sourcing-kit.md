# Cloudflare Images Sourcing Kit

15 endpoints.

## GET /accounts/{account_id}/images/v2/sourcingkit/migrations

List sourcing kit migrations

operationId: `cloudflare-images-sourcingkit-list-migrations` · query: `offset`, `limit`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/images/v2/sourcingkit/migrations

Create a sourcing kit migration

operationId: `cloudflare-images-sourcingkit-create-migration`

**Request** (application/json)

- `conflictBehaviour`: string enum: `skip`, `overwrite` default: `skip` — How to handle objects that already exist at the destination.
- `excludedContentTypes`: string[] — Content types to skip during migration.
  [array]
- `pathPrefix`: string — Prefix to prepend to image custom IDs.
- `rootDirectory`: string — Only import objects under this prefix in the source bucket.
- `sourceId`: string **required** — The identifier of the source to migrate from.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}

Delete a sourcing kit migration

operationId: `cloudflare-images-sourcingkit-delete-migration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}

Get sourcing kit migration

operationId: `cloudflare-images-sourcingkit-get-migration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle

Get migration progress

operationId: `cloudflare-images-sourcingkit-get-migration-progress`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/abort

Abort a migration

operationId: `cloudflare-images-sourcingkit-abort-migration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/start

Start a migration

operationId: `cloudflare-images-sourcingkit-start-migration`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs

List migration logs

operationId: `cloudflare-images-sourcingkit-list-migration-logs` · query: `offset`, `limit`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/sources

List sourcing kit sources

operationId: `cloudflare-images-sourcingkit-list-sources` · query: `offset`, `limit`, `name`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/images/v2/sourcingkit/sources

Create a sourcing kit source

operationId: `cloudflare-images-sourcingkit-create-source`

**Request** (application/json)

- `account`: string — Account identifier for the bucket (required for R2 vendor).
- `bucket`: string **required** — The name of the storage bucket.
- `name`: string **required** — A human-readable name for the source.
- `secret`: object **required** — Storage credentials for accessing the bucket. Shape depends on vendor.
- `vendor`: string **required** enum: `s3`, `r2` — The cloud storage vendor of the source bucket.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}

Delete a sourcing kit source

operationId: `cloudflare-images-sourcingkit-delete-source`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}

Get sourcing kit source

operationId: `cloudflare-images-sourcingkit-get-source`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}

Update a sourcing kit source

operationId: `cloudflare-images-sourcingkit-update-source`

**Request** (application/json)

- `name`: string **required** — Updated name for the source.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity

Get source connectivity status

operationId: `cloudflare-images-sourcingkit-get-source-connectivity`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck

Precheck source connectivity

operationId: `cloudflare-images-sourcingkit-precheck-source-connectivity`

**Request** (application/json)

- `account`: string — Account identifier for the bucket (required for R2 vendor).
- `bucket`: string **required** — The name of the storage bucket.
- `region`: string — The region hint for the bucket (S3 only).
- `secret`: object **required** — Storage credentials for accessing the bucket.
- `vendor`: string **required** enum: `s3`, `r2` — The cloud storage vendor of the source bucket.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
