# DLP Sensitivity Group Templates

2 endpoints.

## GET /accounts/{account_id}/dlp/sensitivity_groups/templates

Retrieve all sensitivity group templates in an account

operationId: `dlp-sensitivity-group-templates-list`

**Response** 200 → `result`

[array of]
- `description`: string **required**
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `description`: string **required**
  - `name`: string **required**
- `name`: string **required**

## GET /accounts/{account_id}/dlp/sensitivity_groups/templates/{template_id}

Retrieve a specific sensitivity group template.

operationId: `dlp-sensitivity-group-template-read`

**Response** 200 → `result`

- `description`: string **required**
- `id`: string **required**
- `levels`: object[] **required**
  [array of]
  - `description`: string **required**
  - `name`: string **required**
- `name`: string **required**
