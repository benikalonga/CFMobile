# WAF packages

3 endpoints.

## GET /zones/{zone_id}/firewall/waf/packages

List WAF packages

operationId: `waf-packages-list-waf-packages` · query: `page`, `per_page`, `order`, `direction`, `match`, `name`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/firewall/waf/packages/{package_id}

Get a WAF package

operationId: `waf-packages-get-a-waf-package`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}

Update a WAF package

operationId: `waf-packages-update-a-waf-package`

**Request** (application/json)

- `action_mode`: string enum: `simulate`, `block`, `challenge` default: `challenge` — The default action performed by the rules in the WAF package.
- `sensitivity`: string enum: `high`, `medium`, `low`, `off` default: `high` — The sensitivity of the WAF package.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
