# URL Intelligence

1 endpoints.

## GET /accounts/{account_id}/intel/url

Get URL Intelligence

operationId: `url-intelligence-get-url-intelligence` · query: `url`

**Response** 200 → `result`

- `content_categories`: object[] **required** — Content categories associated with this URL.
  [array of]
  - `id`: integer
  - `name`: string
  - `source_id`: integer
  - `super_category_id`: integer
- `full_url`: string **required** — The full URL that was looked up.
- `hostname`: string **required** — The hostname of the URL.
- `risk_type`: object[] **required** — Security risk types associated with this URL.
  [array of]
  - `id`: integer
  - `name`: string
  - `source_id`: integer
  - `super_category_id`: integer
- `url_path`: string **required** — The path component of the URL.
