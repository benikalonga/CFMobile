# Zero Trust organization

6 endpoints.

## GET /accounts/{account_id}/access/organizations

Get your Zero Trust organization

operationId: `zero-trust-organization-get-your-zero-trust-organization`

**Response** 200 → `result`

- `allow_authenticate_via_warp`: boolean default: `false` — When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over t
- `auth_domain`: string — The unique subdomain assigned to your Zero Trust organization.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login.
- `created_at`: any
- `custom_pages`: object
  - `forbidden`: string — The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  - `identity_denied`: string — The uid of the custom page to use when a user is denied access.
- `deny_unmatched_requests`: boolean — Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must e
- `deny_unmatched_requests_exempted_zone_names`: string[] — Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthentic
  [array]
- `is_ui_read_only`: boolean default: `false` — Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this a
- `login_design`: object
  - `background_color`: string — The background color on your login page.
  - `footer_text`: string — The text at the bottom of your login page.
  - `header_text`: string — The text at the top of your login page.
  - `logo_path`: string — The URL of the logo on your login page.
  - `text_color`: string — The text color on your login page.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings for an organization.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `amr_matching_session_duration`: string — Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authent
  - `required_aaguids`: string — Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `mfa_piv_key_requirements`: object — Configures PIV key requirements for MFA using hardware security keys.
  - `pin_policy`: string enum: `never`, `once`, `always` — Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always`
  - `require_fips_device`: boolean — Requires the PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  - `ssh_key_size`: integer[] — Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter
    [array]
  - `ssh_key_type`: string[] — Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    [array]
  - `touch_policy`: string enum: `never`, `always`, `cached` — Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use
- `mfa_required_for_all_apps`: boolean default: `false` — Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentica
- `name`: string — The name of your Zero Trust organization.
- `session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
- `ui_read_only_toggle_reason`: string — A description of the reason why the UI read only field is being toggled.
- `updated_at`: any
- `user_seat_expiration_inactive_time`: string — The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as 
- `warp_auth_session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

## POST /accounts/{account_id}/access/organizations

Create your Zero Trust organization

operationId: `zero-trust-organization-create-your-zero-trust-organization`

**Request** (application/json)

- `allow_authenticate_via_warp`: boolean default: `false` — When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over t
- `auth_domain`: string **required** — The unique subdomain assigned to your Zero Trust organization.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login.
- `deny_unmatched_requests`: boolean — Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must e
- `deny_unmatched_requests_exempted_zone_names`: string[] — Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthentic
  [array]
- `is_ui_read_only`: boolean default: `false` — Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this a
- `login_design`: object
  - `background_color`: string — The background color on your login page.
  - `footer_text`: string — The text at the bottom of your login page.
  - `header_text`: string — The text at the top of your login page.
  - `logo_path`: string — The URL of the logo on your login page.
  - `text_color`: string — The text color on your login page.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings for an organization.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `amr_matching_session_duration`: string — Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authent
  - `required_aaguids`: string — Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `mfa_piv_key_requirements`: object — Configures PIV key requirements for MFA using hardware security keys.
  - `pin_policy`: string enum: `never`, `once`, `always` — Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always`
  - `require_fips_device`: boolean — Requires the PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  - `ssh_key_size`: integer[] — Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter
    [array]
  - `ssh_key_type`: string[] — Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    [array]
  - `touch_policy`: string enum: `never`, `always`, `cached` — Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use
- `mfa_required_for_all_apps`: boolean default: `false` — Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentica
- `name`: string **required** — The name of your Zero Trust organization.
- `session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
- `ui_read_only_toggle_reason`: string — A description of the reason why the UI read only field is being toggled.
- `user_seat_expiration_inactive_time`: string — The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as 
- `warp_auth_session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

**Response** 201 → `result`

- `allow_authenticate_via_warp`: boolean default: `false` — When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over t
- `auth_domain`: string — The unique subdomain assigned to your Zero Trust organization.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login.
- `created_at`: any
- `custom_pages`: object
  - `forbidden`: string — The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  - `identity_denied`: string — The uid of the custom page to use when a user is denied access.
