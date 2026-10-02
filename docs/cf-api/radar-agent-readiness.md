# Radar Agent Readiness

1 endpoints.

## GET /radar/agent_readiness/summary/{dimension}

Get agent readiness summary

operationId: `radar-get-agent-readiness-summary` · query: `date`, `domainCategory`, `name`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `date`: string **required** — Date of the returned scan (YYYY-MM-DD). May differ from the requested date if no scan exists for that exact date.
  - `domainCategories`: object[] **required** — Available domain sub-categories with their scan counts. Use as filter options for the domainCategory parameter.
    [array of]
    - `name`: string **required** — Sub-category name.
    - `value`: integer **required** — Number of successfully scanned domains in this sub-category.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `successfulDomains`: integer **required** — Domains successfully scanned (excludes errors).
  - `totalDomains`: integer **required** — Total domains attempted in the scan.
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `summary_0`: object **required**
