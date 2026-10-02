# Diagnostics

1 endpoints.

## POST /accounts/{account_id}/diagnostics/traceroute

Traceroute

operationId: `diagnostics-traceroute`

**Request** (application/json)

- `colos`: string[] — If no source colo names specified, all colos will be used. China colos are unavailable for traceroutes.
  [array]
- `options`: object
  - `max_ttl`: integer default: `15` — Max TTL.
  - `packet_type`: string enum: `icmp`, `tcp`, `udp`, `gre`, `gre+icmp` default: `icmp` — Type of packet sent.
  - `packets_per_ttl`: integer default: `3` — Number of packets sent at each TTL.
  - `port`: integer default: `0` — For UDP and TCP, specifies the destination port. For ICMP, specifies the initial ICMP sequence value. Default value 0 will choose the best v
  - `wait_time`: integer default: `1` — Set the time (in seconds) to wait for a response to a probe.
- `targets`: string[] **required**
  [array]

**Response** 200 → `result`

[array of]
- `colos`: object[]
  [array of]
  - `colo`: object
    - `city`: string — Source colo city.
    - `name`: string — Source colo name.
  - `error`: string enum: ``, `Could not gather traceroute data: Code 1`, `Could not gather traceroute data: Code 2`, `Could not gather traceroute data: Code 3`, `Could not gather traceroute data: Code 4` — Errors resulting from collecting traceroute from colo to target.
  - `hops`: object[]
    [array of]
    - `nodes`: object[] — An array of node objects.
    - `packets_lost`: integer — Number of packets where no response was received.
    - `packets_sent`: integer — Number of packets sent with specified TTL.
    - `packets_ttl`: integer — The time to live (TTL).
  - `target_summary`: object — Aggregated statistics from all hops about the target.
  - `traceroute_time_ms`: integer — Total time of traceroute in ms.
- `target`: string — The target hostname, IPv6, or IPv6 address.
