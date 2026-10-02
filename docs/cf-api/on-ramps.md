# On-ramps

12 endpoints.

## GET /accounts/{account_id}/magic/cloud/onramps

List On-ramps

operationId: `onramps-list` · query: `order_by`, `desc`, `status`, `vpcs`

**Response** 200 → `result`

[array of]
- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required**
- `hub`: string
- `id`: string **required**
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `last_applied_at`: string
- `last_exported_at`: string
- `last_planned_at`: string
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `planned_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `current_monthly_cost`: number **required**
  - `diff`: number **required**
  - `proposed_monthly_cost`: number **required**
- `planned_resources`: object[]
  [array of]
  - `diff`: object **required**
    - `diff`: string **required**
    - `left_description`: string **required**
    - `left_yaml`: string **required**
    - `right_description`: string **required**
    - `right_yaml`: string **required**
  - `keys_require_replace`: string[] **required**
    [array]
  - `monthly_cost_estimate_diff`: object **required**
    - `currency`: string **required**
    - `current_monthly_cost`: number **required**
    - `diff`: number **required**
    - `proposed_monthly_cost`: number **required**
  - `planned_action`: string **required** enum: `no_op`, `create`, `update`, `replace`, `destroy`
  - `resource`: object **required**
    - `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
    - `detail`: string **required**
    - `id`: string **required**
    - `name`: string **required**
    - `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
    - `title`: string **required**
- `planned_resources_unavailable`: boolean
- `post_apply_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `post_apply_resources`: object
- `post_apply_resources_unavailable`: boolean
- `region`: string
- `status`: object
  - `apply_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `lifecycle_errors`: object
  - `lifecycle_state`: string **required** enum: `OnrampNeedsApply`, `OnrampPendingPlan`, `OnrampPlanning`, `OnrampPlanFailed`, `OnrampPendingApproval`, `OnrampPendingApply`, `OnrampApplying`, `OnrampApplyFailed`
  - `plan_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `routes`: string[] **required**
    [array]
  - `tunnels`: string[] **required**
    [array]
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `updated_at`: string **required**
- `vpc`: string
- `vpcs_by_id`: object
- `vpcs_by_id_unavailable`: string[] — The list of vpc IDs for which resource details failed to generate.
  [array]

## POST /accounts/{account_id}/magic/cloud/onramps

Create On-ramp

operationId: `onramps-create`

**Request** (application/json)

- `adopted_hub_id`: string
- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer — Sets the cloud-side ASN. If unset or zero, the cloud's default ASN takes effect.
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required** — Enables BGP routing. When enabling this feature, set both install_routes_in_cloud and install_routes_in_magic_wan to false.
- `hub_provider_id`: string
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `region`: string
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `vpc`: string

**Response** 201 → `result`

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required**
- `hub`: string
- `id`: string **required**
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `last_applied_at`: string
- `last_exported_at`: string
- `last_planned_at`: string
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `planned_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `current_monthly_cost`: number **required**
  - `diff`: number **required**
  - `proposed_monthly_cost`: number **required**
- `planned_resources`: object[]
  [array of]
  - `diff`: object **required**
    - `diff`: string **required**
    - `left_description`: string **required**
    - `left_yaml`: string **required**
    - `right_description`: string **required**
    - `right_yaml`: string **required**
  - `keys_require_replace`: string[] **required**
    [array]
  - `monthly_cost_estimate_diff`: object **required**
    - `currency`: string **required**
    - `current_monthly_cost`: number **required**
    - `diff`: number **required**
    - `proposed_monthly_cost`: number **required**
  - `planned_action`: string **required** enum: `no_op`, `create`, `update`, `replace`, `destroy`
  - `resource`: object **required**
    - `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
    - `detail`: string **required**
    - `id`: string **required**
    - `name`: string **required**
    - `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
    - `title`: string **required**
- `planned_resources_unavailable`: boolean
- `post_apply_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `post_apply_resources`: object
- `post_apply_resources_unavailable`: boolean
- `region`: string
- `status`: object
  - `apply_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `lifecycle_errors`: object
  - `lifecycle_state`: string **required** enum: `OnrampNeedsApply`, `OnrampPendingPlan`, `OnrampPlanning`, `OnrampPlanFailed`, `OnrampPendingApproval`, `OnrampPendingApply`, `OnrampApplying`, `OnrampApplyFailed`
  - `plan_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `routes`: string[] **required**
    [array]
  - `tunnels`: string[] **required**
    [array]
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `updated_at`: string **required**
- `vpc`: string
- `vpcs_by_id`: object
- `vpcs_by_id_unavailable`: string[] — The list of vpc IDs for which resource details failed to generate.
  [array]

## DELETE /accounts/{account_id}/magic/cloud/onramps/{onramp_id}

Delete On-ramp

