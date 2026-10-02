import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { Icon } from '@/components/ui/icon';
import { useTheme, ThemeColors } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';
import { buildReport, issueUrl, mailtoUrl, SUPPORT_EMAIL } from '@/services/error-log';

function summaryOf(error: unknown): string | undefined {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return undefined;
}

/**
 * Open the user's mail app with the report filled in. The user still has to
 * press send. With no mail app installed, fall back to copying the report.
 */
export async function sendReportByEmail(t: TFunction, error?: unknown): Promise<void> {
  const report = buildReport(error, 3500);
  try {
    await Linking.openURL(mailtoUrl(report, summaryOf(error)));
  } catch {
    await Clipboard.setStringAsync(report).catch(() => {});
    Alert.alert(t('report.no_mail_title'), t('report.no_mail_body', { email: SUPPORT_EMAIL }));
  }
}

/** Open a pre-filled GitHub issue in the browser. Issues are public, so the report is redacted. */
export async function openReportIssue(t: TFunction, error?: unknown): Promise<void> {
  const report = buildReport(error, 4500);
  try {
    await Linking.openURL(issueUrl(report, summaryOf(error)));
  } catch {
    await Clipboard.setStringAsync(report).catch(() => {});
    Alert.alert(t('common.error'), t('report.copied'));
  }
}

/** Ask how the user wants to report: email, GitHub issue, or not at all. */
export function promptReport(t: TFunction, error?: unknown): void {
  Alert.alert(t('report.title'), t('report.choose_body'), [
    { text: t('common.cancel'), style: 'cancel' },
    { text: t('report.github'), onPress: () => { openReportIssue(t, error); } },
    { text: t('report.email'), onPress: () => { sendReportByEmail(t, error); } },
  ]);
}

interface ErrorReportButtonsProps {
  error?: unknown;
  /** Pass colours when rendering outside the theme provider (the root error screen). */
  colors?: ThemeColors;
}

/** "Send email" and "Open GitHub issue" side by side, for error cards and the crash screen. */
export function ErrorReportButtons({ error, colors: override }: ErrorReportButtonsProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = override ?? theme.colors;

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.border, backgroundColor: colors.surface }]}
        onPress={() => sendReportByEmail(t, error)}
        activeOpacity={0.7}
      >
        <Icon name="mail" size={15} color={colors.text} />
        <Text style={[styles.label, { color: colors.text }]} numberOfLines={1}>{t('report.email')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderColor: colors.border, backgroundColor: colors.surface }]}
        onPress={() => openReportIssue(t, error)}
        activeOpacity={0.7}
      >
        <Icon name="code" size={15} color={colors.text} />
        <Text style={[styles.label, { color: colors.text }]} numberOfLines={1}>{t('report.github')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: Spacing.sm },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    height: 40,
    paddingHorizontal: Spacing.md,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  label: { fontSize: FontSize.sm, fontWeight: '500', flexShrink: 1 },
});
