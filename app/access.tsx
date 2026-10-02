import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, RefreshControl, TouchableOpacity, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon, IconName } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { Loading } from '@/components/ui/loading';
import { EmptyState } from '@/components/ui/empty-state';
import { Badge } from '@/components/ui/badge';
import { ChipRow, ListRow } from '@/components/ui/kit';
import { useAuth } from '@/contexts/auth';
import { Spacing, Radius } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import { AccessApp, AccessIdP, AccessToken } from '@/services/cloudflare';

type Tab = 'apps' | 'idps' | 'tokens';

export default function AccessScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { accountId } = useAuth();
  const [tab, setTab] = useState<Tab>('apps');
  const [apps, setApps] = useState<AccessApp[]>([]);
  const [idps, setIdps] = useState<AccessIdP[]>([]);
  const [tokens, setTokens] = useState<AccessToken[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAll = useCallback(async () => {
    if (!accountId) { setLoading(false); return; }
    const [a, i, t] = await Promise.allSettled([
      api.getAccessApps(accountId),
      api.getAccessIdPs(accountId),
      api.getAccessTokens(accountId),
    ]);
    if (a.status === 'fulfilled') setApps(a.value.result ?? []);
    if (i.status === 'fulfilled') setIdps(i.value.result ?? []);
    if (t.status === 'fulfilled') setTokens(t.value.result ?? []);
    setLoading(false);
    setRefreshing(false);
  }, [accountId]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const deleteApp = (app: AccessApp) => {
    if (!accountId) return;
    Alert.alert(t('access.delete_title'), t('access.delete_confirm', { name: app.name }), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('common.delete'), style: 'destructive', onPress: async () => {
        try { await api.deleteAccessApp(accountId, app.id); setApps((p) => p.filter((x) => x.id !== app.id)); }
        catch { Alert.alert(t('common.error'), t('access.delete_error')); }
      }},
    ]);
  };

  const deleteIdP = (idp: AccessIdP) => {
    if (!accountId) return;
    Alert.alert(t('access.delete_title'), t('access.delete_confirm', { name: idp.name }), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('common.delete'), style: 'destructive', onPress: async () => {
        try { await api.deleteAccessIdP(accountId, idp.id); setIdps((p) => p.filter((x) => x.id !== idp.id)); }
        catch { Alert.alert(t('common.error'), t('access.delete_error')); }
      }},
    ]);
  };

  const deleteToken = (tok: AccessToken) => {
    if (!accountId) return;
    Alert.alert(t('access.delete_title'), t('access.delete_confirm', { name: tok.name }), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('common.delete'), style: 'destructive', onPress: async () => {
        try { await api.deleteAccessToken(accountId, tok.id); setTokens((p) => p.filter((x) => x.id !== tok.id)); }
        catch { Alert.alert(t('common.error'), t('access.delete_error')); }
      }},
    ]);
  };

  if (loading) return <Loading />;

  const refreshControl = (
    <RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); fetchAll(); }} tintColor={colors.primary} />
  );

  // One row shape for all three lists: neutral icon, name, detail, optional type badge, grey delete.
  const row = (icon: IconName, title: string, subtitle: string, onDelete: () => void, badge?: string) => (
    <View style={[styles.item, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}>
      <ListRow
        icon={icon}
        title={title}
        subtitle={subtitle}
        trailing={
          <>
            {!!badge && (
              <View>
                <Badge label={badge} variant="default" />
              </View>
            )}
            <TouchableOpacity
              onPress={onDelete}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel={t('common.delete')}
            >
              <Icon name="trash" size={16} color={colors.textTertiary} />
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );

  return (
    <>
      <Stack.Screen options={{ title: t('access.title') }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.tabs}>
          <ChipRow
            value={tab}
            onChange={setTab}
            options={[
              { value: 'apps', label: `${t('access.tab_apps')} (${apps.length})` },
              { value: 'idps', label: `${t('access.tab_idps')} (${idps.length})` },
              { value: 'tokens', label: `${t('access.tab_tokens')} (${tokens.length})` },
            ]}
          />
        </View>

        {tab === 'apps' && (
          <FlatList
            data={apps}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => row('shield', item.name, item.domain, () => deleteApp(item), item.type ?? 'self_hosted')}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={refreshControl}
            ListEmptyComponent={<EmptyState icon="shield" title={t('access.no_apps')} message={t('access.no_apps_message')} />}
          />
        )}

        {tab === 'idps' && (
          <FlatList
            data={idps}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => row('user', item.name, item.type, () => deleteIdP(item))}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={refreshControl}
            ListEmptyComponent={<EmptyState icon="user" title={t('access.no_idps')} message={t('access.no_idps_message')} />}
          />
        )}

        {tab === 'tokens' && (
          <FlatList
            data={tokens}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => row(
              'key',
              item.name,
              `expires ${item.expires_at ? new Date(item.expires_at).toLocaleDateString() : '—'}`,
              () => deleteToken(item),
            )}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            refreshControl={refreshControl}
            ListEmptyComponent={<EmptyState icon="key" title={t('access.no_tokens')} message={t('access.no_tokens_message')} />}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabs: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm },
  list: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.xs, paddingBottom: Spacing.xxxl },
  item: { borderRadius: Radius.lg, borderWidth: 1, marginBottom: Spacing.sm, overflow: 'hidden' },
});
