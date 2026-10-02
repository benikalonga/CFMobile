import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';
import * as premiumService from '@/services/premium';
import { usePremium } from '@/services/premium';

interface PremiumGateProps {
  children: React.ReactNode;
}

export function PremiumGate({ children }: PremiumGateProps) {
  const premium = usePremium();
  return premium ? <>{children}</> : <PremiumPaywall />;
}

export function PremiumPaywall() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [price, setPrice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    premiumService.getPremiumPrice().then(setPrice).catch(() => {});
  }, []);

  const handleBuy = async () => {
    setBusy(true);
    try {
      await premiumService.purchasePremium();
    } catch (e: any) {
      const msg = String(e?.message ?? '');
      if (msg === 'billing-unavailable') {
        Alert.alert(t('premium.unavailable_title'), t('premium.unavailable_body'));
      } else if (!msg.toLowerCase().includes('cancel')) {
        Alert.alert(t('common.error'), msg || t('premium.purchase_error'));
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.primary + '15' }]}>
        <Icon name="shield-check" size={40} color={colors.primary} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>{t('premium.locked_title')}</Text>
      <Text style={[styles.body, { color: colors.textSecondary }]}>{t('premium.locked_body')}</Text>
      <Button
        title={price ? t('premium.buy_with_price', { price }) : t('premium.buy')}
        onPress={handleBuy}
        loading={busy}
        style={{ marginTop: Spacing.lg, alignSelf: 'stretch' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  body: {
    fontSize: FontSize.md,
    textAlign: 'center',
    lineHeight: 22,
  },
});
