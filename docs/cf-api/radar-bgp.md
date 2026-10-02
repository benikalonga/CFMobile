# Radar BGP

19 endpoints.

## GET /radar/bgp/hijacks/events

Get BGP hijack events

operationId: `radar-get-bgp-hijacks-events` · query: `page`, `per_page`, `eventId`, `hijackerAsn`, `victimAsn`, `involvedAsn`, `involvedCountry`, `prefix`, `minConfidence`, `maxConfidence`, `dateRange`, `dateStart`, `dateEnd`, `sortBy`, `sortOrder`, `format`

**Response** 200 → `result`

- `asn_info`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `country_code`: string **required**
  - `org_name`: string **required**
- `events`: object[] **required**
  [array of]
  - `confidence_score`: integer **required**
  - `duration`: integer **required**
  - `event_type`: integer **required**
  - `hijack_msgs_count`: integer **required**
  - `hijacker_asn`: integer **required**
  - `hijacker_country`: string **required**
  - `id`: integer **required**
  - `is_stale`: boolean **required**
  - `max_hijack_ts`: string **required**
  - `max_msg_ts`: string **required**
  - `min_hijack_ts`: string **required**
  - `on_going_count`: integer **required**
  - `peer_asns`: integer[] **required**
    [array]
  - `peer_ip_count`: integer **required**
  - `prefixes`: string[] **required**
    [array]
  - `tags`: object[] **required**
    [array of]
    - `name`: string **required**
    - `score`: integer **required**
  - `victim_asns`: integer[] **required**
    [array]
  - `victim_countries`: string[] **required**
    [array]
- `total_monitors`: integer **required**

## GET /radar/bgp/ips/timeseries

Get announced IP address space time series

operationId: `radar-get-bgp-ips-timeseries` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `location`, `ipVersion`, `includeDelay`, `format`

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
  - `delay`: object
    - `asn_data`: object **required**
    - `country_data`: object **required**
    - `healthy`: boolean **required**
    - `nowTs`: number **required**
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `serie_0`: object **required**
  - `ipv4`: string[] **required**
    [array]
  - `ipv6`: string[] **required**
    [array]
  - `timestamps`: string[] **required**
    [array]

## GET /radar/bgp/ips/top/ases

Get top ASes by announced IP space

operationId: `radar-get-bgp-ips-top-ases` · query: `date`, `limit`, `metric`, `country`, `format`

**Response** 200 → `result`

- `anchorTs`: string **required**
- `asns`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `v4_24s`: integer **required**
  - `v6_48s`: integer **required**
- `country`: string **required**
- `metric`: string **required**

## GET /radar/bgp/leaks/events

Get BGP route leak events

operationId: `radar-get-bgp-route-leak-events` · query: `page`, `per_page`, `eventId`, `leakAsn`, `involvedAsn`, `involvedCountry`, `dateRange`, `dateStart`, `dateEnd`, `sortBy`, `sortOrder`, `format`

**Response** 200 → `result`

- `asn_info`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `country_code`: string **required**
  - `org_name`: string **required**
- `events`: object[] **required**
  [array of]
  - `countries`: string[] **required**
    [array]
  - `detected_ts`: string **required**
  - `finished`: boolean **required**
  - `id`: integer **required**
  - `leak_asn`: integer **required**
  - `leak_count`: integer **required**
  - `leak_seg`: integer[] **required**
    [array]
  - `leak_type`: integer **required**
  - `max_ts`: string **required**
  - `min_ts`: string **required**
  - `origin_count`: integer **required**
  - `peer_count`: integer **required**
  - `prefix_count`: integer **required**

## GET /radar/bgp/routes/ases

List ASes from global routing tables

operationId: `radar-get-bgp-routes-asns` · query: `location`, `limit`, `sortBy`, `sortOrder`, `format`

**Response** 200 → `result`

- `asns`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `coneSize`: integer **required** — AS's customer cone size.
  - `country`: string **required** — Alpha-2 code for the AS's registration country.
  - `ipv4Count`: integer **required** — Number of IPv4 addresses originated by the AS.
  - `ipv6Count`: string **required** — Number of IPv6 addresses originated by the AS.
  - `name`: string **required** — Name of the AS.
  - `pfxsCount`: integer **required** — Number of total IP prefixes originated by the AS.
  - `rpkiInvalid`: integer **required** — Number of RPKI invalid prefixes originated by the AS.
  - `rpkiUnknown`: integer **required** — Number of RPKI unknown prefixes originated by the AS.
  - `rpkiValid`: integer **required** — Number of RPKI valid prefixes originated by the AS.
- `meta`: object **required**
  - `dataTime`: string **required** — The timestamp of when the data is generated.
  - `queryTime`: string **required** — The timestamp of the query.
  - `totalPeers`: integer **required** — Total number of route collector peers used to generate this data.

## GET /radar/bgp/routes/moas

Get Multi-Origin AS (MOAS) prefixes

