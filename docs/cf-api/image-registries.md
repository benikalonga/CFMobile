# Image Registries

4 endpoints.

## GET /accounts/{account_id}/containers/registries

Get the list of configured registries in the account

operationId: `listImageRegistries`

**Response** 200 → `result`

[array of]
- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `domain`: string **required** — A string representation of a domain name. See RFC-1034 (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name is m
- `kind`: any — The type of registry that is being configured.
- `private_credential`: object — A reference to a secret stored in Secrets Store
  - `secret_name`: string **required** — Name of the secret being referenced
  - `store_id`: string **required** — Store ID where the secret is stored
- `public_key`: string — A base64 representation of the public key that you can set to configure the registry. If null, the registry is public and doesn't have authe

## POST /accounts/{account_id}/containers/registries

Add a new image registry configuration

operationId: `createImageRegistry`

**Request** (application/json)

- `auth`: object — Credentials needed to authenticate with an external image registry.
  - `private_credential`: any **required**
  - `public_credential`: string **required** — The format of this value is determined by the registry being configured.
- `domain`: string **required** — A string representation of a domain name. See RFC-1034 (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name is m
- `is_public`: boolean — If you own the registry and is private, this should be false or not defined. If it's a public registry like docker.io, you should set this t
- `kind`: string enum: `ECR`, `DockerHub`, `GAR` — The type of external registry that is being configured.

**Response** 201 → `result`

- `created_at`: string **required** — UTC timestamp string in ISO 8601 format
- `domain`: string **required** — A string representation of a domain name. See RFC-1034 (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name is m
- `kind`: any — The type of registry that is being configured.
- `private_credential`: object — A reference to a secret stored in Secrets Store
  - `secret_name`: string **required** — Name of the secret being referenced
  - `store_id`: string **required** — Store ID where the secret is stored
- `public_key`: string — A base64 representation of the public key that you can set to configure the registry. If null, the registry is public and doesn't have authe

## DELETE /accounts/{account_id}/containers/registries/{domain}

Delete a registry from the account

operationId: `deleteImageRegistry`

**Response** 200 → `result`

- `domain`: string **required** — A string representation of a domain name. See RFC-1034 (https://www.ietf.org/rfc/rfc1034.txt). Consider that the limit of a domain name is m
- `secret_store_ref`: string

## POST /accounts/{account_id}/containers/registries/{domain}/credentials

Generate a JWT to interact with the specified image registry.

operationId: `generateImageRegistryCredentials`

**Request** (application/json)

- `expiration_minutes`: integer **required** — The minimum number of minutes the token will be valid for. Must be positive. We make a best effort to respect this value, but some registry 
- `permissions`: string[] **required**
  [array]

**Response** 201 → `result`

- `account_id`: string **required** — A unique identifier for the user's account
- `password`: string — The password to use when authenticating to the image registry.
- `registry_host`: string **required** — The domain of the image registry the credentials are for.
- `username`: string **required** — The username to use when authenticating to the image registry.