- `deny_unmatched_requests`: boolean — Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must e
- `deny_unmatched_requests_exempted_zone_names`: string[] — Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthentic
  [array]
- `is_ui_read_only`: boolean default: `false` — Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this a
- `login_design`: object
  - `background_color`: string — The background color on your login page.
  - `footer_text`: string — The text at the bottom of your login page.
  - `header_text`: string — The text at the top of your login page.
  - `logo_path`: string — The URL of the logo on your login page.
  - `text_color`: string — The text color on your login page.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings for an organization.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `amr_matching_session_duration`: string — Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authent
  - `required_aaguids`: string — Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `mfa_piv_key_requirements`: object — Configures PIV key requirements for MFA using hardware security keys.
  - `pin_policy`: string enum: `never`, `once`, `always` — Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always`
  - `require_fips_device`: boolean — Requires the PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  - `ssh_key_size`: integer[] — Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter
    [array]
  - `ssh_key_type`: string[] — Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    [array]
  - `touch_policy`: string enum: `never`, `always`, `cached` — Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use
- `mfa_required_for_all_apps`: boolean default: `false` — Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentica
- `name`: string — The name of your Zero Trust organization.
- `session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
- `ui_read_only_toggle_reason`: string — A description of the reason why the UI read only field is being toggled.
- `updated_at`: any
- `user_seat_expiration_inactive_time`: string — The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as 
- `warp_auth_session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

## PUT /accounts/{account_id}/access/organizations

Update your Zero Trust organization

operationId: `zero-trust-organization-update-your-zero-trust-organization`

**Request** (application/json)

- `allow_authenticate_via_warp`: boolean default: `false` — When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over t
- `auth_domain`: string — The unique subdomain assigned to your Zero Trust organization.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login.
- `custom_pages`: object
  - `forbidden`: string — The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  - `identity_denied`: string — The uid of the custom page to use when a user is denied access.
- `deny_unmatched_requests`: boolean — Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must e
- `deny_unmatched_requests_exempted_zone_names`: string[] — Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthentic
  [array]
- `is_ui_read_only`: boolean default: `false` — Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this a
- `login_design`: object
  - `background_color`: string — The background color on your login page.
  - `footer_text`: string — The text at the bottom of your login page.
  - `header_text`: string — The text at the top of your login page.
  - `logo_path`: string — The URL of the logo on your login page.
  - `text_color`: string — The text color on your login page.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings for an organization.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `amr_matching_session_duration`: string — Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authent
  - `required_aaguids`: string — Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `mfa_piv_key_requirements`: object — Configures PIV key requirements for MFA using hardware security keys.
  - `pin_policy`: string enum: `never`, `once`, `always` — Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always`
  - `require_fips_device`: boolean — Requires the PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  - `ssh_key_size`: integer[] — Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter
    [array]
  - `ssh_key_type`: string[] — Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    [array]
  - `touch_policy`: string enum: `never`, `always`, `cached` — Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use
- `mfa_required_for_all_apps`: boolean default: `false` — Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentica
- `name`: string — The name of your Zero Trust organization.
- `session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
- `ui_read_only_toggle_reason`: string — A description of the reason why the UI read only field is being toggled.
- `user_seat_expiration_inactive_time`: string — The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as 
- `warp_auth_session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

**Response** 200 → `result`

- `allow_authenticate_via_warp`: boolean default: `false` — When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over t
- `auth_domain`: string — The unique subdomain assigned to your Zero Trust organization.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login.
- `created_at`: any
- `custom_pages`: object
  - `forbidden`: string — The uid of the custom page to use when a user is denied access after failing a non-identity rule.
  - `identity_denied`: string — The uid of the custom page to use when a user is denied access.