operationId: `radar-get-bgp-pfx2as-moas` · query: `origin`, `prefix`, `invalid_only`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `data_time`: string **required**
  - `query_time`: string **required**
  - `total_peers`: integer **required**
- `moas`: object[] **required**
  [array of]
  - `origins`: object[] **required**
    [array of]
    - `origin`: integer **required**
    - `peer_count`: integer **required**
    - `rpki_validation`: string **required**
  - `prefix`: string **required**

## GET /radar/bgp/routes/paths/{asn}

Get tier-1 path segments for an AS

operationId: `radar-get-bgp-routes-paths` · query: `ipVersion`, `collector`, `format`

**Response** 200 → `result`

- `asnInfo`: object **required**
- `collectors`: string[] **required**
  [array]
- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying RIB data.
  - `effectiveCollector`: string **required**
  - `queryTime`: string **required** — Timestamp when the query was executed.
  - `stale`: boolean **required**
- `paths`: object[] **required**
  [array of]
  - `collectors`: string[] **required**
    [array]
  - `pathsCount`: integer **required**
  - `peersCount`: integer **required**
  - `segment`: integer[] **required**
    [array]

## GET /radar/bgp/routes/pfx2as

Get prefix-to-ASN mapping

operationId: `radar-get-bgp-pfx2as` · query: `prefix`, `origin`, `rpkiStatus`, `longestPrefixMatch`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `data_time`: string **required**
  - `query_time`: string **required**
  - `total_peers`: integer **required**
- `prefix_origins`: object[] **required**
  [array of]
  - `origin`: integer **required**
  - `peer_count`: integer **required**
  - `prefix`: string **required**
  - `rpki_validation`: string **required**

## GET /radar/bgp/routes/realtime

Get real-time BGP routes for a prefix

operationId: `radar-get-bgp-routes-realtime` · query: `prefix`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `asn_info`: object[] **required**
    [array of]
    - `as_name`: string **required** — Name of the autonomous system.
    - `asn`: integer **required** — AS number.
    - `country_code`: string **required** — Alpha-2 code for the AS's registration country.
    - `org_id`: string **required** — Organization ID.
    - `org_name`: string **required** — Organization name.
  - `collectors`: object[] **required**
    [array of]
    - `collector`: string **required** — Public route collector ID.
    - `latest_realtime_ts`: string **required** — Latest real-time stream timestamp for this collector.
    - `latest_rib_ts`: string **required** — Latest RIB dump MRT file timestamp for this collector.
    - `latest_updates_ts`: string **required** — Latest BGP updates MRT file timestamp for this collector.
    - `peers_count`: integer **required** — Total number of collector peers used from this collector.
    - `peers_v4_count`: integer **required** — Total number of collector peers used from this collector for IPv4 prefixes.
    - `peers_v6_count`: integer **required** — Total number of collector peers used from this collector for IPv6 prefixes.
  - `data_time`: string **required** — The most recent data timestamp for from the real-time sources.
  - `prefix_origins`: object[] **required**
    [array of]
    - `origin`: integer **required** — Origin ASN.
    - `prefix`: string **required** — IP prefix of this query.
    - `rpki_validation`: string **required** — Prefix-origin RPKI validation: valid, invalid, unknown.
    - `total_peers`: integer **required** — Total number of peers.
    - `total_visible`: integer **required** — Total number of peers seeing this prefix.
    - `visibility`: number **required** — Ratio of peers seeing this prefix to total number of peers.
  - `query_time`: string **required** — The timestamp of this query.
- `routes`: object[] **required**
  [array of]
  - `as_path`: integer[] **required** — AS-level path for this route, from collector to origin.
    [array]
  - `collector`: string **required** — Public collector ID for this route.
  - `communities`: string[] **required** — BGP community values.
    [array]
  - `prefix`: string **required** — IP prefix of this query.
  - `timestamp`: string **required** — Latest timestamp of change for this route.

## GET /radar/bgp/routes/stats

Get BGP routing table stats

operationId: `radar-get-bgp-routes-stats` · query: `asn`, `location`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `data_time`: string **required**
  - `query_time`: string **required**
  - `total_peers`: integer **required**
- `stats`: object **required**
  - `distinct_origins`: integer **required**
  - `distinct_origins_ipv4`: integer **required**
  - `distinct_origins_ipv6`: integer **required**
  - `distinct_prefixes`: integer **required**
  - `distinct_prefixes_ipv4`: integer **required**
  - `distinct_prefixes_ipv6`: integer **required**
  - `routes_invalid`: integer **required**
  - `routes_invalid_ipv4`: integer **required**
  - `routes_invalid_ipv6`: integer **required**
  - `routes_total`: integer **required**
  - `routes_total_ipv4`: integer **required**
  - `routes_total_ipv6`: integer **required**
  - `routes_unknown`: integer **required**
  - `routes_unknown_ipv4`: integer **required**
  - `routes_unknown_ipv6`: integer **required**
  - `routes_valid`: integer **required**
  - `routes_valid_ipv4`: integer **required**
  - `routes_valid_ipv6`: integer **required**

