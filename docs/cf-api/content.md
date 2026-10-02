# content

1 endpoints.

## GET /accounts/{account_id}/data-security/posture/content

List DLP content findings

operationId: `ListContentAssets` · query: `direction`, `dlp_profile_id`, `integration_id`, `max_affliction_date`, `min_affliction_date`, `order`, `page`, `per_page`, `search`, `vendor`

**Response** 200 → `result`

[array of]
- `asset_id`: string **required** — Unique identifier for the asset.
- `asset_name`: string **required** — Name of the asset.
- `dlp_contexts`: object[] **required** — DLP context information for this asset.
  [array of]
  - `created`: string **required** — When the DLP context was created.
  - `deleted`: string — When the DLP context was deleted.
  - `entry_ids`: string[] **required** — DLP Entry IDs.
    [array]
  - `id`: string — Unique identifier for the DLP context.
  - `match_context_max_extent`: integer — DLP Right Boundary of match context.
  - `match_context_min_extent`: integer — DLP Left Boundary of match context.
  - `match_context_payload`: object — DLP Match context payload that matched the profile in question.
  - `profile_id`: string **required** — DLP Profile ID.
  - `updated`: string **required** — When the DLP context was last updated.
- `dlp_profile_count`: integer **required** — Number of DLP profiles that flagged this asset.
- `dlp_profile_ids`: string[] **required** — IDs of DLP profiles that flagged this asset.
  [array]
- `integration`: object **required** — Summary information about an integration.
  - `created`: string **required** — When entity was created.
  - `credential_health_status`: string enum: `Initializing`, `Healthy`, `Unhealthy` — Health status of integration credentials.
  - `credentials_expiry`: string — The date and time when the integration credentials will expire.
  - `id`: string — Integration ID.
  - `is_paused`: boolean default: `false` — Whether the given integration is paused by the user.
  - `last_hydrated`: string **required** — When were the integration credentials last updated.
  - `name`: string **required** — Name of the integration.
  - `permissions`: string[] **required** — The vendor-specific permissions associated with the integration.
    [array]
  - `policy`: object **required** — Policy configuration for an integration.
    - `client_id`: string — OAuth client ID for the policy.
    - `compliance_level`: string — Compliance level for the policy.
    - `dlp_enabled`: boolean — Whether DLP is enabled for this policy.
    - `id`: string — Policy identifier.
    - `link`: string — Link to policy documentation.
    - `name`: string — Policy name.
    - `permissions`: string[] — List of permissions included in the policy.
  - `status`: string **required** — Current status of the integration.
  - `updated`: string **required** — Last entity was updated.
  - `upgradable`: boolean **required** — Whether the integrations permissions can be updated.
  - `upgrade_dismissed`: boolean default: `false` — UI State as to whether a potential permissions upgrade has been dismissed.
  - `vendor`: object **required** — Information about a vendor/service provider.
    - `description`: string **required** — Detailed information about what kinds of issues are detected for this vendor.
    - `display_name`: string **required** — The display name of the vendor.
    - `id`: string **required** — The id of the vendor.
    - `logo`: string **required** — Logo URL for the vendor.
    - `name`: string **required** — The name of the vendor.
    - `policies`: object[] — The policies related to the vendor.
    - `static_logo`: string **required** — Static logo URL for the vendor.
    - `zt_enrollments`: string[] **required** — The vendor's compatible Zero Trust products.
  - `zt_enrollments`: object[] **required** — Zero Trust products associated with this integration.
    [array of]
    - `description`: string — Brief description of the Zero Trust Product.
    - `display_name`: string — The verbose name of the Zero Trust Product.
    - `enabled`: boolean default: `false` — Flag to enable/disable access to the listed integration from the corresponding Cloudflare product.
    - `id`: string — The internal identifier of the Zero Trust Product.
- `latest_affliction_date`: string **required** — Most recent date this asset was flagged.
