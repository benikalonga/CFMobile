# Observatory

10 endpoints.

## GET /zones/{zone_id}/speed_api/availabilities

Get quota and availability

operationId: `speed-get-availabilities`

**Response** 200 → `result`

- `quota`: object
  - `plan`: string — Cloudflare plan.
  - `quotasPerPlan`: object — The number of tests available per plan.
    - `value`: object — Counts per account plan.
  - `remainingSchedules`: number — The number of remaining schedules available.
  - `remainingTests`: number — The number of remaining tests available.
  - `scheduleQuotasPerPlan`: object — The number of schedules available per plan.
    - `value`: object — Counts per account plan.
- `regions`: object[]
  [array of]
  - `label`: string
  - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `regionsPerPlan`: object — Available regions.
  - `business`: object[]
    [array of]
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `enterprise`: object[]
    [array of]
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `free`: object[]
    [array of]
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `pro`: object[]
    [array of]
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.

## GET /zones/{zone_id}/speed_api/pages

List tested webpages

operationId: `speed-list-pages`

**Response** 200 → `result`

[array of]
- `region`: object — A test region with a label.
  - `label`: string
  - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
- `tests`: object[]
  [array of]
  - `date`: string
  - `desktopReport`: object — The Lighthouse report.
    - `cls`: number — Cumulative Layout Shift.
    - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
    - `error`: object
    - `fcp`: number — First Contentful Paint.
    - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
    - `lcp`: number — Largest Contentful Paint.
    - `performanceScore`: number — The Lighthouse performance score.
    - `si`: number — Speed Index.
    - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
    - `tbt`: number — Total Blocking Time.
    - `ttfb`: number — Time To First Byte.
    - `tti`: number — Time To Interactive.
  - `id`: string — UUID.
  - `mobileReport`: object — The Lighthouse report.
    - `cls`: number — Cumulative Layout Shift.
    - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
    - `error`: object
    - `fcp`: number — First Contentful Paint.
    - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
    - `lcp`: number — Largest Contentful Paint.
    - `performanceScore`: number — The Lighthouse performance score.
    - `si`: number — Speed Index.
    - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
    - `tbt`: number — Total Blocking Time.
    - `ttfb`: number — Time To First Byte.
    - `tti`: number — Time To Interactive.
  - `region`: object — A test region with a label.
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
  - `url`: string — A URL.
- `url`: string — A URL.

## DELETE /zones/{zone_id}/speed_api/pages/{url}/tests

Delete all page tests

operationId: `speed-delete-tests` · query: `region`

**Response** 200 → `result`

- `count`: number — Number of items affected.

## GET /zones/{zone_id}/speed_api/pages/{url}/tests

List page test history

operationId: `speed-list-test-history` · query: `page`, `per_page`, `region`

**Response** 200 → `result`

[array of]
- `date`: string
- `desktopReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `id`: string — UUID.
- `mobileReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `region`: object — A test region with a label.
  - `label`: string
  - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
- `url`: string — A URL.

## POST /zones/{zone_id}/speed_api/pages/{url}/tests

Start page test

operationId: `speed-create-test`

**Request** (application/json)

- `region`: any

**Response** 200 → `result`

- `date`: string
- `desktopReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `id`: string — UUID.
- `mobileReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `region`: object — A test region with a label.
  - `label`: string
  - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
- `url`: string — A URL.

## GET /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}

Get a page test result

operationId: `speed-get-test`

**Response** 200 → `result`

