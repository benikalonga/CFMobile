# Access Bookmark applications (Deprecated)

5 endpoints.

## GET /accounts/{account_id}/access/bookmarks

List Bookmark applications

operationId: `access-bookmark-applications-(-deprecated)-list-bookmark-applications`

**Response** 200 → `result`

[array of]
- `app_launcher_visible`: boolean — Displays the application in the App Launcher.
- `created_at`: any
- `domain`: string — The domain of the Bookmark application.
- `id`: string — The unique identifier for the Bookmark application.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `name`: string — The name of the Bookmark application.
- `updated_at`: any

## DELETE /accounts/{account_id}/access/bookmarks/{bookmark_id}

Delete a Bookmark application

operationId: `access-bookmark-applications-(-deprecated)-delete-a-bookmark-application`

**Response** 200 → `result`

- `id`: string — UUID.

## GET /accounts/{account_id}/access/bookmarks/{bookmark_id}

Get a Bookmark application

operationId: `access-bookmark-applications-(-deprecated)-get-a-bookmark-application`

**Response** 200 → `result`

- `app_launcher_visible`: boolean — Displays the application in the App Launcher.
- `created_at`: any
- `domain`: string — The domain of the Bookmark application.
- `id`: string — The unique identifier for the Bookmark application.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `name`: string — The name of the Bookmark application.
- `updated_at`: any

## POST /accounts/{account_id}/access/bookmarks/{bookmark_id}

Create a Bookmark application

operationId: `access-bookmark-applications-(-deprecated)-create-a-bookmark-application`

**Response** 200 → `result`

- `app_launcher_visible`: boolean — Displays the application in the App Launcher.
- `created_at`: any
- `domain`: string — The domain of the Bookmark application.
- `id`: string — The unique identifier for the Bookmark application.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `name`: string — The name of the Bookmark application.
- `updated_at`: any

## PUT /accounts/{account_id}/access/bookmarks/{bookmark_id}

Update a Bookmark application

operationId: `access-bookmark-applications-(-deprecated)-update-a-bookmark-application`

**Response** 200 → `result`

- `app_launcher_visible`: boolean — Displays the application in the App Launcher.
- `created_at`: any
- `domain`: string — The domain of the Bookmark application.
- `id`: string — The unique identifier for the Bookmark application.
- `logo_url`: string — The image URL for the logo shown in the App Launcher dashboard.
- `name`: string — The name of the Bookmark application.
- `updated_at`: any
