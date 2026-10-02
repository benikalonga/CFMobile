# Zero Trust Gateway categories

1 endpoints.

## GET /accounts/{account_id}/gateway/categories

List categories

operationId: `zero-trust-gateway-categories-list-categories`

**Response** 200 → `result`

[array of]
- `beta`: boolean — Indicate whether the category is in beta and subject to change.
- `class`: string enum: `free`, `premium`, `blocked`, `removalPending`, `noBlock` — Specify which account types can create policies for this category. `blocked` Blocks unconditionally for all accounts. `removalPending` Allow
- `description`: string — Provide a short summary of domains in the category.
- `id`: integer — Identify this category. Only one category per ID.
- `name`: string — Specify the category name.
- `subcategories`: object[] — Provide all subcategories for this category.
  [array of]
  - `beta`: boolean — Indicate whether the category is in beta and subject to change.
  - `class`: string enum: `free`, `premium`, `blocked`, `removalPending`, `noBlock` — Specify which account types can create policies for this category. `blocked` Blocks unconditionally for all accounts. `removalPending` Allow
  - `description`: string — Provide a short summary of domains in the category.
  - `id`: integer — Identify this category. Only one category per ID.
  - `name`: string — Specify the category name.
