# Botnet Threat Feed

4 endpoints.

## GET /accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report

Get daily report

operationId: `botnet-threat-feed-get-day-report` · query: `date`

**Response** 200 → `result`

- `cidr`: string
- `date`: string
- `offense_count`: integer

## GET /accounts/{account_id}/botnet_feed/asn/{asn_id}/full_report

Get full report

operationId: `botnet-threat-feed-get-full-report`

**Response** 200 → `result`

- `cidr`: string
- `date`: string
- `offense_count`: integer

## GET /accounts/{account_id}/botnet_feed/configs/asn

Get list of ASNs

operationId: `botnet-threat-feed-list-asn`

**Response** 200 → `result`

- `asn`: integer

## DELETE /accounts/{account_id}/botnet_feed/configs/asn/{asn_id}

Delete an ASN

operationId: `botnet-threat-feed-delete-asn`

**Response** 200 → `result`

- `asn`: integer
