import {
  ScrollView, StyleProp, StyleSheet, Switch, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon, IconName } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';

/**
 * Small building blocks shared by every screen, so lists, filters, forms and
 * actions look the same everywhere. See docs/UI_STYLE.md for when to use each.
 */

// ─── IconCircle ──────────────────────────────────────────────────────────────

interface IconCircleProps {
  name: IconName;
  size?: number;
  /** 'neutral' (default) for decoration; a status tone only when the icon reports state. */
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'error';
}

/** Round icon holder. Neutral grey by default — colour is reserved for state. */
export function IconCircle({ name, size = 36, tone = 'neutral' }: IconCircleProps) {
  const { colors } = useTheme();
  const tint =
    tone === 'accent' ? colors.primary
      : tone === 'success' ? colors.success
        : tone === 'warning' ? colors.warning
          : tone === 'error' ? colors.error
            : null;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tint ? tint + '18' : colors.surfaceSecondary,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.48)} color={tint ?? colors.text} />
    </View>
  );
}

// ─── Chips ───────────────────────────────────────────────────────────────────

interface ChipProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active, onPress }: ChipProps) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
      style={[
        styles.chip,
        {
          backgroundColor: active ? colors.primary : colors.surface,
          borderColor: active ? colors.primary : colors.borderLight,
        },
      ]}
    >
      <Text style={[styles.chipText, { color: active ? '#FFF' : colors.textSecondary }]} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

interface ChipOption<T extends string> {
  value: T;
  label: string;
}

interface ChipRowProps<T extends string> {
  options: ChipOption<T>[];
  value: T;
  onChange: (value: T) => void;
  /** Horizontal scroll (filters above a list) or wrap onto several lines (inside a form). */
  wrap?: boolean;
  style?: StyleProp<ViewStyle>;
}

/** Single-choice chip group: filters, ranges, pick-one fields. */
export function ChipRow<T extends string>({ options, value, onChange, wrap, style }: ChipRowProps<T>) {
  if (wrap) {
    return (
      <View style={[styles.chipWrap, style]}>
        {options.map((o) => (
          <Chip key={o.value} label={o.label} active={o.value === value} onPress={() => onChange(o.value)} />
        ))}
      </View>
    );
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      // flexGrow 0 stops a list below from squeezing the row and clipping the chips.
      style={[{ flexGrow: 0, flexShrink: 0 }, style]}
      contentContainerStyle={styles.chipScroll}
    >
      {options.map((o) => (
        <Chip key={o.value} label={o.label} active={o.value === value} onPress={() => onChange(o.value)} />
      ))}
    </ScrollView>
  );
}

// ─── SearchBar ───────────────────────────────────────────────────────────────

interface SearchBarProps extends Pick<TextInputProps, 'onSubmitEditing' | 'autoFocus'> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

