# Radar Locations

2 endpoints.

## GET /radar/entities/locations

List locations

operationId: `radar-get-entities-locations` · query: `limit`, `offset`, `location`, `region`, `subregion`, `continent`, `format`

**Response** 200 → `result`

- `locations`: object[] **required**
  [array of]
  - `alpha2`: string **required**
  - `continent`: string **required**
  - `latitude`: string **required** — A numeric string.
  - `longitude`: string **required** — A numeric string.
  - `name`: string **required**
  - `region`: string **required**
  - `subregion`: string **required**

## GET /radar/entities/locations/{location}

Get location details

operationId: `radar-get-entities-location-by-alpha2` · query: `format`

**Response** 200 → `result`

- `location`: object **required**
  - `alpha2`: string **required**
  - `confidenceLevel`: integer **required**
  - `continent`: string **required**
  - `latitude`: string **required** — A numeric string.
  - `longitude`: string **required** — A numeric string.
  - `name`: string **required**
  - `region`: string **required**
  - `subregion`: string **required**
