# SCIM Discovery

5 endpoints.

## GET /accounts/{account_id}/scim/v2/ResourceTypes

List SCIM Resource Types

operationId: `scim-resource-types-list`

**Response** 200 → `result`

- `Resources`: object[] **required**
  [array of]
  - `description`: string — The resource type's human-readable description.
  - `endpoint`: string **required** — The resource type's HTTP-addressable endpoint relative to the base URL.
  - `id`: string **required** — The resource type's server unique id.
  - `meta`: object — Metadata for a SCIM ResourceType resource.
    - `location`: string — The URI of the resource being returned.
    - `resourceType`: string — The name of the resource type of the resource.
  - `name`: string **required** — The resource type name.
  - `schema`: string **required** — The resource type's primary/base schema URI.
  - `schemaExtensions`: object[] — A list of URIs of the resource type's schema extensions.
    [array of]
    - `required`: boolean **required** — Whether the extension is required.
    - `schema`: string **required** — The URI of the extension schema.
  - `schemas`: string[] **required**
    [array]
- `itemsPerPage`: integer
- `schemas`: string[] **required**
  [array]
- `startIndex`: integer
- `totalResults`: integer **required**

## GET /accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}

Get SCIM Resource Type

operationId: `scim-resource-types-get`

**Response** 200 → `result`

- `description`: string — The resource type's human-readable description.
- `endpoint`: string **required** — The resource type's HTTP-addressable endpoint relative to the base URL.
- `id`: string **required** — The resource type's server unique id.
- `meta`: object — Metadata for a SCIM ResourceType resource.
  - `location`: string — The URI of the resource being returned.
  - `resourceType`: string — The name of the resource type of the resource.
- `name`: string **required** — The resource type name.
- `schema`: string **required** — The resource type's primary/base schema URI.
- `schemaExtensions`: object[] — A list of URIs of the resource type's schema extensions.
  [array of]
  - `required`: boolean **required** — Whether the extension is required.
  - `schema`: string **required** — The URI of the extension schema.
- `schemas`: string[] **required**
  [array]

## GET /accounts/{account_id}/scim/v2/Schemas

List SCIM Schemas

operationId: `scim-schemas-list`

**Response** 200 → `result`

- `Resources`: object[] **required**
  [array of]
  - `attributes`: object[] **required** — A complex attribute that includes the attributes of a schema.
    [array of]
    - `canonicalValues`: string[] — A collection of canonical values for the attribute.
    - `caseExact`: boolean **required** — Indicates if the string attribute is case-sensitive.
    - `description`: string **required** — A human-readable description of the attribute.
    - `multiValued`: boolean **required** — Indicates if the attribute is multi-valued.
    - `mutability`: string **required** enum: `readOnly`, `readWrite`, `immutable`, `writeOnly` — Indicates the circumstances under which the value of the attribute can be defined or redefined.
    - `name`: string **required** — The attribute's name.
    - `referenceTypes`: string[] — A multi-valued attribute that indicates the SCIM resource types that may be referenced.
    - `required`: boolean **required** — Indicates if the attribute is required.
    - `returned`: string **required** enum: `always`, `never`, `default`, `request` — Indicates when an attribute and associated values are returned in response to a GET request or in response to a PUT, POST, or PATCH request.
    - `subAttributes`: object[] — Defines a set of sub-attributes when the attribute type is `complex`.
    - `type`: string **required** enum: `string`, `boolean`, `decimal`, `integer`, `dateTime`, `reference`, `complex` — The attribute's data type.
    - `uniqueness`: string **required** enum: `none`, `server`, `global` — Indicates how the service provider enforces uniqueness of attribute values.
  - `description`: string — The schema's human-readable description.
  - `id`: string **required** — The unique URI of the schema.
  - `meta`: object — Metadata for a SCIM Schema resource.
    - `location`: string — The URI of the resource being returned.
    - `resourceType`: string — The name of the resource type of the resource.
  - `name`: string **required** — The schema's human-readable name.
  - `schemas`: string[] **required**
    [array]
- `itemsPerPage`: integer
- `schemas`: string[] **required**
  [array]
- `startIndex`: integer
- `totalResults`: integer **required**

## GET /accounts/{account_id}/scim/v2/Schemas/{schema_id}

Get SCIM Schema

operationId: `scim-schemas-get`

**Response** 200 → `result`

