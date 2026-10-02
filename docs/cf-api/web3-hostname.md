# Web3 Hostname

12 endpoints.

## GET /zones/{zone_id}/web3/hostnames

List Web3 Hostnames

operationId: `web3-hostname-list-web3-hostnames`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/web3/hostnames

Create Web3 Hostname

operationId: `web3-hostname-create-web3-hostname`

**Request** (application/json)

- `description`: string — Specify an optional description of the hostname.
- `dnslink`: string — Specify the DNSLink value used if the target is ipfs.
- `name`: string **required** — Specify the hostname that points to the target gateway via CNAME.
- `target`: string **required** enum: `ethereum`, `ipfs`, `ipfs_universal_path` — Specify the target gateway of the hostname.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/web3/hostnames/{identifier}

Delete Web3 Hostname

operationId: `web3-hostname-delete-web3-hostname`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/web3/hostnames/{identifier}

Web3 Hostname Details

operationId: `web3-hostname-web3-hostname-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /zones/{zone_id}/web3/hostnames/{identifier}

Edit Web3 Hostname

operationId: `web3-hostname-edit-web3-hostname`

**Request** (application/json)

- `description`: string — Specify an optional description of the hostname.
- `dnslink`: string — Specify the DNSLink value used if the target is ipfs.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list

IPFS Universal Path Gateway Content List Details

operationId: `web3-hostname-ipfs-universal-path-gateway-content-list-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list

Update IPFS Universal Path Gateway Content List

operationId: `web3-hostname-update-ipfs-universal-path-gateway-content-list`

**Request** (application/json)

- `action`: string **required** enum: `block` — Behavior of the content list.
- `entries`: object[] **required** — Provides content list entries.
  [array of]
  - `content`: string — Specify the CID or content path of content to block.
  - `created_on`: string
  - `description`: string — Specify an optional description of the content list entry.
  - `id`: string — Specify the identifier of the hostname.
  - `modified_on`: string
  - `type`: string enum: `cid`, `content_path` — Specify the type of content list entry to block.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries

List IPFS Universal Path Gateway Content List Entries

operationId: `web3-hostname-list-ipfs-universal-path-gateway-content-list-entries`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries

Create IPFS Universal Path Gateway Content List Entry

operationId: `web3-hostname-create-ipfs-universal-path-gateway-content-list-entry`

**Request** (application/json)

- `content`: string **required** — Specify the CID or content path of content to block.
- `description`: string — Specify an optional description of the content list entry.
- `type`: string **required** enum: `cid`, `content_path` — Specify the type of content list entry to block.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}

Delete IPFS Universal Path Gateway Content List Entry

operationId: `web3-hostname-delete-ipfs-universal-path-gateway-content-list-entry`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}

IPFS Universal Path Gateway Content List Entry Details

operationId: `web3-hostname-ipfs-universal-path-gateway-content-list-entry-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}

Edit IPFS Universal Path Gateway Content List Entry

operationId: `web3-hostname-edit-ipfs-universal-path-gateway-content-list-entry`

**Request** (application/json)

- `content`: string **required** — Specify the CID or content path of content to block.
- `description`: string — Specify an optional description of the content list entry.
- `type`: string **required** enum: `cid`, `content_path` — Specify the type of content list entry to block.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
