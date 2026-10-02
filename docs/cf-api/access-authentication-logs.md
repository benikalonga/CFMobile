# Access authentication logs

1 endpoints.

## GET /accounts/{account_id}/access/logs/access_requests

Get Access authentication logs

operationId: `access-authentication-logs-get-access-authentication-logs` · query: `limit`, `direction`, `since`, `until`, `page`, `per_page`, `email`, `email_exact`, `user_id`, `allowedOp`, `country_codeOp`, `app_typeOp`, `app_uidOp`, `ray_idOp`, `emailOp`, `idpOp`, `non_identityOp`, `user_idOp`, `fields`

**Response** 200 → `result`

[array of]
- `action`: string — The event that occurred, such as a login attempt.
- `allowed`: boolean default: `false` — The result of the authentication event.
- `app_domain`: string — The URL of the Access application.
- `app_uid`: string — The unique identifier for the Access application.
- `connection`: string — The IdP used to authenticate.
- `created_at`: string
- `ip_address`: string — The IP address of the authenticating user.
- `ray_id`: string — The unique identifier for the request to Cloudflare.
- `user_email`: string — The email address of the authenticating user.
