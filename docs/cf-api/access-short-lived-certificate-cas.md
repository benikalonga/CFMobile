# Access short-lived certificate CAs

4 endpoints.

## DELETE /accounts/{account_id}/access/apps/{app_id}/ca

Delete a short-lived certificate CA

operationId: `access-short-lived-certificate-c-as-delete-a-short-lived-certificate-ca`

**Response** 202 → `result`

- `id`: string — The ID of the CA.

## GET /accounts/{account_id}/access/apps/{app_id}/ca

Get a short-lived certificate CA

operationId: `access-short-lived-certificate-c-as-get-a-short-lived-certificate-ca`

**Response** 200 → `result`

- `aud`: string — The Application Audience (AUD) tag. Identifies the application associated with the CA.
- `id`: string — The ID of the CA.
- `public_key`: string — The public key to add to your SSH server configuration.

## POST /accounts/{account_id}/access/apps/{app_id}/ca

Create a short-lived certificate CA

operationId: `access-short-lived-certificate-c-as-create-a-short-lived-certificate-ca`

**Response** 200 → `result`

- `aud`: string — The Application Audience (AUD) tag. Identifies the application associated with the CA.
- `id`: string — The ID of the CA.
- `public_key`: string — The public key to add to your SSH server configuration.

## GET /accounts/{account_id}/access/apps/ca

List short-lived certificate CAs

operationId: `access-short-lived-certificate-c-as-list-short-lived-certificate-c-as` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `aud`: string — The Application Audience (AUD) tag. Identifies the application associated with the CA.
- `id`: string — The ID of the CA.
- `public_key`: string — The public key to add to your SSH server configuration.
