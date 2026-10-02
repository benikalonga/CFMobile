# Applications

19 endpoints.

## GET /accounts/{account_id}/containers/applications

List Applications associated with your account

operationId: `listApplications` · query: `name`, `image`, `label`

**Response** 200 → `result`

[array of]
- `account_id`: string **required** — A unique identifier for the user's account
- `active_rollout_id`: string — An identifier for a specific rollout within an application.
- `configuration`: object **required** — Properties required to create a cloudchamber deployment specified by the user
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string **required** — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `durable_objects`: any — Durable object configuration stored on and returned from a Cloudchamber application.
- `health`: object
  - `errors`: object[] **required**
    [array of]
    - `event`: object **required** — An event within a Placement or a Job
    - `instance_id`: string **required** — An instance ID represents an identifier of an instance configuration that maintains an underlying placement
  - `instances`: object **required** — Shows a count of application instance states.
    - `active`: integer **required** — Number of instances with a running container.
    - `assigned`: integer **required** — Number of instances assigned to a container, but the container is not yet running.
  - `summary`: string enum: `healthy`, `degraded`, `unhealthy`, `pending` — High-level health assessment. Only populated for "new_instances" strategy.
- `id`: string **required** — An Application ID represents an identifier of an application
- `instances`: integer **required** — Number of deployments to create
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string **required** — The application name
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string **required** enum: `default` — The scheduling policy to use for an application
- `updated_at`: string **required** — UTC timestamp string in ISO 8601 format
- `version`: integer **required**

## POST /accounts/{account_id}/containers/applications

Create a new application

operationId: `createApplication`

**Request** (application/json)

- `configuration`: object **required** — Properties required to create a cloudchamber deployment specified by the user
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string **required** — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `durable_objects`: any — Set of properties to configure a durable object application in Cloudchamber.
- `instances`: integer **required** — Number of deployments to create
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string **required** — The name for this application
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string **required** enum: `default` — The scheduling policy to use for an application

**Response** 201 → `result`

- `account_id`: string **required** — A unique identifier for the user's account
- `active_rollout_id`: string — An identifier for a specific rollout within an application.
- `configuration`: object **required** — Properties required to create a cloudchamber deployment specified by the user
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string **required** — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `durable_objects`: any — Durable object configuration stored on and returned from a Cloudchamber application.
- `health`: object
  - `errors`: object[] **required**
    [array of]
    - `event`: object **required** — An event within a Placement or a Job
    - `instance_id`: string **required** — An instance ID represents an identifier of an instance configuration that maintains an underlying placement
  - `instances`: object **required** — Shows a count of application instance states.
    - `active`: integer **required** — Number of instances with a running container.
    - `assigned`: integer **required** — Number of instances assigned to a container, but the container is not yet running.
  - `summary`: string enum: `healthy`, `degraded`, `unhealthy`, `pending` — High-level health assessment. Only populated for "new_instances" strategy.
- `id`: string **required** — An Application ID represents an identifier of an application
- `instances`: integer **required** — Number of deployments to create
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string **required** — The application name
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string **required** enum: `default` — The scheduling policy to use for an application
- `updated_at`: string **required** — UTC timestamp string in ISO 8601 format
- `version`: integer **required**

## DELETE /accounts/{account_id}/containers/applications/{application_id}

Delete a single application by id

operationId: `deleteApplication`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/containers/applications/{application_id}

Get a single application by id

operationId: `getApplication`

**Response** 200 → `result`

- `account_id`: string **required** — A unique identifier for the user's account
- `active_rollout_id`: string — An identifier for a specific rollout within an application.
- `configuration`: object **required** — Properties required to create a cloudchamber deployment specified by the user
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string **required** — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `durable_objects`: any — Durable object configuration stored on and returned from a Cloudchamber application.
- `health`: object
  - `errors`: object[] **required**
    [array of]
    - `event`: object **required** — An event within a Placement or a Job
    - `instance_id`: string **required** — An instance ID represents an identifier of an instance configuration that maintains an underlying placement
  - `instances`: object **required** — Shows a count of application instance states.
    - `active`: integer **required** — Number of instances with a running container.
    - `assigned`: integer **required** — Number of instances assigned to a container, but the container is not yet running.
  - `summary`: string enum: `healthy`, `degraded`, `unhealthy`, `pending` — High-level health assessment. Only populated for "new_instances" strategy.
