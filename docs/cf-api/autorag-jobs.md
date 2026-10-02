# AutoRAG Jobs

3 endpoints.

## GET /accounts/{account_id}/autorag/rags/{id}/jobs

List Jobs

operationId: `autorag-config-list-jobs` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `end_reason`: string
- `ended_at`: string
- `id`: string **required**
- `last_seen_at`: string
- `source`: string **required** enum: `user`, `schedule`
- `started_at`: string

## GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}

Get a Job Details

operationId: `autorag-config-get-job`

**Response** 200 → `result`

- `end_reason`: string
- `ended_at`: string
- `id`: string **required**
- `last_seen_at`: string
- `source`: string **required** enum: `user`, `schedule`
- `started_at`: string

## GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs

List Job Logs

operationId: `autorag-config-list-job-logs` · query: `page`, `per_page`

**Response** 200 → `result`

[array of]
- `created_at`: number **required**
- `id`: integer **required**
- `message`: string **required**
- `message_type`: integer **required**
