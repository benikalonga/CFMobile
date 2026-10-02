# Radar AS112

19 endpoints.

## GET /radar/as112/summary/{dimension}

Get AS112 summary by dimension

operationId: `radar-get-dns-as112-summary` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `limitPerGroup`, `format`

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

## GET /radar/as112/summary/dnssec

Get AS112 DNS queries by DNSSEC summary

operationId: `radar-get-dns-as112-timeseries-by-dnssec` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `NOT_SUPPORTED`: string **required** — A numeric string.
  - `SUPPORTED`: string **required** — A numeric string.

## GET /radar/as112/summary/edns

Get AS112 DNS queries by EDNS summary

operationId: `radar-get-dns-as112-timeseries-by-edns` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `NOT_SUPPORTED`: string **required** — A numeric string.
  - `SUPPORTED`: string **required** — A numeric string.

## GET /radar/as112/summary/ip_version

Get AS112 DNS queries by IP version summary

operationId: `radar-get-dns-as112-timeseries-by-ip-version` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `IPv4`: string **required** — A numeric string.
  - `IPv6`: string **required** — A numeric string.

## GET /radar/as112/summary/protocol

Get AS112 DNS queries by DNS protocol summary

operationId: `radar-get-dns-as112-timeseries-by-protocol` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `responseCode`, `format`

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
  - `HTTPS`: string **required** — A numeric string.
  - `TCP`: string **required** — A numeric string.
  - `TLS`: string **required** — A numeric string.
  - `UDP`: string **required** — A numeric string.

## GET /radar/as112/summary/query_type

Get AS112 DNS queries by type summary

operationId: `radar-get-dns-as112-timeseries-by-query-type` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `protocol`, `responseCode`, `limitPerGroup`, `format`

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

## GET /radar/as112/summary/response_codes

Get AS112 DNS queries by response code summary

operationId: `radar-get-dns-as112-timeseries-by-response-codes` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `limitPerGroup`, `format`

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

## GET /radar/as112/timeseries

Get AS112 DNS queries time series

operationId: `radar-get-dns-as112-timeseries` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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

## GET /radar/as112/timeseries_groups/{dimension}

Get AS112 time series grouped by dimension

operationId: `radar-get-dns-as112-timeseries-group` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `limitPerGroup`, `format`

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

## GET /radar/as112/timeseries_groups/dnssec

Get AS112 DNS queries by DNSSEC support time series

operationId: `radar-get-dns-as112-timeseries-group-by-dnssec` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `NOT_SUPPORTED`: string[] **required**
    [array]
  - `SUPPORTED`: string[] **required**
    [array]

## GET /radar/as112/timeseries_groups/edns

Get AS112 DNS queries by EDNS support summary

operationId: `radar-get-dns-as112-timeseries-group-by-edns` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `NOT_SUPPORTED`: string[] **required**
    [array]
  - `SUPPORTED`: string[] **required**
    [array]

## GET /radar/as112/timeseries_groups/ip_version

Get AS112 DNS queries by IP version time series

operationId: `radar-get-dns-as112-timeseries-group-by-ip-version` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `responseCode`, `format`

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
  - `IPv4`: string[] **required**
    [array]
  - `IPv6`: string[] **required**
    [array]

## GET /radar/as112/timeseries_groups/protocol

Get AS112 DNS queries by DNS protocol time series

operationId: `radar-get-dns-as112-timeseries-group-by-protocol` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `responseCode`, `format`

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
  - `HTTPS`: string[] **required**
    [array]
  - `TCP`: string[] **required**
    [array]
  - `TLS`: string[] **required**
    [array]
  - `UDP`: string[] **required**
    [array]

## GET /radar/as112/timeseries_groups/query_type

Get AS112 DNS queries by type time series

operationId: `radar-get-dns-as112-timeseries-group-by-query-type` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `protocol`, `responseCode`, `limitPerGroup`, `format`

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

## GET /radar/as112/timeseries_groups/response_codes

Get AS112 DNS queries by response code time series

operationId: `radar-get-dns-as112-timeseries-group-by-response-codes` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `queryType`, `protocol`, `limitPerGroup`, `format`

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

## GET /radar/as112/top/locations

Get top locations by AS112 DNS queries

operationId: `radar-get-dns-as112-top-locations` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `format`

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
- `top_0`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.

## GET /radar/as112/top/locations/dnssec/{dnssec}

Get top locations by AS112 DNS queries with DNSSEC support

operationId: `radar-get-dns-as112-top-locations-by-dnssec` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `format`

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
- `top_0`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.

## GET /radar/as112/top/locations/edns/{edns}

Get top locations by AS112 DNS queries with EDNS support

operationId: `radar-get-dns-as112-top-locations-by-edns` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `format`

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
- `top_0`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.

## GET /radar/as112/top/locations/ip_version/{ip_version}

Get top locations by AS112 DNS queries for an IP version

operationId: `radar-get-dns-as112-top-locations-by-ip-version` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `location`, `continent`, `format`

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
- `top_0`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.
