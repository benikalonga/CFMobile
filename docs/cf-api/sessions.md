# Sessions

9 endpoints.

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions

Fetch all sessions of an App

operationId: `GetSessions` · query: `page_no`, `per_page`, `sort_by`, `sort_order`, `start_time`, `end_time`, `participants`, `status`, `search`, `associated_id`

**Response** 200 → `result`

- `data`: object
  - `sessions`: object[]
    [array of]
    - `associated_id`: string **required** — ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the
    - `breakout_rooms`: object[]
    - `created_at`: string **required** — timestamp when session created
    - `ended_at`: string — timestamp when session ended
    - `id`: string **required** — ID of the session
    - `live_participants`: number **required** — number of participants currently in the session
    - `max_concurrent_participants`: number **required** — number of maximum participants that were in the session
    - `meeting_display_name`: string **required** — Title of the meeting this session belongs to
    - `minutes_consumed`: number **required** — number of minutes consumed since the session started
    - `organization_id`: string **required** — App id that hosted this session
    - `started_at`: string **required** — timestamp when session started
    - `status`: string **required** enum: `LIVE`, `ENDED` — current status of session
    - `type`: string **required** enum: `meeting`, `livestream`, `participant` — type of session
    - `updated_at`: string **required** — timestamp when session was last updated
- `paging`: object
  - `end_offset`: number
  - `start_offset`: number
  - `total_count`: number
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}

Fetch details of a session

operationId: `GetSessionDetails` · query: `include_breakout_rooms`

**Response** 200 → `result`

- `data`: object
  - `associated_id`: string **required** — ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the
  - `breakout_rooms`: object[]
    [array of]
    - `associated_id`: string **required** — ID of the meeting this session is associated with. In the case of V2 meetings, it is always a UUID. In V1 meetings, it is a room name of the
    - `breakout_rooms`: object[]
    - `created_at`: string **required** — timestamp when session created
    - `ended_at`: string — timestamp when session ended
    - `id`: string **required** — ID of the session
    - `live_participants`: number **required** — number of participants currently in the session
    - `max_concurrent_participants`: number **required** — number of maximum participants that were in the session
    - `meeting_display_name`: string **required** — Title of the meeting this session belongs to
    - `minutes_consumed`: number **required** — number of minutes consumed since the session started
    - `organization_id`: string **required** — App id that hosted this session
    - `started_at`: string **required** — timestamp when session started
    - `status`: string **required** enum: `LIVE`, `ENDED` — current status of session
    - `type`: string **required** enum: `meeting`, `livestream`, `participant` — type of session
    - `updated_at`: string **required** — timestamp when session was last updated
  - `created_at`: string **required** — timestamp when session created
  - `ended_at`: string — timestamp when session ended
  - `id`: string **required** — ID of the session
  - `live_participants`: number **required** — number of participants currently in the session
  - `max_concurrent_participants`: number **required** — number of maximum participants that were in the session
  - `meeting_display_name`: string **required** — Title of the meeting this session belongs to
  - `minutes_consumed`: number **required** — number of minutes consumed since the session started
  - `organization_id`: string **required** — App id that hosted this session
  - `started_at`: string **required** — timestamp when session started
  - `status`: string **required** enum: `LIVE`, `ENDED` — current status of session
  - `type`: string **required** enum: `meeting`, `livestream`, `participant` — type of session
  - `updated_at`: string **required** — timestamp when session was last updated
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/chat

Fetch all chat messages of a session

operationId: `GetSessionChat`

**Response** 200 → `result`

- `data`: object
  - `chat_download_url`: string **required** — URL where the chat logs can be downloaded
  - `chat_download_url_expiry`: string **required** — Time when the download URL will expire
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants

Fetch participants list of a session

operationId: `GetSessionParticipants` · query: `search`, `page_no`, `per_page`, `sort_order`, `sort_by`, `include_peer_events`, `view`

**Response** 200 → `result`

- `data`: object
  - `participants`: object[]
    [array of]
    - `created_at`: string — timestamp when this participant was created.
    - `custom_participant_id`: string — ID passed by client to create this participant.
    - `display_name`: string — Display name of participant when joining the session.
    - `duration`: number — number of minutes for which the participant was in the session.
    - `id`: string — Participant ID. This maps to the corresponding peerId.
    - `joined_at`: string — timestamp at which participant joined the session.
    - `left_at`: string — timestamp at which participant left the session.
    - `peer_events`: object[] — Connection lifecycle events for the participant's peer. Only included when `include_peer_events` is true.
    - `preset_name`: string — Name of the preset associated with the participant.
    - `updated_at`: string — timestamp when this participant's data was last updated.
    - `user_id`: string — User id for this participant.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}

Fetch details of a participant

operationId: `GetParticipantDetails` · query: `include_peer_events`

**Response** 200 → `result`

- `data`: object
  - `participant`: object
    - `created_at`: string — timestamp when this participant was created.
    - `custom_participant_id`: string — ID passed by client to create this participant.
    - `display_name`: string — Display name of participant when joining the session.
    - `duration`: number — number of minutes for which the participant was in the session.
    - `id`: string — Participant ID. This maps to the corresponding peerId.
    - `joined_at`: string — timestamp at which participant joined the session.
    - `left_at`: string — timestamp at which participant left the session.
    - `peer_events`: object[] — Connection lifecycle events for the participant's peer. Only included when `include_peer_events` is true.
    - `preset_name`: string — Name of the preset associated with the participant.
    - `updated_at`: string — timestamp when this participant's data was last updated.
    - `user_id`: string — User id for this participant.
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary

Fetch summary of transcripts for a session

operationId: `GetSessionSummary`

**Response** 200 → `result`

- `data`: object
  - `sessionId`: string **required**
  - `summaryDownloadUrl`: string **required** — URL where the summary of transcripts can be downloaded
  - `summaryDownloadUrlExpiry`: string **required** — Time of Expiry before when you need to download the csv file.
- `success`: boolean

## POST /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary

Generate summary of Transcripts for the session

operationId: `post-sessions-session_id-summary`

**Response** 200 → `result`

- `data`: object
  - `session_id`: string
  - `status`: string
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/transcript

Fetch the complete transcript for a session

operationId: `GetSessionTranscript` · query: `format`

**Response** 200 → `result`

- `data`: object
  - `sessionId`: string **required**
  - `transcript_download_url`: string **required** — URL where the transcript can be downloaded
  - `transcript_download_url_expiry`: string **required** — Time when the download URL will expire
- `success`: boolean

## GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}

Fetch details of peer

operationId: `GetParticipantDataFromPeerId` · query: `filters`, `include_peer_events`

**Response** 200 → `result`

- `data`: object
  - `participant`: object
    - `created_at`: string — timestamp when this participant was created.
    - `custom_participant_id`: string — ID passed by client to create this participant.
    - `display_name`: string — Display name of participant when joining the session.
    - `duration`: number — number of minutes for which the participant was in the session.
    - `id`: string — ID of the participant.
    - `joined_at`: string — timestamp at which participant joined the session.
    - `left_at`: string — timestamp at which participant left the session.
    - `peer_events`: object[] — Connection lifecycle events for the participant's peer.
    - `peer_report`: object — Peer call statistics report.
    - `role`: string — Name of the preset associated with the participant.
    - `session_id`: string
    - `updated_at`: string — timestamp when this participant's data was last updated.
    - `user_id`: string — User id for this participant.
- `success`: boolean
