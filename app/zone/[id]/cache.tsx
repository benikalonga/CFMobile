import { useState, useEffect, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Alert, RefreshControl } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/use-theme';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Banner, Field, Group, IconCircle, ListRow, ToggleRow } from '@/components/ui/kit';
import { Spacing, FontSize } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import { recordHappyMoment } from '@/services/review-prompt';

export default function CacheScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [purging, setPurging] = useState(false);
  const [purgingUrls, setPurgingUrls] = useState(false);
  const [urls, setUrls] = useState('');

  const [refreshing, setRefreshing] = useState(false);
  const [cacheReserve, setCacheReserve] = useState<string | null>(null);
  const [regionalTiered, setRegionalTiered] = useState<string | null>(null);
  const [clearState, setClearState] = useState<'In-progress' | 'Completed' | null>(null);
  const [clearing, setClearing] = useState(false);
  const pollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchSettings = useCallback(async () => {
    const [reserveRes, tieredRes, clearRes] = await Promise.allSettled([
      api.getCacheReserve(id),
      api.getRegionalTieredCache(id),
      api.getCacheReserveClearStatus(id),
    ]);
    if (reserveRes.status === 'fulfilled') setCacheReserve(reserveRes.value.result?.value ?? null);
    if (tieredRes.status === 'fulfilled') setRegionalTiered(tieredRes.value.result?.value ?? null);
    if (clearRes.status === 'fulfilled') setClearState(clearRes.value.result?.state ?? null);
    setRefreshing(false);
  }, [id]);

  useEffect(() => { fetchSettings(); }, [fetchSettings]);
  useEffect(() => () => { if (pollTimer.current) clearInterval(pollTimer.current); }, []);

  const toggleCacheReserve = async (value: boolean) => {
    const prev = cacheReserve;
    setCacheReserve(value ? 'on' : 'off');
    try {
      await api.updateCacheReserve(id, value ? 'on' : 'off');
    } catch (e: any) {
      setCacheReserve(prev);
      Alert.alert(t('common.error'), e?.response?.data?.errors?.[0]?.message ?? t('cache.update_error'));
    }
  };

  const toggleRegionalTiered = async (value: boolean) => {
    const prev = regionalTiered;
    setRegionalTiered(value ? 'on' : 'off');
    try {
      await api.updateRegionalTieredCache(id, value ? 'on' : 'off');
    } catch (e: any) {
      setRegionalTiered(prev);
      Alert.alert(t('common.error'), e?.response?.data?.errors?.[0]?.message ?? t('cache.update_error'));
    }
  };

  const clearReserve = () => {
    Alert.alert(t('cache.clear_reserve_title'), t('cache.clear_reserve_confirm'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('cache.clear'),
        style: 'destructive',
        onPress: async () => {
          setClearing(true);
          try {
            await api.startCacheReserveClear(id);
            setClearState('In-progress');
            pollTimer.current = setInterval(async () => {
              try {
                const res = await api.getCacheReserveClearStatus(id);
                if (res.result?.state === 'Completed') {
                  if (pollTimer.current) clearInterval(pollTimer.current);
                  setClearState('Completed');
                  setClearing(false);
                }
              } catch {
                if (pollTimer.current) clearInterval(pollTimer.current);
                setClearing(false);
              }
            }, 3000);
          } catch (e: any) {
            setClearing(false);
            Alert.alert(t('common.error'), e?.response?.data?.errors?.[0]?.message ?? t('cache.update_error'));
          }
        },
      },
    ]);
  };

  const purgeAll = () => {
    Alert.alert(
      t('cache.purge_all_title'),
      t('cache.purge_all_confirm'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('cache.purge'),
          style: 'destructive',
          onPress: async () => {
            setPurging(true);
            try {
              await api.purgeAllCache(id);
              Alert.alert(t('common.success'), t('cache.purge_all_success'));
              recordHappyMoment();
            } catch (e: any) {
              const msg = e?.response?.data?.errors?.[0]?.message ?? t('cache.purge_error');
              Alert.alert(t('common.error'), msg);
            } finally {
              setPurging(false);
            }
          },
        },
      ]
    );
  };

  const purgeByUrls = async () => {
    const urlList = urls.split('\n').map((u) => u.trim()).filter(Boolean);
    if (urlList.length === 0) {
      Alert.alert(t('common.error'), t('cache.enter_urls'));
      return;
    }
    setPurgingUrls(true);
    try {
      await api.purgeUrls(id, urlList);
      Alert.alert(t('common.success'), t('cache.purge_urls_success', { count: urlList.length }));
      recordHappyMoment();
      setUrls('');
    } catch (e: any) {
      const msg = e?.response?.data?.errors?.[0]?.message ?? t('cache.purge_error');
      Alert.alert(t('common.error'), msg);
    } finally {
      setPurgingUrls(false);
    }
  };

  const hasSettings = regionalTiered != null || cacheReserve != null;

  return (
    <>
      <Stack.Screen options={{ title: t('cache.title') }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchSettings(); }} tintColor={colors.primary} />}
      >
        {/* Cache Reserve / Regional Tiered Cache — hidden until the zone reports them */}
        {hasSettings && (
          <>
            <SectionHeader title={t('cache.settings')} />
            <Group>
              {regionalTiered != null && (
                <ToggleRow
                  icon="network"
                  title={t('cache.regional_tiered_cache')}
                  subtitle={t('cache.regional_tiered_cache_desc')}
                  value={regionalTiered === 'on'}
                  onValueChange={toggleRegionalTiered}
                />
              )}
              {cacheReserve != null && (
                <ToggleRow
                  icon="database"
                  title={t('cache.cache_reserve')}
                  subtitle={t('cache.cache_reserve_desc')}
                  value={cacheReserve === 'on'}
                  onValueChange={toggleCacheReserve}
                />
              )}
              {cacheReserve === 'on' && (
                <ListRow
                  icon="delete-sweep"
                  title={t('cache.clear_reserve_title')}
                  subtitle={t('cache.clear_reserve_desc')}
                  trailing={
                    clearState === 'In-progress' ? (
                      <Badge label={t('cache.clear_in_progress')} variant="warning" />
                    ) : (
                      <Button
                        title={t('cache.clear')}
                        onPress={clearReserve}
                        variant="secondary"
                        size="sm"
                        loading={clearing}
                      />
                    )
                  }
                />
              )}
            </Group>
          </>
        )}

        {/* Purge everything */}
        <SectionHeader title={t('cache.purge_everything')} />
        <Card style={styles.purgeCard}>
          <View style={styles.purgeHead}>
            <IconCircle name="delete-sweep" size={40} />
            <View style={styles.purgeBody}>
              <Text style={[styles.purgeTitle, { color: colors.text }]}>{t('cache.purge_all_title')}</Text>
              <Text style={[styles.purgeDesc, { color: colors.textSecondary }]}>{t('cache.purge_all_desc')}</Text>
            </View>
          </View>
          <Button
            title={t('cache.purge_everything')}
            onPress={purgeAll}
            variant="danger"
            loading={purging}
          />
        </Card>

        {/* Purge by URL */}
        <SectionHeader title={t('cache.purge_by_url')} />
        <View style={styles.urlForm}>
          <Field
            hint={t('cache.purge_urls_desc')}
            placeholder={t('cache.urls_placeholder')}
            value={urls}
            onChangeText={setUrls}
            multiline
            numberOfLines={5}
            mono
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.urlInput}
          />
          <Button
            title={t('cache.purge_urls')}
            onPress={purgeByUrls}
            variant="primary"
            loading={purgingUrls}
            style={{ marginTop: Spacing.md }}
          />
        </View>

        <View style={styles.info}>
          <Banner tone="info" message={t('cache.info')} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  purgeCard: { gap: Spacing.lg },
  purgeHead: { flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  purgeBody: { flex: 1, gap: 2 },
  purgeTitle: { fontSize: FontSize.md, fontWeight: '500' },
  purgeDesc: { fontSize: FontSize.sm, lineHeight: 18 },
  // Field brings its own top margin; pull it back so the input sits under the section title.
  urlForm: { marginTop: -Spacing.md },
  urlInput: { minHeight: 120, fontSize: FontSize.sm },
  info: { marginTop: Spacing.xl },
});
