# Access JIT request logs

2 endpoints.

## GET /accounts/{account_id}/access/logs/jit_requests

List Access JIT request logs

operationId: `access-jit-request-logs-list` · query: `page`, `per_page`, `status`, `search`, `since`, `until`

**Response** 200 → `result`

[array of]
- `app_aud`: string — Audience of the Access application.
- `app_hostname`: string
- `approvals_received`: integer — Number of unique actors who approved the request.
- `approver_emails`: string[] — Unique actors who approved the request.
  [array]
- `created_at`: string
- `expires_at`: string
- `knock_request_id`: string — Unique identifier for the JIT request.
- `purpose_justification`: string
- `requester_email`: string
- `status`: string enum: `PENDING`, `APPROVED`, `DENIED`, `CANCELED`, `SPENT` — JIT request status. `SPENT` is deprecated and interpreted as `APPROVED`.

## GET /accounts/{account_id}/access/logs/jit_requests/{knock_request_id}

Get an Access JIT request log

operationId: `access-jit-request-logs-get`

**Response** 200 → `result`

- `app_aud`: string — Audience of the Access application.
- `app_hostname`: string
- `approvals_received`: integer — Number of unique actors who approved the request.
- `approver_emails`: string[] — Unique actors who approved the request.
  [array]
- `created_at`: string
- `expires_at`: string
- `knock_request_id`: string — Unique identifier for the JIT request.
- `purpose_justification`: string
- `requester_email`: string
- `status`: string enum: `PENDING`, `APPROVED`, `DENIED`, `CANCELED`, `SPENT` — JIT request status. `SPENT` is deprecated and interpreted as `APPROVED`.
- `events`: object[]
  [array of]
  - `actor_email`: string
  - `actor_idp`: string
  - `actor_uuid`: string
  - `decision_outcome`: string
  - `ray_id`: string
  - `session_duration_seconds`: integer
  - `success`: boolean
  - `timestamp`: string
  - `type`: string enum: `CREATED`, `APPROVER_DECISION`, `COMMITTED`, `CANCELED`, `LOGIN_SUCCESS`, `REDIRECT_TO_ACTIVE`
