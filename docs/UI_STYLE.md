# UI style

The look is calm and neutral: a grey canvas, white cards with a hairline
border, one accent colour, light type. Colour means state, never decoration.
Every screen is built from the same few parts so the app reads as one product.

Reference screens (copy their structure): `app/(tabs)/index.tsx` (dashboard),
`app/zone/[id]/index.tsx` (grouped controls + tile grid), `app/zone/[id]/dns.tsx`
(search, filter chips, list, FAB, action sheet), `app/(tabs)/ai-chat.tsx`.

## Tokens

All from `constants/theme.ts` and `useTheme()`. Never hard-code a hex colour
except `#FFF` for text on the accent.

- Canvas `colors.background`; cards `colors.surface` with `borderWidth: 1`,
  `borderColor: colors.borderLight`, `borderRadius: Radius.lg`. No shadows or
  `elevation` on cards.
- Text: `colors.text` (primary), `colors.textSecondary` (supporting),
  `colors.textTertiary` (metadata, placeholders).
- Accent `colors.primary` only for: the primary button, the active chip or tab,
  links, a switch that is on, the proxied-cloud icon. Nothing else.
- `colors.success` / `colors.warning` / `colors.error` only when reporting a
  state (active, pending, failed, destructive). Never as a decorative icon tint.
- No per-item rainbow colours (`'#8B5CF6'`, `'#EC4899'`, …) on icons, tiles or
  borders. Icons sit in a neutral `IconCircle`.

## Type

- Screen title: set by the navigator. Do not add a second title in the body.
- Section title: `SectionHeader` (15, weight 500, sentence case). No
  `textTransform: 'uppercase'`, no letter-spaced labels.
- Row title 15 / 500. Supporting text 13 / 400. Metadata 11 / 400.
- Big numbers: 24–26, weight 400, slight negative letter spacing.
- Weights used: 400, 500, 600. 600 only for button labels and small badges.
  Never 700/800/900.
- Machine values (IPs, hostnames, ids, expressions, tokens): `fontFamily: 'monospace'`, 12–13.

## Layout

- Screen body: `padding: Spacing.lg`, `paddingBottom: Spacing.xxxl`
  (or `insets.bottom + 96` when a `Fab` is present).
- 8 between cards in a list, 16–20 between sections.
- Round things are fully round: icon holders are circles, chips and buttons are
  pills (`Radius.full`). Cards are `Radius.lg`, inputs `Radius.md`.
- Touch targets at least 40 high.

## Parts (`components/ui/`)

| Need | Use |
|---|---|
| Card | `Card` |
| Several related rows in one card | `Group` + `ListRow` / `ToggleRow` / `ValueRow` (`kit.tsx`) |
| A stand-alone list item | `Card` containing a `ListRow`, or `ListRow` inside a bordered `View` |
| Icon holder | `IconCircle` (neutral unless it reports state) |
| Filter / pick-one | `ChipRow` (scrolling above a list, `wrap` inside a form) |
| Search | `SearchBar` |
| Number tiles | `StatCard` in a row |
| Status label | `Badge` (`success` / `warning` / `error` / `info` / `default`) |
| Section title (+ small action on the right) | `SectionHeader` |
| Primary action on a list screen | `Fab` ("Add …") |
| Secondary screen actions | `HeaderButton` in `headerRight`; more than two → one `menu` button opening a `Sheet` of `ListRow`s |
| Editor / form / action menu | `Sheet` with `Field`, `FieldLabel`, `ChipRow wrap`, and a `Button` in `footer` |
| Buttons | `Button` (`primary`, `secondary`, `danger`, `ghost`) |
| Inline error | `Banner` |
| Nothing to show | `EmptyState` |
| Loading | `Loading` |

Do not hand-roll a modal, a chip, a search box, a switch row or an icon square
when one of these fits. Hand-written `StyleSheet` entries are for layout that
is specific to the screen.

## Patterns

- **List screen:** optional `SearchBar`, optional `ChipRow`, then a `FlatList`
  of rows; `Fab` to add; edit by tapping a row (opens a `Sheet`); delete inside
  the sheet or behind a small grey trash icon, always through `Alert.alert`
  with a `destructive` button.
- **Settings-like screen:** `SectionHeader` + `Group` of `ToggleRow` /
  `ListRow` / `ValueRow`.
- **Detail screen:** a header card (name, `Badge`, a few `ValueRow`s), then
  sections.
- **Destructive rows** use `colors.error` for the label, not a red card.
- A bar of several coloured buttons at the bottom of a screen is never the
  answer: one `Fab` plus a header menu.

## Do not change while restyling

API calls, state, effects, navigation targets, translation keys (`t('…')`
strings stay as they are; add no new keys), permission checks, premium gates,
optimistic-update logic. Restyling changes JSX structure and styles only.
`npx tsc --noEmit` must stay clean (zero errors).
