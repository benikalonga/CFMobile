import { useState, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon, IconName } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconCircle } from '@/components/ui/kit';
import { Spacing, FontSize, Radius } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import * as ai from '@/services/ai';
import { AuditResult, AuditFinding, AiError } from '@/services/ai';
import { recordHappyMoment } from '@/services/review-prompt';
import { AiPaywall } from '@/components/ui/ai-paywall';
import { ErrorReportButtons } from '@/components/ui/error-report';
import { track } from '@/services/analytics';
import i18n from '@/i18n';

type Tone = 'neutral' | 'success' | 'warning' | 'error';

export default function AiAuditScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [result, setResult] = useState<AuditResult | null>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<{ code: string; message: string } | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  const runAudit = useCallback(async () => {
    setRunning(true);
    setError(null);
    track('ai_audit_start');
    try {
      // Gather zone facts locally, then let the worker do the reasoning.
      const [zoneRes, settingsRes, dnsRes] = await Promise.all([
        api.getZone(id),
        api.getZoneSettings(id).catch(() => ({ result: [] as any[] })),
        api.getDnsRecords(id, 1).catch(() => ({ result: [] as any[] })),
      ]);

      const settings: Record<string, unknown> = {};
      for (const s of settingsRes.result ?? []) settings[s.id] = s.value;

      const records = dnsRes.result ?? [];
      const dnsSummary = records.slice(0, 60).map((r: any) => ({
        type: r.type,
        proxied: !!r.proxied,
        name: r.name,
      }));
      const txt = records.filter((r: any) => r.type === 'TXT');
      const hasSpf = txt.some((r: any) => String(r.content).toLowerCase().includes('v=spf1'));
      const hasDmarc = txt.some((r: any) => String(r.name).toLowerCase().startsWith('_dmarc'));

      let threats24h = 0;
      try {
        const end = new Date();
        const start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
        const a = await api.getZoneAnalytics(
          id,
          start.toISOString().split('T')[0],
          end.toISOString().split('T')[0]
        );
        threats24h = a.totals.threats.all;
      } catch {
        // analytics optional
      }

      const res = await ai.auditZone({
        zoneName: zoneRes.result?.name ?? id,
        settings,
        dnsSummary,
        hasDmarc,
        hasSpf,
        threats24h,
        language: i18n.language,
      });
      setResult(res);
      recordHappyMoment();
    } catch (e: any) {
      if (e instanceof AiError) {
        setError({ code: e.code, message: e.message });
        if (e.code === 'quota' || e.code === 'auth') setShowPaywall(true);
      } else {
        setError({ code: 'server', message: e?.message ?? 'Audit failed' });
      }
    } finally {
      setRunning(false);
    }
  }, [id]);

  // Severity is a state, so findings keep a status tone; plain info stays neutral.
  const sevTone = (s: AuditFinding['severity']): Tone =>
    s === 'critical' ? 'error' : s === 'warning' ? 'warning' : s === 'ok' ? 'success' : 'neutral';
  const sevIcon = (s: AuditFinding['severity']): IconName =>
    s === 'critical' ? 'error-circle' : s === 'warning' ? 'warning' : s === 'ok' ? 'check-circle' : 'info';

  const scoreColor = (score: number) =>
    score >= 80 ? colors.success : score >= 55 ? colors.warning : colors.error;

  const needsPlan = error?.code === 'quota' || error?.code === 'auth';

  return (
    <>
      <Stack.Screen options={{ title: t('ai.audit_title') }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {!result && !running && !error && (
          <View style={styles.intro}>
            <View style={styles.introIcon}>
              <IconCircle name="shield-check" size={80} />
            </View>
            <Text style={[styles.introTitle, { color: colors.text }]}>{t('ai.audit_intro_title')}</Text>
            <Text style={[styles.introBody, { color: colors.textSecondary }]}>{t('ai.audit_intro_body')}</Text>
            <Button
              title={t('ai.run_audit')}
              onPress={runAudit}
              size="lg"
              icon={<Icon name="zap" size={18} color="#FFF" />}
              style={styles.runBtn}
            />
            <Text style={[styles.note, { color: colors.textTertiary }]}>{t('ai.privacy_note')}</Text>
          </View>
        )}

        {running && (
          <View style={styles.intro}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.introTitle, { color: colors.text, marginTop: Spacing.lg }]}>
              {t('ai.analyzing')}
            </Text>
            <Text style={[styles.introBody, { color: colors.textSecondary }]}>{t('ai.analyzing_sub')}</Text>
          </View>
        )}

        {error && (
          <Card style={styles.errorCard}>
            <IconCircle name="error-circle" tone="error" />
            <View style={styles.errorBodyWrap}>
              <Text style={[styles.errorTitle, { color: colors.text }]}>
                {error.code === 'quota' ? t('ai.quota_title') : error.code === 'auth' ? t('ai.sub_title') : t('common.error')}
              </Text>
              <Text style={[styles.errorBody, { color: colors.textSecondary }]}>
                {error.code === 'quota' ? t('ai.quota_body') : error.code === 'auth' ? t('ai.sub_body') : error.message}
              </Text>
              {needsPlan && (
                <Button
                  title={t('ai.see_plans')}
                  onPress={() => setShowPaywall(true)}
                  size="sm"
                  style={styles.smallBtn}
                />
              )}
              {!needsPlan && (
                <>
                  <Button title={t('common.retry')} onPress={runAudit} size="sm" style={styles.smallBtn} />
                  <Text style={[styles.reportHint, { color: colors.textTertiary }]}>{t('report.inline_hint')}</Text>
                  <ErrorReportButtons error={error.message} />
                </>
              )}
            </View>
          </Card>
        )}

        {result && (
          <>
            <Card style={styles.scoreCard}>
              <View style={[styles.scoreRing, { borderColor: scoreColor(result.score) }]}>
                <Text style={[styles.scoreNum, { color: scoreColor(result.score) }]}>{result.score}</Text>
                <Text style={[styles.scoreMax, { color: colors.textTertiary }]}>/100</Text>
              </View>
              <Text style={[styles.summary, { color: colors.text }]}>{result.summary}</Text>
            </Card>

            {result.findings.map((f, i) => (
              <Card key={i} style={styles.findingCard}>
                <IconCircle name={sevIcon(f.severity)} tone={sevTone(f.severity)} />
                <View style={styles.findingBody}>
                  <Text style={[styles.findingTitle, { color: colors.text }]}>{f.title}</Text>
                  <Text style={[styles.findingDetail, { color: colors.textSecondary }]}>{f.detail}</Text>
                  {!!f.action && (
                    <View style={[styles.actionBox, { backgroundColor: colors.surfaceSecondary }]}>
                      <Icon name="zap" size={14} color={colors.textSecondary} />
                      <Text style={[styles.actionText, { color: colors.text }]}>{f.action}</Text>
                    </View>
                  )}
                </View>
              </Card>
            ))}

            <Button
              title={t('ai.rerun')}
              onPress={runAudit}
              size="lg"
              icon={<Icon name="refresh" size={18} color="#FFF" />}
              style={styles.rerunBtn}
            />
            <Text style={[styles.note, { color: colors.textTertiary }]}>{t('ai.disclaimer')}</Text>
          </>
        )}
      </ScrollView>

      <AiPaywall
        visible={showPaywall}
        reason="quota"
        onClose={() => setShowPaywall(false)}
        onSubscribed={() => { setShowPaywall(false); runAudit(); }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  intro: { alignItems: 'center', paddingVertical: Spacing.xxxl, gap: Spacing.sm },
  introIcon: { marginBottom: Spacing.sm },
  introTitle: { fontSize: FontSize.xl, fontWeight: '500', textAlign: 'center', letterSpacing: -0.2 },
  introBody: { fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20, paddingHorizontal: Spacing.md },
  runBtn: { marginTop: Spacing.lg, paddingHorizontal: Spacing.xxl },
  rerunBtn: { marginTop: Spacing.sm },
  note: { fontSize: FontSize.xs, textAlign: 'center', lineHeight: 16, marginTop: Spacing.md },

  errorCard: { flexDirection: 'row', gap: Spacing.md },
  errorBodyWrap: { flex: 1 },
  errorTitle: { fontSize: FontSize.md, fontWeight: '500' },
  errorBody: { fontSize: FontSize.sm, marginTop: 4, lineHeight: 18 },
  smallBtn: { alignSelf: 'flex-start', marginTop: Spacing.md },
  reportHint: { fontSize: FontSize.xs, marginTop: Spacing.md, marginBottom: Spacing.sm },

  scoreCard: { alignItems: 'center', gap: Spacing.md, padding: Spacing.xl, marginBottom: Spacing.sm },
  scoreRing: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreNum: { fontSize: 36, fontWeight: '400', letterSpacing: -1 },
  scoreMax: { fontSize: FontSize.xs, marginTop: -2 },
  summary: { fontSize: FontSize.sm, textAlign: 'center', lineHeight: 20 },

  findingCard: { flexDirection: 'row', gap: Spacing.md, marginBottom: Spacing.sm },
  findingBody: { flex: 1 },
  findingTitle: { fontSize: FontSize.md, fontWeight: '500' },
  findingDetail: { fontSize: FontSize.sm, marginTop: 3, lineHeight: 18 },
  actionBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    padding: Spacing.sm,
    borderRadius: Radius.md,
    marginTop: Spacing.sm,
  },
  actionText: { flex: 1, fontSize: FontSize.sm, fontWeight: '500', lineHeight: 18 },
});
