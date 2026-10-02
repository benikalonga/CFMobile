# DLP Document Fingerprints

6 endpoints.

## GET /accounts/{account_id}/dlp/document_fingerprints

Retrieve data about all document fingerprints.

operationId: `dlp-document-fingerprints-read-all`

**Response** 200 → `result`

[array of]
- `created_at`: string **required**
- `description`: string **required** default: ``
- `entry_id`: string **required**
- `file_name`: string
- `id`: string **required**
- `match_percent`: integer **required**
- `name`: string **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required**
- `version`: integer

## POST /accounts/{account_id}/dlp/document_fingerprints

Creates a new document fingerprint.

operationId: `dlp-document-fingerprints-create`

**Request** (application/json)

- `description`: string default: ``
- `match_percent`: integer **required**
- `name`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string **required** default: ``
- `entry_id`: string **required**
- `file_name`: string
- `id`: string **required**
- `match_percent`: integer **required**
- `name`: string **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required**
- `version`: integer

## DELETE /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}

Delete a single document fingerprint.

operationId: `dlp-document-fingerprints-delete`

## GET /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}

Retrieve data about a specific document fingerprint.

operationId: `dlp-document-fingerprints-read`

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string **required** default: ``
- `entry_id`: string **required**
- `file_name`: string
- `id`: string **required**
- `match_percent`: integer **required**
- `name`: string **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required**
- `version`: integer

## POST /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}

Update the attributes of a single document fingerprint.

operationId: `dlp-document-fingerprints-update`

**Request** (application/json)

- `description`: string
- `match_percent`: integer
- `name`: string

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string **required** default: ``
- `entry_id`: string **required**
- `file_name`: string
- `id`: string **required**
- `match_percent`: integer **required**
- `name`: string **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required**
- `version`: integer

## PUT /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}

Uploads a new version for a document fingerprint.

operationId: `dlp-document-fingerprints-upload`

**Request** (multipart/form-data)

- `file`: string **required**

**Response** 200 → `result`

- `created_at`: string **required**
- `description`: string **required**
- `entry_id`: string **required**
- `file_name`: string **required**
- `id`: string **required**
- `match_percent`: integer **required**
- `name`: string **required**
- `status`: string **required** enum: `empty`, `uploading`, `pending`, `processing`, `failed`, `complete`
- `updated_at`: string **required**
- `version`: integer **required**
