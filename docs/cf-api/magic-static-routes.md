# Magic Static Routes

7 endpoints.

## DELETE /accounts/{account_id}/magic/routes

Delete Many Routes

operationId: `magic-static-routes-delete-many-routes`

**Request** (application/json)

- `routes`: object[] **required**
  [array of]
  - `id`: string **required** — Identifier

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/routes

List Routes

operationId: `magic-static-routes-list-routes`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/magic/routes

Create a Route

operationId: `magic-static-routes-create-routes`

**Request** (application/json)

- `description`: string — An optional human provided description of the static route.
- `nexthop`: string **required** — The next-hop IP Address for the static route.
- `prefix`: string **required** — IP Prefix in Classless Inter-Domain Routing format.
- `priority`: integer **required** — Priority of the static route.
- `scope`: object — Used only for ECMP routes.
  - `colo_names`: string[] — List of colo names for the ECMP scope.
    [array]
  - `colo_regions`: string[] — List of colo regions for the ECMP scope.
    [array]
- `weight`: integer — Optional weight of the ECMP scope - if provided.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/routes

Update Many Routes

operationId: `magic-static-routes-update-many-routes`

**Request** (application/json)

- `routes`: object[] **required**
  [array of]
  - `id`: string **required** — Identifier
  - `description`: string — An optional human provided description of the static route.
  - `nexthop`: string **required** — The next-hop IP Address for the static route.
  - `prefix`: string **required** — IP Prefix in Classless Inter-Domain Routing format.
  - `priority`: integer **required** — Priority of the static route.
  - `scope`: object — Used only for ECMP routes.
    - `colo_names`: string[] — List of colo names for the ECMP scope.
    - `colo_regions`: string[] — List of colo regions for the ECMP scope.
  - `weight`: integer — Optional weight of the ECMP scope - if provided.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/magic/routes/{route_id}

Delete Route

operationId: `magic-static-routes-delete-route`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/magic/routes/{route_id}

Route Details

operationId: `magic-static-routes-route-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/magic/routes/{route_id}

Update Route

operationId: `magic-static-routes-update-route`

**Request** (application/json)

- `description`: string — An optional human provided description of the static route.
- `nexthop`: string **required** — The next-hop IP Address for the static route.
- `prefix`: string **required** — IP Prefix in Classless Inter-Domain Routing format.
- `priority`: integer **required** — Priority of the static route.
- `scope`: object — Used only for ECMP routes.
  - `colo_names`: string[] — List of colo names for the ECMP scope.
    [array]
  - `colo_regions`: string[] — List of colo regions for the ECMP scope.
    [array]
- `weight`: integer — Optional weight of the ECMP scope - if provided.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
