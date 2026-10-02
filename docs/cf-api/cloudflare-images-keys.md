# Cloudflare Images Keys

3 endpoints.

## GET /accounts/{account_id}/images/v1/keys

List Signing Keys

operationId: `cloudflare-images-keys-list-signing-keys`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## DELETE /accounts/{account_id}/images/v1/keys/{signing_key_name}

Delete Signing Key

operationId: `cloudflare-images-keys-delete-signing-key`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object

## PUT /accounts/{account_id}/images/v1/keys/{signing_key_name}

Create a new Signing Key

operationId: `cloudflare-images-keys-add-signing-key`

**Response** 200 → `result`

(one of 3 variants; showing the first)
object
