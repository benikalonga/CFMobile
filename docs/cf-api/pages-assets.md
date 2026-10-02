# Pages Assets

3 endpoints.

## POST /pages/assets/check-missing

Check missing assets

operationId: `pages-assets-check-missing`

**Request** (application/json)

- `hashes`: string[] **required** — List of file content hashes to check for existence in the asset store.
  [array]

**Response** 200 → `result`

[array of]
string

## POST /pages/assets/upload

Upload asset

operationId: `pages-assets-upload`

**Request** (application/json)

[array of]
- `base64`: boolean **required** — Whether value is base64 encoded.
- `key`: string **required** — File content hash used as the object key in the Pages asset store.
- `metadata`: object **required**
  - `contentType`: string **required** — MIME type for the uploaded file.
- `value`: string **required** — File content. When base64 is true, this value is base64 encoded.

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

## POST /pages/assets/upsert-hashes

Upsert asset hashes

operationId: `pages-assets-upsert-hashes`

**Request** (application/json)

- `hashes`: string[] **required** — List of file content hashes to register in the asset store.
  [array]

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
