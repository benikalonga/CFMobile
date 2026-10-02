# Zone Settings

14 endpoints.

## GET /zones/{zone_id}/settings

Get all zone settings

operationId: `zone-settings-get-all-zone-settings`

**Response** 200 → `result`

[array of]
(one of 62 variants; showing the first)
- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: any **required** — Current value of the zone setting.
- `id`: any enum: `0rtt` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Value of the 0-RTT setting.

## PATCH /zones/{zone_id}/settings

Edit multiple zone settings

operationId: `zone-settings-edit-zone-settings-info`

**Request** (application/json)

[array of]
(one of 60 variants; showing the first)
- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: any **required** — Current value of the zone setting.
- `id`: any enum: `0rtt` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Value of the 0-RTT setting.

**Response** 200 → `result`

[array of]
(one of 62 variants; showing the first)
- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: any **required** — Current value of the zone setting.
- `id`: any enum: `0rtt` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Value of the 0-RTT setting.

## GET /zones/{zone_id}/settings/{setting_id}

Get zone setting

operationId: `zone-settings-get-single-setting`

**Response** 200 → `result`

(one of 63 variants; showing the first)
- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: any **required** — Current value of the zone setting.
- `id`: any enum: `0rtt` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Value of the 0-RTT setting.

## PATCH /zones/{zone_id}/settings/{setting_id}

Edit zone setting

operationId: `zone-settings-edit-single-setting`

**Request** (application/json)

(one of 2 variants; showing the first)
- `enabled`: boolean default: `false` — ssl-recommender enrollment setting.

**Response** 200 → `result`

(one of 63 variants; showing the first)
- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: any **required** — Current value of the zone setting.
- `id`: any enum: `0rtt` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Value of the 0-RTT setting.

## GET /zones/{zone_id}/settings/aegis

Get aegis setting

operationId: `zone-cache-settings-get-aegis-setting`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting is editable.
- `id`: string **required** — The identifier of the caching setting.
- `modified_on`: string — The time when the setting was last modified.
- `value`: string **required** — The value of the setting.

## PATCH /zones/{zone_id}/settings/aegis

Change aegis setting

operationId: `zone-cache-settings-change-aegis-setting`

**Request** (application/json)

- `value`: object **required** — Value of the zone setting.
  - `enabled`: boolean — Whether the feature is enabled or not.
  - `pool_id`: string — Egress pool id which refers to a grouping of dedicated egress IPs through which Cloudflare will connect to origin.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting is editable.
- `id`: string **required** — The identifier of the caching setting.
- `modified_on`: string — The time when the setting was last modified.
- `value`: string **required** — The value of the setting.

## GET /zones/{zone_id}/settings/fonts

Get Cloudflare Fonts setting

operationId: `zone-settings-get-fonts-setting`

**Response** 200 → `result`

- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: string enum: `on`, `off` — Current value of the zone setting.
- `id`: string enum: `fonts` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Whether the feature is enabled or disabled.

## PATCH /zones/{zone_id}/settings/fonts

Change Cloudflare Fonts setting

operationId: `zone-settings-change-fonts-setting`

**Request** (application/json)

- `value`: string **required** enum: `on`, `off` default: `off` — Whether the feature is enabled or disabled.

**Response** 200 → `result`

- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: string enum: `on`, `off` — Current value of the zone setting.
- `id`: string enum: `fonts` — ID of the zone setting.
- `value`: string enum: `on`, `off` default: `off` — Whether the feature is enabled or disabled.

## GET /zones/{zone_id}/settings/origin_h2_max_streams

Get Origin H2 Max Streams Setting

operationId: `zone-cache-settings-get-origin-h2-max-streams-setting`

**Response** 200 → `result`

- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — Last time this setting was modified.
- `id`: string enum: `origin_h2_max_streams` — Value of the zone setting.
- `value`: integer — Value of the Origin H2 Max Streams Setting.

## PATCH /zones/{zone_id}/settings/origin_h2_max_streams

Change Origin H2 Max Streams Setting

operationId: `zone-cache-settings-change-origin-h2-max-streams-setting`

**Request** (application/json)

- `value`: integer **required** — Value of the Origin H2 Max Streams Setting.

**Response** 200 → `result`

- `id`: string **required** — Identifier of the zone setting.
- `modified_on`: string — Last time this setting was modified.
- `id`: string enum: `origin_h2_max_streams` — Value of the zone setting.
- `value`: integer — Value of the Origin H2 Max Streams Setting.

## GET /zones/{zone_id}/settings/origin_max_http_version

Get Origin Max HTTP Version Setting

operationId: `zone-cache-settings-get-origin-max-http-version-setting`

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting is editable.
- `id`: string **required** — The identifier of the caching setting.
- `modified_on`: string — The time when the setting was last modified.
- `value`: string **required** — The value of the setting.

## PATCH /zones/{zone_id}/settings/origin_max_http_version

Change Origin Max HTTP Version Setting

operationId: `zone-cache-settings-change-origin-max-http-version-setting`

**Request** (application/json)

- `value`: string **required** enum: `2`, `1` — Value of the Origin Max HTTP Version Setting.

**Response** 200 → `result`

- `editable`: boolean **required** — Whether the setting is editable.
- `id`: string **required** — The identifier of the caching setting.
- `modified_on`: string — The time when the setting was last modified.
- `value`: string **required** — The value of the setting.

## GET /zones/{zone_id}/settings/speed_brain

Get Cloudflare Speed Brain setting

operationId: `zone-settings-get-speed-brain-setting`

**Response** 200 → `result`

- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: string enum: `on`, `off` — Current value of the zone setting.
- `value`: string — Whether the feature is enabled or disabled.

## PATCH /zones/{zone_id}/settings/speed_brain

Change Cloudflare Speed Brain setting

operationId: `zone-settings-change-speed-brain-setting`

**Request** (application/json)

- `value`: string **required** enum: `on`, `off` — Whether the feature is enabled or disabled.

**Response** 200 → `result`

- `editable`: boolean enum: `true`, `false` default: `true` — Whether or not this setting can be modified for this zone (based on your Cloudflare plan level).
- `id`: string — Identifier of the zone setting.
- `modified_on`: string — last time this setting was modified.
- `value`: string enum: `on`, `off` — Current value of the zone setting.
- `value`: string — Whether the feature is enabled or disabled.