export function SearchBar({ value, onChangeText, placeholder, style, ...rest }: SearchBarProps) {
  const { colors } = useTheme();
  return (
    <View style={[styles.search, { backgroundColor: colors.surface, borderColor: colors.borderLight }, style]}>
      <Icon name="search" size={18} color={colors.textTertiary} />
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textTertiary}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        {...rest}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')} hitSlop={8} accessibilityRole="button" accessibilityLabel="Clear">
          <Icon name="close" size={16} color={colors.textTertiary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

// ─── Group + rows ────────────────────────────────────────────────────────────

/** One bordered card holding several rows separated by hairlines. Wrap ListRow / ToggleRow / ValueRow in it. */
export function Group({ children, style }: { children: React.ReactNode; style?: StyleProp<ViewStyle> }) {
  const { colors } = useTheme();
  const rows = (Array.isArray(children) ? children.flat() : [children]).filter(Boolean);
  return (
    <View style={[styles.group, { backgroundColor: colors.surface, borderColor: colors.borderLight }, style]}>
      {rows.map((child, i) => (
        <View key={i} style={i > 0 ? { borderTopWidth: 1, borderTopColor: colors.borderLight } : undefined}>
          {child}
        </View>
      ))}
    </View>
  );
}

interface ListRowProps {
  title: string;
  subtitle?: string;
  /** Third line, smaller and lighter — metadata such as dates or ids. */
  meta?: string;
  icon?: IconName;
  iconTone?: IconCircleProps['tone'];
  /** Custom leading element instead of an icon (a type badge, an avatar). */
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  /** Show a chevron. Defaults to true when onPress is set and there is no trailing element. */
  chevron?: boolean;
  mono?: boolean;
}

/** Standard list row: leading icon, title, optional subtitle and meta, trailing element or chevron. */
export function ListRow({
  title, subtitle, meta, icon, iconTone, leading, trailing, onPress, onLongPress, chevron, mono,
}: ListRowProps) {
  const { colors } = useTheme();
  const showChevron = chevron ?? (!!onPress && trailing === undefined);
  const Wrapper: any = onPress || onLongPress ? TouchableOpacity : View;
  return (
    <Wrapper
      {...(onPress || onLongPress ? { onPress, onLongPress, activeOpacity: 0.7 } : {})}
      style={styles.row}
    >
      {leading ?? (icon ? <IconCircle name={icon} tone={iconTone} /> : null)}
      <View style={styles.rowBody}>
        <Text style={[styles.rowTitle, { color: colors.text }]} numberOfLines={1}>{title}</Text>
        {!!subtitle && (
          <Text
            style={[styles.rowSub, { color: colors.textSecondary }, mono && styles.mono]}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        )}
        {!!meta && <Text style={[styles.rowMeta, { color: colors.textTertiary }]} numberOfLines={1}>{meta}</Text>}
      </View>
      {trailing}
      {showChevron && <Icon name="chevron-right" size={16} color={colors.textTertiary} />}
    </Wrapper>
  );
}

interface ToggleRowProps {
  title: string;
  subtitle?: string;
  icon?: IconName;
  iconTone?: IconCircleProps['tone'];
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

/** A setting with a switch. */
export function ToggleRow({ title, subtitle, icon, iconTone, value, onValueChange, disabled }: ToggleRowProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.row}>
      {icon ? <IconCircle name={icon} tone={iconTone} /> : null}
      <View style={styles.rowBody}>
        <Text style={[styles.rowTitle, { color: colors.text }]}>{title}</Text>
        {!!subtitle && <Text style={[styles.rowSub, { color: colors.textSecondary }]}>{subtitle}</Text>}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        trackColor={{ true: colors.primary, false: colors.border }}
        thumbColor="#FFF"
      />
    </View>
  );
}

/** Label on the left, value on the right — read-only facts. */
export function ValueRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.row, styles.valueRow]}>
      <Text style={[styles.valueLabel, { color: colors.textSecondary }]} numberOfLines={1}>{label}</Text>
      <Text style={[styles.valueText, { color: colors.text }, mono && styles.mono]} numberOfLines={2} selectable>
        {value}
      </Text>
    </View>
  );
}

// ─── Stat ────────────────────────────────────────────────────────────────────

/** Small label above a large light number. Put several in a row with flex: 1. */
export function StatCard({ label, value, hint, style }: { label: string; value: string; hint?: string; style?: StyleProp<ViewStyle> }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.stat, { backgroundColor: colors.surface, borderColor: colors.borderLight }, style]}>
      <Text style={[styles.statLabel, { color: colors.textTertiary }]} numberOfLines={1}>{label}</Text>
      <Text style={[styles.statValue, { color: colors.text }]} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
      {!!hint && <Text style={[styles.statHint, { color: colors.textTertiary }]} numberOfLines={1}>{hint}</Text>}
    </View>
  );
}

// ─── Form field ──────────────────────────────────────────────────────────────

interface FieldProps extends TextInputProps {
  label?: string;
  hint?: string;
  mono?: boolean;
}

