# Worker Subdomain

3 endpoints.

## DELETE /accounts/{account_id}/workers/subdomain

Delete Subdomain

operationId: `worker-subdomain-delete-subdomain`

## GET /accounts/{account_id}/workers/subdomain

Get Subdomain

operationId: `worker-subdomain-get-subdomain`

**Response** 200 → `result`

- `subdomain`: string **required**

## PUT /accounts/{account_id}/workers/subdomain

Create Subdomain

operationId: `worker-subdomain-create-subdomain`

**Request** (application/json)

- `subdomain`: string **required**

**Response** 200 → `result`

- `subdomain`: string **required**
