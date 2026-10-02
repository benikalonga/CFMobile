# Radar Traffic Anomalies

2 endpoints.

## GET /radar/traffic_anomalies

Get latest Internet traffic anomalies

operationId: `radar-get-traffic-anomalies` · query: `limit`, `offset`, `dateRange`, `dateStart`, `dateEnd`, `status`, `type`, `asn`, `location`, `origin`, `format`

**Response** 200 → `result`

- `trafficAnomalies`: object[] **required**
  [array of]
  - `asnDetails`: object
    - `asn`: string **required**
    - `locations`: object
    - `name`: string **required**
  - `endDate`: string
  - `locationDetails`: object
    - `code`: string **required**
    - `name`: string **required**
  - `originDetails`: object
    - `name`: string **required**
    - `origin`: string **required**
  - `startDate`: string **required**
  - `status`: string **required**
  - `type`: string **required**
  - `uuid`: string **required**
  - `visibleInDataSources`: string[]
    [array]

## GET /radar/traffic_anomalies/locations

Get top locations by total traffic anomalies

operationId: `radar-get-traffic-anomalies-top` · query: `limit`, `dateRange`, `dateStart`, `dateEnd`, `status`, `format`

**Response** 200 → `result`

- `trafficAnomalies`: object[] **required**
  [array of]
  - `clientCountryAlpha2`: string **required**
  - `clientCountryName`: string **required**
  - `value`: string **required** — A numeric string.
