# DNSSEC

4 endpoints.

## DELETE /zones/{zone_id}/dnssec

Delete DNSSEC records

operationId: `dnssec-delete-dnssec-records`

**Response** 200 → `result`

string

## GET /zones/{zone_id}/dnssec

DNSSEC Details

operationId: `dnssec-dnssec-details`

**Response** 200 → `result`

- `algorithm`: string — Algorithm key code.
- `digest`: string — Digest hash.
- `digest_algorithm`: string — Type of digest algorithm.
- `digest_type`: string — Coded type for digest algorithm.
- `dnssec_multi_signer`: boolean — If true, multi-signer DNSSEC is enabled on the zone, allowing multiple
- `dnssec_presigned`: boolean — If true, allows Cloudflare to transfer in a DNSSEC-signed zone
- `dnssec_use_nsec3`: boolean — If true, enables the use of NSEC3 together with DNSSEC on the zone.
- `ds`: string — Full DS record.
- `flags`: number — Flag for DNSSEC record.
- `key_tag`: number — Code for key tag.
- `key_type`: string — Algorithm key type.
- `modified_on`: string — When DNSSEC was last modified.
- `public_key`: string — Public key for DS record.
- `status`: any enum: `active`, `pending`, `disabled`, `pending-disabled`, `error` — Status of DNSSEC, based on user-desired state and presence of necessary records.

## PATCH /zones/{zone_id}/dnssec

Edit DNSSEC Status

operationId: `dnssec-edit-dnssec-status`

**Request** (application/json)

- `dnssec_multi_signer`: boolean — If true, multi-signer DNSSEC is enabled on the zone, allowing multiple
- `dnssec_presigned`: boolean — If true, allows Cloudflare to transfer in a DNSSEC-signed zone
- `dnssec_use_nsec3`: boolean — If true, enables the use of NSEC3 together with DNSSEC on the zone.
- `status`: string enum: `active`, `disabled` — Status of DNSSEC, based on user-desired state and presence of necessary records.

**Response** 200 → `result`

- `algorithm`: string — Algorithm key code.
- `digest`: string — Digest hash.
- `digest_algorithm`: string — Type of digest algorithm.
- `digest_type`: string — Coded type for digest algorithm.
- `dnssec_multi_signer`: boolean — If true, multi-signer DNSSEC is enabled on the zone, allowing multiple
- `dnssec_presigned`: boolean — If true, allows Cloudflare to transfer in a DNSSEC-signed zone
- `dnssec_use_nsec3`: boolean — If true, enables the use of NSEC3 together with DNSSEC on the zone.
- `ds`: string — Full DS record.
- `flags`: number — Flag for DNSSEC record.
- `key_tag`: number — Code for key tag.
- `key_type`: string — Algorithm key type.
- `modified_on`: string — When DNSSEC was last modified.
- `public_key`: string — Public key for DS record.
- `status`: any enum: `active`, `pending`, `disabled`, `pending-disabled`, `error` — Status of DNSSEC, based on user-desired state and presence of necessary records.

## GET /zones/{zone_id}/dnssec/zsk

List DNSSEC ZSKs

operationId: `dnssec-list-dnssec-zsks`

**Response** 200 → `result`

[array of]
- `DNSKEY`: object
  - `Algorithm`: integer
  - `Flags`: integer
  - `Hdr`: object
    - `Class`: integer
    - `Name`: string
    - `Rdlength`: integer
    - `Rrtype`: integer
    - `Ttl`: integer
  - `Protocol`: integer
  - `PublicKey`: string
- `Location`: string enum: `database`, `vault` — Storage backend where the DNSSEC key material is stored.
- `Name`: string — Internal key name for the ZSK.
- `SigningKey`: object
  - `kek`: string — Key encryption key name used to encrypt the private key.
  - `privkey`: string — Encrypted private key material for the signing key.
  - `pubkey`: string — Public key content associated with the signing key.
- `Tag`: string enum: `active`, `publish`, `external`, `retired`, `revoked`, `removed` — Lifecycle state tag attached to the DNSSEC key.
