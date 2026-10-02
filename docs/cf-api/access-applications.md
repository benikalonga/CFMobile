# Access applications

9 endpoints.

## GET /accounts/{account_id}/access/apps

List Access applications

operationId: `access-applications-list-access-applications` · query: `name`, `domain`, `aud`, `target_attributes`, `exact`, `search`, `page`, `per_page`

**Response** 200 → `result`

[array of]
(one of 13 variants; showing the first)
- `aud`: string — Audience tag.
- `created_at`: any
- `id`: string — UUID.
- `updated_at`: any
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[]
  [array of]
  - `created_at`: string
  - `decision`: string enum: `allow`, `deny`, `non_identity`, `bypass` — The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  - `exclude`: object[] default: `` — Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    [array of]
    - `group`: object **required**
  - `id`: string — The UUID of the policy
  - `include`: object[] default: `` — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    [array of]
    - `group`: object **required**
  - `name`: string — The name of the Access policy.
  - `require`: object[] default: `` — Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    [array of]
    - `group`: object **required**
  - `updated_at`: string
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.

## POST /accounts/{account_id}/access/apps

Add an Access application

operationId: `access-applications-add-an-application`

**Request** (application/json)

(one of 13 variants; showing the first)
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[] — The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new p
  [array of]
  - `id`: string — The UUID of the policy
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.

**Response** 201 → `result`

(one of 13 variants; showing the first)
- `aud`: string — Audience tag.
- `created_at`: any
- `id`: string — UUID.
- `updated_at`: any
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[]
  [array of]
  - `created_at`: string
  - `decision`: string enum: `allow`, `deny`, `non_identity`, `bypass` — The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  - `exclude`: object[] default: `` — Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    [array of]
    - `group`: object **required**
  - `id`: string — The UUID of the policy
  - `include`: object[] default: `` — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    [array of]
    - `group`: object **required**
  - `name`: string — The name of the Access policy.
  - `require`: object[] default: `` — Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    [array of]
    - `group`: object **required**
  - `updated_at`: string
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.

## DELETE /accounts/{account_id}/access/apps/{app_id}

Delete an Access application

operationId: `access-applications-delete-an-access-application`

**Response** 202 → `result`

- `id`: string — UUID.

## GET /accounts/{account_id}/access/apps/{app_id}

Get an Access application

operationId: `access-applications-get-an-access-application`

**Response** 200 → `result`

(one of 13 variants; showing the first)
- `aud`: string — Audience tag.
- `created_at`: any
- `id`: string — UUID.
- `updated_at`: any
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[]
  [array of]
  - `created_at`: string
  - `decision`: string enum: `allow`, `deny`, `non_identity`, `bypass` — The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  - `exclude`: object[] default: `` — Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    [array of]
    - `group`: object **required**
  - `id`: string — The UUID of the policy
  - `include`: object[] default: `` — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    [array of]
    - `group`: object **required**
  - `name`: string — The name of the Access policy.
  - `require`: object[] default: `` — Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    [array of]
    - `group`: object **required**
  - `updated_at`: string
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.

## PUT /accounts/{account_id}/access/apps/{app_id}

Update an Access application

operationId: `access-applications-update-an-access-application`

**Request** (application/json)

(one of 13 variants; showing the first)
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[] — The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new p
  [array of]
  - `id`: string — The UUID of the policy
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.

**Response** 200 → `result`

(one of 13 variants; showing the first)
- `aud`: string — Audience tag.
- `created_at`: any
- `id`: string — UUID.
- `updated_at`: any
- `allow_authenticate_via_warp`: boolean — When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always requi
- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `allowed_idps`: string[] — The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  [array]
- `app_launcher_visible`: boolean default: `true` — Displays the application in the App Launcher.
- `auto_redirect_to_identity`: boolean default: `false` — When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idp
- `cors_headers`: object
  - `allow_all_headers`: boolean — Allows all HTTP request headers.
  - `allow_all_methods`: boolean — Allows all HTTP request methods.
  - `allow_all_origins`: boolean — Allows all origins.
  - `allow_credentials`: boolean — When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  - `allowed_headers`: string[] — Allowed HTTP request headers.
    [array]
  - `allowed_methods`: string[] — Allowed HTTP request methods.
    [array]
  - `allowed_origins`: string[] — Allowed origins.
    [array]
  - `max_age`: number — The maximum number of seconds the results of a preflight request can be cached.