- `attributes`: object[] **required** — A complex attribute that includes the attributes of a schema.
  [array of]
  - `canonicalValues`: string[] — A collection of canonical values for the attribute.
    [array]
  - `caseExact`: boolean **required** — Indicates if the string attribute is case-sensitive.
  - `description`: string **required** — A human-readable description of the attribute.
  - `multiValued`: boolean **required** — Indicates if the attribute is multi-valued.
  - `mutability`: string **required** enum: `readOnly`, `readWrite`, `immutable`, `writeOnly` — Indicates the circumstances under which the value of the attribute can be defined or redefined.
  - `name`: string **required** — The attribute's name.
  - `referenceTypes`: string[] — A multi-valued attribute that indicates the SCIM resource types that may be referenced.
    [array]
  - `required`: boolean **required** — Indicates if the attribute is required.
  - `returned`: string **required** enum: `always`, `never`, `default`, `request` — Indicates when an attribute and associated values are returned in response to a GET request or in response to a PUT, POST, or PATCH request.
  - `subAttributes`: object[] — Defines a set of sub-attributes when the attribute type is `complex`.
    [array of]
    - `canonicalValues`: string[] — A collection of canonical values for the attribute.
    - `caseExact`: boolean **required** — Indicates if the string attribute is case-sensitive.
    - `description`: string **required** — A human-readable description of the attribute.
    - `multiValued`: boolean **required** — Indicates if the attribute is multi-valued.
    - `mutability`: string **required** enum: `readOnly`, `readWrite`, `immutable`, `writeOnly` — Indicates the circumstances under which the value of the attribute can be defined or redefined.
    - `name`: string **required** — The attribute's name.
    - `referenceTypes`: string[] — A multi-valued attribute that indicates the SCIM resource types that may be referenced.
    - `required`: boolean **required** — Indicates if the attribute is required.
    - `returned`: string **required** enum: `always`, `never`, `default`, `request` — Indicates when an attribute and associated values are returned in response to a GET request or in response to a PUT, POST, or PATCH request.
    - `subAttributes`: object[] — Defines a set of sub-attributes when the attribute type is `complex`.
    - `type`: string **required** enum: `string`, `boolean`, `decimal`, `integer`, `dateTime`, `reference`, `complex` — The attribute's data type.
    - `uniqueness`: string **required** enum: `none`, `server`, `global` — Indicates how the service provider enforces uniqueness of attribute values.
  - `type`: string **required** enum: `string`, `boolean`, `decimal`, `integer`, `dateTime`, `reference`, `complex` — The attribute's data type.
  - `uniqueness`: string **required** enum: `none`, `server`, `global` — Indicates how the service provider enforces uniqueness of attribute values.
- `description`: string — The schema's human-readable description.
- `id`: string **required** — The unique URI of the schema.
- `meta`: object — Metadata for a SCIM Schema resource.
  - `location`: string — The URI of the resource being returned.
  - `resourceType`: string — The name of the resource type of the resource.
- `name`: string **required** — The schema's human-readable name.
- `schemas`: string[] **required**
  [array]

## GET /accounts/{account_id}/scim/v2/ServiceProviderConfig

Get SCIM Service Provider Config

operationId: `scim-service-provider-config-get`

**Response** 200 → `result`

- `authenticationSchemes`: object[] **required**
  [array of]
  - `description`: string **required** — A description of the authentication scheme.
  - `documentationUri`: string — An HTTP-addressable URL pointing to the authentication scheme documentation.
  - `name`: string **required** — The common authentication scheme name.
  - `primary`: boolean — Indicates if this is the primary authentication scheme.
  - `specUri`: string — An HTTP-addressable URL pointing to the authentication scheme specification.
  - `type`: string **required** — The authentication scheme type.
- `bulk`: object **required** — Configuration for SCIM bulk operations.
  - `maxOperations`: integer **required** — The maximum number of operations in a bulk request.
  - `maxPayloadSize`: integer **required** — The maximum payload size in bytes for a bulk request.
  - `supported`: boolean **required** — Whether bulk operations are supported.
- `changePassword`: object **required** — Represents a simple supported/unsupported SCIM feature.
  - `supported`: boolean **required** — Whether the feature is supported.
- `documentationUri`: string — An HTTP-addressable URL pointing to the service provider's human-consumable help documentation.
- `etag`: object **required** — Represents a simple supported/unsupported SCIM feature.
  - `supported`: boolean **required** — Whether the feature is supported.
- `filter`: object **required** — Configuration for SCIM filtering operations.
  - `maxResults`: integer **required** — The maximum number of filter results per page.
  - `supported`: boolean **required** — Whether filtering is supported.
- `patch`: object **required** — Represents a simple supported/unsupported SCIM feature.
  - `supported`: boolean **required** — Whether the feature is supported.
- `schemas`: string[] **required**
  [array]
- `sort`: object **required** — Represents a simple supported/unsupported SCIM feature.
  - `supported`: boolean **required** — Whether the feature is supported.