- `id`: string **required** — An Application ID represents an identifier of an application
- `instances`: integer **required** — Number of deployments to create
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string **required** — The application name
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string **required** enum: `default` — The scheduling policy to use for an application
- `updated_at`: string **required** — UTC timestamp string in ISO 8601 format
- `version`: integer **required**

## PATCH /accounts/{account_id}/containers/applications/{application_id}

Modify an application

operationId: `modifyApplication`

**Request** (application/json)

- `configuration`: object — Properties required to modify a cloudchamber deployment specified by the user.
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `instances`: integer — Number of deployments to maintain within this application. This can be used to scale the application up/down.
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string — The name for this application
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string enum: `default` — The scheduling policy to use for an application

**Response** 200 → `result`

- `account_id`: string **required** — A unique identifier for the user's account
- `active_rollout_id`: string — An identifier for a specific rollout within an application.
- `configuration`: object **required** — Properties required to create a cloudchamber deployment specified by the user
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string **required** — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `constraints`: object
  - `jurisdiction`: string — Currently only "eu" and "fedramp" are supported. Overlap between jurisdiction and region is allowed for ENAM, WNAM (FedRAMP) and EEUR, WEUR 
  - `regions`: string[]
    [array]
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `durable_objects`: any — Durable object configuration stored on and returned from a Cloudchamber application.
- `health`: object
  - `errors`: object[] **required**
    [array of]
    - `event`: object **required** — An event within a Placement or a Job
    - `instance_id`: string **required** — An instance ID represents an identifier of an instance configuration that maintains an underlying placement
  - `instances`: object **required** — Shows a count of application instance states.
    - `active`: integer **required** — Number of instances with a running container.
    - `assigned`: integer **required** — Number of instances assigned to a container, but the container is not yet running.
  - `summary`: string enum: `healthy`, `degraded`, `unhealthy`, `pending` — High-level health assessment. Only populated for "new_instances" strategy.
- `id`: string **required** — An Application ID represents an identifier of an application
- `instances`: integer **required** — Number of deployments to create
- `max_instances`: integer — Maximum number of instances that the application will allow. This is relevant for applications that auto-scale.
- `name`: string **required** — The application name
- `observability`: object — Settings for application observability such as logging.
  - `logs`: object — Observability logging settings.
    - `enabled`: boolean default: `false`
  - `target_instance_count`: integer — Fixed number of instances that should receive the application-level observability overlay.
  - `target_instance_percentage`: integer — Percentage of instances that should receive the application-level observability overlay.
- `rollout_active_grace_period`: integer default: `0` — Grace period for active instances to stay alive before becoming eligible for shutdown signal due to a rollout, in seconds.
- `scheduling_policy`: string **required** enum: `default` — The scheduling policy to use for an application
- `updated_at`: string **required** — UTC timestamp string in ISO 8601 format
- `version`: integer **required**

## GET /accounts/{account_id}/containers/applications/{application_id}/instances

List container instances

operationId: `listContainerInstances` · query: `per_page`, `page_token`

**Response** 200 → `result`

- `instances`: object[] **required**
  [array of]
  - `application_id`: string **required** — An Application ID represents an identifier of an application
  - `created_at`: string **required** — UTC timestamp string in ISO 8601 format
  - `deployment_id`: string — A deployment ID represents an identifier of a deployment configuration that maintains a healthy placement
  - `id`: string **required** — A container instance ID (64-character hex Durable Object actor ID).
  - `ingress_url`: string — Public ingress URL for the instance. Omitted when managed application ingress is not configured.
  - `name`: string **required** — The human-readable name of the instance.
  - `placement_id`: string — Placement ID
  - `status`: object — The current status of a container instance.
    - `exit_code`: integer — The exit code of the container, if status is stopped_with_code.
    - `last_change`: number **required** — Epoch timestamp (milliseconds) of the last status change.
    - `status`: string **required** enum: `starting`, `running`, `healthy`, `stopping`, `stopped`, `stopped_with_code` — The current lifecycle status of the container.

