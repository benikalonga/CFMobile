# Magic PCAP collection

9 endpoints.

## GET /accounts/{account_id}/pcaps

List packet capture requests

operationId: `magic-pcap-collection-list-packet-capture-requests`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/pcaps

Create PCAP request

operationId: `magic-pcap-collection-create-pcap-request`

**Request** (application/json)

(one of 2 variants; showing the first)
- `filter_v1`: object — The packet capture filter. When this field is empty, all packets are captured.
  - `destination_address`: string — The destination IP address of the packet.
  - `destination_port`: number — The destination port of the packet.
  - `protocol`: number — The protocol number of the packet.
  - `source_address`: string — The source IP address of the packet.
  - `source_port`: number — The source port of the packet.
- `offset_time`: string — The RFC 3339 offset timestamp from which to query backwards for packets. Must be within the last 24h. When this field is empty, defaults to 
- `packet_limit`: number **required** — The limit of packets contained in a packet capture.
- `system`: string **required** enum: `magic-transit` — The system used to collect packet captures.
- `time_limit`: number **required** — The packet capture duration in seconds.
- `type`: string **required** enum: `simple`, `full` — The type of packet capture. `Simple` captures sampled packets, and `full` captures entire payloads and non-sampled packets.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/pcaps/{pcap_id}

Get PCAP request

operationId: `magic-pcap-collection-get-pcap-request`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/pcaps/{pcap_id}/download

Download Simple PCAP

operationId: `magic-pcap-collection-download-simple-pcap`

## PUT /accounts/{account_id}/pcaps/{pcap_id}/stop

Stop full PCAP

operationId: `magic-pcap-collection-stop-full-pcap`

## GET /accounts/{account_id}/pcaps/ownership

List PCAPs Bucket Ownership

operationId: `magic-pcap-collection-list-pca-ps-bucket-ownership`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/pcaps/ownership

Add buckets for full packet captures

operationId: `magic-pcap-collection-add-buckets-for-full-packet-captures`

**Request** (application/json)

- `destination_conf`: string **required** — The full URI for the bucket. This field only applies to `full` packet captures.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/pcaps/ownership/{ownership_id}

Delete buckets for full packet captures

operationId: `magic-pcap-collection-delete-buckets-for-full-packet-captures`

## POST /accounts/{account_id}/pcaps/ownership/validate

Validate buckets for full packet captures

operationId: `magic-pcap-collection-validate-buckets-for-full-packet-captures`

**Request** (application/json)

- `destination_conf`: string **required** — The full URI for the bucket. This field only applies to `full` packet captures.
- `ownership_challenge`: string **required** — The ownership challenge filename stored in the bucket.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
