# Zero Trust applications review status

2 endpoints.

## GET /accounts/{account_id}/gateway/apps/review_status

List applications review statuses

operationId: `zero-trust-applications-review-status-list`

**Response** 200 → `result`

- `approved_apps`: integer[] — Contains the ids of the approved applications.
  [array]
- `created_at`: string
- `in_review_apps`: integer[] — Contains the ids of the applications in review.
  [array]
- `unapproved_apps`: integer[] — Contains the ids of the unapproved applications.
  [array]
- `updated_at`: string

## PUT /accounts/{account_id}/gateway/apps/review_status

Update applications review statuses

operationId: `zero-trust-applications-review-status-update`

**Request** (application/json)

- `approved_apps`: integer[] **required** — Contains the ids of the approved applications.
  [array]
- `in_review_apps`: integer[] **required** — Contains the ids of the applications in review.
  [array]
- `unapproved_apps`: integer[] **required** — Contains the ids of the unapproved applications.
  [array]

**Response** 200 → `result`

- `approved_apps`: integer[] — Contains the ids of the approved applications.
  [array]
- `created_at`: string
- `in_review_apps`: integer[] — Contains the ids of the applications in review.
  [array]
- `unapproved_apps`: integer[] — Contains the ids of the unapproved applications.
  [array]
- `updated_at`: string