## POST /accounts/{account_id}/containers/applications/{application_id}/instances

Create a container instance

operationId: `createContainerInstance`

**Request** (application/json)

- `enable_internet`: boolean default: `true` — Whether to enable outbound internet access for the container.
- `entrypoint`: string[] — Command to run in the container. Overrides the image's default entrypoint.
  [array]
- `environment_variables`: object — Environment variables to pass to the container.
- `name`: string **required** — A human-readable name for the instance. Used as the Durable Object name via getByName().

**Response** 201 → `result`

- `application_id`: string **required** — An Application ID represents an identifier of an application
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `deployment_id`: string — A deployment ID represents an identifier of a deployment configuration that maintains a healthy placement
- `id`: string **required** — A container instance ID (64-character hex Durable Object actor ID).
- `ingress_url`: string — Public ingress URL for the instance. Omitted when managed application ingress is not configured.
- `name`: string **required** — The human-readable name of the instance.
- `placement_id`: string — Placement ID
- `status`: object — The current status of a container instance.
  - `exit_code`: integer — The exit code of the container, if status is stopped_with_code.
  - `last_change`: number **required** — Epoch timestamp (milliseconds) of the last status change.
  - `status`: string **required** enum: `starting`, `running`, `healthy`, `stopping`, `stopped`, `stopped_with_code` — The current lifecycle status of the container.

## DELETE /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}

Delete a container instance

operationId: `deleteContainerInstance`

**Response** 200 → `result`

object

## GET /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}

Get a container instance

operationId: `getContainerInstance`

**Response** 200 → `result`

- `application_id`: string **required** — An Application ID represents an identifier of an application
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `deployment_id`: string — A deployment ID represents an identifier of a deployment configuration that maintains a healthy placement
- `id`: string **required** — A container instance ID (64-character hex Durable Object actor ID).
- `ingress_url`: string — Public ingress URL for the instance. Omitted when managed application ingress is not configured.
- `name`: string **required** — The human-readable name of the instance.
- `placement_id`: string — Placement ID
- `status`: object — The current status of a container instance.
  - `exit_code`: integer — The exit code of the container, if status is stopped_with_code.
  - `last_change`: number **required** — Epoch timestamp (milliseconds) of the last status change.
  - `status`: string **required** enum: `starting`, `running`, `healthy`, `stopping`, `stopped`, `stopped_with_code` — The current lifecycle status of the container.

## POST /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}/exec

Execute a command in a container instance

operationId: `containerInstanceExec`

**Request** (application/json)

- `command`: string[] **required** — Command and arguments to execute without shell interpretation.
  [array]
- `cwd`: string — Working directory for the command.
- `environment_variables`: object — Environment variables to set for the command.
- `stdin`: string — Base64-encoded bytes to provide to the command on stdin.
- `user`: string — Container user to execute the command as.

**Response** 200 → `result`

- `exit_code`: integer **required** — Exit code returned by the command.
- `stderr`: string **required** — Base64-encoded standard error from the command.
- `stdout`: string **required** — Base64-encoded standard output from the command.

## POST /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}/fetch

Proxy a request to a container instance

operationId: `containerInstanceFetch`

**Request** (application/json)

