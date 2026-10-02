# Notification History

1 endpoints.

## GET /accounts/{account_id}/alerting/v3/history

List History

operationId: `notification-history-list-history` · query: `per_page`, `before`, `page`, `since`

**Response** 200 → `result`

[array of]
- `alert_body`: string — Message body included in the notification sent.
- `alert_type`: string — Type of notification that has been dispatched.
- `description`: string — Description of the notification policy (if present).
- `id`: string — UUID
- `mechanism`: string — The mechanism to which the notification has been dispatched.
- `mechanism_type`: string enum: `email`, `pagerduty`, `webhook` — The type of mechanism to which the notification has been dispatched. This can be email/pagerduty/webhook based on the mechanism configured.
- `name`: string — Name of the policy.
- `policy_id`: string — The unique identifier of a notification policy
- `sent`: string — Timestamp of when the notification was dispatched in ISO 8601 format.
