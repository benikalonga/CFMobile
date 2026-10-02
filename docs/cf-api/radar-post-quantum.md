# Radar Post-Quantum

3 endpoints.

## GET /radar/post_quantum/origin/summary/{dimension}

Get Origin Post-Quantum Data Summary

operationId: `radar-get-origin-post-quantum-summary` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `format`

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
- `summary_0`: object **required**

## GET /radar/post_quantum/origin/timeseries_groups/{dimension}

Get Origin Post-Quantum Data Over Time

operationId: `radar-get-origin-post-quantum-timeseries-groups` · query: `name`, `dateRange`, `dateStart`, `dateEnd`, `format`

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
- `serie_0`: object **required**
  - `timestamps`: string[] **required**
    [array]

## GET /radar/post_quantum/tls/support

Check Post-Quantum TLS support

operationId: `radar-get-post-quantum-tls-support` · query: `host`

**Response** 200 → `result`

- `bugs`: object **required**
  - `hrrFailure`: boolean **required** — Server sends a HelloRetryRequest but fails to complete the handshake after the client sends the second ClientHello. Often caused by non-comp
  - `splitClientHello`: boolean **required** — Server rejects fragmented ClientHello caused by large PQ keyshare, but accepts classical (non-PQ) handshakes. Typically caused by middleboxe
  - `unknownKeyshare`: boolean **required** — Server cannot handle an unknown key exchange algorithm in the ClientHello keyshare extension. Compliant servers should respond with HelloRet
- `host`: string **required** — The host that was tested
- `kex`: number **required** — TLS CurveID of the negotiated key exchange
- `kexName`: string **required** — Human-readable name of the key exchange algorithm
- `pq`: boolean **required** — Whether the negotiated key exchange uses Post-Quantum cryptography (specifically X25519MLKEM768)