## GET /radar/bgp/routes/upstreams/{asn}/timeseries

Get upstream composition time series for an AS

operationId: `radar-get-bgp-routes-upstreams-timeseries` · query: `ipVersion`, `dateStart`, `dateEnd`, `limit`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying RIB data.
  - `effectiveCollector`: string **required**
  - `queryTime`: string **required** — Timestamp when the query was executed.
  - `stale`: boolean **required**
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]

## GET /radar/bgp/rpki/aspa/changes

Get ASPA changes over time

operationId: `radar-get-bgp-rpki-aspa-changes` · query: `dateStart`, `dateEnd`, `asn`, `includeAsnInfo`, `format`

**Response** 200 → `result`

- `asnInfo`: object **required**
  - `13335`: object **required**
    - `asn`: integer **required** — ASN number.
    - `country`: string **required** — Alpha-2 country code.
    - `name`: string **required** — AS name.
- `changes`: object[] **required**
  [array of]
  - `customersAdded`: integer **required** — Number of new ASPA objects created.
  - `customersRemoved`: integer **required** — Number of ASPA objects deleted.
  - `date`: string **required** — Date of the changes in ISO 8601 format.
  - `entries`: object[] **required**
    [array of]
    - `customerAsn`: integer **required** — The customer ASN affected.
    - `providers`: integer[] **required**
    - `type`: string **required** enum: `CustomerAdded`, `CustomerRemoved`, `ProvidersAdded`, `ProvidersRemoved`
  - `providersAdded`: integer **required** — Number of providers added to existing objects.
  - `providersRemoved`: integer **required** — Number of providers removed from existing objects.
  - `totalCount`: integer **required** — Running total of active ASPA objects after this day.
- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying data.
  - `queryTime`: string **required** — Timestamp when the query was executed.

## GET /radar/bgp/rpki/aspa/snapshot

Get ASPA objects snapshot

operationId: `radar-get-bgp-rpki-aspa-snapshot` · query: `customerAsn`, `providerAsn`, `date`, `includeAsnInfo`, `format`

**Response** 200 → `result`

- `asnInfo`: object **required**
  - `13335`: object **required**
    - `asn`: integer **required** — ASN number.
    - `country`: string **required** — Alpha-2 country code.
    - `name`: string **required** — AS name.
- `aspaObjects`: object[] **required**
  [array of]
  - `customerAsn`: integer **required** — The customer ASN publishing the ASPA object.
  - `providers`: integer[] **required**
    [array]
- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying data.
  - `queryTime`: string **required** — Timestamp when the query was executed.
  - `totalCount`: integer **required** — Total number of ASPA objects.

## GET /radar/bgp/rpki/aspa/timeseries

Get ASPA count time series

operationId: `radar-get-bgp-rpki-aspa-timeseries` · query: `dateStart`, `dateEnd`, `name`, `rir`, `location`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying data.
  - `queryTime`: string **required** — Timestamp when the query was executed.
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]
  - `values`: string[] **required**
    [array]

## GET /radar/bgp/rpki/roas/timeseries

Get RPKI ROA deployment time series

operationId: `radar-get-bgp-rpki-roas-timeseries` · query: `dateStart`, `dateEnd`, `metric`, `asn`, `location`, `name`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `dataTime`: string **required** — Timestamp of the underlying data.
  - `queryTime`: string **required** — Timestamp when the query was executed.
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]
  - `values`: string[] **required**
    [array]

## GET /radar/bgp/timeseries

Get BGP time series

operationId: `radar-get-bgp-timeseries` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `prefix`, `updateType`, `asn`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `aggInterval`: string **required** enum: `15m`, `1h`, `1d`, `1w`
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required**
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]
  - `values`: string[] **required**
    [array]

## GET /radar/bgp/top/ases

Get top ASes by BGP updates

operationId: `radar-get-bgp-top-ases` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `prefix`, `updateType`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
- `top_0`: object[] **required**
  [array of]
  - `ASName`: string **required**
  - `asn`: integer **required**
  - `value`: string **required** — Percentage of updates by this AS out of the total updates by all autonomous systems.

## GET /radar/bgp/top/ases/prefixes

Get top ASes by prefix count

operationId: `radar-get-bgp-top-asns-by-prefixes` · query: `country`, `limit`, `format`

**Response** 200 → `result`

- `asns`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `country`: string **required**
  - `name`: string **required**
  - `pfxs_count`: integer **required**
- `meta`: object **required**
  - `data_time`: string **required**
  - `query_time`: string **required**
  - `total_peers`: integer **required**

## GET /radar/bgp/top/prefixes

Get top prefixes by BGP updates

operationId: `radar-get-bgp-top-prefixes` · query: `limit`, `name`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `updateType`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
- `top_0`: object[] **required**
  [array of]
  - `prefix`: string **required**
  - `value`: string **required** — A numeric string.
