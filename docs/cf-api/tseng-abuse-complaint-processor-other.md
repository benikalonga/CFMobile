# tseng-abuse-complaint-processor_other

7 endpoints.

## GET /accounts/{account_id}/abuse-reports

List abuse reports

operationId: `ListAbuseReports` · query: `page`, `per_page`, `sort`, `domain`, `created_before`, `created_after`, `status`, `type`, `mitigation_status`

**Response** 200 → `result`

- `reports`: object[] **required**
  [array of]
  - `cdate`: string **required** — Creation date of report. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)
  - `domain`: string **required** — Domain that relates to the report.
  - `id`: string **required** — Public facing ID of abuse report, aka abuse_rand.
  - `justification`: string — Justification for the report.
  - `mitigation_summary`: object **required** — A summary of the mitigations related to this report.
    - `accepted_url_count`: integer **required** — How many of the reported URLs were confirmed as abusive.
    - `active_count`: integer **required** — How many mitigations are active.
    - `external_host_notified`: boolean **required** — Whether the report has been forwarded to an external hosting provider.
    - `in_review_count`: integer **required** — How many mitigations are under review.
    - `pending_count`: integer **required** — How many mitigations are pending their effective date.
  - `original_work`: string — Original work / Targeted brand in the alleged abuse.
  - `status`: string **required** enum: `accepted`, `in_review` — An enum value that represents the status of an abuse record
  - `submitter`: object — Information about the submitter of the report.
    - `company`: string
    - `email`: string
    - `name`: string
    - `telephone`: string
  - `type`: string **required** enum: `PHISH`, `GEN`, `THREAT`, `DMCA`, `EMER`, `TM`, `REG_WHO`, `NCSEI` — The abuse report type
  - `urls`: string[]
    [array]

## GET /accounts/{account_id}/abuse-reports/{report_id}/appeals/eligibility

Check whether a report can be appealed

operationId: `CheckAppealEligibility`

**Response** 200 → `result`

- `appeal_count`: integer **required** — Number of appeals submitted against the report so far.
- `appealable`: boolean **required** — Whether the report can currently be appealed.
- `has_appealable_mitigations`: boolean **required** — Whether the report has at least one mitigation an appeal could reverse.
- `has_open_appeal`: boolean **required** — Whether the report already has an open (undecided) appeal.
- `max_appeals`: integer **required** — Maximum number of appeals allowed per report.

## GET /accounts/{account_id}/abuse-reports/{report_id}/emails

List abuse report emails

operationId: `ListEmails` · query: `page`, `per_page`

**Response** 200 → `result`

- `emails`: object[] **required**
  [array of]
  - `body`: string **required** — Body content of the email.
  - `id`: string **required** — Unique identifier of the email.
  - `recipient`: string **required** — Email address of the recipient.
  - `sent_at`: string **required** — When the email was sent. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)
  - `subject`: string **required** — Subject line of the email.

## GET /accounts/{account_id}/abuse-reports/{report_id}/mitigations

List abuse report mitigations

operationId: `ListMitigations` · query: `page`, `per_page`, `sort`, `type`, `effective_before`, `effective_after`, `status`, `entity_type`

**Response** 200 → `result`

- `mitigations`: object[] **required**
  [array of]
  - `effective_date`: string **required** — Date when the mitigation will become active. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)
  - `entity_id`: string **required**
  - `entity_type`: string **required** enum: `url_pattern`, `account`, `zone` — The type of entity targeted by a mitigation.
  - `id`: string **required** — ID of remediation.
  - `status`: string **required** enum: `pending`, `active`, `in_review`, `cancelled`, `removed` — The status of a mitigation
  - `type`: string **required** enum: `account_suspend`, `copyright_interstitial`, `geo_block`, `legal_block`, `malware_interstitial`, `misleading_interstitial`, `network_block`, `phishing_interstitial` — The type of mitigation applied to a reported entity.

## POST /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal

Request review on mitigations

operationId: `RequestReview`

**Request** (application/json)

(one of 2 variants; showing the first)

**Response** 200 → `result`

[array of]
- `effective_date`: string **required** — Date when the mitigation will become active. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)
- `entity_id`: string **required**
- `entity_type`: string **required** enum: `url_pattern`, `account`, `zone` — The type of entity targeted by a mitigation.
- `id`: string **required** — ID of remediation.
- `status`: string **required** enum: `pending`, `active`, `in_review`, `cancelled`, `removed` — The status of a mitigation
- `type`: string **required** enum: `account_suspend`, `copyright_interstitial`, `geo_block`, `legal_block`, `malware_interstitial`, `misleading_interstitial`, `network_block`, `phishing_interstitial` — The type of mitigation applied to a reported entity.

## GET /accounts/{account_id}/abuse-reports/{report_param}

Abuse Report Details

operationId: `GetAbuseReport`

**Response** 200 → `result`

- `cdate`: string **required** — Creation date of report. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)
- `domain`: string **required** — Domain that relates to the report.
- `id`: string **required** — Public facing ID of abuse report, aka abuse_rand.
- `justification`: string — Justification for the report.
- `mitigation_summary`: object **required** — A summary of the mitigations related to this report.
  - `accepted_url_count`: integer **required** — How many of the reported URLs were confirmed as abusive.
  - `active_count`: integer **required** — How many mitigations are active.
  - `external_host_notified`: boolean **required** — Whether the report has been forwarded to an external hosting provider.
  - `in_review_count`: integer **required** — How many mitigations are under review.
  - `pending_count`: integer **required** — How many mitigations are pending their effective date.
- `original_work`: string — Original work / Targeted brand in the alleged abuse.
- `status`: string **required** enum: `accepted`, `in_review` — An enum value that represents the status of an abuse record
- `submitter`: object — Information about the submitter of the report.
  - `company`: string
  - `email`: string
  - `name`: string
  - `telephone`: string
- `type`: string **required** enum: `PHISH`, `GEN`, `THREAT`, `DMCA`, `EMER`, `TM`, `REG_WHO`, `NCSEI` — The abuse report type
- `urls`: string[]
  [array]

## POST /accounts/{account_id}/abuse-reports/{report_param}

Submit an abuse report

operationId: `SubmitAbuseReport`

**Request** (application/json)

(one of 8 variants; showing the first)
- `act`: string **required** — The report type for submitted reports.
- `comments`: string — Any additional comments about the infringement not exceeding 2000 characters
- `company`: string — Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `email`: string **required** — A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendata
- `email2`: string **required** — Should match the value provided in `email`
- `name`: string **required** — Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `reported_country`: string — Text containing 2 characters
- `reported_user_agent`: string — Text not exceeding 255 characters
- `tele`: string — Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabas
- `title`: string — Text not exceeding 255 characters
- `urls`: string **required** — A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same 
- `act`: any enum: `abuse_dmca`
- `address1`: string **required** — Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `agent_name`: string **required** — The name of the copyright holder. Text not exceeding 60 characters. This field may be released by Cloudflare to third parties such as the Lu
- `agree`: integer **required** enum: `1` — Can be `0` for false or `1` for true. Must be value: 1 for DMCA reports
- `city`: string **required** — Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `country`: string **required** — Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `host_notification`: string **required** enum: `send` — Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.
- `original_work`: string **required** — Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba
- `owner_notification`: string **required** enum: `send` — Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous.
- `signature`: string **required** — Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to 
- `state`: string **required** — Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendataba

**Response** 200 → `result`

string
