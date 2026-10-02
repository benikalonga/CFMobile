# User's Organizations

3 endpoints.

## GET /user/organizations

List Organizations

operationId: `user'-s-organizations-list-organizations` · query: `name`, `page`, `per_page`, `order`, `direction`, `match`, `status`

**Response** 200 → `result`

[array of]
- `id`: string — Identifier
- `name`: string — Organization name.
- `permissions`: string[] — Access permissions for this User.
  [array]
- `roles`: string[] — List of roles that a user has within an organization.
  [array]
- `status`: string enum: `member`, `invited` — Whether the user is a member of the organization or has an invitation pending.

## DELETE /user/organizations/{organization_id}

Leave Organization

operationId: `user'-s-organizations-leave-organization`

**Response** 200 → `result`

- `id`: string — Identifier

## GET /user/organizations/{organization_id}

Organization Details

operationId: `user'-s-organizations-organization-details`

**Response** 200 → `result`

object
