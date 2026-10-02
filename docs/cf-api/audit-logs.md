# Audit Logs

7 endpoints.

## GET /accounts/{account_id}/audit_logs

Get account audit logs

operationId: `audit-logs-get-account-audit-logs` · query: `id`, `export`, `action.type`, `actor.ip`, `actor.email`, `since`, `before`, `zone.name`, `direction`, `per_page`, `page`, `hide_user_logs`

**Response** 200 → `result`

[array of]
- `action`: object
  - `result`: boolean — A boolean that indicates if the action attempted was successful.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: object
  - `email`: string — The email of the user that performed the action.
  - `id`: string — The ID of the actor that performed the action. If a user performed the action, this will be their User ID.
  - `ip`: string — The IP address of the request that performed the action.
  - `type`: string enum: `user`, `admin`, `Cloudflare` — The type of actor, whether a User, Cloudflare Admin, or an Automated System.
- `id`: string — A string that uniquely identifies the audit log.
- `interface`: string — The source of the event.
- `metadata`: object — An object which can lend more context to the action being logged. This is a flexible value and varies between different actions.
- `newValue`: string — The new value of the resource that was modified.
- `oldValue`: string — The value of the resource before it was modified.
- `owner`: object
  - `id`: string — Identifier
- `resource`: object
  - `id`: string — An identifier for the resource that was affected by the action.
  - `type`: string — A short string that describes the resource that was affected by the action.
- `when`: string — A UTC RFC3339 timestamp that specifies when the action being logged occured.

## GET /accounts/{account_id}/logs/audit

Get account audit logs (Version 2)

operationId: `audit-logs-v2-get-account-audit-logs` · query: `account_name`, `action_result`, `action_type`, `actor_context`, `actor_email`, `actor_id`, `actor_ip_address`, `actor_token_id`, `actor_token_name`, `actor_type`, `audit_log_id`, `id`, `raw_cf_ray_id`, `raw_method`, `raw_status_code`, `raw_uri`, `resource_id`, `resource_product`, `resource_type`, `resource_scope`, `product_category`, `zone_id`, `zone_name`, `account_name.not`, `action_result.not`, `action_type.not`, `actor_context.not`, `actor_email.not`, `actor_id.not`, `actor_ip_address.not`, `actor_token_id.not`, `actor_token_name.not`, `actor_type.not`, `audit_log_id.not`, `id.not`, `raw_cf_ray_id.not`, `raw_method.not`, `raw_status_code.not`, `raw_uri.not`, `resource_id.not`, `resource_product.not`, `resource_type.not`, `resource_scope.not`, `zone_id.not`, `zone_name.not`, `since`, `before`, `direction`, `limit`, `cursor`

**Response** 200 → `result`

[array of]
- `account`: object — Contains account related information.
  - `id`: string — A unique identifier for the account.
  - `name`: string — A string that identifies the account name.
- `action`: object — Provides information about the action performed.
  - `description`: string — A short description of the action performed.
  - `result`: string — The result of the action, indicating success or failure.
  - `time`: string — A timestamp indicating when the action was logged.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: any
- `id`: string — A unique identifier for the audit log entry.
- `raw`: object — Provides raw information about the request and response.
  - `cf_ray_id`: string — The Cloudflare Ray ID for the request.
  - `method`: string — The HTTP method of the request.
  - `status_code`: integer — The HTTP response status code returned by the API.
  - `uri`: string — The URI of the request.
  - `user_agent`: string — The client's user agent string sent with the request.
- `resource`: object — Provides details about the affected resource.
  - `id`: string — The unique identifier for the affected resource.
  - `product`: string — The Cloudflare product associated with the resource.
  - `request`: object
  - `response`: object
  - `scope`: object — The scope of the resource.
  - `type`: string — The type of the resource.
- `zone`: object — Provides details about the zone affected by the action.
  - `id`: string — A string that identifies the zone id.
  - `name`: string — A string that identifies the zone name.

## GET /accounts/{account_id}/logs/audit/{id}/history

Get resource change history from an account audit log entry (Version 2)

operationId: `audit-logs-v2-get-account-audit-log-history` · query: `action_time`, `since`, `before`, `direction`, `limit`, `cursor`

**Response** 200 → `result`

[array of]
- `account`: object — Contains account related information.
  - `id`: string — A unique identifier for the account.
  - `name`: string — A string that identifies the account name.
- `action`: object — Provides information about the action performed.
  - `description`: string — A short description of the action performed.
  - `result`: string — The result of the action, indicating success or failure.
  - `time`: string — A timestamp indicating when the action was logged.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: any
- `id`: string — A unique identifier for the audit log entry.
- `raw`: object — Provides raw information about the request and response.
  - `cf_ray_id`: string — The Cloudflare Ray ID for the request.
  - `method`: string — The HTTP method of the request.
  - `status_code`: integer — The HTTP response status code returned by the API.
  - `uri`: string — The URI of the request.
  - `user_agent`: string — The client's user agent string sent with the request.
- `resource`: object — Provides details about the affected resource.
  - `id`: string — The unique identifier for the affected resource.
  - `product`: string — The Cloudflare product associated with the resource.
  - `request`: object
  - `response`: object
  - `scope`: object — The scope of the resource.
  - `type`: string — The type of the resource.
- `zone`: object — Provides details about the zone affected by the action.
  - `id`: string — A string that identifies the zone id.
  - `name`: string — A string that identifies the zone name.

