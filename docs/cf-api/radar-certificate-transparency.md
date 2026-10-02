# Radar Certificate Transparency

7 endpoints.

## GET /radar/ct/authorities

List certificate authorities

operationId: `radar-get-certificate-authorities` · query: `limit`, `offset`, `format`

**Response** 200 → `result`

- `certificateAuthorities`: object[] **required**
  [array of]
  - `certificateRecordType`: string **required** enum: `ROOT_CERTIFICATE`, `INTERMEDIATE_CERTIFICATE` — Specifies the type of certificate in the trust chain.
  - `country`: string **required** — The two-letter ISO country code where the CA organization is based.
  - `countryName`: string **required** — The full country name corresponding to the country code.
  - `name`: string **required** — The full name of the certificate authority (CA).
  - `owner`: string **required** — The organization that owns and operates the CA.
  - `parentName`: string **required** — The name of the parent/root certificate authority that issued this intermediate certificate.
  - `parentSha256Fingerprint`: string **required** — The SHA-256 fingerprint of the parent certificate.
  - `revocationStatus`: string **required** enum: `NOT_REVOKED`, `REVOKED`, `PARENT_CERT_REVOKED` — The current revocation status of a Certificate Authority (CA) certificate.
  - `sha256Fingerprint`: string **required** — The SHA-256 fingerprint of the intermediate certificate.

## GET /radar/ct/authorities/{ca_slug}

Get certificate authority details

operationId: `radar-get-certificate-authority-details` · query: `format`

**Response** 200 → `result`

- `certificateAuthority`: object **required**
  - `appleStatus`: string **required** enum: `INCLUDED`, `NOT_YET_INCLUDED`, `NOT_INCLUDED`, `NOT_BEFORE`, `REMOVED`, `DISABLED`, `BLOCKED` — The inclusion status of a Certificate Authority (CA) in the trust store.
  - `authorityKeyIdentifier`: string **required** — The authorityKeyIdentifier value extracted from the certificate PEM.
  - `certificateRecordType`: string **required** enum: `ROOT_CERTIFICATE`, `INTERMEDIATE_CERTIFICATE` — Specifies the type of certificate in the trust chain.
  - `chromeStatus`: string **required** enum: `INCLUDED`, `NOT_YET_INCLUDED`, `NOT_INCLUDED`, `NOT_BEFORE`, `REMOVED`, `DISABLED`, `BLOCKED` — The inclusion status of a Certificate Authority (CA) in the trust store.
  - `country`: string **required** — The two-letter ISO country code where the CA organization is based.
  - `countryName`: string **required** — The full country name corresponding to the country code.
  - `microsoftStatus`: string **required** enum: `INCLUDED`, `NOT_YET_INCLUDED`, `NOT_INCLUDED`, `NOT_BEFORE`, `REMOVED`, `DISABLED`, `BLOCKED` — The inclusion status of a Certificate Authority (CA) in the trust store.
  - `mozillaStatus`: string **required** enum: `INCLUDED`, `NOT_YET_INCLUDED`, `NOT_INCLUDED`, `NOT_BEFORE`, `REMOVED`, `DISABLED`, `BLOCKED` — The inclusion status of a Certificate Authority (CA) in the trust store.
  - `name`: string **required** — The full name of the certificate authority (CA).
  - `owner`: string **required** — The organization that owns and operates the CA.
  - `parentName`: string **required** — The name of the parent/root certificate authority that issued this intermediate certificate.
  - `parentSha256Fingerprint`: string **required** — The SHA-256 fingerprint of the parent certificate.
  - `related`: object[] **required** — CAs from the same owner.
    [array of]
    - `certificateRecordType`: string **required** enum: `ROOT_CERTIFICATE`, `INTERMEDIATE_CERTIFICATE` — Specifies the type of certificate in the trust chain.
    - `name`: string **required** — The full name of the certificate authority (CA).
    - `revocationStatus`: string **required** enum: `NOT_REVOKED`, `REVOKED`, `PARENT_CERT_REVOKED` — The current revocation status of a Certificate Authority (CA) certificate.
    - `sha256Fingerprint`: string **required** — The SHA-256 fingerprint of the intermediate certificate.
  - `revocationStatus`: string **required** enum: `NOT_REVOKED`, `REVOKED`, `PARENT_CERT_REVOKED` — The current revocation status of a Certificate Authority (CA) certificate.
  - `sha256Fingerprint`: string **required** — The SHA-256 fingerprint of the intermediate certificate.
  - `subjectKeyIdentifier`: string **required** — The subjectKeyIdentifier value extracted from the certificate PEM.
  - `validFrom`: string **required** — The start date of the certificate’s validity period (ISO format).
  - `validTo`: string **required** — The end date of the certificate’s validity period (ISO format).

## GET /radar/ct/logs

List certificate logs

operationId: `radar-get-certificate-logs` · query: `limit`, `offset`, `format`

**Response** 200 → `result`

- `certificateLogs`: object[] **required**
  [array of]
  - `api`: string **required** enum: `RFC6962`, `STATIC` — The API standard that the certificate log follows.
  - `description`: string **required** — A brief description of the certificate log.
  - `endExclusive`: string **required** — The end date and time for when the log will stop accepting certificates.
  - `operator`: string **required** — The organization responsible for operating the certificate log.
  - `slug`: string **required** — A URL-friendly, kebab-case identifier for the certificate log.
  - `startInclusive`: string **required** — The start date and time for when the log starts accepting certificates.
  - `state`: string **required** enum: `USABLE`, `PENDING`, `QUALIFIED`, `READ_ONLY`, `RETIRED`, `REJECTED` — The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTranspa
  - `stateTimestamp`: string **required** — Timestamp of when the log state was last updated.
  - `url`: string **required** — The URL for the certificate log.

