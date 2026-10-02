# AI Search Account Search

2 endpoints.

## POST /accounts/{account_id}/ai-search/namespaces/{name}/chat/completions

Multi-Instance Chat Completions

operationId: `ai-search-namespace-multi-instance-chat-completion`

**Request** (application/json)

- `ai_search_options`: object **required**
  - `cache`: object
    - `cache_threshold`: string enum: `super_strict_match`, `close_enough`, `flexible_friend`, `anything_goes`
    - `enabled`: boolean
  - `instance_ids`: string[] **required**
    [array]
  - `query_rewrite`: object
    - `enabled`: boolean
    - `model`: any
    - `rewrite_prompt`: string
  - `reranking`: object
    - `enabled`: boolean
    - `match_threshold`: number default: `0.4`
    - `model`: any
  - `retrieval`: object
    - `boost_by`: object[] — Metadata fields to boost search results by. Overrides the instance-level boost_by config. Direction defaults to 'asc' for numeric/datetime f
    - `context_expansion`: integer default: `0`
    - `filters`: object
    - `fusion_method`: string enum: `max`, `rrf`
    - `keyword_match_mode`: string enum: `and`, `or` — Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes 
    - `match_threshold`: number default: `0.4`
    - `max_num_results`: integer default: `10`
    - `retrieval_type`: string enum: `vector`, `keyword`, `hybrid`
    - `return_on_failure`: boolean default: `true`
- `messages`: object[] **required**
  [array of]
  - `content`: any **required**
  - `role`: string **required** enum: `system`, `developer`, `user`, `assistant`, `tool`
- `model`: any
- `stream`: boolean

**Response** 200 → `result`

- `choices`: object[] **required**
  [array of]
  - `index`: integer
  - `message`: object **required**
    - `content`: any **required**
    - `role`: string **required** enum: `system`, `developer`, `user`, `assistant`, `tool`
- `chunks`: object[] **required**
  [array of]
  - `id`: string **required**
  - `instance_id`: string **required**
  - `item`: object
    - `key`: string **required**
    - `metadata`: object
    - `timestamp`: number
  - `score`: number **required**
  - `scoring_details`: object
    - `fusion_method`: string enum: `rrf`, `max`
    - `keyword_rank`: number
    - `keyword_score`: number
    - `reranking_score`: number
    - `vector_rank`: number
    - `vector_score`: number
  - `text`: string **required**
  - `type`: string **required**
- `errors`: object[]
  [array of]
  - `instance_id`: string **required**
  - `message`: string **required**
- `id`: string
- `model`: string
- `object`: string

## POST /accounts/{account_id}/ai-search/namespaces/{name}/search

Multi-Instance Search

operationId: `ai-search-namespace-multi-instance-search`

**Request** (application/json)

- `ai_search_options`: object **required**
  - `cache`: object
    - `cache_threshold`: string enum: `super_strict_match`, `close_enough`, `flexible_friend`, `anything_goes`
    - `enabled`: boolean
  - `instance_ids`: string[] **required**
    [array]
  - `query_rewrite`: object
    - `enabled`: boolean
    - `model`: any
    - `rewrite_prompt`: string
  - `reranking`: object
    - `enabled`: boolean
    - `match_threshold`: number default: `0.4`
    - `model`: any
  - `retrieval`: object
    - `boost_by`: object[] — Metadata fields to boost search results by. Overrides the instance-level boost_by config. Direction defaults to 'asc' for numeric/datetime f
    - `context_expansion`: integer default: `0`
    - `filters`: object
    - `fusion_method`: string enum: `max`, `rrf`
    - `keyword_match_mode`: string enum: `and`, `or` — Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes 
    - `match_threshold`: number default: `0.4`
    - `max_num_results`: integer default: `10`
    - `retrieval_type`: string enum: `vector`, `keyword`, `hybrid`
    - `return_on_failure`: boolean default: `true`
- `messages`: object[] — OpenAI-compatible message array. For multimodal queries, set the last user message's `content` to an array of typed parts: `[{type:'text', t
  [array of]
  - `content`: any **required**
  - `role`: string **required** enum: `system`, `developer`, `user`, `assistant`, `tool`
- `query`: string — A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.

**Response** 200 → `result`

- `chunks`: object[] **required**
  [array of]
  - `id`: string **required**
  - `instance_id`: string **required**
  - `item`: object
    - `key`: string **required**
    - `metadata`: object
    - `timestamp`: number
  - `score`: number **required**
  - `scoring_details`: object
    - `fusion_method`: string enum: `rrf`, `max`
    - `keyword_rank`: number
    - `keyword_score`: number
    - `reranking_score`: number
    - `vector_rank`: number
    - `vector_score`: number
  - `text`: string **required**
  - `type`: string **required**
- `errors`: object[]
  [array of]
  - `instance_id`: string **required**
  - `message`: string **required**
- `query_kind`: string **required** enum: `text`, `image`, `multimodal`
- `search_query`: string
