# Registrar Domains

3 endpoints.

## GET /accounts/{account_id}/registrar/domains

List domains

operationId: `registrar-domains-list-domains`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/registrar/domains/{domain_name}

Get domain

operationId: `registrar-domains-get-domain`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/registrar/domains/{domain_name}

Update domain

operationId: `registrar-domains-update-domain`

**Request** (application/json)

- `auto_renew`: boolean — Auto-renew controls whether subscription is automatically renewed upon domain expiration.
- `locked`: boolean — Shows whether a registrar lock is in place for a domain.
- `privacy`: boolean — Privacy option controls redacting WHOIS information.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
