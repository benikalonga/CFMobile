# Bot Settings

2 endpoints.

## GET /zones/{zone_id}/bot_management

Get Zone Bot Management Config

operationId: `bot-management-for-a-zone-get-config`

**Response** 200 → `result`

(one of 4 variants; showing the first)
- `ai_bots_protection`: string enum: `block`, `disabled`, `only_on_ad_pages` — Enable rule to block AI Scrapers and Crawlers.
- `cf_robots_variant`: string enum: `off`, `policy_only` — Specifies the Robots Access Control License variant to use.
- `content_bots_protection`: string enum: `block`, `disabled` — Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Excep
- `crawler_protection`: string enum: `enabled`, `disabled` — Enable rule to punish AI Scrapers and Crawlers via a link maze.
- `enable_js`: boolean — Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.clou
- `is_robots_txt_managed`: boolean default: `false` — Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robot
- `using_latest_model`: boolean — A read-only field that indicates whether the zone currently is running the latest ML model.
- `fight_mode`: boolean — Whether to enable Bot Fight Mode.
- `stale_zone_configuration`: object — A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or 
  - `optimize_wordpress`: boolean — Indicates that the zone's wordpress optimization for SBFM is turned on.
  - `sbfm_definitely_automated`: string — Indicates that the zone's definitely automated requests are being blocked or challenged.
  - `sbfm_likely_automated`: string — Indicates that the zone's likely automated requests are being blocked or challenged.
  - `sbfm_static_resource_protection`: string — Indicates that the zone's static resource protection is turned on.
  - `sbfm_verified_bots`: string — Indicates that the zone's verified bot requests are being blocked.
  - `suppress_session_score`: boolean — Indicates that the zone's session score tracking is disabled.

## PUT /zones/{zone_id}/bot_management

Update Zone Bot Management Config

operationId: `bot-management-for-a-zone-update-config`

**Request** (application/json)

(one of 4 variants; showing the first)
- `ai_bots_protection`: string enum: `block`, `disabled`, `only_on_ad_pages` — Enable rule to block AI Scrapers and Crawlers.
- `cf_robots_variant`: string enum: `off`, `policy_only` — Specifies the Robots Access Control License variant to use.
- `content_bots_protection`: string enum: `block`, `disabled` — Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Excep
- `crawler_protection`: string enum: `enabled`, `disabled` — Enable rule to punish AI Scrapers and Crawlers via a link maze.
- `enable_js`: boolean — Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.clou
- `is_robots_txt_managed`: boolean default: `false` — Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robot
- `using_latest_model`: boolean — A read-only field that indicates whether the zone currently is running the latest ML model.
- `fight_mode`: boolean — Whether to enable Bot Fight Mode.
- `stale_zone_configuration`: object — A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or 
  - `optimize_wordpress`: boolean — Indicates that the zone's wordpress optimization for SBFM is turned on.
  - `sbfm_definitely_automated`: string — Indicates that the zone's definitely automated requests are being blocked or challenged.
  - `sbfm_likely_automated`: string — Indicates that the zone's likely automated requests are being blocked or challenged.
  - `sbfm_static_resource_protection`: string — Indicates that the zone's static resource protection is turned on.
  - `sbfm_verified_bots`: string — Indicates that the zone's verified bot requests are being blocked.
  - `suppress_session_score`: boolean — Indicates that the zone's session score tracking is disabled.

**Response** 200 → `result`

(one of 4 variants; showing the first)
- `ai_bots_protection`: string enum: `block`, `disabled`, `only_on_ad_pages` — Enable rule to block AI Scrapers and Crawlers.
- `cf_robots_variant`: string enum: `off`, `policy_only` — Specifies the Robots Access Control License variant to use.
- `content_bots_protection`: string enum: `block`, `disabled` — Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Excep
- `crawler_protection`: string enum: `enabled`, `disabled` — Enable rule to punish AI Scrapers and Crawlers via a link maze.
- `enable_js`: boolean — Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.clou
- `is_robots_txt_managed`: boolean default: `false` — Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robot
- `using_latest_model`: boolean — A read-only field that indicates whether the zone currently is running the latest ML model.
- `fight_mode`: boolean — Whether to enable Bot Fight Mode.
- `stale_zone_configuration`: object — A read-only field that shows which unauthorized settings are currently active on the zone. These settings typically result from upgrades or 
  - `optimize_wordpress`: boolean — Indicates that the zone's wordpress optimization for SBFM is turned on.
  - `sbfm_definitely_automated`: string — Indicates that the zone's definitely automated requests are being blocked or challenged.
  - `sbfm_likely_automated`: string — Indicates that the zone's likely automated requests are being blocked or challenged.
  - `sbfm_static_resource_protection`: string — Indicates that the zone's static resource protection is turned on.
  - `sbfm_verified_bots`: string — Indicates that the zone's verified bot requests are being blocked.
  - `suppress_session_score`: boolean — Indicates that the zone's session score tracking is disabled.
