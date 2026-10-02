# WHOIS Record

1 endpoints.

## GET /accounts/{account_id}/intel/whois

Get WHOIS Record

operationId: `whois-record-get-whois-record` · query: `domain`

**Response** 200 → `result`

- `administrative_city`: string
- `administrative_country`: string
- `administrative_email`: string
- `administrative_fax`: string
- `administrative_fax_ext`: string
- `administrative_id`: string
- `administrative_name`: string
- `administrative_org`: string
- `administrative_phone`: string
- `administrative_phone_ext`: string
- `administrative_postal_code`: string
- `administrative_province`: string
- `administrative_referral_url`: string
- `administrative_street`: string
- `billing_city`: string
- `billing_country`: string
- `billing_email`: string
- `billing_fax`: string
- `billing_fax_ext`: string
- `billing_id`: string
- `billing_name`: string
- `billing_org`: string
- `billing_phone`: string
- `billing_phone_ext`: string
- `billing_postal_code`: string
- `billing_province`: string
- `billing_referral_url`: string
- `billing_street`: string
- `created_date`: string
- `created_date_raw`: string
- `dnssec`: boolean **required**
- `domain`: string **required**
- `expiration_date`: string
- `expiration_date_raw`: string
- `extension`: string **required**
- `found`: boolean **required**
- `id`: string
- `nameservers`: string[] **required**
  [array]
- `punycode`: string **required**
- `registrant`: string **required**
- `registrant_city`: string
- `registrant_country`: string
- `registrant_email`: string
- `registrant_fax`: string
- `registrant_fax_ext`: string
- `registrant_id`: string
- `registrant_name`: string
- `registrant_org`: string
- `registrant_phone`: string
- `registrant_phone_ext`: string
- `registrant_postal_code`: string
- `registrant_province`: string
- `registrant_referral_url`: string
- `registrant_street`: string
- `registrar`: string **required**
- `registrar_city`: string
- `registrar_country`: string
- `registrar_email`: string
- `registrar_fax`: string
- `registrar_fax_ext`: string
- `registrar_id`: string
- `registrar_name`: string
- `registrar_org`: string
- `registrar_phone`: string
- `registrar_phone_ext`: string
- `registrar_postal_code`: string
- `registrar_province`: string
- `registrar_referral_url`: string
- `registrar_street`: string
- `status`: string[]
  [array]
- `technical_city`: string
- `technical_country`: string
- `technical_email`: string
- `technical_fax`: string
- `technical_fax_ext`: string
- `technical_id`: string
- `technical_name`: string
- `technical_org`: string
- `technical_phone`: string
- `technical_phone_ext`: string
- `technical_postal_code`: string
- `technical_province`: string
- `technical_referral_url`: string
- `technical_street`: string
- `updated_date`: string
- `updated_date_raw`: string
- `whois_server`: string
