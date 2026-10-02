# DNS Records for an Account

1 endpoints.

## GET /accounts/{account_id}/dns_records/usage

Get DNS Record Usage for Account

operationId: `dns-records-for-an-account-get-usage`

**Response** 200 → `result`

- `internal_record_quota`: integer — Maximum number of DNS records allowed across all internal zones in the account. Only present if internal DNS is enabled.
- `internal_record_usage`: integer — Current number of DNS records across all internal zones in the account. Only present if internal DNS is enabled.
- `record_quota`: integer **required** — Maximum number of DNS records allowed across all public zones in the account. Null if using zone-level quota.
- `record_usage`: integer **required** — Current number of DNS records across all public zones in the account.
