# Workers

12 endpoints.

## POST /accounts/{account_id}/builds/workers

Create worker build configuration

operationId: `createWorkerBuild`

**Request** (application/json)

- `git_repository`: any **required**
- `production_settings`: object **required** — Build and deploy settings when creating a Worker build configuration
  - `build_caching_enabled`: any default: `true`
  - `build_command`: string **required**
  - `build_token_uuid`: string **required** — Build token UUID.
  - `deploy_command`: string **required**
  - `environment_variables`: object
  - `path_excludes`: string[]
    [array]
  - `path_includes`: string[] default: `*`
    [array]
  - `root_directory`: any default: `/`
- `script_tag`: string **required** — System-generated worker script tag.

**Response** 201 → `result`

object

## GET /accounts/{account_id}/builds/workers/{external_script_id}/builds

List builds by script

operationId: `listBuildsByScript` · query: `page`, `per_page`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/workers/{external_script_id}/triggers

List triggers by script

operationId: `listTriggersByScript`

**Response** 200 → `result`

object

## DELETE /accounts/{account_id}/builds/workers/{script_tag}

Delete worker build configuration

operationId: `deleteWorkerBuild`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/builds/workers/{script_tag}

Get worker build configuration

operationId: `getWorkerBuild`

**Response** 200 → `result`

object

## PATCH /accounts/{account_id}/builds/workers/{script_tag}

Update worker build configuration

operationId: `updateWorkerBuild`

**Request** (application/json)

- `git_repository`: object — Git repository settings to update
  - `branch`: string — New git branch to watch for builds
- `production_settings`: object — Partial build settings for updating a Worker build configuration
  - `build_caching_enabled`: boolean default: `false`
  - `build_command`: string
  - `build_token_uuid`: string — Build token UUID.
  - `deploy_command`: string
  - `environment_variables`: object — Environment variable updates. Set the variable entry to null to delete it.
  - `path_excludes`: string[]
    [array]
  - `path_includes`: string[] default: `*`
    [array]
  - `root_directory`: string — Root directory path.

**Response** 200 → `result`

object

## GET /accounts/{account_id}/workers/workers

List Workers

operationId: `listWorkers` · query: `page`, `per_page`, `order_by`, `order`

**Response** 200 → `result`

[array of]
- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.

## POST /accounts/{account_id}/workers/workers

Create Worker

operationId: `createWorker`

**Request** (application/json)

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.
object

**Response** 200 → `result`

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.

## DELETE /accounts/{account_id}/workers/workers/{worker_id}

Delete Worker

operationId: `deleteWorker`

**Response** 200 → `result`

- `errors`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `messages`: object[] **required**
  [array of]
  - `code`: integer **required**
  - `documentation_url`: string
  - `message`: string **required**
  - `source`: object
    - `pointer`: string
- `success`: boolean **required** enum: `true` — Whether the API call was successful.

## GET /accounts/{account_id}/workers/workers/{worker_id}

Get Worker

operationId: `getWorker`

**Response** 200 → `result`

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.

## PATCH /accounts/{account_id}/workers/workers/{worker_id}

Edit Worker

operationId: `editWorker`

**Request** (application/json)

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.
object

**Response** 200 → `result`

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.

## PUT /accounts/{account_id}/workers/workers/{worker_id}

Update Worker

operationId: `updateWorker`

**Request** (application/json)

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.
object

**Response** 200 → `result`

- `created_on`: string **required** — When the Worker was created.
- `deployed_on`: string — When the Worker's most recent deployment was created. `null` if the Worker has never been deployed.
- `id`: string **required** — Immutable ID of the Worker.
- `logpush`: boolean **required** default: `false` — Whether logpush is enabled for the Worker.
- `name`: string **required** — Name of the Worker.
- `observability`: object **required** — Observability settings for the Worker.
  - `enabled`: boolean default: `false` — Whether observability is enabled for the Worker.
  - `head_sampling_rate`: number default: `1` — The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).
  - `logs`: object — Log settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where logs will be exported to.
    - `enabled`: boolean default: `false` — Whether logs are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `invocation_logs`: boolean default: `true` — Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Wo
    - `persist`: boolean default: `true` — Whether log persistence is enabled for the Worker.
  - `traces`: object — Trace settings for the Worker.
    - `destinations`: string[] default: `` — A list of destinations where traces will be exported to.
    - `enabled`: boolean default: `false` — Whether traces are enabled for the Worker.
    - `head_sampling_rate`: number default: `1` — The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%).
    - `persist`: boolean default: `true` — Whether trace persistence is enabled for the Worker.
    - `propagation_policy`: string enum: `authenticated`, `accept` default: `authenticated` — Controls how inbound trace context (traceparent/tracestate) headers on incoming requests are handled. "authenticated" (default) honors inbou
- `references`: object **required** — Other resources that reference the Worker and depend on it existing.
  - `dispatch_namespace_outbounds`: object[] **required** — Other Workers that reference the Worker as an outbound for a dispatch namespace.
    [array of]
    - `namespace_id`: string **required** — ID of the dispatch namespace.
    - `namespace_name`: string **required** — Name of the dispatch namespace.
    - `worker_id`: string **required** — ID of the Worker using the dispatch namespace.
    - `worker_name`: string **required** — Name of the Worker using the dispatch namespace.
  - `domains`: object[] **required** — Custom domains connected to the Worker.
    [array of]
    - `certificate_id`: string **required** — ID of the TLS certificate issued for the custom domain.
    - `hostname`: string **required** — Full hostname of the custom domain, including the zone name.
    - `id`: string **required** — ID of the custom domain.
    - `zone_id`: string **required** — ID of the zone.
    - `zone_name`: string **required** — Name of the zone.
  - `durable_objects`: object[] **required** — Other Workers that reference Durable Object classes implemented by the Worker.
    [array of]
    - `namespace_id`: string **required** — ID of the Durable Object namespace being used.
    - `namespace_name`: string **required** — Name of the Durable Object namespace being used.
    - `worker_id`: string **required** — ID of the Worker using the Durable Object implementation.
    - `worker_name`: string **required** — Name of the Worker using the Durable Object implementation.
  - `queues`: object[] **required** — Queues that send messages to the Worker.
    [array of]
    - `queue_consumer_id`: string **required** — ID of the queue consumer configuration.
    - `queue_id`: string **required** — ID of the queue.
    - `queue_name`: string **required** — Name of the queue.
  - `workers`: object[] **required** — Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bin
    [array of]
    - `id`: string **required** — ID of the referencing Worker.
    - `name`: string **required** — Name of the referencing Worker.
- `subdomain`: object **required** — Subdomain settings for the Worker.
  - `enabled`: boolean default: `false` — Whether the *.workers.dev subdomain is enabled for the Worker.
  - `previews_enabled`: boolean — Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.
- `tags`: string[] **required** default: `` — Tags associated with the Worker.
  [array]
- `tail_consumers`: object[] **required** default: `` — Other Workers that should consume logs from the Worker.
  [array of]
  - `name`: string **required** — Name of the consumer Worker.
- `updated_on`: string **required** — When the Worker was most recently updated.
