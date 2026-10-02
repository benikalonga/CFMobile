# AI Audit

2 endpoints.

## GET /zones/{zone_id}/ai-audit/robots

Get robots.txt rules

operationId: `ai-audit-get-robots` · query: `subdomain`

**Response** 200 → `result`

- `sitemaps`: string[] — List of sitemap URLs found in robots.txt.
  [array]
- `status`: integer — HTTP status code from fetching the robots.txt file.
- `userAgents`: object **required** — Map of user-agent string to its parsed rules.

## POST /zones/{zone_id}/ai-audit/robots/bulk

Bulk get robots.txt rules

operationId: `ai-audit-bulk-get-robots`

**Request** (application/json)

[array of]
string

**Response** 200 → `result`

object
