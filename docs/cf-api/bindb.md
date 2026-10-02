# BinDB

2 endpoints.

## POST /accounts/{account_id}/cloudforce-one/binary

Posts a file to Binary Storage

operationId: `post_BinDBPost`

**Request** (multipart/form-data)

- `file`: string **required** — The binary file content to upload.

**Response** 200 → `result`

- `content_type`: string **required**
- `md5`: string **required**
- `sha1`: string **required**
- `sha256`: string **required**

## GET /accounts/{account_id}/cloudforce-one/binary/{hash}

Retrieves a file from Binary Storage

operationId: `get_BinDBGetBinary`