- `date`: string
- `desktopReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `id`: string — UUID.
- `mobileReport`: object — The Lighthouse report.
  - `cls`: number — Cumulative Layout Shift.
  - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
  - `error`: object
    - `code`: string enum: `NOT_REACHABLE`, `DNS_FAILURE`, `NOT_HTML`, `LIGHTHOUSE_TIMEOUT`, `UNKNOWN` — The error code of the Lighthouse result.
    - `detail`: string — Detailed error message.
    - `finalDisplayedUrl`: string — The final URL displayed to the user.
  - `fcp`: number — First Contentful Paint.
  - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
  - `lcp`: number — Largest Contentful Paint.
  - `performanceScore`: number — The Lighthouse performance score.
  - `si`: number — Speed Index.
  - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
  - `tbt`: number — Total Blocking Time.
  - `ttfb`: number — Time To First Byte.
  - `tti`: number — Time To Interactive.
- `region`: object — A test region with a label.
  - `label`: string
  - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
- `url`: string — A URL.

## GET /zones/{zone_id}/speed_api/pages/{url}/trend

List core web vital metrics trend

operationId: `speed-list-page-trend` · query: `region`, `deviceType`, `start`, `end`, `tz`, `metrics`

**Response** 200 → `result`

- `cls`: number[] — Cumulative Layout Shift trend.
  [array]
- `fcp`: number[] — First Contentful Paint trend.
  [array]
- `lcp`: number[] — Largest Contentful Paint trend.
  [array]
- `performanceScore`: number[] — The Lighthouse score trend.
  [array]
- `si`: number[] — Speed Index trend.
  [array]
- `tbt`: number[] — Total Blocking Time trend.
  [array]
- `ttfb`: number[] — Time To First Byte trend.
  [array]
- `tti`: number[] — Time To Interactive trend.
  [array]

## DELETE /zones/{zone_id}/speed_api/schedule/{url}

Delete scheduled page test

operationId: `speed-delete-test-schedule` · query: `region`

**Response** 200 → `result`

- `count`: number — Number of items affected.

## GET /zones/{zone_id}/speed_api/schedule/{url}

Get a page test schedule

operationId: `speed-get-scheduled-test` · query: `region`

**Response** 200 → `result`

- `frequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
- `region`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
- `url`: string — A URL.

## POST /zones/{zone_id}/speed_api/schedule/{url}

Create scheduled page test

operationId: `speed-create-scheduled-test` · query: `region`, `frequency`

**Response** 200 → `result`

- `schedule`: object — The test schedule.
  - `frequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
  - `region`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `url`: string — A URL.
- `test`: object
  - `date`: string
  - `desktopReport`: object — The Lighthouse report.
    - `cls`: number — Cumulative Layout Shift.
    - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
    - `error`: object
    - `fcp`: number — First Contentful Paint.
    - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
    - `lcp`: number — Largest Contentful Paint.
    - `performanceScore`: number — The Lighthouse performance score.
    - `si`: number — Speed Index.
    - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
    - `tbt`: number — Total Blocking Time.
    - `ttfb`: number — Time To First Byte.
    - `tti`: number — Time To Interactive.
  - `id`: string — UUID.
  - `mobileReport`: object — The Lighthouse report.
    - `cls`: number — Cumulative Layout Shift.
    - `deviceType`: string enum: `DESKTOP`, `MOBILE` — The type of device.
    - `error`: object
    - `fcp`: number — First Contentful Paint.
    - `jsonReportUrl`: string — The URL to the full Lighthouse JSON report.
    - `lcp`: number — Largest Contentful Paint.
    - `performanceScore`: number — The Lighthouse performance score.
    - `si`: number — Speed Index.
    - `state`: string enum: `RUNNING`, `COMPLETE`, `FAILED` — The state of the Lighthouse report.
    - `tbt`: number — Total Blocking Time.
    - `ttfb`: number — Time To First Byte.
    - `tti`: number — Time To Interactive.
  - `region`: object — A test region with a label.
    - `label`: string
    - `value`: string enum: `asia-east1`, `asia-northeast1`, `asia-northeast2`, `asia-south1`, `asia-southeast1`, `australia-southeast1`, `europe-north1`, `europe-southwest1` — A test region.
  - `scheduleFrequency`: string enum: `DAILY`, `WEEKLY` — The frequency of the test.
  - `url`: string — A URL.
