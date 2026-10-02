# Custom Hostname Fallback Origin for a Zone

3 endpoints.

## DELETE /zones/{zone_id}/custom_hostnames/fallback_origin

Delete Fallback Origin for Custom Hostnames

operationId: `custom-hostname-fallback-origin-for-a-zone-delete-fallback-origin-for-custom-hostnames`

**Response** 200 → `result`

- `created_at`: string — This is the time the fallback origin was created.
- `errors`: string[] — These are errors that were encountered while trying to activate a fallback origin.
  [array]
- `origin`: string — Your origin hostname that requests to your custom hostnames will be sent to.
- `status`: string enum: `initializing`, `pending_deployment`, `pending_deletion`, `active`, `deployment_timed_out`, `deletion_timed_out` — Status of the fallback origin's activation.
- `updated_at`: string — This is the time the fallback origin was updated.

## GET /zones/{zone_id}/custom_hostnames/fallback_origin

Get Fallback Origin for Custom Hostnames

operationId: `custom-hostname-fallback-origin-for-a-zone-get-fallback-origin-for-custom-hostnames`

**Response** 200 → `result`

- `created_at`: string — This is the time the fallback origin was created.
- `errors`: string[] — These are errors that were encountered while trying to activate a fallback origin.
  [array]
- `origin`: string — Your origin hostname that requests to your custom hostnames will be sent to.
- `status`: string enum: `initializing`, `pending_deployment`, `pending_deletion`, `active`, `deployment_timed_out`, `deletion_timed_out` — Status of the fallback origin's activation.
- `updated_at`: string — This is the time the fallback origin was updated.

## PUT /zones/{zone_id}/custom_hostnames/fallback_origin

Update Fallback Origin for Custom Hostnames

operationId: `custom-hostname-fallback-origin-for-a-zone-update-fallback-origin-for-custom-hostnames`

**Request** (application/json)

- `origin`: string **required** — Your origin hostname that requests to your custom hostnames will be sent to.

**Response** 200 → `result`

- `created_at`: string — This is the time the fallback origin was created.
- `errors`: string[] — These are errors that were encountered while trying to activate a fallback origin.
  [array]
- `origin`: string — Your origin hostname that requests to your custom hostnames will be sent to.
- `status`: string enum: `initializing`, `pending_deployment`, `pending_deletion`, `active`, `deployment_timed_out`, `deletion_timed_out` — Status of the fallback origin's activation.
- `updated_at`: string — This is the time the fallback origin was updated.
