import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Spacing, FontSize } from '@/constants/theme';
import { CHANGELOG } from '@/services/changelog';
import { CURRENT_VERSION as APP_VERSION } from '@/services/version-check';

export default function ChangelogScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: t('changelog.title'), headerShown: true }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {t('changelog.subtitle', { version: APP_VERSION })}
        </Text>

        {CHANGELOG.map((entry, idx) => (
          <View key={entry.version} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={[styles.version, { color: colors.text }]}>v{entry.version}</Text>
              {idx === 0 && <Badge label={t('changelog.latest')} variant="success" />}
              <Text style={[styles.date, { color: colors.textTertiary }]}>{entry.date}</Text>
            </View>

            <Card style={styles.card}>
              {entry.highlights.length > 0 && (
                <>
                  <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
                    {t('changelog.whats_new_section')}
                  </Text>
                  {entry.highlights.map((h, i) => (
                    <View key={i} style={styles.bulletRow}>
                      <View style={[styles.bullet, { backgroundColor: colors.textTertiary }]} />
                      <Text style={[styles.bulletText, { color: colors.text }]}>{h}</Text>
                    </View>
                  ))}
                </>
              )}

              {entry.fixes && entry.fixes.length > 0 && (
                <>
                  <View style={[styles.divider, { backgroundColor: colors.borderLight }]} />
                  <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
                    {t('changelog.fixes')}
                  </Text>
                  {entry.fixes.map((f, i) => (
                    <View key={i} style={styles.bulletRow}>
                      <View style={styles.check}>
                        <Icon name="check-circle" size={14} color={colors.textTertiary} />
                      </View>
                      <Text style={[styles.bulletText, { color: colors.text }]}>{f}</Text>
                    </View>
                  ))}
                </>
              )}
            </Card>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: Spacing.lg, paddingBottom: Spacing.xxxl, gap: Spacing.xl },
  subtitle: { fontSize: FontSize.sm, paddingHorizontal: Spacing.xs },
  entry: { gap: Spacing.sm },
  entryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.xs,
  },
  version: { fontSize: FontSize.md, fontWeight: '500' },
  date: { flex: 1, textAlign: 'right', fontSize: FontSize.xs },
  card: { gap: Spacing.sm },
  sectionLabel: { fontSize: FontSize.sm, fontWeight: '500' },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.sm },
  bullet: { width: 5, height: 5, borderRadius: 3, marginTop: 8, marginHorizontal: 4 },
  check: { marginTop: 3 },
  bulletText: { flex: 1, fontSize: FontSize.sm, lineHeight: 20 },
  divider: { height: 1, marginVertical: Spacing.xs },
});
