# AutoRAG RAG Search

2 endpoints.

## POST /accounts/{account_id}/autorag/rags/{id}/ai-search

AI Search

operationId: `autorag-config-ai-search`

**Request** (application/json)

- `filters`: any
- `max_num_results`: integer default: `10`
- `model`: any
- `query`: string **required**
- `ranking_options`: object default: `[object Object]`
  - `ranker`: string
  - `score_threshold`: number default: `0.4`
- `reranking`: object
  - `enabled`: boolean default: `false`
  - `model`: any
- `rewrite_query`: boolean default: `false`
- `stream`: boolean default: `false`
- `system_prompt`: string

**Response** 200 → `result`

- `data`: object[]
  [array of]
  - `attributes`: object
  - `content`: object[]
    [array of]
    - `text`: string
    - `type`: string
  - `file_id`: string
  - `filename`: string
  - `score`: number **required**
- `has_more`: boolean default: `false`
- `next_page`: string
- `object`: string
- `response`: string **required**
- `search_query`: string **required**

## POST /accounts/{account_id}/autorag/rags/{id}/search

Search

operationId: `autorag-config-search`

**Request** (application/json)

- `filters`: any
- `max_num_results`: integer default: `10`
- `query`: string **required**
- `ranking_options`: object default: `[object Object]`
  - `ranker`: string
  - `score_threshold`: number default: `0.4`
- `reranking`: object
  - `enabled`: boolean default: `false`
  - `model`: any
- `rewrite_query`: boolean default: `false`

**Response** 200 → `result`

- `data`: object[]
  [array of]
  - `attributes`: object
  - `content`: object[]
    [array of]
    - `text`: string
    - `type`: string
  - `file_id`: string
  - `filename`: string
  - `score`: number **required**
- `has_more`: boolean default: `false`
- `next_page`: string
- `object`: string
- `search_query`: string **required**
