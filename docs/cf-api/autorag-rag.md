# AutoRAG RAG

2 endpoints.

## GET /accounts/{account_id}/autorag/rags/{id}/files

Files

operationId: `autorag-config-files` · query: `page`, `per_page`, `search`, `status`

**Response** 200 → `result`

[array of]
- `error`: string **required**
- `key`: string **required**

## PATCH /accounts/{account_id}/autorag/rags/{id}/sync

Sync

operationId: `autorag-config-sync`

**Response** 200 → `result`

- `job_id`: string **required**