/** Labelled text input for sheets and forms. */
export function Field({ label, hint, mono, style, multiline, ...props }: FieldProps) {
  const { colors } = useTheme();
  return (
    <View style={styles.field}>
      {!!label && <Text style={[styles.fieldLabel, { color: colors.textSecondary }]}>{label}</Text>}
      <TextInput
        placeholderTextColor={colors.textTertiary}
        multiline={multiline}
        style={[
          styles.fieldInput,
          { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text },
          multiline && styles.fieldMultiline,
          mono && styles.mono,
          style,
        ]}
        {...props}
      />
      {!!hint && <Text style={[styles.fieldHint, { color: colors.textTertiary }]}>{hint}</Text>}
    </View>
  );
}

/** Label above any custom control (a ChipRow, a picker) so it lines up with Field. */
export function FieldLabel({ children }: { children: string }) {
  const { colors } = useTheme();
  return <Text style={[styles.fieldLabel, { color: colors.textSecondary, marginTop: Spacing.md }]}>{children}</Text>;
}

// ─── Feedback ────────────────────────────────────────────────────────────────

/** Inline error or notice card. */
export function Banner({ message, tone = 'error' }: { message: string; tone?: 'error' | 'warning' | 'info' }) {
  const { colors } = useTheme();
  const tint = tone === 'error' ? colors.error : tone === 'warning' ? colors.warning : colors.info;
  return (
    <View style={[styles.banner, { backgroundColor: tint + '12', borderColor: tint + '40' }]}>
      <Icon name={tone === 'info' ? 'info' : tone === 'warning' ? 'warning' : 'error-circle'} size={16} color={tint} />
      <Text style={[styles.bannerText, { color: colors.text }]}>{message}</Text>
    </View>
  );
}

// ─── Fab ─────────────────────────────────────────────────────────────────────

/** Floating primary action, bottom right. Give the list paddingBottom of about 96 so the last row clears it. */
export function Fab({ label, icon = 'plus', onPress }: { label: string; icon?: IconName; onPress: () => void }) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <TouchableOpacity
      style={[styles.fab, { backgroundColor: colors.primary, bottom: insets.bottom + Spacing.lg }]}
      onPress={onPress}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <Icon name={icon} size={18} color="#FFF" />
      <Text style={styles.fabText} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 34,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: { fontSize: FontSize.sm, fontWeight: '500' },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm },
  chipScroll: { gap: Spacing.sm, alignItems: 'center' },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    height: 46,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  searchInput: { flex: 1, fontSize: FontSize.md },

  group: { borderRadius: Radius.lg, borderWidth: 1, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 13,
  },
  rowBody: { flex: 1, gap: 2 },
  rowTitle: { fontSize: FontSize.md, fontWeight: '500' },
  rowSub: { fontSize: FontSize.sm, lineHeight: 18 },
  rowMeta: { fontSize: FontSize.xs },
  mono: { fontFamily: 'monospace' },
  valueRow: { justifyContent: 'space-between' },
  valueLabel: { fontSize: FontSize.sm, flexShrink: 0 },
  valueText: { fontSize: FontSize.sm, fontWeight: '500', flexShrink: 1, textAlign: 'right' },

  stat: { flex: 1, padding: Spacing.md, borderRadius: Radius.lg, borderWidth: 1, gap: 4 },
  statLabel: { fontSize: FontSize.xs },
  statValue: { fontSize: 24, fontWeight: '400', letterSpacing: -0.4 },
  statHint: { fontSize: FontSize.xs },

  field: { marginTop: Spacing.md, gap: 6 },
  fieldLabel: { fontSize: FontSize.sm, fontWeight: '500' },
  fieldInput: {
    borderWidth: 1,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 11,
    fontSize: FontSize.md,
  },
  fieldMultiline: { minHeight: 88, textAlignVertical: 'top' },
  fieldHint: { fontSize: FontSize.xs, lineHeight: 16 },

  banner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
  },
  bannerText: { flex: 1, fontSize: FontSize.sm, lineHeight: 18 },

  fab: {
    position: 'absolute',
    right: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 50,
    paddingHorizontal: Spacing.xl,
    borderRadius: Radius.full,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 6,
  },
  fabText: { color: '#FFF', fontSize: FontSize.md, fontWeight: '600' },
});
