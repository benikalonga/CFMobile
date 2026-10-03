import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Stack, router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { DiceBearAvatar } from '@/components/ui/dicebear-avatar';
import { Fab, Field, Group, ListRow } from '@/components/ui/kit';
import { Sheet } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/auth';
import { Spacing, FontSize } from '@/constants/theme';

export default function AccountsScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { profiles, activeProfileId, switchProfile, removeProfile, renameProfile } = useAuth();

  const [renaming, setRenaming] = useState<{ id: string; label: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const select = async (id: string) => {
    if (id === activeProfileId || busy) return;
    setBusy(true);
    try {
      await switchProfile(id);
      router.back();
    } finally {
      setBusy(false);
    }
  };

  const confirmRemove = (id: string, label: string) => {
    const isLast = profiles.length === 1;
    Alert.alert(
      t('accounts.remove_title'),
      isLast ? t('accounts.remove_last_body', { label }) : t('accounts.remove_body', { label }),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('accounts.remove'),
          style: 'destructive',
          onPress: async () => {
            await removeProfile(id);
            if (isLast) router.replace('/login');
          },
        },
      ]
    );
  };

  const saveRename = async () => {
    if (!renaming || !renaming.label.trim()) return;
    await renameProfile(renaming.id, renaming.label.trim());
    setRenaming(null);
  };

  return (
    <>
      <Stack.Screen options={{ title: t('accounts.title') }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 96 }]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.intro, { color: colors.textSecondary }]}>{t('accounts.intro')}</Text>

          <Group>
            {profiles.map((p) => {
              const active = p.id === activeProfileId;
              return (
                <ListRow
                  key={p.id}
                  leading={<DiceBearAvatar seed={p.config.email || p.label} size={36} />}
                  title={p.label}
                  subtitle={
                    (p.config.method === 'oauth' ? t('accounts.via_oauth') : p.config.method === 'token' ? t('accounts.via_token') : t('accounts.via_key')) +
                    (active ? ` · ${t('accounts.active')}` : '')
                  }
                  onPress={() => select(p.id)}
                  trailing={
                    <View style={styles.actions}>
                      {active && <Icon name="check-circle" size={20} color={colors.success} />}
                      <TouchableOpacity
                        onPress={() => setRenaming({ id: p.id, label: p.label })}
                        hitSlop={10}
                        accessibilityRole="button"
                        accessibilityLabel={t('accounts.rename_title')}
                      >
                        <Icon name="edit" size={16} color={colors.textTertiary} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => confirmRemove(p.id, p.label)}
                        hitSlop={10}
                        accessibilityRole="button"
                        accessibilityLabel={t('accounts.remove')}
                      >
                        <Icon name="trash" size={16} color={colors.textTertiary} />
                      </TouchableOpacity>
                    </View>
                  }
                />
              );
            })}
          </Group>

          <Text style={[styles.note, { color: colors.textTertiary }]}>{t('accounts.note')}</Text>
        </ScrollView>

        <Fab
          label={t('accounts.add')}
          onPress={() => router.push({ pathname: '/login', params: { add: '1' } })}
        />
      </View>

      {/* Rename */}
      <Sheet
        visible={!!renaming}
        onClose={() => setRenaming(null)}
        title={t('accounts.rename_title')}
        footer={<Button title={t('common.save')} onPress={saveRename} disabled={!renaming?.label.trim()} />}
      >
        <Field
          value={renaming?.label ?? ''}
          onChangeText={(v) => setRenaming((r) => (r ? { ...r, label: v } : r))}
          placeholder={t('accounts.rename_placeholder')}
          autoFocus
        />
      </Sheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: Spacing.lg },
  intro: { fontSize: FontSize.sm, lineHeight: 19, marginBottom: Spacing.lg, paddingHorizontal: Spacing.xs },
  actions: { flexDirection: 'row', alignItems: 'center', gap: Spacing.lg },
  note: {
    fontSize: FontSize.xs,
    lineHeight: 16,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.xs,
    textAlign: 'center',
  },
});
