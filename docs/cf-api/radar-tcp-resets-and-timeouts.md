# Radar TCP Resets and Timeouts

2 endpoints.

## GET /radar/tcp_resets_timeouts/summary

Get TCP resets and timeouts summary

operationId: `radar-get-tcp-resets-timeouts-summary` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `location`, `continent`, `format`

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
  - `later_in_flow`: string **required** — Connection resets within the first 10 packets from the client, but after the server has received multiple data packets.
  - `no_match`: string **required** — All other connections.
  - `post_ack`: string **required** — Connection resets or timeouts after the server received both a SYN packet and an ACK packet, meaning the connection was successfully establi
  - `post_psh`: string **required** — Connection resets or timeouts after the server received a packet with PSH flag set, following connection establishment.
  - `post_syn`: string **required** — Connection resets or timeouts after the server received only a single SYN packet.

## GET /radar/tcp_resets_timeouts/timeseries_groups

Get TCP resets and timeouts time series

operationId: `radar-get-tcp-resets-timeouts-timeseries-group` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `location`, `continent`, `format`

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
  - `later_in_flow`: string[] **required**
    [array]
  - `no_match`: string[] **required**
    [array]
  - `post_ack`: string[] **required**
    [array]
  - `post_psh`: string[] **required**
    [array]
  - `post_syn`: string[] **required**
    [array]
  - `timestamps`: string[] **required**
    [array]
