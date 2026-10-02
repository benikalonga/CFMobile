# Access SCIM update logs

1 endpoints.

## GET /accounts/{account_id}/access/logs/scim/updates

List Access SCIM update logs

operationId: `access-scim-update-logs-list-access-scim-update-logs` · query: `limit`, `direction`, `since`, `until`, `idp_id`, `status`, `resource_type`, `request_method`, `resource_user_email`, `resource_group_name`, `cf_resource_id`, `idp_resource_id`, `page`, `per_page`

**Response** 200 → `result`

[array of]
- `cf_resource_id`: string — The unique Cloudflare-generated Id of the SCIM resource.
- `error_description`: string — The error message which is generated when the status of the SCIM request is 'FAILURE'.
- `idp_id`: string — The unique Id of the IdP that has SCIM enabled.
- `idp_resource_id`: string — The IdP-generated Id of the SCIM resource.
- `logged_at`: string
- `request_body`: string — The JSON-encoded string body of the SCIM request.
- `request_method`: string — The request method of the SCIM request.
- `resource_group_name`: string — The display name of the SCIM Group resource if it exists.
- `resource_type`: string — The resource type of the SCIM request.
- `resource_user_email`: string — The email address of the SCIM User resource if it exists.
- `status`: string — The status of the SCIM request.
