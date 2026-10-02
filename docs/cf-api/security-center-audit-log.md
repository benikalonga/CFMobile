# Security Center Audit Log

4 endpoints.

## GET /accounts/{account_id}/security-center/insights/{issue_id}/audit-log

Retrieves Issue Audit Log

operationId: `get-security-center-issue-audit-log` · query: `per_page`, `cursor`, `field_changed`, `changed_by`, `since`, `before`, `order`

**Response** 200 → `result`

[array of]
- `changed_at`: string — The timestamp when the change occurred.
- `changed_by`: string — The actor that made the change. 'system' for automated changes, or a user identifier.
- `current_value`: string — The value of the field after the change. Null if the field was cleared.
- `field_changed`: string enum: `status`, `user_classification` — The field that was changed.
- `id`: string — UUIDv7 identifier for the audit log entry, time-ordered.
- `issue_id`: string — The ID of the insight this audit log entry relates to.
- `previous_value`: string — The value of the field before the change. Null if the field was not previously set.
- `rationale`: string — Optional rationale provided for the change.
- `zone_id`: integer — The zone ID associated with the insight. Only present for zone-level insights.

## GET /accounts/{account_id}/security-center/insights/audit-log

Retrieves Account Audit Log

operationId: `get-security-center-account-audit-log` · query: `per_page`, `cursor`, `field_changed`, `changed_by`, `since`, `before`, `order`

**Response** 200 → `result`

[array of]
- `changed_at`: string — The timestamp when the change occurred.
- `changed_by`: string — The actor that made the change. 'system' for automated changes, or a user identifier.
- `current_value`: string — The value of the field after the change. Null if the field was cleared.
- `field_changed`: string enum: `status`, `user_classification` — The field that was changed.
- `id`: string — UUIDv7 identifier for the audit log entry, time-ordered.
- `issue_id`: string — The ID of the insight this audit log entry relates to.
- `previous_value`: string — The value of the field before the change. Null if the field was not previously set.
- `rationale`: string — Optional rationale provided for the change.
- `zone_id`: integer — The zone ID associated with the insight. Only present for zone-level insights.

## GET /zones/{zone_id}/security-center/insights/{issue_id}/audit-log

Retrieves Zone Issue Audit Log

operationId: `get-zone-security-center-issue-audit-log` · query: `per_page`, `cursor`, `field_changed`, `changed_by`, `since`, `before`, `order`

**Response** 200 → `result`

[array of]
- `changed_at`: string — The timestamp when the change occurred.
- `changed_by`: string — The actor that made the change. 'system' for automated changes, or a user identifier.
- `current_value`: string — The value of the field after the change. Null if the field was cleared.
- `field_changed`: string enum: `status`, `user_classification` — The field that was changed.
- `id`: string — UUIDv7 identifier for the audit log entry, time-ordered.
- `issue_id`: string — The ID of the insight this audit log entry relates to.
- `previous_value`: string — The value of the field before the change. Null if the field was not previously set.
- `rationale`: string — Optional rationale provided for the change.
- `zone_id`: integer — The zone ID associated with the insight. Only present for zone-level insights.

## GET /zones/{zone_id}/security-center/insights/audit-log

Retrieves Zone Audit Log

operationId: `get-zone-security-center-audit-log` · query: `per_page`, `cursor`, `field_changed`, `changed_by`, `since`, `before`, `order`

**Response** 200 → `result`

[array of]
- `changed_at`: string — The timestamp when the change occurred.
- `changed_by`: string — The actor that made the change. 'system' for automated changes, or a user identifier.
- `current_value`: string — The value of the field after the change. Null if the field was cleared.
- `field_changed`: string enum: `status`, `user_classification` — The field that was changed.
- `id`: string — UUIDv7 identifier for the audit log entry, time-ordered.
- `issue_id`: string — The ID of the insight this audit log entry relates to.
- `previous_value`: string — The value of the field before the change. Null if the field was not previously set.
- `rationale`: string — Optional rationale provided for the change.
- `zone_id`: integer — The zone ID associated with the insight. Only present for zone-level insights.