## GET /accounts/{account_id}/logs/audit/product_categories

List account audit log product categories (Version 2)

operationId: `audit-logs-v2-list-account-product-categories`

**Response** 200 → `result`

[array of]
- `label`: string — A human-readable label for the product category.
- `products`: object[] — The resource products that the product category expands to.
  [array of]
  - `label`: string — A human-readable label for the product.
  - `value`: string — The resource_product value that the product category expands to.
- `value`: string — The product category identifier used with the product_category filter.

## GET /organizations/{organization_id}/logs/audit

Get organization audit logs (Version 2)

operationId: `audit-logs-v2-get-organization-audit-logs` · query: `action_result`, `action_type`, `actor_context`, `actor_email`, `actor_id`, `actor_ip_address`, `actor_token_id`, `actor_token_name`, `actor_type`, `id`, `raw_cf_ray_id`, `raw_method`, `raw_status_code`, `raw_uri`, `resource_id`, `resource_product`, `resource_type`, `resource_scope`, `action_result.not`, `action_type.not`, `actor_context.not`, `actor_email.not`, `actor_id.not`, `actor_ip_address.not`, `actor_token_id.not`, `actor_token_name.not`, `actor_type.not`, `id.not`, `raw_cf_ray_id.not`, `raw_method.not`, `raw_status_code.not`, `raw_uri.not`, `resource_id.not`, `resource_product.not`, `resource_type.not`, `resource_scope.not`, `since`, `before`, `direction`, `limit`, `cursor`

**Response** 200 → `result`

[array of]
- `action`: object — Provides information about the action performed.
  - `description`: string — A short description of the action performed.
  - `result`: string — The result of the action, indicating success or failure.
  - `time`: string — A timestamp indicating when the action was logged.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: any
- `id`: string — A unique identifier for the audit log entry.
- `organization`: object — Contains organization related information.
  - `id`: string — A unique identifier for the organization.
- `raw`: object — Provides raw information about the request and response.
  - `cf_ray_id`: string — The Cloudflare Ray ID for the request.
  - `method`: string — The HTTP method of the request.
  - `status_code`: integer — The HTTP response status code returned by the API.
  - `uri`: string — The URI of the request.
  - `user_agent`: string — The client's user agent string sent with the request.
- `resource`: object — Provides details about the affected resource.
  - `id`: string — The unique identifier for the affected resource.
  - `product`: string — The Cloudflare product associated with the resource.
  - `request`: object
  - `response`: object
  - `scope`: object — The scope of the resource.
  - `type`: string — The type of the resource.

## GET /organizations/{organization_id}/logs/audit/{id}/history

Get resource change history from an organization audit log entry (Version 2)

operationId: `audit-logs-v2-get-organization-audit-log-history` · query: `action_time`, `since`, `before`, `direction`, `limit`, `cursor`

**Response** 200 → `result`

[array of]
- `action`: object — Provides information about the action performed.
  - `description`: string — A short description of the action performed.
  - `result`: string — The result of the action, indicating success or failure.
  - `time`: string — A timestamp indicating when the action was logged.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: any
- `id`: string — A unique identifier for the audit log entry.
- `organization`: object — Contains organization related information.
  - `id`: string — A unique identifier for the organization.
- `raw`: object — Provides raw information about the request and response.
  - `cf_ray_id`: string — The Cloudflare Ray ID for the request.
  - `method`: string — The HTTP method of the request.
  - `status_code`: integer — The HTTP response status code returned by the API.
  - `uri`: string — The URI of the request.
  - `user_agent`: string — The client's user agent string sent with the request.
- `resource`: object — Provides details about the affected resource.
  - `id`: string — The unique identifier for the affected resource.
  - `product`: string — The Cloudflare product associated with the resource.
  - `request`: object
  - `response`: object
  - `scope`: object — The scope of the resource.
  - `type`: string — The type of the resource.

## GET /user/audit_logs

Get user audit logs

operationId: `audit-logs-get-user-audit-logs` · query: `id`, `export`, `action.type`, `actor.ip`, `actor.email`, `since`, `before`, `zone.name`, `direction`, `per_page`, `page`, `hide_user_logs`

**Response** 200 → `result`

[array of]
- `action`: object
  - `result`: boolean — A boolean that indicates if the action attempted was successful.
  - `type`: string — A short string that describes the action that was performed.
- `actor`: object
  - `email`: string — The email of the user that performed the action.
  - `id`: string — The ID of the actor that performed the action. If a user performed the action, this will be their User ID.
  - `ip`: string — The IP address of the request that performed the action.
  - `type`: string enum: `user`, `admin`, `Cloudflare` — The type of actor, whether a User, Cloudflare Admin, or an Automated System.
- `id`: string — A string that uniquely identifies the audit log.
- `interface`: string — The source of the event.
- `metadata`: object — An object which can lend more context to the action being logged. This is a flexible value and varies between different actions.
- `newValue`: string — The new value of the resource that was modified.
- `oldValue`: string — The value of the resource before it was modified.
- `owner`: object
  - `id`: string — Identifier
- `resource`: object
  - `id`: string — An identifier for the resource that was affected by the action.
  - `type`: string — A short string that describes the resource that was affected by the action.
- `when`: string — A UTC RFC3339 timestamp that specifies when the action being logged occured.