- `body`: string — Request body to forward to the container.
- `headers`: object — HTTP headers to forward to the container.
- `method`: string enum: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS` default: `GET` — HTTP method to use. Defaults to GET.
- `url`: string **required** — The path to forward to the container (e.g. "/api/data").

**Response** 200 → `result`

- `body`: string **required** — Text response body returned by the container.
- `headers`: object **required** — HTTP response headers returned by the container.
- `status`: integer **required** — HTTP status code returned by the container.

## POST /accounts/{account_id}/containers/applications/{application_id}/rollouts

Create a new rollout for an application

operationId: `createApplicationRollout`

**Request** (application/json)

- `description`: string **required** — Description of the rollout process.
- `kind`: string enum: `full_auto`, `full_manual` — Kind of the rollout process.
- `percentage`: integer — Initial target version percentage (0-100). Version sync will actively replace instances to match.
- `step_percentage`: integer enum: `5`, `10`, `20`, `25`, `50`, `100` — Percentage of rollout to increase in each step when "steps" is not specificed. Applicable values are 5, 10, 20, 25, 50, 100.
- `steps`: object[] — Steps defining the rollout process, when "step_percentage" is not defined.
  [array of]
  - `description`: string **required** — Description of the rollout step.
  - `step_size`: object **required**
    - `percentage`: integer **required** — Percentage of instances affected in this step. Min 10% and Max 100%.
- `strategy`: string **required** enum: `rolling`, `new_instances` — Strategy used for the rollout.
- `target_configuration`: object **required** — Properties required to modify a cloudchamber deployment specified by the user.
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`

**Response** 201 → `result`

- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `current_configuration`: object **required** — Properties required to modify a cloudchamber deployment specified by the user.
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `current_version`: integer **required** — Current application version before the rollout.
- `description`: string **required**
- `health`: object **required**
  - `errors`: object[] **required**
    [array of]
    - `event`: object **required** — An event within a Placement or a Job
    - `instance_id`: string **required** — An instance ID represents an identifier of an instance configuration that maintains an underlying placement
  - `instances`: object **required** — Shows a count of application instance states.
    - `active`: integer **required** — Number of instances with a running container.
    - `assigned`: integer **required** — Number of instances assigned to a container, but the container is not yet running.
  - `summary`: string enum: `healthy`, `degraded`, `unhealthy`, `pending` — High-level health assessment. Only populated for "new_instances" strategy.
- `id`: string **required** — An identifier for a specific rollout within an application.
- `kind`: string **required** enum: `full_auto`, `full_manual`, `durable_objects_auto` — Kind of the rollout process.
- `last_updated_at`: string **required** — UTC timestamp string in ISO 8601 format
- `percentage`: integer — Current target version percentage (0-100). Only present for "new_instances" strategy.
- `progress`: object — Progress details of an application rollout.
  - `current_step`: integer **required** — Current step being executed in the rollout process. Initialized to 0.
  - `total_instances`: integer **required** — Total number of instances affected by the rollout.
  - `total_steps`: integer **required** — Total number of steps in the rollout.
  - `updated_instances`: integer **required** — Number of instances updated in the rollout process.
  - `version_distribution`: object — Expected distribution of instances by version based on the current percentage split.
    - `current_version_instances`: integer — Expected number of instances remaining on the current (old) version based on the current percentage split. Only populated for "rolling" stra
    - `current_version_percentage`: integer — The percentage of new instances being scheduled on the current version (100 - target_version_percentage).
    - `target_version_instances`: integer — Expected number of instances scheduled for the target (new) version based on the current percentage split. Only populated for "rolling" stra
    - `target_version_percentage`: integer — The active percentage of new instances being scheduled on the target version.
- `started_at`: string — Timestamp when the rollout started.
- `status`: string **required** enum: `pending`, `progressing`, `completed`, `reverted`, `replaced` — Current status of the rollout.
- `steps`: object[]
  [array of]
  - `completed_at`: string — UTC timestamp string in ISO 8601 format
  - `description`: string **required** — Description of the rollout step.
  - `id`: integer **required** — The sequential order of the rollout step, automatically assigned starting from 1, based on the total number of steps in the rollout process.
  - `reason`: string — Reason why the step has the current status
  - `started_at`: string — UTC timestamp string in ISO 8601 format
  - `status`: string **required** enum: `pending`, `progressing`, `reverting`, `completed`, `reverted` — Status of the rollout step.
  - `step_size`: object **required**
    - `percentage`: integer **required** — Percentage of instances affected in this step. Min 10% and Max 100%.
- `strategy`: string **required** enum: `rolling`, `new_instances` — The rollout strategy.
- `target_configuration`: object **required** — Properties required to modify a cloudchamber deployment specified by the user.
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `target_version`: integer **required** — Target application version after the rollout is complete and applied to all current instances.
- `version_distribution`: object — Version percentage distribution. Only present for "new_instances" strategy.
  - `current_version_percentage`: integer **required** — Percentage of instances on the current (old) version.
  - `target_version_percentage`: integer **required** — Percentage of instances on the target (new) version.

