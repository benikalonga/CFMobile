# DLP Data Tag Category Templates

2 endpoints.

## GET /accounts/{account_id}/dlp/data_tag_category_templates

Retrieve all data tag category templates in an account

operationId: `dlp-data-tag-category-templates-list`

**Response** 200 → `result`

[array of]
- `description`: string **required**
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `description`: string **required**
  - `name`: string **required**

## GET /accounts/{account_id}/dlp/data_tag_category_templates/{template_id}

Retrieve a specific data tag category template.

operationId: `dlp-data-tag-category-template-read`

**Response** 200 → `result`

- `description`: string **required**
- `id`: string **required**
- `name`: string **required**
- `tags`: object[] **required**
  [array of]
  - `description`: string **required**
  - `name`: string **required**
