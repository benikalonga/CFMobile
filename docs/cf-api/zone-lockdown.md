# Zone Lockdown

5 endpoints.

## GET /zones/{zone_id}/firewall/lockdowns

List Zone Lockdown rules

operationId: `zone-lockdown-list-zone-lockdown-rules` · query: `page`, `description`, `modified_on`, `ip`, `priority`, `uri_search`, `ip_range_search`, `per_page`, `created_on`, `description_search`, `ip_search`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/firewall/lockdowns

Create a Zone Lockdown rule

operationId: `zone-lockdown-create-a-zone-lockdown-rule`

**Request** (application/json)

- `configurations`: object[] **required** — A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any numbe
  [array of]
  - `target`: string enum: `ip` — The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.
  - `value`: string — The IP address to match. This address will be compared to the IP address of incoming requests.
- `description`: string — An informative summary of the rule. This value is sanitized and any tags will be removed.
- `paused`: boolean — When true, indicates that the rule is currently paused.
- `priority`: number — The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a config
- `urls`: string[] **required** — The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can onl
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}

Delete a Zone Lockdown rule

operationId: `zone-lockdown-delete-a-zone-lockdown-rule`

**Response** 200 → `result`

- `id`: string — The unique identifier of the Zone Lockdown rule.

## GET /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}

Get a Zone Lockdown rule

operationId: `zone-lockdown-get-a-zone-lockdown-rule`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}

Update a Zone Lockdown rule

operationId: `zone-lockdown-update-a-zone-lockdown-rule`

**Request** (application/json)

- `configurations`: object[] **required** — A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any numbe
  [array of]
  - `target`: string enum: `ip` — The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.
  - `value`: string — The IP address to match. This address will be compared to the IP address of incoming requests.
- `urls`: string[] **required** — The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can onl
  [array]

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