operationId: `onramps-delete` · query: `destroy`, `force`

**Response** 200 → `result`

- `id`: string **required**

## GET /accounts/{account_id}/magic/cloud/onramps/{onramp_id}

Read On-ramp

operationId: `onramps-read` · query: `status`, `vpcs`, `post_apply_resources`, `planned_resources`

**Response** 200 → `result`

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required**
- `hub`: string
- `id`: string **required**
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `last_applied_at`: string
- `last_exported_at`: string
- `last_planned_at`: string
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `planned_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `current_monthly_cost`: number **required**
  - `diff`: number **required**
  - `proposed_monthly_cost`: number **required**
- `planned_resources`: object[]
  [array of]
  - `diff`: object **required**
    - `diff`: string **required**
    - `left_description`: string **required**
    - `left_yaml`: string **required**
    - `right_description`: string **required**
    - `right_yaml`: string **required**
  - `keys_require_replace`: string[] **required**
    [array]
  - `monthly_cost_estimate_diff`: object **required**
    - `currency`: string **required**
    - `current_monthly_cost`: number **required**
    - `diff`: number **required**
    - `proposed_monthly_cost`: number **required**
  - `planned_action`: string **required** enum: `no_op`, `create`, `update`, `replace`, `destroy`
  - `resource`: object **required**
    - `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
    - `detail`: string **required**
    - `id`: string **required**
    - `name`: string **required**
    - `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
    - `title`: string **required**
- `planned_resources_unavailable`: boolean
- `post_apply_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `post_apply_resources`: object
- `post_apply_resources_unavailable`: boolean
- `region`: string
- `status`: object
  - `apply_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `lifecycle_errors`: object
  - `lifecycle_state`: string **required** enum: `OnrampNeedsApply`, `OnrampPendingPlan`, `OnrampPlanning`, `OnrampPlanFailed`, `OnrampPendingApproval`, `OnrampPendingApply`, `OnrampApplying`, `OnrampApplyFailed`
  - `plan_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `routes`: string[] **required**
    [array]
  - `tunnels`: string[] **required**
    [array]
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `updated_at`: string **required**
- `vpc`: string
- `vpcs_by_id`: object
- `vpcs_by_id_unavailable`: string[] — The list of vpc IDs for which resource details failed to generate.
  [array]

## PATCH /accounts/{account_id}/magic/cloud/onramps/{onramp_id}

Patch On-ramp

operationId: `onramps-patch`

**Request** (application/json)

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `description`: string
- `install_routes_in_cloud`: boolean
- `install_routes_in_magic_wan`: boolean
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string
- `vpc`: string

**Response** 200 → `result`

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required**
- `hub`: string
- `id`: string **required**
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `last_applied_at`: string
- `last_exported_at`: string
- `last_planned_at`: string
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `planned_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `current_monthly_cost`: number **required**
  - `diff`: number **required**
  - `proposed_monthly_cost`: number **required**
- `planned_resources`: object[]
  [array of]
  - `diff`: object **required**
    - `diff`: string **required**
    - `left_description`: string **required**
    - `left_yaml`: string **required**
    - `right_description`: string **required**
    - `right_yaml`: string **required**
  - `keys_require_replace`: string[] **required**
    [array]
  - `monthly_cost_estimate_diff`: object **required**
    - `currency`: string **required**
    - `current_monthly_cost`: number **required**
    - `diff`: number **required**
    - `proposed_monthly_cost`: number **required**
  - `planned_action`: string **required** enum: `no_op`, `create`, `update`, `replace`, `destroy`
  - `resource`: object **required**
    - `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
    - `detail`: string **required**
    - `id`: string **required**
    - `name`: string **required**
    - `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
    - `title`: string **required**
- `planned_resources_unavailable`: boolean
- `post_apply_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `post_apply_resources`: object
- `post_apply_resources_unavailable`: boolean
- `region`: string
- `status`: object
  - `apply_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `lifecycle_errors`: object
  - `lifecycle_state`: string **required** enum: `OnrampNeedsApply`, `OnrampPendingPlan`, `OnrampPlanning`, `OnrampPlanFailed`, `OnrampPendingApproval`, `OnrampPendingApply`, `OnrampApplying`, `OnrampApplyFailed`
  - `plan_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `routes`: string[] **required**
    [array]
  - `tunnels`: string[] **required**
    [array]
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `updated_at`: string **required**
- `vpc`: string
- `vpcs_by_id`: object
- `vpcs_by_id_unavailable`: string[] — The list of vpc IDs for which resource details failed to generate.
  [array]

## PUT /accounts/{account_id}/magic/cloud/onramps/{onramp_id}

Update On-ramp

operationId: `onramps-update`

**Request** (application/json)

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `description`: string
- `install_routes_in_cloud`: boolean
- `install_routes_in_magic_wan`: boolean
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string
- `vpc`: string

