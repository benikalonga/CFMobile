# Miscategorization

1 endpoints.

## POST /accounts/{account_id}/intel/miscategorization

Create Miscategorization

operationId: `miscategorization-create-miscategorization`

**Request** (application/json)

- `content_adds`: integer[] — Content category IDs to add.
  [array]
- `content_removes`: integer[] — Content category IDs to remove.
  [array]
- `indicator_type`: string enum: `domain`, `ipv4`, `ipv6`, `url`
- `ip`: string — Provide only if indicator_type is `ipv4` or `ipv6`.
- `security_adds`: integer[] — Security category IDs to add.
  [array]
- `security_removes`: integer[] — Security category IDs to remove.
  [array]
- `url`: string — Provide only if indicator_type is `domain` or `url`. Example if indicator_type is `domain`: `example.com`. Example if indicator_type is `url

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.