- `custom_deny_message`: string — The custom error message shown to a user when they are denied access to the application.
- `custom_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
- `custom_non_identity_deny_url`: string — The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
- `custom_pages`: string[] — The custom pages that will be displayed when applicable for this application
  [array]
- `destinations`: object[] default: `` — List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of d
  [array of]
  - `type`: string enum: `public`
  - `uri`: string — The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloud
- `domain`: string **required** — The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
- `eager_redirect_cookie_setting`: boolean default: `true` — Preemptively sets the Access session cookie on every hostname in a multi-hostname self-hosted application during the initial redirect chain,
- `enable_binding_cookie`: boolean default: `false` — Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
- `http_only_cookie_attribute`: boolean default: `true` — Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `mfa_config`: object — Configures multi-factor authentication (MFA) settings.
  - `allowed_authenticators`: string[] — Lists the MFA methods that users can authenticate with.
    [array]
  - `mfa_disabled`: boolean — Indicates whether to disable MFA for this resource. This option is available at the application and policy level.
  - `session_duration`: string — Defines the duration of an MFA session. Must be in minutes (m) or hours (h). Minimum: 0m. Maximum: 720h (30 days). Examples:`5m` or `24h`.
- `name`: string — The name of the application.
- `oauth_configuration`: object — **Beta:** Optional configuration for managing an OAuth authorization flow controlled by Access. When set, Access will act as the OAuth autho
  - `dynamic_client_registration`: object — Settings for OAuth dynamic client registration.
    - `allow_any_on_localhost`: boolean — Allows any client with redirect URIs on localhost.
    - `allow_any_on_loopback`: boolean — Allows any client with redirect URIs on 127.0.0.1.
    - `allowed_uris`: string[] — The URIs that are allowed as redirect URIs for dynamically registered clients. HTTP and HTTPS paths may end in `/*` to match all sub-paths. 
    - `enabled`: boolean — Whether dynamic client registration is enabled.
  - `enabled`: boolean default: `true` — Whether the OAuth configuration is enabled for this application. When set to `false`, Access will not handle OAuth for this application. Def
  - `grant`: object — Settings for OAuth grant behavior.
    - `access_token_lifetime`: string — The lifetime of the access token. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
    - `session_duration`: string — The duration of the OAuth session. Must be in the format `300ms` or `2h45m`. Valid time units are ns, us (or µs), ms, s, m, h.
- `options_preflight_bypass`: boolean — Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
- `path_cookie_attribute`: boolean default: `false` — Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
- `read_service_tokens_from_header`: string — Allows matching Access Service Tokens passed HTTP in a single header with this name.
- `same_site_cookie_attribute`: string — Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
- `scim_config`: object — Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  - `authentication`: any
  - `deactivate_on_delete`: boolean — If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Not
  - `enabled`: boolean — Whether SCIM provisioning is turned on for this application.
  - `idp_uid`: string **required** — The UID of the IdP to use as the source for SCIM resources to provision to this application.
  - `mappings`: object[] — A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to b
    [array of]
    - `enabled`: boolean — Whether or not this mapping is enabled.
    - `filter`: string — A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned 
    - `operations`: object — Whether or not this mapping applies to creates, updates, or deletes.
    - `schema`: string **required** — Which SCIM resource type this mapping applies to.
    - `strictness`: string enum: `strict`, `passthrough` — The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ 
    - `transform_jsonata`: string — A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  - `remote_uri`: string **required** — The base URI for the application's SCIM-compatible API.
- `self_hosted_domains`: string[] default: `` — List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 2
  [array]
- `service_auth_401_redirect`: boolean — Returns a 401 status code when the request is blocked by a Service Auth policy.
- `session_duration`: string default: `24h` — The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.
- `tags`: string[] default: `` — The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  [array]
- `type`: any **required**
- `use_clientless_isolation_app_launcher_url`: boolean default: `false` — Determines if users can access this application via a clientless browser isolation URL.
- `policies`: object[]
  [array of]
  - `created_at`: string
  - `decision`: string enum: `allow`, `deny`, `non_identity`, `bypass` — The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  - `exclude`: object[] default: `` — Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
    [array of]
    - `group`: object **required**
  - `id`: string — The UUID of the policy
  - `include`: object[] default: `` — Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
    [array of]
    - `group`: object **required**
  - `name`: string — The name of the Access policy.
  - `require`: object[] default: `` — Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
    [array of]
    - `group`: object **required**
  - `updated_at`: string
  - `precedence`: integer — The order of execution for this policy. Must be unique for each policy within an app.

## POST /accounts/{account_id}/access/apps/{app_id}/revoke_tokens

Revoke application tokens

operationId: `access-applications-revoke-service-tokens`

**Response** 202 → `result`

object

## PATCH /accounts/{account_id}/access/apps/{app_id}/settings

Update Access application settings

operationId: `access-applications-patch-update-access-application-settings`

**Request** (application/json)

- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.

**Response** 202 → `result`

- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.

## PUT /accounts/{account_id}/access/apps/{app_id}/settings

Update Access application settings

operationId: `access-applications-put-update-access-application-settings`

**Request** (application/json)

- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.

**Response** 202 → `result`

- `allow_iframe`: boolean — Enables loading application content in an iFrame.
- `skip_interstitial`: boolean — Enables automatic authentication through cloudflared.

## GET /accounts/{account_id}/access/apps/{app_id}/user_policy_checks

Test Access policies

operationId: `access-applications-test-access-policies`

**Response** 200 → `result`

- `app_state`: object
  - `app_uid`: string — UUID.
  - `aud`: string
  - `hostname`: string
  - `name`: string
  - `policies`: object[]
    [array]
  - `status`: string
- `user_identity`: object
  - `account_id`: string
  - `device_sessions`: object
  - `email`: string
  - `geo`: object
    - `country`: string
  - `iat`: integer
  - `id`: string
  - `is_gateway`: boolean
  - `is_warp`: boolean
  - `name`: string
  - `user_uuid`: string — UUID.
  - `version`: integer
