# Magic CF1 Sites

5 endpoints.

## GET /accounts/{account_id}/magic/cf1_sites

List CF1 Sites

operationId: `magic-cf1-sites-list-cf1-sites`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/cf1_sites

Create CF1 Sites

operationId: `magic-cf1-sites-create-cf1-sites`

**Request** (application/json)

[array of]
- `created_on`: string
- `description`: string — A human-provided description of the CF1 Site.
- `id`: any
- `location`: object
  - `lat`: number — Latitude of the CF1 Site.
  - `long`: number — Longitude of the CF1 Site.
  - `name`: string — Name of nearest town, city, or village.
- `modified_on`: string
- `name`: string **required** — A human-provided name describing the CF1 Site that should be unique within the account.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}

Delete CF1 Site

operationId: `magic-cf1-sites-delete-cf1-site`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}

Get CF1 Site

operationId: `magic-cf1-sites-get-cf1-site`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/magic/cf1_sites/{cf1_site_id}

Update CF1 Site

operationId: `magic-cf1-sites-update-cf1-site`

**Request** (application/json)

- `description`: string — A human-provided description of the CF1 Site.
- `location`: object
  - `lat`: number — Latitude of the CF1 Site.
  - `long`: number — Longitude of the CF1 Site.
  - `name`: string — Name of nearest town, city, or village.
- `name`: string — A human-provided name describing the CF1 Site that should be unique within the account.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
