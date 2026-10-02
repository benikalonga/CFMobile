# Access Authenticator Device AAGUIDs

1 endpoints.

## GET /accounts/{account_id}/access/authenticator_device_aaguids

List authenticator device AAGUIDs

operationId: `access-authenticator-device-aaguids-list`

**Response** 200 → `result`

[array of]
- `aaguid`: string **required** — The Authenticator Attestation GUID (AAGUID) uniquely identifying a FIDO2 authenticator model
- `name`: string **required** — The human-readable name of the FIDO2 authenticator