## GET /accounts/{account_id}/containers/applications/{application_id}/versions

List all application versions

operationId: `listApplicationVersions`

**Response** 200 → `result`

[array of]
- `configuration`: object **required** — Properties required to modify a cloudchamber deployment specified by the user.
  - `authorized_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `command`: string[] — The command to be executed when the container starts, passed to the entrypoint.
    [array]
  - `disk`: object — The disk configuration for this deployment. By default, all containers have a disk size of 2GB.
    - `size`: string — A disk size that specifies its unit at the end.
    - `size_mb`: integer — Size of the disk, in MB.
  - `dns`: object — Represents the /etc/resolv.conf that will appear in the deployment.
    - `searches`: string[] — The container resolver will append these domains to every resolve query. For example, if you have 'google.com',
    - `servers`: string[] — List of DNS servers that the deployment will use to resolve domain names. You can only specify a maximum of 3.
  - `entrypoint`: string[] — The entry point for the container, specifying the executable to run when the container starts.
    [array]
  - `environment_variables`: object[] — Container environment variables
    [array of]
    - `name`: string **required** — An environment variable name
    - `value`: string **required** — An environment variable value
  - `experimental_flags`: string[] — Opt-in experimental flags for this application. Only a subset of
    [array]
  - `image`: string — Image url
  - `instance_type`: string default: `lite` — The instance type will be used to configure vCPU, memory, and disk.
  - `labels`: object[] — Deployment labels
    [array of]
    - `name`: string **required** — A label name
    - `value`: string **required** — A label value
  - `lifecycle`: object — Lifecycle configuration for a deployment.
    - `max_termination_duration`: string — Duration string. From Go documentation:
  - `memory`: string — A memory size that specifies its unit at the end.
  - `memory_mib`: integer — Specify the memory to be used for the deployment, in MiB. The default will be the one configured for the account.
  - `metadata_service`: object — Configuration for enabling the container metadata service.
    - `enabled`: boolean **required** — Whether the metadata service should be enabled for the deployment.
  - `observability`: object — Settings for deployment observability such as logging.
    - `logs`: object — Observability logging settings.
  - `secrets`: object[] — A list of objects with secret names and the their access types from the account
    [array of]
    - `name`: string **required** — The name of the secret within the container
    - `secret`: string **required** — Corresponding secret name from the account
    - `type`: string **required** enum: `env` — The secret access type denotes how a secret is made available within a container. Available Options are "env".
  - `ssh_public_key_ids`: string[] — A list of SSH public key IDs from the account
    [array]
  - `trusted_user_ca_keys`: object[]
    [array of]
    - `name`: string — Optional human readable name for this key
    - `public_key`: string **required** — An SSH public key
  - `vcpu`: number — Specify the vcpu to be used for the deployment. Vcpu must be at least 1. The input value will be rounded to
  - `wrangler_ssh`: object — Configuration properties for SSH'ing into a container with Wrangler
    - `enabled`: boolean default: `true`
    - `port`: number default: `22`
- `percentage`: integer **required**
- `version`: integer **required**

## GET /accounts/{account_id}/one/applications

List applications

operationId: `list_applications_v2` · query: `environment`

**Response** 200 → `result`

[array of]
- `auth_methods`: object[] **required** — Available auth methods.
  [array of]
  - `display_name`: string **required** — Human-readable auth method name.
  - `id`: string **required** — Auth method identifier.
- `category`: string **required** — Vendor category (e.g. Productivity, AI).
- `description`: string **required** — Brief description of the integration.
- `display_name`: string **required** — Human-readable vendor name.
- `dlp_enabled`: boolean **required** — Whether DLP scanning is supported.
- `id`: string **required** enum: `ANTHROPIC`, `BITBUCKET`, `BOX`, `CONFLUENCE`, `DROPBOX`, `GITHUB`, `GOOGLE_CLOUD_PLATFORM`, `GOOGLE_WORKSPACE` — Vendor identifier (e.g. microsoft_internal, google_workspace).
- `logo`: string **required** — Logo path.
- `permissions`: object[] **required** — All permissions with severity.
  [array of]
  - `display_name`: string **required** — Human-readable permission name.
  - `scope`: string **required** — Vendor-native scope identifier.
  - `severity`: string **required** enum: `low`, `medium`, `high`, `critical` — Permission sensitivity level.
- `supported_environments`: string[] **required** — Environments this vendor supports (standard, fedramp).
  [array]
- `use_cases`: object[] **required** — Supported use cases.
  [array of]
  - `display_name`: string **required** — Human-readable use case name.
  - `id`: string **required** — Use case identifier (e.g. casb, ces).

## GET /accounts/{account_id}/one/applications/{application_id}

Get application details

operationId: `get_application_v2`

**Response** 200 → `result`

- `auth_methods`: object[] **required** — Available authentication methods.
  [array of]
  - `display_name`: string **required** — Human-readable auth method name.
  - `id`: string **required** — Auth method identifier.
  - `is_default`: boolean **required** — Whether this is the default auth method.
  - `supported_environments`: string[] **required** — Environments this auth method supports.
    [array]
- `category`: string **required** — Vendor category.
- `description`: string **required** — Brief description.
- `display_name`: string **required** — Human-readable vendor name.
- `dlp_enabled`: boolean **required** — Whether DLP scanning is supported.
- `id`: string **required** enum: `ANTHROPIC`, `BITBUCKET`, `BOX`, `CONFLUENCE`, `DROPBOX`, `GITHUB`, `GOOGLE_CLOUD_PLATFORM`, `GOOGLE_WORKSPACE` — Vendor identifier.
- `instructions`: string **required** — Setup instructions for the user.
- `logo`: string **required** — Logo path.
- `use_cases`: object[] **required** — Use cases with full scope details.
  [array of]
  - `base_scopes`: object[] **required** — Scopes always required for this use case.
    [array of]
    - `display_name`: string **required** — Human-readable permission name.
    - `scope`: string **required** — Vendor-native scope identifier.
    - `severity`: string **required** enum: `low`, `medium`, `high`, `critical` — Permission sensitivity level.
  - `description`: string **required** — Use case description.
  - `display_name`: string **required** — Human-readable use case name.
  - `features`: object[] **required** — Optional features with extra scopes.
    [array of]
    - `description`: string **required** — Feature description.
    - `display_name`: string **required** — Human-readable feature name.
    - `id`: string **required** — Feature identifier.
    - `scopes`: object[] **required** — Additional scopes when feature is enabled.
  - `id`: string **required** — Use case identifier.

## GET /accounts/{account_id}/one/applications/{application_id}/auth-methods

Get auth methods

operationId: `get_application_auth_methods_v2`

**Response** 200 → `result`

[array of]
- `display_name`: string **required** — Human-readable auth method name.
- `human_interaction_required`: boolean **required** — Whether setup requires human interaction or integration can be created purely using API (e.g., For OAuth can not be created without user int
- `id`: string **required** — Auth method identifier.
- `instructions`: any **required** — Step-by-step instructions for obtaining credentials.
- `payload_example`: object **required** — Example credentials payload with placeholder values.
- `payload_schema`: object **required** — JSON Schema for the credentials object in POST /v2/integrations request.
- `redirect_url`: string **required** — OAuth redirect URL for vendors requiring human interaction.

## GET /accounts/{account_id}/one/applications/{application_id}/setup-flows

Get application setup flows

operationId: `get_application_setup_flows_v2` · query: `auth_method`, `environment`

**Response** 200 → `result`

[array of]
- `auth_config`: any — OAuth configuration (present for OAuth-based flows).
- `default`: boolean **required** — Whether this is the default auth method.
- `description`: string **required** — Flow description.
- `id`: string **required** — Setup flow identifier.
- `name`: string **required** — Human-readable flow name.
- `steps`: object[] **required** — Ordered list of setup steps.
  [array of]
  - `component_id`: string — Component identifier (for component type).
  - `description`: string — Step description with markdown support.
  - `dynamic_content`: object[] — Dynamic content blocks (for instruction/form_input).
    [array of]
    - `label`: string **required** — Display label.
    - `type`: string **required** enum: `copy_block`, `external_link` — Content type.
    - `url_template`: string — URL template with {{ variable }} interpolation (for external_link).
    - `value_from`: string — Field path to get value from (for copy_block).
  - `form_fields`: object[] — Form fields (for form_input).
    [array of]
    - `label`: string **required** — Human-readable field label.
    - `name`: string **required** — Field identifier (maps to credentials key).
    - `placeholder`: string **required** — Placeholder text.
    - `required`: boolean **required** — Whether field is required.
    - `supported_file_types`: string[] **required** — Allowed file extensions for file_upload type.
    - `type`: string **required** enum: `text`, `password`, `email`, `file_upload` — Field input type.
  - `is_required`: boolean — Whether step is required (for form_input).
  - `parameters`: object — Component parameters (for component type).
  - `title`: string — Step title (for instruction/form_input/oauth_redirect).
  - `type`: string **required** enum: `component`, `instruction`, `form_input`, `oauth_redirect` — Step type.
- `supported_environments`: string[] **required** — Environments this auth method supports (standard, fedramp).
  [array]

## GET /accounts/{account_id}/resource-library/applications

List applications

operationId: `getApplications` · query: `filter`, `limit`, `offset`, `order_by`, `search`

**Response** 200 → `result`

[array of]
- `application_confidence_score`: number **required** — Confidence score for the application. Returns -1 when no score is available.
- `application_score_composition`: object — Returns the score composition breakdown for the application.
- `application_source`: string **required** — Returns the application source.
- `application_type`: string **required** — Returns the application type.
- `application_type_description`: string **required** — Returns the application type description.
- `created_at`: string **required** — Returns the application creation time.
- `gen_ai_score`: number **required** — GenAI score for the application. Returns -1 when no score is available.
- `hostnames`: string[] **required** — Returns the list of hostnames for the application.
  [array]
- `human_id`: string **required** — Returns the human readable ID.
- `id`: string **required** — Returns the application ID.
- `intel_id`: integer — Returns the Intel API ID for the application.
- `ip_subnets`: string[] **required** — Returns the list of IP subnets for the application.
  [array]
- `name`: string **required** — Returns the application name.
- `port_protocols`: string[] **required** — Returns the list of port protocols for the application.
  [array]
- `support_domains`: string[] **required** — Returns the list of support domains for the application.
  [array]
- `supported`: string[] **required** — Cloudflare products that support this application.
  [array]
- `updated_at`: string **required** — Returns the application update time.
- `version`: string **required** — Returns the application version.

## GET /accounts/{account_id}/resource-library/applications/{id}

Get application

operationId: `getApplicationById`

**Response** 200 → `result`

- `application_confidence_score`: number **required** — Confidence score for the application. Returns -1 when no score is available.
- `application_score_composition`: object — Returns the score composition breakdown for the application.
- `application_source`: string **required** — Returns the application source.
- `application_type`: string **required** — Returns the application type.
- `application_type_description`: string **required** — Returns the application type description.
- `created_at`: string **required** — Returns the application creation time.
- `gen_ai_score`: number **required** — GenAI score for the application. Returns -1 when no score is available.
- `hostnames`: string[] **required** — Returns the list of hostnames for the application.
  [array]
- `human_id`: string **required** — Returns the human readable ID.
- `id`: string **required** — Returns the application ID.
- `intel_id`: integer — Returns the Intel API ID for the application.
- `ip_subnets`: string[] **required** — Returns the list of IP subnets for the application.
  [array]
- `name`: string **required** — Returns the application name.
- `port_protocols`: string[] **required** — Returns the list of port protocols for the application.
  [array]
- `support_domains`: string[] **required** — Returns the list of support domains for the application.
  [array]
- `supported`: string[] **required** — Cloudflare products that support this application.
  [array]
- `updated_at`: string **required** — Returns the application update time.
- `version`: string **required** — Returns the application version.
