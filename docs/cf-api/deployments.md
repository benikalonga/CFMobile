# Deployments

1 endpoints.

## GET /accounts/{account_id}/containers/instances/{instance_id}/ssh

Get credentials to SSH into a Container

operationId: `containerWranglerSsh`

**Response** 200 → `result`

- `token`: string **required**
- `url`: string **required**
