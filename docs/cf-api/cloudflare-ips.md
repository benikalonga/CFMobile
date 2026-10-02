# Cloudflare IPs

1 endpoints.

## GET /ips

Cloudflare/JD Cloud IP Details

operationId: `cloudflare-ips-cloudflare-ip-details` · query: `networks`

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `etag`: string — A digest of the IP data. Useful for determining if the data has changed.
- `ipv4_cidrs`: string[] — List of Cloudflare IPv4 CIDR addresses.
  [array]
- `ipv6_cidrs`: string[] — List of Cloudflare IPv6 CIDR addresses.
  [array]
