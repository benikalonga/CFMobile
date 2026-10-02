# Zone Rate Plan

3 endpoints.

## GET /zones/{zone_id}/available_plans

List Available Plans

operationId: `zone-rate-plan-list-available-plans`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/available_plans/{plan_identifier}

Available Plan Details

operationId: `zone-rate-plan-available-plan-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /zones/{zone_id}/available_rate_plans

List Available Rate Plans

operationId: `zone-rate-plan-list-available-rate-plans`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
