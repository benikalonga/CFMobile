# Web Analytics

15 endpoints.

## POST /accounts/{account_id}/rum/site_info

Create a Web Analytics site

operationId: `web-analytics-create-site`

**Request** (application/json)

- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `host`: string — The hostname to use for gray-clouded sites.
- `zone_tag`: string — The zone identifier.

**Response** 200 → `result`

- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `created`: string
- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.
- `site_tag`: string — The Web Analytics site identifier.
- `site_token`: string — The Web Analytics site token.
- `snippet`: string — Encoded JavaScript snippet.

## DELETE /accounts/{account_id}/rum/site_info/{site_id}

Delete a Web Analytics site

operationId: `web-analytics-delete-site`

**Response** 200 → `result`

- `site_tag`: string — The Web Analytics site identifier.

## GET /accounts/{account_id}/rum/site_info/{site_id}

Get a Web Analytics site

operationId: `web-analytics-get-site`

**Response** 200 → `result`

- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `created`: string
- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.
- `site_tag`: string — The Web Analytics site identifier.
- `site_token`: string — The Web Analytics site token.
- `snippet`: string — Encoded JavaScript snippet.

## PUT /accounts/{account_id}/rum/site_info/{site_id}

Update a Web Analytics site

operationId: `web-analytics-update-site`

**Request** (application/json)

- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `enabled`: boolean — Enables or disables RUM. This option can be used only when auto_install is set to true.
- `host`: string — The hostname to use for gray-clouded sites.
- `lite`: boolean — If enabled, the JavaScript snippet will not be injected for visitors from the EU.
- `zone_tag`: string — The zone identifier.

**Response** 200 → `result`

- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `created`: string
- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.
- `site_tag`: string — The Web Analytics site identifier.
- `site_token`: string — The Web Analytics site token.
- `snippet`: string — Encoded JavaScript snippet.

## GET /accounts/{account_id}/rum/site_info/list

List Web Analytics sites

operationId: `web-analytics-list-sites` · query: `per_page`, `page`, `order_by`

**Response** 200 → `result`

[array of]
- `auto_install`: boolean — If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.
- `created`: string
- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.
- `site_tag`: string — The Web Analytics site identifier.
- `site_token`: string — The Web Analytics site token.
- `snippet`: string — Encoded JavaScript snippet.

## GET /accounts/{account_id}/rum/site_info/site_tag/list

List Web Analytics site tags

operationId: `web-analytics-list-site-tags` · query: `all`

**Response** 200 → `result`

[array of]
string

## GET /accounts/{account_id}/rum/site_info/validate/{hostname}

Validate a Web Analytics site hostname

operationId: `web-analytics-validate-site-hostname`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/rum/site_info/zone_tag/list

List Web Analytics zone tags

operationId: `web-analytics-list-zone-tags`

**Response** 200 → `result`

[array of]
string

## POST /accounts/{account_id}/rum/v2/{ruleset_id}/rule

Create a Web Analytics rule

operationId: `web-analytics-create-rule`

**Request** (application/json)

- `host`: string
- `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
- `is_paused`: boolean — Whether the rule is paused or not.
- `paths`: string[]
  [array]

**Response** 200 → `result`

- `created`: string
- `host`: string — The hostname the rule will be applied to.
- `id`: string — The Web Analytics rule identifier.
- `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
- `is_paused`: boolean — Whether the rule is paused or not.
- `paths`: string[] — The paths the rule will be applied to.
  [array]
- `priority`: number

## DELETE /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}

Delete a Web Analytics rule

operationId: `web-analytics-delete-rule`

**Response** 200 → `result`

- `id`: string — The Web Analytics rule identifier.

## PUT /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}

Update a Web Analytics rule

operationId: `web-analytics-update-rule`

**Request** (application/json)

- `host`: string
- `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
- `is_paused`: boolean — Whether the rule is paused or not.
- `paths`: string[]
  [array]

**Response** 200 → `result`

- `created`: string
- `host`: string — The hostname the rule will be applied to.
- `id`: string — The Web Analytics rule identifier.
- `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
- `is_paused`: boolean — Whether the rule is paused or not.
- `paths`: string[] — The paths the rule will be applied to.
  [array]
- `priority`: number

## GET /accounts/{account_id}/rum/v2/{ruleset_id}/rules

List rules in Web Analytics ruleset

operationId: `web-analytics-list-rules`

**Response** 200 → `result`

- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.

## POST /accounts/{account_id}/rum/v2/{ruleset_id}/rules

Update Web Analytics rules

operationId: `web-analytics-modify-rules`

**Request** (application/json)

- `delete_rules`: string[] — A list of rule identifiers to delete.
  [array]
- `rules`: object[] — A list of rules to create or update.
  [array of]
  - `host`: string
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean
  - `is_paused`: boolean
  - `paths`: string[]
    [array]

**Response** 200 → `result`

- `rules`: object[] — A list of rules.
  [array of]
  - `created`: string
  - `host`: string — The hostname the rule will be applied to.
  - `id`: string — The Web Analytics rule identifier.
  - `inclusive`: boolean — Whether the rule includes or excludes traffic from being measured.
  - `is_paused`: boolean — Whether the rule is paused or not.
  - `paths`: string[] — The paths the rule will be applied to.
    [array]
  - `priority`: number
- `ruleset`: object
  - `enabled`: boolean — Whether the ruleset is enabled.
  - `id`: string — The Web Analytics ruleset identifier.
  - `zone_name`: string
  - `zone_tag`: string — The zone identifier.

## GET /zones/{zone_id}/settings/rum

Get RUM status for a zone

operationId: `web-analytics-get-rum-status`

**Response** 200 → `result`

- `editable`: boolean
- `id`: string
- `value`: string — Current state of RUM. Returns On, Off, or Manual.

## PATCH /zones/{zone_id}/settings/rum

Toggle RUM on/off for a zone

operationId: `web-analytics-toggle-rum`

**Request** (application/json)

- `value`: string — Value can either be On or Off.

**Response** 200 → `result`

- `editable`: boolean
- `id`: string
- `value`: string — Current state of RUM. Returns On, Off, or Manual.