- `deny_unmatched_requests`: boolean — Determines whether to deny all requests to Cloudflare-protected resources that lack an associated Access application. If enabled, you must e
- `deny_unmatched_requests_exempted_zone_names`: string[] — Contains zone names to exempt from the `deny_unmatched_requests` feature. Requests to a subdomain in an exempted zone will block unauthentic
  [array]
- `is_ui_read_only`: boolean default: `false` — Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this a
- `login_design`: object
  - `background_color`: string — The background color on your login page.
  - `footer_text`: string — The text at the bottom of your login page.
  - `header_text`: string — The text at the top of your login page.
  - `logo_path`: string — The URL of the logo on your login page.
  - `text_color`: string — The text color on your login page.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings for an organization.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `amr_matching_session_duration`: string — Allows a user to skip MFA via Authentication Method Reference (AMR) matching when the AMR claim provided by the IdP the user used to authent
  - `required_aaguids`: string — Specifies a Cloudflare List of required FIDO2 authenticator device AAGUIDs.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `mfa_piv_key_requirements`: object — Configures PIV key requirements for MFA using hardware security keys.
  - `pin_policy`: string enum: `never`, `once`, `always` — Defines when a PIN is required to use the SSH key. Valid values: `never` (no PIN required), `once` (PIN required once per session), `always`
  - `require_fips_device`: boolean — Requires the PIV key to be stored on a FIPS 140-2 Level 1 or higher validated device.
  - `ssh_key_size`: integer[] — Specifies the allowed SSH key sizes in bits. Valid sizes depend on key type. Ed25519 has a fixed key size and does not accept this parameter
    [array]
  - `ssh_key_type`: string[] — Specifies the allowed SSH key types. Valid values are `ecdsa`, `ed25519`, and `rsa`.
    [array]
  - `touch_policy`: string enum: `never`, `always`, `cached` — Defines when physical touch is required to use the SSH key. Valid values: `never` (no touch required), `always` (touch required for each use
- `mfa_required_for_all_apps`: boolean default: `false` — Determines whether global MFA settings apply to applications by default. The organization must have MFA enabled with at least one authentica
- `name`: string — The name of your Zero Trust organization.
- `session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
- `ui_read_only_toggle_reason`: string — A description of the reason why the UI read only field is being toggled.
- `updated_at`: any
- `user_seat_expiration_inactive_time`: string — The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as 
- `warp_auth_session_duration`: string — The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

## GET /accounts/{account_id}/access/organizations/doh

Get your Zero Trust organization DoH settings

operationId: `zero-trust-organization-get-your-zero-trust-organization-doh-settings`

**Response** 200 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## PUT /accounts/{account_id}/access/organizations/doh

Update your Zero Trust organization DoH settings

operationId: `zero-trust-organization-update-your-zero-trust-organization-doh-settings`

**Request** (application/json)

- `doh_jwt_duration`: string — The duration the DoH JWT is valid for. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.  Note th
- `service_token_id`: string — The uuid of the service token you want to use for DoH authentication

**Response** 201 → `result`

- `client_id`: string — The Client ID for the service token. Access will check for this value in the `CF-Access-Client-ID` request header.
- `created_at`: any
- `duration`: string default: `8760h` — The duration for how long the service token will be valid. Must be in the format `300ms` or `2h45m`, or the special value `forever` for non-
- `expires_at`: string
- `id`: any
- `last_seen_at`: any
- `name`: string — The name of the service token.
- `updated_at`: any

## POST /accounts/{account_id}/access/organizations/revoke_user

Revoke all Access tokens for a user

operationId: `zero-trust-organization-revoke-all-access-tokens-for-a-user` · query: `devices`

**Request** (application/json)

- `devices`: boolean — When set to `true`, all devices associated with the user will be revoked.
- `email`: string **required** — The email of the user to revoke.
- `user_uid`: string — The uuid of the user to revoke.
- `warp_session_reauth`: boolean — When set to `true`, the user will be required to re-authenticate to WARP for all Gateway policies that enforce a WARP client session duratio

**Response** 200 → `result`

boolean
