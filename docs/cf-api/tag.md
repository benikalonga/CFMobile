# Tag

6 endpoints.

## GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators

List indicators related to a tag within a dataset (deprecated)

operationId: `get_DatasetTagIndicatorsList` · query: `page`, `pageSize`, `indicatorType`, `relatedEvent`, `search`

**Response** 200 → `result`

- `indicators`: object[] **required**
  [array of]
  - `createdAt`: string **required**
  - `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
  - `indicatorType`: string **required**
  - `relatedEvents`: object[]
    [array of]
    - `datasetId`: string **required**
    - `eventId`: string **required**
  - `tags`: object[]
    [array of]
    - `categoryName`: string
    - `uuid`: string
    - `value`: string
  - `updatedAt`: string **required**
  - `uuid`: string **required**
  - `value`: string **required**
- `pagination`: object **required**
  - `page`: number **required**
  - `pageSize`: number **required**
  - `totalCount`: number **required**
  - `totalPages`: number **required**

## GET /accounts/{account_id}/cloudforce-one/events/tags

Lists all tags (SoT)

operationId: `get_TagList` · query: `page`, `pageSize`, `search`, `categoryUuid`, `filters`, `cache`

**Response** 200 → `result`

- `pagination`: object **required**
  - `page`: number **required**
  - `pageSize`: number **required**
  - `totalCount`: number **required**
  - `totalPages`: number **required**
- `tags`: object[] **required**
  [array of]
  - `activeDuration`: string
  - `actorCategory`: string
  - `actorCategoryConfidence`: integer — Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped from responses to non-CFONE accounts.
  - `aliasGroupNames`: string[]
    [array]
  - `aliasGroupNamesInternal`: string[]
    [array]
  - `aliases`: object[] — Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from responses to non-CFONE accounts.
    [array of]
    - `confidence`: integer
    - `tlp`: string enum: `red`, `amber`, `green`, `white`
    - `value`: string **required**
  - `analyticPriority`: number
  - `attributionConfidence`: string
  - `attributionConfidenceScore`: integer
  - `attributionOrganization`: string
  - `categoryName`: string
  - `categoryUuid`: string
  - `dateOfDiscovery`: string
  - `externalReferenceLinks`: string[]
    [array]
  - `externalReferences`: object[] — Structured external references ({ url, description }). Public: returned to all accounts.
    [array of]
    - `description`: string
    - `url`: string **required**
  - `internalAliases`: object[] — Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
    [array of]
    - `confidence`: integer
    - `tlp`: string enum: `red`, `amber`, `green`, `white`
    - `value`: string **required**
  - `internalDescription`: string
  - `motive`: string
  - `motiveConfidence`: integer — Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to non-CFONE accounts.
  - `opsecLevel`: string
  - `originCountryConfidence`: integer — Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
  - `originCountryISO`: string
  - `originCountryISOAlpha3`: string
  - `originCountryTlp`: string enum: `red`, `amber`, `green`, `white` — TLP marking for the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
  - `priority`: number
  - `sophisticationLevel`: string
  - `uuid`: string **required**
  - `value`: string **required**

## DELETE /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}

Deletes a tag (SoT)

operationId: `delete_TagDelete`

**Response** 200 → `result`

- `uuid`: string **required**

## PATCH /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}

Updates a tag (SoT)

operationId: `patch_TagUpdate`

**Request** (application/json)

- `activeDuration`: string
- `actorCategory`: string — Actor variety. Allowed values: Activist, Competitor, Customer, Crime Syndicate, Former Employee, Nation State, Organized Crime, Nation State
- `actorCategoryConfidence`: integer — Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped from responses to non-CFONE accounts.
- `aliasGroupNames`: string[]
  [array]
- `aliasGroupNamesInternal`: string[]
  [array]
- `aliases`: object[] — Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from responses to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `analyticPriority`: number
- `attributionConfidence`: string
- `attributionConfidenceScore`: integer
- `attributionOrganization`: string
- `categoryUuid`: string
- `dateOfDiscovery`: string — Date the actor was discovered (ISO YYYY-MM-DD).
- `externalReferenceLinks`: string[]
  [array]
- `externalReferences`: object[] — Structured external references ({ url, description }). Public: returned to all accounts.
  [array of]
  - `description`: string
  - `url`: string **required**
- `internalAliases`: object[] — Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `internalDescription`: string
- `motive`: string — Actor motive. Allowed values: Convenience, Fear, Fun, Financial, Grudge, Ideology, Espionage.
- `motiveConfidence`: integer — Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to non-CFONE accounts.
- `opsecLevel`: string
- `originCountryConfidence`: integer — Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `originCountryISO`: string
- `originCountryTlp`: string enum: `red`, `amber`, `green`, `white` — TLP marking for the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `priority`: number
- `sophisticationLevel`: string
- `value`: string

**Response** 200 → `result`

- `activeDuration`: string
- `actorCategory`: string
- `actorCategoryConfidence`: integer — Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped from responses to non-CFONE accounts.
- `aliasGroupNames`: string[]
  [array]
- `aliasGroupNamesInternal`: string[]
  [array]
- `aliases`: object[] — Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from responses to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `analyticPriority`: number
- `attributionConfidence`: string
- `attributionConfidenceScore`: integer
- `attributionOrganization`: string
- `categoryName`: string
- `categoryUuid`: string
- `dateOfDiscovery`: string
- `externalReferenceLinks`: string[]
  [array]
- `externalReferences`: object[] — Structured external references ({ url, description }). Public: returned to all accounts.
  [array of]
  - `description`: string
  - `url`: string **required**
- `internalAliases`: object[] — Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `internalDescription`: string
- `motive`: string
- `motiveConfidence`: integer — Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to non-CFONE accounts.
- `opsecLevel`: string
- `originCountryConfidence`: integer — Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `originCountryISO`: string
- `originCountryISOAlpha3`: string
- `originCountryTlp`: string enum: `red`, `amber`, `green`, `white` — TLP marking for the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `priority`: number
- `sophisticationLevel`: string
- `uuid`: string **required**
- `value`: string **required**

## GET /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators

List indicators related to a tag

operationId: `get_TagIndicatorsList` · query: `datasetIds`, `page`, `pageSize`, `indicatorType`, `relatedEvent`, `search`

**Response** 200 → `result`

- `indicators`: object[] **required**
  [array of]
  - `createdAt`: string **required**
  - `datasetId`: string — The dataset ID this indicator belongs to. Included in list responses.
  - `indicatorType`: string **required**
  - `relatedEvents`: object[]
    [array of]
    - `datasetId`: string **required**
    - `eventId`: string **required**
  - `tags`: object[]
    [array of]
    - `categoryName`: string
    - `uuid`: string
    - `value`: string
  - `updatedAt`: string **required**
  - `uuid`: string **required**
  - `value`: string **required**
- `pagination`: object **required**
  - `page`: number **required**
  - `pageSize`: number **required**
  - `totalCount`: number **required**
  - `totalPages`: number **required**

## POST /accounts/{account_id}/cloudforce-one/events/tags/create

Creates a new tag

operationId: `post_TagCreate`

**Request** (application/json)

- `activeDuration`: string
- `actorCategory`: string — Actor variety. Allowed values: Activist, Competitor, Customer, Crime Syndicate, Former Employee, Nation State, Organized Crime, Nation State
- `actorCategoryConfidence`: integer — Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped from responses to non-CFONE accounts.
- `aliasGroupNames`: string[]
  [array]
- `aliasGroupNamesInternal`: string[]
  [array]
- `aliases`: object[] — Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from responses to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `analyticPriority`: number
- `attributionConfidence`: string
- `attributionConfidenceScore`: integer
- `attributionOrganization`: string
- `categoryUuid`: string
- `dateOfDiscovery`: string — Date the actor was discovered (ISO YYYY-MM-DD).
- `externalReferenceLinks`: string[]
  [array]
- `externalReferences`: object[] — Structured external references ({ url, description }). Public: returned to all accounts.
  [array of]
  - `description`: string
  - `url`: string **required**
- `internalAliases`: object[] — Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `internalDescription`: string
- `motive`: string — Actor motive. Allowed values: Convenience, Fear, Fun, Financial, Grudge, Ideology, Espionage.
- `motiveConfidence`: integer — Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to non-CFONE accounts.
- `opsecLevel`: string
- `originCountryConfidence`: integer — Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `originCountryISO`: string
- `originCountryTlp`: string enum: `red`, `amber`, `green`, `white` — TLP marking for the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `priority`: number
- `sophisticationLevel`: string
- `value`: string **required**

**Response** 200 → `result`

- `activeDuration`: string
- `actorCategory`: string
- `actorCategoryConfidence`: integer — Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped from responses to non-CFONE accounts.
- `aliasGroupNames`: string[]
  [array]
- `aliasGroupNamesInternal`: string[]
  [array]
- `aliases`: object[] — Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from responses to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `analyticPriority`: number
- `attributionConfidence`: string
- `attributionConfidenceScore`: integer
- `attributionOrganization`: string
- `categoryName`: string
- `categoryUuid`: string
- `dateOfDiscovery`: string
- `externalReferenceLinks`: string[]
  [array]
- `externalReferences`: object[] — Structured external references ({ url, description }). Public: returned to all accounts.
  [array of]
  - `description`: string
  - `url`: string **required**
- `internalAliases`: object[] — Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never returned to non-CFONE accounts.
  [array of]
  - `confidence`: integer
  - `tlp`: string enum: `red`, `amber`, `green`, `white`
  - `value`: string **required**
- `internalDescription`: string
- `motive`: string
- `motiveConfidence`: integer — Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to non-CFONE accounts.
- `opsecLevel`: string
- `originCountryConfidence`: integer — Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `originCountryISO`: string
- `originCountryISOAlpha3`: string
- `originCountryTlp`: string enum: `red`, `amber`, `green`, `white` — TLP marking for the origin-country attribution. CFONE-only: stripped from responses to non-CFONE accounts.
- `priority`: number
- `sophisticationLevel`: string
- `uuid`: string **required**
- `value`: string **required**
