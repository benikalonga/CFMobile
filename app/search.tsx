import { useEffect, useMemo, useRef, useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, SectionList, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon, IconName } from '@/components/ui/icon';
import { EmptyState } from '@/components/ui/empty-state';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/contexts/auth';
import { Spacing, FontSize, Radius } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import { Zone } from '@/services/types';

interface Hit {
  key: string;
  icon: IconName;
  title: string;
  subtitle: string;
  onPress: () => void;
}

interface Section {
  title: string;
  data: Hit[];
}

/** How many zones get a DNS-record lookup per query — each one is its own API call. */
const DNS_ZONE_LIMIT = 6;
const MIN_QUERY = 2;

export default function SearchScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { accountId } = useAuth();

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [zoneHits, setZoneHits] = useState<Hit[]>([]);
  const [dnsHits, setDnsHits] = useState<Hit[]>([]);
  const [services, setServices] = useState<Hit[]>([]);
  // Zones are needed for both the zone results and to know where to look for DNS records.
  const zonesRef = useRef<Zone[]>([]);
  const requestRef = useRef(0);

  // Account resources are small lists, so fetch them once and filter locally.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const zonesRes = await api.getZones(1).catch(() => null);
      if (!cancelled) zonesRef.current = zonesRes?.result ?? [];
      if (!accountId) return;

      const [workers, pages, kv, r2, d1] = await Promise.allSettled([
        api.getWorkerScripts(accountId),
        api.getPagesProjects(accountId),
        api.getKVNamespaces(accountId),
        api.getR2Buckets(accountId),
        api.getD1Databases(accountId),
      ]);
      if (cancelled) return;

      const list = <T,>(r: PromiseSettledResult<{ result: T[] }>): T[] =>
        r.status === 'fulfilled' && Array.isArray(r.value.result) ? r.value.result : [];

      setServices([
        ...list(workers).map((w): Hit => ({
          key: `worker-${w.id}`, icon: 'code', title: w.id, subtitle: 'Worker',
          onPress: () => router.push({ pathname: '/worker/[script]' as any, params: { script: w.id } }),
        })),
        ...list(pages).map((p): Hit => ({
          key: `pages-${p.name}`, icon: 'layers', title: p.name, subtitle: 'Pages',
          onPress: () => router.push({ pathname: '/pages/[project]' as any, params: { project: p.name } }),
        })),
        ...list(kv).map((n): Hit => ({
          key: `kv-${n.id}`, icon: 'key', title: n.title, subtitle: 'KV',
          onPress: () => router.push({ pathname: '/kv/[ns]' as any, params: { ns: n.id, name: n.title } }),
        })),
        ...list(r2).map((b): Hit => ({
          key: `r2-${b.name}`, icon: 'cloud', title: b.name, subtitle: 'R2',
          onPress: () => router.push({ pathname: '/r2/[bucket]' as any, params: { bucket: b.name } }),
        })),
        ...list(d1).map((d): Hit => ({
          key: `d1-${d.uuid}`, icon: 'database', title: d.name, subtitle: 'D1',
          onPress: () => router.push({ pathname: '/d1/[db]' as any, params: { db: d.uuid, name: d.name } }),
        })),
      ]);
    })();
    return () => { cancelled = true; };
  }, [accountId]);

  const q = query.trim().toLowerCase();

  // Zones and DNS records are searched server-side, debounced, newest request wins.
  useEffect(() => {
    if (q.length < MIN_QUERY) {
      setZoneHits([]);
      setDnsHits([]);
      setLoading(false);
      return;
    }
    const request = ++requestRef.current;
    setLoading(true);

    const timer = setTimeout(async () => {
      const zonesRes = await api.getZones(1, q).catch(() => null);
      if (request !== requestRef.current) return;
      const matched = zonesRes?.result ?? [];
      setZoneHits(matched.map((z): Hit => ({
        key: `zone-${z.id}`, icon: 'globe', title: z.name, subtitle: z.plan?.name ?? z.status,
        onPress: () => router.push(`/zone/${z.id}`),
      })));

      const lookIn = zonesRef.current.slice(0, DNS_ZONE_LIMIT);
      const dnsRes = await Promise.allSettled(lookIn.map((z) => api.getDnsRecords(z.id, 1, undefined, q)));
      if (request !== requestRef.current) return;
      const records: Hit[] = [];
      dnsRes.forEach((r, i) => {
        if (r.status !== 'fulfilled') return;
        for (const rec of (r.value.result ?? []).slice(0, 8)) {
          records.push({
            key: `dns-${rec.id}`,
            icon: 'dns',
            title: rec.name,
            subtitle: `${rec.type} · ${rec.content}`,
            onPress: () => router.push({
              pathname: '/zone/[id]/dns-edit' as any,
              params: { id: lookIn[i].id, recordId: rec.id },
            }),
          });
        }
      });
      setDnsHits(records);
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [q]);

  const sections = useMemo<Section[]>(() => {
    if (q.length < MIN_QUERY) return [];
    const serviceHits = services.filter((s) => s.title.toLowerCase().includes(q));
    return [
      { title: t('search.zones'), data: zoneHits },
      { title: t('search.dns_records'), data: dnsHits },
      { title: t('search.services'), data: serviceHits },
    ].filter((s) => s.data.length > 0);
  }, [q, zoneHits, dnsHits, services, t]);

  return (
    <>
      <Stack.Screen options={{ title: t('search.title') }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.searchBar, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}>
          <Icon name="search" size={18} color={colors.textTertiary} />
          <TextInput
            style={[styles.input, { color: colors.text }]}
            placeholder={t('search.placeholder')}
            placeholderTextColor={colors.textTertiary}
            value={query}
            onChangeText={setQuery}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
          />
          {loading ? (
            <ActivityIndicator size="small" color={colors.textTertiary} />
          ) : query.length > 0 ? (
            <TouchableOpacity onPress={() => setQuery('')} hitSlop={8} accessibilityLabel={t('common.cancel')}>
              <Icon name="close" size={16} color={colors.textTertiary} />
            </TouchableOpacity>
          ) : null}
        </View>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.key}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.list}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.row, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}
              onPress={item.onPress}
              activeOpacity={0.7}
            >
              <View style={[styles.rowIcon, { backgroundColor: colors.surfaceSecondary }]}>
                <Icon name={item.icon} size={16} color={colors.text} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.rowTitle, { color: colors.text }]} numberOfLines={1}>{item.title}</Text>
                <Text style={[styles.rowSub, { color: colors.textTertiary }]} numberOfLines={1}>{item.subtitle}</Text>
              </View>
              <Icon name="chevron-right" size={16} color={colors.textTertiary} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            q.length < MIN_QUERY ? (
              <EmptyState icon="search" title={t('search.hint_title')} message={t('search.hint_body')} />
            ) : loading ? null : (
              <EmptyState icon="search" title={t('search.no_results')} message={t('search.no_results_body')} />
            )
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginHorizontal: Spacing.lg,
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    height: 48,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  input: { flex: 1, fontSize: FontSize.md },
  list: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  sectionTitle: {
    fontSize: FontSize.sm,
    fontWeight: '500',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    marginLeft: Spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    borderWidth: 1,
    marginBottom: Spacing.sm,
  },
  rowIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTitle: { fontSize: FontSize.md, fontWeight: '500' },
  rowSub: { fontSize: FontSize.xs, marginTop: 2 },
});
