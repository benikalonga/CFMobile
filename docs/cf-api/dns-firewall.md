# DNS Firewall

7 endpoints.

## GET /accounts/{account_id}/dns_firewall

List DNS Firewall Clusters

operationId: `dns-firewall-list-dns-firewall-clusters` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]
- `dns_firewall_ips`: string[] **required**
  [array]
- `id`: string **required** — Identifier.
- `modified_on`: string **required** — Last modification of DNS Firewall cluster

## POST /accounts/{account_id}/dns_firewall

Create DNS Firewall Cluster

operationId: `dns-firewall-create-dns-firewall-cluster`

**Request** (application/json)

- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]
- `dns_firewall_ip_count`: integer default: `2` — Number of IPv4 addresses to assign to the DNS Firewall cluster. Only used during cluster creation and cannot be changed later.

**Response** 200 → `result`

- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]
- `dns_firewall_ips`: string[] **required**
  [array]
- `id`: string **required** — Identifier.
- `modified_on`: string **required** — Last modification of DNS Firewall cluster

## DELETE /accounts/{account_id}/dns_firewall/{dns_firewall_id}

Delete DNS Firewall Cluster

operationId: `dns-firewall-delete-dns-firewall-cluster`

**Response** 200 → `result`

- `id`: string — Identifier.

## GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}

DNS Firewall Cluster Details

operationId: `dns-firewall-dns-firewall-cluster-details`

**Response** 200 → `result`

- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]
- `dns_firewall_ips`: string[] **required**
  [array]
- `id`: string **required** — Identifier.
- `modified_on`: string **required** — Last modification of DNS Firewall cluster

## PATCH /accounts/{account_id}/dns_firewall/{dns_firewall_id}

Update DNS Firewall Cluster

operationId: `dns-firewall-update-dns-firewall-cluster`

**Request** (application/json)

- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]

**Response** 200 → `result`

- `attack_mitigation`: object — Attack mitigation settings
  - `enabled`: boolean — When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  - `only_when_upstream_unhealthy`: boolean default: `true` — Only mitigate attacks when upstream servers seem unhealthy
- `deprecate_any_requests`: boolean — Whether to refuse to answer queries for the ANY type
- `ecs_fallback`: boolean — Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
- `maximum_cache_ttl`: number default: `900` — By default, Cloudflare attempts to cache responses for as long as
- `minimum_cache_ttl`: number default: `60` — By default, Cloudflare attempts to cache responses for as long as
- `name`: string — DNS Firewall cluster name
- `negative_cache_ttl`: number — This setting controls how long DNS Firewall should cache negative
- `ratelimit`: number — Maximum number of DNS queries per second that will be forwarded to your upstream nameservers. The limit is enforced per server, where each s
- `retries`: number default: `2` — Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
- `upstream_ips`: string[]
  [array]
- `dns_firewall_ips`: string[] **required**
  [array]
- `id`: string **required** — Identifier.
- `modified_on`: string **required** — Last modification of DNS Firewall cluster

## GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns

Show DNS Firewall Cluster Reverse DNS

operationId: `dns-firewall-show-dns-firewall-cluster-reverse-dns`

**Response** 200 → `result`

- `ptr`: object — Map of cluster IP addresses to PTR record contents

## PATCH /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns

Update DNS Firewall Cluster Reverse DNS

operationId: `dns-firewall-update-dns-firewall-cluster-reverse-dns`

**Request** (application/json)

- `ptr`: object — Map of cluster IP addresses to PTR record contents

**Response** 200 → `result`

- `ptr`: object — Map of cluster IP addresses to PTR record contents
