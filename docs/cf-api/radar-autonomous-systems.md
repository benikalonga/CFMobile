# Radar Autonomous Systems

6 endpoints.

## GET /radar/entities/asns

List autonomous systems

operationId: `radar-get-entities-asn-list` · query: `limit`, `offset`, `asn`, `location`, `orderBy`, `format`

**Response** 200 → `result`

- `asns`: object[] **required**
  [array of]
  - `aka`: string
  - `asn`: integer **required**
  - `country`: string **required**
  - `countryName`: string **required**
  - `estimatedUsers`: object **required**
    - `estimatedUsers`: integer — Total estimated users.
  - `name`: string **required**
  - `orgName`: string
  - `website`: string

## GET /radar/entities/asns/{asn}

Get AS details by ASN

operationId: `radar-get-entities-asn-by-id` · query: `format`

**Response** 200 → `result`

- `asn`: object **required**
  - `aka`: string
  - `asn`: integer **required**
  - `confidenceLevel`: integer **required**
  - `country`: string **required**
  - `countryName`: string **required**
  - `estimatedUsers`: object **required**
    - `estimatedUsers`: integer — Total estimated users.
    - `locations`: object[] **required**
  - `name`: string **required**
  - `orgName`: string **required**
  - `related`: object[] **required**
    [array of]
    - `aka`: string
    - `asn`: integer **required**
    - `estimatedUsers`: integer — Total estimated users.
    - `name`: string **required**
  - `source`: string **required** — Regional Internet Registry.
  - `website`: string **required**

## GET /radar/entities/asns/{asn}/as_set

Get IRR AS-SETs that an AS is a member of

operationId: `radar-get-asns-as-set` · query: `format`

**Response** 200 → `result`

- `as_sets`: object[] **required**
  [array of]
  - `as_members_count`: integer **required** — The number of AS members in the AS-SET
  - `as_set_members_count`: integer **required** — The number of AS-SET members in the AS-SET
  - `as_set_upstreams_count`: integer **required** — The number of recursive upstream AS-SETs
  - `asn_cone_size`: integer **required** — The number of unique ASNs in the AS-SETs recursive downstream
  - `hierarchical_asn`: integer — The AS number following hierarchical AS-SET name
  - `inferred_asn`: integer — The inferred AS number of the AS-SET
  - `irr_sources`: string[] **required** — The IRR sources of the AS-SET
    [array]
  - `name`: string **required** — The name of the AS-SET
  - `peeringdb_asn`: integer — The AS number matching PeeringDB record
- `paths`: array[] **required** — Paths from the AS-SET that include the given AS to its upstreams recursively
  [array of]
  [array]

## GET /radar/entities/asns/{asn}/rel

Get AS-level relationships by ASN

operationId: `radar-get-asns-rel` · query: `asn2`, `format`

**Response** 200 → `result`

- `meta`: object **required**
  - `data_time`: string **required**
  - `query_time`: string **required**
  - `total_peers`: integer **required**
- `rels`: object[] **required**
  [array of]
  - `asn1`: integer **required**
  - `asn1_country`: string **required**
  - `asn1_name`: string **required**
  - `asn2`: integer **required**
  - `asn2_country`: string **required**
  - `asn2_name`: string **required**
  - `rel`: string **required**

## GET /radar/entities/asns/botnet_threat_feed

Get AS rankings by botnet threat feed activity

operationId: `radar-get-as-botnet-threat-feed` · query: `limit`, `offset`, `metric`, `date`, `compareDateRange`, `location`, `asn`, `sortOrder`, `format`

**Response** 200 → `result`

- `ases`: object[] **required**
  [array of]
  - `asn`: integer **required**
  - `country`: string **required**
  - `name`: string **required**
  - `rank`: integer **required**
  - `rankChange`: integer
- `meta`: object **required**
  - `compareDate`: string
  - `date`: string **required**
  - `total`: integer **required**

## GET /radar/entities/asns/ip

Get AS details by IP address

operationId: `radar-get-entities-asn-by-ip` · query: `ip`, `format`

**Response** 200 → `result`

- `asn`: object **required**
  - `aka`: string
  - `asn`: integer **required**
  - `country`: string **required**
  - `countryName`: string **required**
  - `estimatedUsers`: object **required**
    - `estimatedUsers`: integer — Total estimated users.
    - `locations`: object[] **required**
  - `name`: string **required**
  - `orgName`: string **required**
  - `related`: object[] **required**
    [array of]
    - `aka`: string
    - `asn`: integer **required**
    - `estimatedUsers`: integer — Total estimated users.
    - `name`: string **required**
  - `source`: string **required** — Regional Internet Registry.
  - `website`: string **required**
