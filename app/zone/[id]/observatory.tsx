import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList, RefreshControl, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/ui/icon';
import { useTheme, ThemeColors } from '@/hooks/use-theme';
import { Card } from '@/components/ui/card';
import { Loading } from '@/components/ui/loading';
import { EmptyState } from '@/components/ui/empty-state';
import { Spacing, FontSize } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import { ObservatoryPage, ObservatoryReport } from '@/services/cloudflare';

// The score ring reports state: good / needs work / poor.
function scoreColor(score: number | undefined, colors: ThemeColors): string {
  if (score === undefined || score === null) return colors.textTertiary;
  if (score >= 90) return colors.success;
  if (score >= 50) return colors.warning;
  return colors.error;
}

function formatMetric(ms: number | undefined): string {
  if (ms === undefined || ms === null) return '—';
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`;
  return `${Math.round(ms)}ms`;
}

function Metric({ label, value, unit }: { label: string; value: number | undefined; unit?: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.metric}>
      <Text style={[styles.metricValue, { color: colors.text }]} numberOfLines={1}>
        {unit === 'score' ? (value ?? '—') : formatMetric(value)}
      </Text>
      <Text style={[styles.metricLabel, { color: colors.textTertiary }]}>{label}</Text>
    </View>
  );
}

export default function ObservatoryScreen() {
  const { id: zoneId } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [pages, setPages] = useState<ObservatoryPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPages = useCallback(async () => {
    try {
      const res = await api.getObservatoryPages(zoneId);
      setPages(res.result ?? []);
    } catch { /* silent */ }
    finally { setLoading(false); setRefreshing(false); }
  }, [zoneId]);

  useEffect(() => { fetchPages(); }, [fetchPages]);

  const handleDelete = (page: ObservatoryPage) => {
    Alert.alert(t('obs.delete_title'), t('obs.delete_confirm', { url: page.url ?? page.id }), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('common.delete'), style: 'destructive', onPress: async () => {
        try { await api.deleteObservatoryPage(zoneId, page.id); setPages((p) => p.filter((x) => x.id !== page.id)); }
        catch { Alert.alert(t('common.error'), t('obs.delete_error')); }
      }},
    ]);
  };

  const getLatestReport = (page: ObservatoryPage): ObservatoryReport | undefined => {
    const test = page.tests?.[0];
    return test?.mobileReport ?? test?.desktopReport;
  };

  const renderPage = ({ item }: { item: ObservatoryPage }) => {
    const report = getLatestReport(item);
    const score = report?.performanceScore;
    const tint = scoreColor(score, colors);
    return (
      <Card style={styles.pageCard}>
        <View style={styles.pageHeader}>
          <View style={[styles.scoreCircle, { borderColor: tint }]}>
            <Text style={[styles.scoreText, { color: tint }]}>{score ?? '—'}</Text>
          </View>
          <View style={styles.pageBody}>
            <Text style={[styles.pageUrl, { color: colors.text }]} numberOfLines={1}>{item.url ?? item.id}</Text>
            <Text style={[styles.pageMeta, { color: colors.textSecondary }]} numberOfLines={1}>
              {item.region?.label ?? '—'} · {report?.state ?? t('obs.no_tests')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handleDelete(item)}
            hitSlop={10}
            style={styles.iconButton}
            accessibilityRole="button"
            accessibilityLabel={t('common.delete')}
          >
            <Icon name="trash" size={16} color={colors.textTertiary} />
          </TouchableOpacity>
        </View>
        {report && (
          <View style={[styles.metricsRow, { borderTopColor: colors.borderLight }]}>
            <Metric label="FCP" value={report.fcp} />
            <Metric label="LCP" value={report.lcp} />
            <Metric label="CLS" value={report.cls} />
            <Metric label="TBT" value={report.tbt} />
            <Metric label="SI" value={report.si} />
          </View>
        )}
      </Card>
    );
  };

  if (loading) return <Loading />;

  return (
    <>
      <Stack.Screen options={{ title: t('obs.title') }} />
      <FlatList
        data={pages}
        keyExtractor={(item) => item.id}
        renderItem={renderPage}
        contentContainerStyle={styles.list}
        style={{ backgroundColor: colors.background }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchPages(); }} tintColor={colors.primary} />}
        ListEmptyComponent={<EmptyState icon="chart-line" title={t('obs.no_pages')} message={t('obs.no_pages_message')} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  pageCard: { marginBottom: Spacing.sm },
  pageHeader: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  pageBody: { flex: 1, gap: 2 },
  scoreCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: { fontSize: FontSize.md, fontWeight: '500' },
  pageUrl: { fontSize: FontSize.md, fontWeight: '500' },
  pageMeta: { fontSize: FontSize.sm },
  iconButton: { padding: 4 },
  metricsRow: {
    flexDirection: 'row',
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    gap: Spacing.xs,
  },
  metric: { flex: 1, alignItems: 'center', gap: 2 },
  metricValue: { fontSize: FontSize.sm, fontWeight: '500' },
  metricLabel: { fontSize: FontSize.xs },
});
