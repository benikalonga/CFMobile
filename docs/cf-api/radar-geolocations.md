# Radar Geolocations

2 endpoints.

## GET /radar/geolocations

List Geolocations

operationId: `radar-get-geolocations` · query: `limit`, `offset`, `geoId`, `location`, `format`

**Response** 200 → `result`

- `geolocations`: object[] **required**
  [array of]
  - `code`: string
  - `geoId`: string **required**
  - `latitude`: string **required** — A numeric string.
  - `locale`: string — BCP 47 locale code used for the geolocation name translation
  - `longitude`: string **required** — A numeric string.
  - `name`: string **required**
  - `parent`: object **required**
    - `code`: string
    - `geoId`: string **required**
    - `latitude`: string **required** — A numeric string.
    - `locale`: string — BCP 47 locale code used for the geolocation name translation
    - `longitude`: string **required** — A numeric string.
    - `name`: string **required**
    - `parent`: object **required**
    - `type`: string **required** enum: `CONTINENT`, `COUNTRY`, `ADM1` — The type of the geolocation.
  - `type`: string **required** enum: `CONTINENT`, `COUNTRY`, `ADM1` — The type of the geolocation.

## GET /radar/geolocations/{geo_id}

Get Geolocation details

operationId: `radar-get-geolocation-details` · query: `format`

**Response** 200 → `result`

- `geolocation`: object **required**
  - `code`: string
  - `geoId`: string **required**
  - `latitude`: string **required** — A numeric string.
  - `locale`: string — BCP 47 locale code used for the geolocation name translation
  - `longitude`: string **required** — A numeric string.
  - `name`: string **required**
  - `parent`: object **required**
    - `code`: string
    - `geoId`: string **required**
    - `latitude`: string **required** — A numeric string.
    - `locale`: string — BCP 47 locale code used for the geolocation name translation
    - `longitude`: string **required** — A numeric string.
    - `name`: string **required**
    - `parent`: object **required**
    - `type`: string **required** enum: `CONTINENT`, `COUNTRY`, `ADM1` — The type of the geolocation.
  - `type`: string **required** enum: `CONTINENT`, `COUNTRY`, `ADM1` — The type of the geolocation.
