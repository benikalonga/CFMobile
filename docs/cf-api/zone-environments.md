# Zone Environments

6 endpoints.

## GET /zones/{zone_id}/environments

List zone environments

operationId: `zonesEnvironmentsList`

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

## PATCH /zones/{zone_id}/environments

Partially update zone environments

operationId: `zonesEnvironmentsEdit`

**Request** (application/json)

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

## POST /zones/{zone_id}/environments

Create zone environments

operationId: `zonesEnvironmentsCreate`

**Request** (application/json)

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

## PUT /zones/{zone_id}/environments

Upsert zone environments

operationId: `zonesEnvironmentsUpdate`

**Request** (application/json)

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

## DELETE /zones/{zone_id}/environments/{environment_id}

Delete zone environment

operationId: `zonesEnvironmentsDelete`

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**

## POST /zones/{zone_id}/environments/{environment_id}/rollback

Roll back zone environment

operationId: `zonesEnvironmentsRollback`

**Response** 200 → `result`

- `environments`: object[] **required**
  [array of]
  - `expression`: string **required**
  - `http_application_id`: string
  - `locked_on_deployment`: boolean **required**
  - `name`: string **required**
  - `position`: object **required**
    - `after`: string
    - `before`: string
  - `ref`: string **required**
  - `version`: integer **required**