## GET /radar/ct/logs/{log_slug}

Get certificate log details

operationId: `radar-get-certificate-log-details` · query: `format`

**Response** 200 → `result`

- `certificateLog`: object **required**
  - `api`: string **required** enum: `RFC6962`, `STATIC` — The API standard that the certificate log follows.
  - `avgThroughput`: number **required** — The average throughput of the CT log, measured in certificates per hour (certs/hour).
  - `description`: string **required** — A brief description of the certificate log.
  - `endExclusive`: string **required** — The end date and time for when the log will stop accepting certificates.
  - `lastUpdate`: string **required** — Timestamp of the most recent update to the CT log.
  - `operator`: string **required** — The organization responsible for operating the certificate log.
  - `performance`: object **required** — Log performance metrics, including averages and per-endpoint details.
    - `endpoints`: object[] **required**
    - `responseTime`: number **required**
    - `uptime`: number **required**
  - `related`: object[] **required** — Logs from the same operator.
    [array of]
    - `description`: string **required** — A brief description of the certificate log.
    - `endExclusive`: string **required** — The end date and time for when the log will stop accepting certificates.
    - `slug`: string **required** — A URL-friendly, kebab-case identifier for the certificate log.
    - `startInclusive`: string **required** — The start date and time for when the log starts accepting certificates.
    - `state`: string **required** enum: `USABLE`, `PENDING`, `QUALIFIED`, `READ_ONLY`, `RETIRED`, `REJECTED` — The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTranspa
  - `slug`: string **required** — A URL-friendly, kebab-case identifier for the certificate log.
  - `startInclusive`: string **required** — The start date and time for when the log starts accepting certificates.
  - `state`: string **required** enum: `USABLE`, `PENDING`, `QUALIFIED`, `READ_ONLY`, `RETIRED`, `REJECTED` — The current state of the certificate log. More details about log states can be found here: https://googlechrome.github.io/CertificateTranspa
  - `stateTimestamp`: string **required** — Timestamp of when the log state was last updated.
  - `submittableCertCount`: string **required** — Number of certificates that are eligible for inclusion to this log but have not been included yet. Based on certificates signed by trusted r
  - `submittedCertCount`: string **required** — Number of certificates already included in this CT log.
  - `url`: string **required** — The URL for the certificate log.

## GET /radar/ct/summary/{dimension}

Get certificate distribution by dimension

operationId: `radar-get-ct-summary` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `limitPerGroup`, `ca`, `caOwner`, `duration`, `entryType`, `expirationStatus`, `hasIps`, `hasWildcards`, `log`, `logApi`, `logOperator`, `publicKeyAlgorithm`, `signatureAlgorithm`, `tld`, `validationLevel`, `uniqueEntries`, `normalization`, `format`

**Response** 200 → `result`

- `meta`: object **required** — Metadata for the results.
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `summary_0`: any **required**

## GET /radar/ct/timeseries

Get certificates time series

operationId: `radar-get-ct-timeseries` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `ca`, `caOwner`, `duration`, `entryType`, `expirationStatus`, `hasIps`, `hasWildcards`, `log`, `logApi`, `logOperator`, `publicKeyAlgorithm`, `signatureAlgorithm`, `tld`, `validationLevel`, `uniqueEntries`, `format`

**Response** 200 → `result`

- `meta`: object **required** — Metadata for the results.
  - `aggInterval`: string **required** enum: `FIFTEEN_MINUTES`, `ONE_HOUR`, `ONE_DAY`, `ONE_WEEK`, `ONE_MONTH` — Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflar
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**

## GET /radar/ct/timeseries_groups/{dimension}

Get time series of certificate distribution by dimension

operationId: `radar-get-ct-timeseries-group` · query: `aggInterval`, `name`, `dateRange`, `dateStart`, `dateEnd`, `limitPerGroup`, `ca`, `caOwner`, `duration`, `entryType`, `expirationStatus`, `hasIps`, `hasWildcards`, `log`, `logApi`, `logOperator`, `publicKeyAlgorithm`, `signatureAlgorithm`, `validationLevel`, `tld`, `normalization`, `uniqueEntries`, `format`

**Response** 200 → `result`

- `meta`: object **required** — Metadata for the results.
  - `aggInterval`: string **required** enum: `FIFTEEN_MINUTES`, `ONE_HOUR`, `ONE_DAY`, `ONE_WEEK`, `ONE_MONTH` — Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflar
  - `confidenceInfo`: object **required**
    - `annotations`: object[] **required**
    - `level`: integer **required** — Provides an indication of how much confidence Cloudflare has in the data.
  - `dateRange`: object[] **required**
    [array of]
    - `endTime`: string **required** — Adjusted end of date range.
    - `startTime`: string **required** — Adjusted start of date range.
  - `lastUpdated`: string **required** — Timestamp of the last dataset update.
  - `normalization`: string **required** enum: `PERCENTAGE`, `MIN0_MAX`, `MIN_MAX`, `RAW_VALUES`, `PERCENTAGE_CHANGE`, `ROLLING_AVERAGE`, `OVERLAPPED_PERCENTAGE`, `RATIO` — Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization
  - `units`: object[] **required** — Measurement units for the results.
    [array of]
    - `name`: string **required**
    - `value`: string **required**
- `serie_0`: any **required**
