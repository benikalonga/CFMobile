# Email Sending feedback

1 endpoints.

## GET /accounts/{account_id}/email/sending/feedback

Get feedback emails statistics

operationId: `get_publicFeedbackStatus` · query: `start_at`, `end_at`

**Response** 200 → `result`

- `count`: number **required**
- `end_at`: string **required**
- `start_at`: string **required**
