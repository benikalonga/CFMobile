# Analyze Certificate

1 endpoints.

## POST /zones/{zone_id}/ssl/analyze

Analyze Certificate

operationId: `analyze-certificate-analyze-certificate`

**Request** (application/json)

- `bundle_method`: string enum: `ubiquitous`, `optimal`, `force` default: `ubiquitous` — A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An opt
- `certificate`: string — The zone's SSL certificate or certificate and the intermediate(s).

**Response** 200 → `result`

object
