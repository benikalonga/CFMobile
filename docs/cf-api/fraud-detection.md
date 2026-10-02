# Fraud Detection

2 endpoints.

## GET /zones/{zone_id}/fraud_detection/settings

Get Fraud Detection Settings

operationId: `fraud-detection-zone-get-settings`

**Response** 200 → `result`

- `authentication_settings`: object — Configuration for classifying login authentication outcomes based on the origin response.
  - `failure_criteria`: any — Criterion for identifying failed login responses.
  - `success_criteria`: any — Criterion for identifying successful login responses.
- `user_profiles`: string enum: `enabled`, `disabled` — Whether Fraud User Profiles is enabled for the zone.
- `username_expressions`: string[] — List of expressions to detect usernames in write HTTP requests.
  [array]

## PUT /zones/{zone_id}/fraud_detection/settings

Update Fraud Detection Settings

operationId: `fraud-detection-zone-update-settings`

**Request** (application/json)

- `authentication_settings`: object — Configuration for classifying login authentication outcomes based on the origin response.
  - `failure_criteria`: any — Criterion for identifying failed login responses.
  - `success_criteria`: any — Criterion for identifying successful login responses.
- `user_profiles`: string enum: `enabled`, `disabled` — Whether Fraud User Profiles is enabled for the zone.
- `username_expressions`: string[] — List of expressions to detect usernames in write HTTP requests.
  [array]

**Response** 200 → `result`

- `authentication_settings`: object — Configuration for classifying login authentication outcomes based on the origin response.
  - `failure_criteria`: any — Criterion for identifying failed login responses.
  - `success_criteria`: any — Criterion for identifying successful login responses.
- `user_profiles`: string enum: `enabled`, `disabled` — Whether Fraud User Profiles is enabled for the zone.
- `username_expressions`: string[] — List of expressions to detect usernames in write HTTP requests.
  [array]
