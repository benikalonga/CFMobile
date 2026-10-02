# Account Load Balancer Monitors

9 endpoints.

## GET /accounts/{account_id}/load_balancers/monitors

List Monitors

operationId: `account-load-balancer-monitors-list-monitors`

**Response** 200 → `result`

[array of]
- `allow_insecure`: boolean default: `false` — Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
- `consecutive_down`: integer — To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
- `consecutive_up`: integer — To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
- `description`: string default: `` — Object description.
- `expected_body`: string default: `` — A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This pa
- `expected_codes`: string default: `` — The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
- `follow_redirects`: boolean default: `false` — Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
- `header`: object — The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be ov
- `interval`: integer default: `60` — The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from 
- `method`: string — The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health
- `path`: string — The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
- `port`: integer — The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the por
- `probe_zone`: string default: `` — Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
- `retries`: integer default: `2` — The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
- `timeout`: integer default: `5` — The timeout (in seconds) before marking the health check as failed.
- `type`: string enum: `http`, `https`, `tcp`, `udp_icmp`, `icmp_ping`, `smtp` default: `http` — The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
- `created_on`: string
- `id`: string
- `modified_on`: string

## POST /accounts/{account_id}/load_balancers/monitors

Create Monitor

operationId: `account-load-balancer-monitors-create-monitor`

**Request** (application/json)

- `allow_insecure`: boolean default: `false` — Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
- `consecutive_down`: integer — To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
- `consecutive_up`: integer — To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
- `description`: string default: `` — Object description.
- `expected_body`: string default: `` — A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This pa
- `expected_codes`: string default: `` — The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
- `follow_redirects`: boolean default: `false` — Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
- `header`: object — The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be ov
- `interval`: integer default: `60` — The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from 
- `method`: string — The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health
- `path`: string — The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
- `port`: integer — The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the por
- `probe_zone`: string default: `` — Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
- `retries`: integer default: `2` — The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
- `timeout`: integer default: `5` — The timeout (in seconds) before marking the health check as failed.
- `type`: string enum: `http`, `https`, `tcp`, `udp_icmp`, `icmp_ping`, `smtp` default: `http` — The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## DELETE /accounts/{account_id}/load_balancers/monitors/{monitor_id}

Delete Monitor

operationId: `account-load-balancer-monitors-delete-monitor`

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## GET /accounts/{account_id}/load_balancers/monitors/{monitor_id}

Monitor Details

operationId: `account-load-balancer-monitors-monitor-details`

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## PATCH /accounts/{account_id}/load_balancers/monitors/{monitor_id}

Patch Monitor

operationId: `account-load-balancer-monitors-patch-monitor`

**Request** (application/json)

- `allow_insecure`: boolean default: `false` — Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
- `consecutive_down`: integer — To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
- `consecutive_up`: integer — To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
- `description`: string default: `` — Object description.
- `expected_body`: string default: `` — A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This pa
- `expected_codes`: string default: `` — The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
- `follow_redirects`: boolean default: `false` — Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
- `header`: object — The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be ov
- `interval`: integer default: `60` — The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from 
- `method`: string — The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health
- `path`: string — The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
- `port`: integer — The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the por
- `probe_zone`: string default: `` — Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
- `retries`: integer default: `2` — The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
- `timeout`: integer default: `5` — The timeout (in seconds) before marking the health check as failed.
- `type`: string enum: `http`, `https`, `tcp`, `udp_icmp`, `icmp_ping`, `smtp` default: `http` — The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## PUT /accounts/{account_id}/load_balancers/monitors/{monitor_id}

Update Monitor

operationId: `account-load-balancer-monitors-update-monitor`

**Request** (application/json)

- `allow_insecure`: boolean default: `false` — Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
- `consecutive_down`: integer — To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
- `consecutive_up`: integer — To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
- `description`: string default: `` — Object description.
- `expected_body`: string default: `` — A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This pa
- `expected_codes`: string default: `` — The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
- `follow_redirects`: boolean default: `false` — Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
- `header`: object — The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be ov
- `interval`: integer default: `60` — The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from 
- `method`: string — The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health
- `path`: string — The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
- `port`: integer — The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the por
- `probe_zone`: string default: `` — Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
- `retries`: integer default: `2` — The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
- `timeout`: integer default: `5` — The timeout (in seconds) before marking the health check as failed.
- `type`: string enum: `http`, `https`, `tcp`, `udp_icmp`, `icmp_ping`, `smtp` default: `http` — The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## POST /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview

Preview Monitor

operationId: `account-load-balancer-monitors-preview-monitor`

**Request** (application/json)

- `allow_insecure`: boolean default: `false` — Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.
- `consecutive_down`: integer — To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.
- `consecutive_up`: integer — To be marked healthy the monitored origin must pass this healthcheck N consecutive times.
- `description`: string default: `` — Object description.
- `expected_body`: string default: `` — A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This pa
- `expected_codes`: string default: `` — The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.
- `follow_redirects`: boolean default: `false` — Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.
- `header`: object — The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be ov
- `interval`: integer default: `60` — The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from 
- `method`: string — The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health
- `path`: string — The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.
- `port`: integer — The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the por
- `probe_zone`: string default: `` — Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.
- `retries`: integer default: `2` — The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.
- `timeout`: integer default: `5` — The timeout (in seconds) before marking the health check as failed.
- `type`: string enum: `http`, `https`, `tcp`, `udp_icmp`, `icmp_ping`, `smtp` default: `http` — The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.

**Response** 200 → `result`

(one of 2 variants; showing the first)
object

## GET /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references

List Monitor References

operationId: `account-load-balancer-monitors-list-monitor-references`

**Response** 200 → `result`

[array of]
- `reference_type`: string enum: `*`, `referral`, `referrer`
- `resource_id`: string
- `resource_name`: string
- `resource_type`: string

## GET /accounts/{account_id}/load_balancers/preview/{preview_id}

Preview Result

operationId: `account-load-balancer-monitors-preview-result`

**Response** 200 → `result`

(one of 2 variants; showing the first)
object
