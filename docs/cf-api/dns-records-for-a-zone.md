# DNS Records for a Zone

14 endpoints.

## GET /zones/{zone_id}/dns_records

List DNS Records

operationId: `dns-records-for-a-zone-list-dns-records` · query: `name`, `name.exact`, `name.contains`, `name.startswith`, `name.endswith`, `type`, `content`, `content.exact`, `content.contains`, `content.startswith`, `content.endswith`, `proxied`, `match`, `comment`, `comment.present`, `comment.absent`, `comment.exact`, `comment.contains`, `comment.startswith`, `comment.endswith`, `tag`, `tag.present`, `tag.absent`, `tag.exact`, `tag.contains`, `tag.startswith`, `tag.endswith`, `search`, `tag_match`, `page`, `per_page`, `order`, `direction`, `include_shadow_metadata`, `shadowed_by_name`, `shadowing_name`

**Response** 200 → `result`

[array of]
(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## POST /zones/{zone_id}/dns_records

Create DNS Record

operationId: `dns-records-for-a-zone-create-dns-record` · query: `include_shadow_metadata`

**Request** (application/json)

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.

**Response** 200 → `result`

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## DELETE /zones/{zone_id}/dns_records/{dns_record_id}

Delete DNS Record

operationId: `dns-records-for-a-zone-delete-dns-record`

**Response** 200 → `result`

- `id`: string — Identifier.

## GET /zones/{zone_id}/dns_records/{dns_record_id}

DNS Record Details

operationId: `dns-records-for-a-zone-dns-record-details` · query: `include_shadow_metadata`

**Response** 200 → `result`

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## PATCH /zones/{zone_id}/dns_records/{dns_record_id}

Update DNS Record

operationId: `dns-records-for-a-zone-patch-dns-record` · query: `include_shadow_metadata`

**Request** (application/json)

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.

**Response** 200 → `result`

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## PUT /zones/{zone_id}/dns_records/{dns_record_id}

Overwrite DNS Record

operationId: `dns-records-for-a-zone-update-dns-record` · query: `include_shadow_metadata`

**Request** (application/json)

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.

**Response** 200 → `result`

(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## POST /zones/{zone_id}/dns_records/batch

Batch DNS Records

operationId: `dns-records-for-a-zone-batch-dns-records` · query: `include_shadow_metadata`

**Request** (application/json)

- `deletes`: object[]
  [array of]
  - `id`: string — Identifier.
- `patches`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
- `posts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
- `puts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.

**Response** 200 → `result`

- `deletes`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
  - `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
  - `created_on`: string **required** — When the record was created.
  - `id`: string **required** — Identifier.
  - `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
    - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
    - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
    - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
  - `modified_on`: string **required** — When the record was last modified.
  - `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
  - `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.
- `patches`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
  - `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
  - `created_on`: string **required** — When the record was created.
  - `id`: string **required** — Identifier.
  - `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
    - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
    - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
    - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
  - `modified_on`: string **required** — When the record was last modified.
  - `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
  - `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.
- `posts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
  - `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
  - `created_on`: string **required** — When the record was created.
  - `id`: string **required** — Identifier.
  - `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
    - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
    - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
    - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
  - `modified_on`: string **required** — When the record was last modified.
  - `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
  - `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.
- `puts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
  - `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
  - `created_on`: string **required** — When the record was created.
  - `id`: string **required** — Identifier.
  - `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
    - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
    - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
    - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
  - `modified_on`: string **required** — When the record was last modified.
  - `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
  - `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## GET /zones/{zone_id}/dns_records/export

Export DNS Records

operationId: `dns-records-for-a-zone-export-dns-records`

**Response** 200 → `result`

string

## POST /zones/{zone_id}/dns_records/import

Import DNS Records

operationId: `dns-records-for-a-zone-import-dns-records`

**Request** (multipart/form-data)

- `file`: string **required** — BIND config to import.
- `proxied`: string default: `false` — Whether or not proxiable records should receive the performance and security benefits of Cloudflare.

**Response** 200 → `result`

- `recs_added`: number — Number of DNS records added.
- `total_records_parsed`: number — Total number of DNS records parsed.

## POST /zones/{zone_id}/dns_records/scan

Scan DNS Records

operationId: `dns-records-for-a-zone-scan-dns-records`

**Response** 200 → `result`

- `recs_added`: number — Number of DNS records added.
- `total_records_parsed`: number — Total number of DNS records parsed.

## GET /zones/{zone_id}/dns_records/scan/review

List Scanned DNS Records

operationId: `dns-records-for-a-zone-review-dns-scan`

**Response** 200 → `result`

[array of]
(one of 2 variants; showing the first)
(one of 8 variants; showing the first)
- `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
- `name`: string — Complete DNS record name, including the zone name, in Punycode.
- `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
- `settings`: object — Settings for the DNS record.
  - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
  - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
- `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
  [array]
- `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
- `content`: string — A valid IPv4 address.
- `private_routing`: boolean default: `false` — Enables private network routing to the origin.
- `type`: string enum: `A` — Record type.
- `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
- `created_on`: string **required** — When the record was created.
- `id`: string **required** — Identifier.
- `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
  - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
  - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
  - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    [array]
  - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
- `modified_on`: string **required** — When the record was last modified.
- `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
- `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.

## POST /zones/{zone_id}/dns_records/scan/review

Review Scanned DNS Records

operationId: `dns-records-for-a-zone-apply-dns-scan-results`

**Request** (application/json)

- `accepts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
- `rejects`: object[]
  [array of]
  - `id`: string — Identifier.

**Response** 200 → `result`

- `accepts`: object[]
  [array of]
  - `comment`: string — Comments or notes about the DNS record. This field has no effect on DNS responses.
  - `name`: string — Complete DNS record name, including the zone name, in Punycode.
  - `proxied`: boolean default: `false` — Whether the record is receiving the performance and security benefits of Cloudflare.
  - `settings`: object — Settings for the DNS record.
    - `ipv4_only`: boolean default: `false` — When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note t
    - `ipv6_only`: boolean default: `false` — When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note t
  - `tags`: string[] default: `` — Custom tags for the DNS record. This field has no effect on DNS responses.
    [array]
  - `ttl`: number default: `1` — Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduce
  - `content`: string — A valid IPv4 address.
  - `private_routing`: boolean default: `false` — Enables private network routing to the origin.
  - `type`: string enum: `A` — Record type.
  - `comment_modified_on`: string — When the record comment was last modified. Omitted if there is no comment.
  - `created_on`: string **required** — When the record was created.
  - `id`: string **required** — Identifier.
  - `meta`: object **required** — Extra Cloudflare-specific metadata about the record.
    - `dead_glue`: boolean — Whether this glue record is not served because a shallower NS delegation takes precedence over the deeper delegation that needs it. Present 
    - `is_glue`: boolean — Whether this A or AAAA record is glue for a subdomain NS delegation. See [Glue records](https://developers.cloudflare.com/dns/manage-dns-rec
    - `shadowed_by`: string[] — IDs of the NS records that shadow this record. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/sha
    - `shadowed_records_count`: integer — Number of records shadowed by this NS delegation. See [Shadowed records](https://developers.cloudflare.com/dns/manage-dns-records/reference/
  - `modified_on`: string **required** — When the record was last modified.
  - `proxiable`: boolean **required** — Whether the record can be proxied by Cloudflare or not.
  - `tags_modified_on`: string — When the record tags were last modified. Omitted if there are no tags.
- `rejects`: string[]
  [array]

## POST /zones/{zone_id}/dns_records/scan/trigger

Trigger DNS Record Scan

operationId: `dns-records-for-a-zone-trigger-dns-scan`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.

## GET /zones/{zone_id}/dns_records/usage

Get DNS Record Usage

operationId: `dns-records-for-a-zone-get-usage`

**Response** 200 → `result`

- `record_quota`: integer **required** — Maximum number of DNS records allowed for the zone. Null if using account-level quota.
- `record_usage`: integer **required** — Current number of DNS records in the zone.
