# Secondary DNS (Peer)

5 endpoints.

## GET /accounts/{account_id}/secondary_dns/peers

List Peers

operationId: `secondary-dns-(-peer)-list-peers`

**Response** 200 → `result`

[array of]
- `id`: string **required**
- `ip`: string — IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the I
- `ixfr_enable`: boolean — Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
- `name`: string **required** — The name of the peer.
- `port`: number — DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
- `tsig_id`: string — TSIG authentication will be used for zone transfer if configured.

## POST /accounts/{account_id}/secondary_dns/peers

Create Peer

operationId: `secondary-dns-(-peer)-create-peer`

**Request** (application/json)

- `name`: string **required** — The name of the peer.

**Response** 200 → `result`

- `id`: string **required**
- `ip`: string — IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the I
- `ixfr_enable`: boolean — Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
- `name`: string **required** — The name of the peer.
- `port`: number — DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
- `tsig_id`: string — TSIG authentication will be used for zone transfer if configured.

## DELETE /accounts/{account_id}/secondary_dns/peers/{peer_id}

Delete Peer

operationId: `secondary-dns-(-peer)-delete-peer`

**Response** 200 → `result`

- `id`: string

## GET /accounts/{account_id}/secondary_dns/peers/{peer_id}

Peer Details

operationId: `secondary-dns-(-peer)-peer-details`

**Response** 200 → `result`

- `id`: string **required**
- `ip`: string — IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the I
- `ixfr_enable`: boolean — Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
- `name`: string **required** — The name of the peer.
- `port`: number — DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
- `tsig_id`: string — TSIG authentication will be used for zone transfer if configured.

## PUT /accounts/{account_id}/secondary_dns/peers/{peer_id}

Update Peer

operationId: `secondary-dns-(-peer)-update-peer`

**Request** (application/json)

- `id`: string **required**
- `ip`: string — IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the I
- `ixfr_enable`: boolean — Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
- `name`: string **required** — The name of the peer.
- `port`: number — DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
- `tsig_id`: string — TSIG authentication will be used for zone transfer if configured.

**Response** 200 → `result`

- `id`: string **required**
- `ip`: string — IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the I
- `ixfr_enable`: boolean — Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.
- `name`: string **required** — The name of the peer.
- `port`: number — DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.
- `tsig_id`: string — TSIG authentication will be used for zone transfer if configured.
