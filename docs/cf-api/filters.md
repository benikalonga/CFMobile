# Filters

7 endpoints.

## DELETE /zones/{zone_id}/filters

Delete filters

operationId: `filters-delete-filters` · query: `id`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/filters

List filters

operationId: `filters-list-filters` · query: `paused`, `expression`, `description`, `ref`, `page`, `per_page`, `id`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/filters

Create filters

operationId: `filters-create-filters`

**Request** (application/json)

[array of]
- `description`: string — An informative summary of the filter.
- `expression`: string — The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressi
- `id`: string — The unique identifier of the filter.
- `paused`: boolean — When true, indicates that the filter is currently paused.
- `ref`: string — A short reference tag. Allows you to select related filters.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/filters

Update filters

operationId: `filters-update-filters`

**Request** (application/json)

[array of]
- `description`: string — An informative summary of the filter.
- `expression`: string — The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressi
- `id`: string — The unique identifier of the filter.
- `paused`: boolean — When true, indicates that the filter is currently paused.
- `ref`: string — A short reference tag. Allows you to select related filters.
- `id`: any

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/filters/{filter_id}

Delete a filter

operationId: `filters-delete-a-filter`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/filters/{filter_id}

Get a filter

operationId: `filters-get-a-filter`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/filters/{filter_id}

Update a filter

operationId: `filters-update-a-filter`

**Request** (application/json)

- `description`: string — An informative summary of the filter.
- `expression`: string — The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressi
- `id`: string — The unique identifier of the filter.
- `paused`: boolean — When true, indicates that the filter is currently paused.
- `ref`: string — A short reference tag. Allows you to select related filters.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
