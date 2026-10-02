# Connectivity Services

5 endpoints.

## GET /accounts/{account_id}/connectivity/directory/services

List Workers VPC connectivity services

operationId: `connectivity-services-list` · query: `type`, `page`, `per_page`

**Response** 200 → `result`

[array of]
(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer

## POST /accounts/{account_id}/connectivity/directory/services

Create Workers VPC connectivity service

operationId: `connectivity-services-post`

**Request** (application/json)

(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer

## DELETE /accounts/{account_id}/connectivity/directory/services/{service_id}

Delete Workers VPC connectivity service

operationId: `connectivity-services-delete`

## GET /accounts/{account_id}/connectivity/directory/services/{service_id}

Get Workers VPC connectivity service

operationId: `connectivity-services-get`

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer

## PUT /accounts/{account_id}/connectivity/directory/services/{service_id}

Update Workers VPC connectivity service

operationId: `connectivity-services-put`

**Request** (application/json)

(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer

**Response** 200 → `result`

(one of 2 variants; showing the first)
- `created_at`: string
- `host`: any **required**
- `name`: string **required**
- `service_id`: string
- `tls_settings`: object
- `type`: string **required** enum: `tcp`, `http`
- `updated_at`: string
- `http_port`: integer
- `https_port`: integer
