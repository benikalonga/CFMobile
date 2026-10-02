# Resources

4 endpoints.

## GET /accounts/{account_id}/magic/cloud/resources

List Resources

operationId: `resources-catalog-list` · query: `provider_id`, `resource_type`, `resource_id`, `region`, `resource_group`, `managed`, `search`, `order_by`, `desc`, `per_page`, `page`, `cloudflare`, `v2`

**Response** 200 → `result`

[array of]
- `account_id`: string **required**
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `config`: object **required**
- `deployment_provider`: string **required**
- `id`: string **required**
- `managed`: boolean **required**
- `managed_by`: object[]
  [array of]
  - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
  - `id`: string **required**
  - `name`: string **required**
- `monthly_cost_estimate`: object **required**
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `name`: string **required**
- `native_id`: string **required**
- `observations`: object **required**
- `provider_ids`: string[] **required**
  [array]
- `provider_names_by_id`: object **required**
- `region`: string **required**
- `resource_group`: string **required**
- `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
- `sections`: object[] **required**
  [array of]
  - `help_text`: string
  - `hidden_items`: object[] **required**
    [array of]
    - `helpText`: string
    - `name`: string
    - `value`: object
  - `name`: string **required**
  - `visible_items`: object[] **required**
    [array of]
    - `helpText`: string
    - `name`: string
    - `value`: object
- `state`: object **required**
- `tags`: object **required**
- `updated_at`: string **required**
- `url`: string **required**

## GET /accounts/{account_id}/magic/cloud/resources/{resource_id}

Read Resource

operationId: `resources-catalog-read` · query: `v2`

**Response** 200 → `result`

- `account_id`: string **required**
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
- `config`: object **required**
- `deployment_provider`: string **required**
- `id`: string **required**
- `managed`: boolean **required**
- `managed_by`: object[]
  [array of]
  - `client_type`: string **required** enum: `MAGIC_WAN_CLOUD_ONRAMP`
  - `id`: string **required**
  - `name`: string **required**
- `monthly_cost_estimate`: object **required**
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `name`: string **required**
- `native_id`: string **required**
- `observations`: object **required**
- `provider_ids`: string[] **required**
  [array]
- `provider_names_by_id`: object **required**
- `region`: string **required**
- `resource_group`: string **required**
- `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
- `sections`: object[] **required**
  [array of]
  - `help_text`: string
  - `hidden_items`: object[] **required**
    [array of]
    - `helpText`: string
    - `name`: string
    - `value`: object
  - `name`: string **required**
  - `visible_items`: object[] **required**
    [array of]
    - `helpText`: string
    - `name`: string
    - `value`: object
- `state`: object **required**
- `tags`: object **required**
- `updated_at`: string **required**
- `url`: string **required**

## GET /accounts/{account_id}/magic/cloud/resources/export

Export Resources

operationId: `resources-catalog-export` · query: `provider_id`, `resource_type`, `resource_id`, `region`, `resource_group`, `search`, `order_by`, `desc`, `v2`

**Response** 200 → `result`

string

## POST /accounts/{account_id}/magic/cloud/resources/policy-preview

Preview Rego Query

operationId: `resources-catalog-policy-preview`

**Request** (application/json)

- `policy`: string **required**

**Response** 200 → `result`

string
