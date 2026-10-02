# Radar Annotations

3 endpoints.

## GET /radar/annotations

Get latest annotations

operationId: `radar-get-annotations` · query: `limit`, `offset`, `dateRange`, `dateStart`, `dateEnd`, `dataSource`, `eventType`, `asn`, `location`, `origin`, `format`

**Response** 200 → `result`

- `annotations`: object[] **required**
  [array of]
  - `asns`: integer[] **required**
    [array]
  - `asnsDetails`: object[] **required**
    [array of]
    - `asn`: string **required**
    - `locations`: object
    - `name`: string **required**
  - `dataSource`: string **required**
  - `description`: string
  - `endDate`: string
  - `eventType`: string **required**
  - `id`: string **required**
  - `linkedUrl`: string
  - `locations`: string[] **required**
    [array]
  - `locationsDetails`: object[] **required**
    [array of]
    - `code`: string **required**
    - `name`: string **required**
  - `origins`: string[] **required**
    [array]
  - `originsDetails`: object[] **required**
    [array of]
    - `name`: string **required**
    - `origin`: string **required**
  - `outage`: object **required**
    - `outageCause`: string **required**
    - `outageType`: string **required**
  - `scope`: string
  - `startDate`: string **required**

## GET /radar/annotations/outages

Get latest Internet outages and anomalies

operationId: `radar-get-annotations-outages` · query: `limit`, `offset`, `dateRange`, `dateStart`, `dateEnd`, `asn`, `location`, `origin`, `format`

**Response** 200 → `result`

- `annotations`: object[] **required**
  [array of]
  - `asns`: integer[] **required**
    [array]
  - `asnsDetails`: object[] **required**
    [array of]
    - `asn`: string **required**
    - `locations`: object
    - `name`: string **required**
  - `dataSource`: string **required**
  - `description`: string
  - `endDate`: string
  - `eventType`: string **required**
  - `id`: string **required**
  - `linkedUrl`: string
  - `locations`: string[] **required**
    [array]
  - `locationsDetails`: object[] **required**
    [array of]
    - `code`: string **required**
    - `name`: string **required**
  - `origins`: string[] **required**
    [array]
  - `originsDetails`: object[] **required**
    [array of]
    - `name`: string **required**
    - `origin`: string **required**
  - `outage`: object **required**
    - `outageCause`: string **required**
    - `outageType`: string **required**
  - `scope`: string
  - `startDate`: string **required**

## GET /radar/annotations/outages/locations

Get the number of outages by location

operationId: `radar-get-annotations-outages-top` · query: `limit`, `dateRange`, `dateStart`, `dateEnd`, `format`

**Response** 200 → `result`

- `annotations`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.
