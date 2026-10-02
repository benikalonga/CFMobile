# Email Auth

3 endpoints.

## GET /zones/{zone_id}/email/auth/dmarc-reports

Get DMARC Report Status

operationId: `get_dmarc_reports_status`

**Response** 200 → `result`

- `approved_sources`: object[] — List of approved sending sources (omitted when empty)
  [array of]
  - `created`: string — Deprecated, use created_at
  - `created_at`: string — Creation timestamp
  - `domain`: string — The source domain
  - `ips`: string[] — Resolved IP addresses from SPF
    [array]
  - `modified`: string — Deprecated, use modified_at
  - `modified_at`: string — Last modification timestamp
  - `name`: string — Source name (typically same as domain)
  - `slug`: string — URL-friendly identifier
  - `tag`: string — Source UUID
- `created`: string — Deprecated, use created_at
- `created_at`: string — Creation timestamp
- `enabled`: boolean — Whether DMARC reports are enabled
- `modified`: string — Deprecated, use modified_at
- `modified_at`: string — Last modification timestamp
- `records`: object — Live DNS records for the zone, grouped by type
  - `bimi_records`: object[] — BIMI TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_dkim_records`: object[] — CNAME records for DKIM
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_dmarc_records`: object[] — CNAME records at _dmarc (problematic)
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_spf_records`: object[] — CNAME records for SPF
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `dkim_records`: object[] — DKIM TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `dmarc_records`: object[] — DMARC TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `spf_records`: object[] — SPF TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
- `rua_prefix`: string — Prefix for DMARC RUA addresses (32-char hex string)
- `skip_wizard`: boolean — Whether to skip the setup wizard
- `status`: string enum: `missing-dmarc-report`, `multiple-dmarc-reports`, `missing-dmarc-rua`, `cname-on-dmarc-record` — DMARC configuration status
- `tag`: string — Use `zone_id` instead
- `zone_id`: string — Zone identifier

## PATCH /zones/{zone_id}/email/auth/dmarc-reports

Configure DMARC Reports

operationId: `configure_dmarc_reports`

**Request** (application/json)

- `enabled`: boolean — Enable or disable DMARC reports for this zone
- `skip_wizard`: boolean — Skip the DMARC setup wizard

**Response** 200 → `result`

- `approved_sources`: object[] — List of approved sending sources (omitted when empty)
  [array of]
  - `created`: string — Deprecated, use created_at
  - `created_at`: string — Creation timestamp
  - `domain`: string — The source domain
  - `ips`: string[] — Resolved IP addresses from SPF
    [array]
  - `modified`: string — Deprecated, use modified_at
  - `modified_at`: string — Last modification timestamp
  - `name`: string — Source name (typically same as domain)
  - `slug`: string — URL-friendly identifier
  - `tag`: string — Source UUID
- `created`: string — Deprecated, use created_at
- `created_at`: string — Creation timestamp
- `enabled`: boolean — Whether DMARC reports are enabled
- `modified`: string — Deprecated, use modified_at
- `modified_at`: string — Last modification timestamp
- `records`: object — Live DNS records for the zone, grouped by type
  - `bimi_records`: object[] — BIMI TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_dkim_records`: object[] — CNAME records for DKIM
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_dmarc_records`: object[] — CNAME records at _dmarc (problematic)
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `cname_spf_records`: object[] — CNAME records for SPF
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `dkim_records`: object[] — DKIM TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `dmarc_records`: object[] — DMARC TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
  - `spf_records`: object[] — SPF TXT records
    [array of]
    - `content`: string — Record content
    - `id`: string — DNS record ID
    - `name`: string — DNS record name
    - `ttl`: integer — Time to live in seconds
    - `type`: string — Record type
- `rua_prefix`: string — Prefix for DMARC RUA addresses (32-char hex string)
- `skip_wizard`: boolean — Whether to skip the setup wizard
- `status`: string enum: `missing-dmarc-report`, `multiple-dmarc-reports`, `missing-dmarc-rua`, `cname-on-dmarc-record` — DMARC configuration status
- `tag`: string — Use `zone_id` instead
- `zone_id`: string — Zone identifier

## GET /zones/{zone_id}/email/auth/spf/inspect

Inspect SPF Record

operationId: `inspect_spf` · query: `id`

**Response** 200 → `result`

- `components`: object[] **required** — Parsed SPF components (mechanisms)
  [array of]
  - `lookup_count`: integer **required** — Number of DNS lookups this component requires (per RFC 7208).
  - `nested`: any — Nested SPF tree for INCLUDE or REDIRECT mechanisms.
  - `result`: string **required** enum: `pass`, `neutral`, `fail`, `soft_fail`, `none`, `temp_error`, `perm_error` — SPF mechanism result qualifier
  - `type`: string **required** enum: `ALL`, `A`, `MX`, `IP4`, `IP6`, `EXISTS`, `INCLUDE`, `PTR` — Component type (UPPERCASE)
  - `value`: string **required** — Component value with qualifier prefix.
- `domain`: string **required** — Domain being inspected
- `errors`: object[] — All errors encountered during inspection, collected from the entire tree.
  [array of]
  - `code`: string **required** — Error code. Known values:
  - `details`: string — Additional error-specific details (optional).
  - `domain`: string **required** — Domain where the error occurred
  - `message`: string **required** — Human-readable error message
- `record`: string **required** — Raw SPF record content
- `total_lookups`: integer **required** — Total number of DNS lookups performed across all includes
