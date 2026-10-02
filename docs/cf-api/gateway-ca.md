# Gateway CA

3 endpoints.

## GET /accounts/{account_id}/access/gateway_ca

List SSH Certificate Authorities (CA)

operationId: `access-gateway-ca-list-SSH-ca`

**Response** 200 → `result`

[array of]
- `id`: string — The key ID of this certificate.
- `public_key`: string — The public key of this certificate.

## POST /accounts/{account_id}/access/gateway_ca

Add a new SSH Certificate Authority (CA)

operationId: `access-gateway-ca-add-an-SSH-ca`

**Response** 201 → `result`

- `id`: string — The key ID of this certificate.
- `public_key`: string — The public key of this certificate.

## DELETE /accounts/{account_id}/access/gateway_ca/{certificate_id}

Delete an SSH Certificate Authority (CA)

operationId: `access-gateway-ca-delete-an-SSH-ca`

**Response** 200 → `result`

- `id`: string — UUID.
