# Cloudflare Images Variants

6 endpoints.

## GET /accounts/{account_id}/images/v1/variants

List variants

operationId: `cloudflare-images-variants-list-variants`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## POST /accounts/{account_id}/images/v1/variants

Create a variant

operationId: `cloudflare-images-variants-create-a-variant`

**Request** (application/json)

- `id`: string **required**
- `neverRequireSignedURLs`: boolean default: `false` — Indicates whether the variant can access an image without a signature, regardless of image access control.
- `options`: object **required** — Allows you to define image resizing sizes for different use cases.
  - `fit`: string **required** enum: `scale-down`, `contain`, `cover`, `crop`, `pad` — The fit property describes how the width and height dimensions should be interpreted.
  - `height`: number **required** — Maximum height in image pixels.
  - `metadata`: string **required** enum: `keep`, `copyright`, `none` — What EXIF data should be preserved in the output image.
  - `width`: number **required** — Maximum width in image pixels.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/images/v1/variants/{variant_id}

Delete a variant

operationId: `cloudflare-images-variants-delete-a-variant`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v1/variants/{variant_id}

Variant details

operationId: `cloudflare-images-variants-variant-details`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PATCH /accounts/{account_id}/images/v1/variants/{variant_id}

Update a variant

operationId: `cloudflare-images-variants-update-a-variant`

**Request** (application/json)

- `neverRequireSignedURLs`: boolean default: `false` — Indicates whether the variant can access an image without a signature, regardless of image access control.
- `options`: object **required** — Allows you to define image resizing sizes for different use cases.
  - `fit`: string **required** enum: `scale-down`, `contain`, `cover`, `crop`, `pad` — The fit property describes how the width and height dimensions should be interpreted.
  - `height`: number **required** — Maximum height in image pixels.
  - `metadata`: string **required** enum: `keep`, `copyright`, `none` — What EXIF data should be preserved in the output image.
  - `width`: number **required** — Maximum width in image pixels.

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## GET /accounts/{account_id}/images/v1/variants/{variant_id}/flat

Variant details (flat)

operationId: `cloudflare-images-variants-variant-details-flat`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
