# Radar Top-Level Domains

4 endpoints.

## GET /radar/tlds

List TLDs

operationId: `radar-get-tlds` · query: `limit`, `offset`, `tldManager`, `tldType`, `tld`, `format`

**Response** 200 → `result`

- `tlds`: object[] **required**
  [array of]
  - `manager`: string **required** — The organization that manages the TLD.
  - `tld`: string **required** — The actual TLD.
  - `type`: string **required** — The type of TLD.

## GET /radar/tlds/{tld}

Get TLD details

operationId: `radar-get-tld-details` · query: `format`

**Response** 200 → `result`

- `tld`: object **required**
  - `manager`: string **required** — The organization that manages the TLD.
  - `tld`: string **required** — The actual TLD.
  - `type`: string **required** — The type of TLD.

## GET /radar/tlds/performance/summary/{dimension}

Get TLD Performance Summary

operationId: `radar-get-tlds-performance-summary` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `tld`, `nameserver`, `limitPerGroup`, `format`

**Response** 200 → `result`

- `meta`: object **required** — Metadata for the results.
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `summary_0`: object **required**

## GET /radar/tlds/performance/timeseries_groups/{dimension}

Get TLD Performance Over Time

operationId: `radar-get-tlds-performance-timeseries-groups` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `tld`, `nameserver`, `limitPerGroup`, `format`

**Response** 200 → `result`

- `meta`: object **required** — Metadata for the results.
  - `aggInterval`: string **required** enum: `FIFTEEN_MINUTES`, `ONE_HOUR`, `ONE_DAY`, `ONE_WEEK`, `ONE_MONTH` — Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflar
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]