**Response** 200 → `result`

- `attached_hubs`: string[]
  [array]
- `attached_vpcs`: string[]
  [array]
- `cloud_asn`: integer
- `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`
- `description`: string
- `dynamic_routing`: boolean **required**
- `hub`: string
- `id`: string **required**
- `install_routes_in_cloud`: boolean **required**
- `install_routes_in_magic_wan`: boolean **required**
- `last_applied_at`: string
- `last_exported_at`: string
- `last_planned_at`: string
- `manage_hub_to_hub_attachments`: boolean
- `manage_vpc_to_hub_attachments`: boolean
- `name`: string **required**
- `planned_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `current_monthly_cost`: number **required**
  - `diff`: number **required**
  - `proposed_monthly_cost`: number **required**
- `planned_resources`: object[]
  [array of]
  - `diff`: object **required**
    - `diff`: string **required**
    - `left_description`: string **required**
    - `left_yaml`: string **required**
    - `right_description`: string **required**
    - `right_yaml`: string **required**
  - `keys_require_replace`: string[] **required**
    [array]
  - `monthly_cost_estimate_diff`: object **required**
    - `currency`: string **required**
    - `current_monthly_cost`: number **required**
    - `diff`: number **required**
    - `proposed_monthly_cost`: number **required**
  - `planned_action`: string **required** enum: `no_op`, `create`, `update`, `replace`, `destroy`
  - `resource`: object **required**
    - `cloud_type`: string **required** enum: `AWS`, `AZURE`, `GOOGLE`, `CLOUDFLARE`
    - `detail`: string **required**
    - `id`: string **required**
    - `name`: string **required**
    - `resource_type`: string **required** enum: `aws_customer_gateway`, `aws_egress_only_internet_gateway`, `aws_internet_gateway`, `aws_instance`, `aws_network_interface`, `aws_route`, `aws_route_table`, `aws_route_table_association`
    - `title`: string **required**
- `planned_resources_unavailable`: boolean
- `post_apply_monthly_cost_estimate`: object
  - `currency`: string **required**
  - `monthly_cost`: number **required**
- `post_apply_resources`: object
- `post_apply_resources_unavailable`: boolean
- `region`: string
- `status`: object
  - `apply_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `lifecycle_errors`: object
  - `lifecycle_state`: string **required** enum: `OnrampNeedsApply`, `OnrampPendingPlan`, `OnrampPlanning`, `OnrampPlanFailed`, `OnrampPendingApproval`, `OnrampPendingApply`, `OnrampApplying`, `OnrampApplyFailed`
  - `plan_progress`: object **required**
    - `done`: integer **required**
    - `total`: integer **required**
  - `routes`: string[] **required**
    [array]
  - `tunnels`: string[] **required**
    [array]
- `type`: string **required** enum: `OnrampTypeSingle`, `OnrampTypeHub`
- `updated_at`: string **required**
- `vpc`: string
- `vpcs_by_id`: object
- `vpcs_by_id_unavailable`: string[] — The list of vpc IDs for which resource details failed to generate.
  [array]

## POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/apply

Apply On-ramp

operationId: `onramps-apply`

**Response** 202 → `result`

- `messages`: object[] **required**
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string
- `success`: boolean **required**
- `errors`: object[]
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string

## POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export

Export as Terraform

operationId: `onramps-export`

**Response** 201 → `result`

string

## POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/plan

Plan On-ramp

operationId: `onramps-plan`

**Response** 202 → `result`

- `messages`: object[] **required**
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string
- `success`: boolean **required**
- `errors`: object[]
  [array of]
  - `code`: integer **required** enum: `1001`, `1002`, `1003`, `1004`, `1005`, `1006`, `1007`, `1008`
  - `documentation_url`: string
  - `message`: string **required**
  - `meta`: object
    - `l10n_key`: string
    - `loggable_error`: string
    - `template_data`: object
    - `trace_id`: string
  - `source`: object
    - `parameter`: string
    - `parameter_value_index`: integer
    - `pointer`: string

## GET /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space

Read Magic WAN Address Space

operationId: `onramps-mwan-addr-space-read`

**Response** 200 → `result`

- `prefixes`: string[] **required**
  [array]

## PATCH /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space

Patch Magic WAN Address Space

operationId: `onramps-mwan-addr-space-patch`

**Request** (application/json)

- `prefixes`: string[] **required**
  [array]

**Response** 200 → `result`

- `prefixes`: string[] **required**
  [array]

## PUT /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space

Update Magic WAN Address Space

operationId: `onramps-mwan-addr-space-update`

**Request** (application/json)

- `prefixes`: string[] **required**
  [array]

**Response** 200 → `result`

- `prefixes`: string[] **required**
  [array]
