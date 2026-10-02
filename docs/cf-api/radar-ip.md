# Radar IP

1 endpoints.

## GET /radar/entities/ip

Get IP address details

operationId: `radar-get-entities-ip` · query: `ip`, `format`

**Response** 200 → `result`

- `ip`: object **required**
  - `asn`: string **required**
  - `asnLocation`: string **required**
  - `asnName`: string **required**
  - `asnOrgName`: string **required**
  - `ip`: string **required**
  - `ipVersion`: string **required**
  - `location`: string **required**
  - `locationName`: string **required**
