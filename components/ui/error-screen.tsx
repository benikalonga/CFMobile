import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/ui/icon';
import { ErrorReportButtons } from '@/components/ui/error-report';
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';
import { logError, redact } from '@/services/error-log';

interface ErrorScreenProps {
  error: Error;
  retry: () => void;
}

/**
 * Shown instead of a blank screen when rendering throws. It sits above the
 * theme provider, so it reads the system colour scheme directly.
 */
export function ErrorScreen({ error, retry }: ErrorScreenProps) {
  const { t } = useTranslation();
  const colors = Colors[useColorScheme() === 'dark' ? 'dark' : 'light'];

  useEffect(() => {
    logError('render', error);
  }, [error]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.iconWrap, { backgroundColor: colors.error + '14' }]}>
        <Icon name="warning" size={28} color={colors.error} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>{t('report.crash_title')}</Text>
      <Text style={[styles.body, { color: colors.textSecondary }]}>{t('report.crash_body')}</Text>

      <View style={[styles.detail, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}>
        <Text style={[styles.detailText, { color: colors.textSecondary }]} selectable>
          {redact(error?.message || String(error))}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.retry, { backgroundColor: colors.primary }]}
        onPress={retry}
        activeOpacity={0.8}
      >
        <Text style={styles.retryText}>{t('common.retry')}</Text>
      </TouchableOpacity>

      <Text style={[styles.hint, { color: colors.textTertiary }]}>{t('report.choose_body')}</Text>
      <ErrorReportButtons error={error} colors={colors} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: Spacing.xl,
    gap: Spacing.md,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: { fontSize: FontSize.xl, fontWeight: '500', textAlign: 'center' },
  body: { fontSize: FontSize.sm, lineHeight: 20, textAlign: 'center' },
  detail: { borderWidth: 1, borderRadius: Radius.lg, padding: Spacing.md },
  detailText: { fontSize: FontSize.xs, fontFamily: 'monospace', lineHeight: 16 },
  retry: { height: 46, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  retryText: { color: '#FFF', fontSize: FontSize.md, fontWeight: '600' },
  hint: { fontSize: FontSize.xs, lineHeight: 16, textAlign: 'center', marginTop: Spacing.sm },
});
