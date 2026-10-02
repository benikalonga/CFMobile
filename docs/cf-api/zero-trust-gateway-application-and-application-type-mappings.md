# Zero Trust Gateway application and application type mappings

1 endpoints.

## GET /accounts/{account_id}/gateway/app_types

List application and application type mappings

operationId: `zero-trust-gateway-application-and-application-type-mappings-list-application-and-application-type-mappings`

**Response** 200 → `result`

[array of]
(one of 2 variants; showing the first)
- `application_type_id`: integer — Identify the type of this application. Multiple applications can share the same type. Refers to the `id` of a returned application type.
- `created_at`: string
- `id`: integer — Identify this application. Only one application per ID.
- `name`: string — Specify the name of the application or application type.
