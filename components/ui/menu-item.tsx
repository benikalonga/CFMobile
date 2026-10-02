import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Icon, IconName } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Spacing, Radius } from '@/constants/theme';

interface MenuItemProps {
  icon: IconName;
  /** Kept for callers; icons render neutral so the list reads as one calm surface. */
  iconColor?: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  trailing?: React.ReactNode;
  danger?: boolean;
}

export function MenuItem({ icon, title, subtitle, onPress, trailing, danger }: MenuItemProps) {
  const { colors } = useTheme();

  const showArrow = trailing === undefined && !!onPress;
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      {...(onPress ? { onPress, activeOpacity: 0.6 } : {})}
      style={[styles.container, { backgroundColor: colors.surface }]}
    >
      <View style={[styles.iconWrap, { backgroundColor: danger ? colors.error + '14' : colors.surfaceSecondary }]}>
        <Icon name={icon} size={18} color={danger ? colors.error : colors.text} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: danger ? colors.error : colors.text }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: colors.textTertiary }]} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
      {trailing !== null && trailing !== undefined && trailing}
      {showArrow && <Icon name="chevron-right" size={18} color={colors.textTertiary} />}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: FontSize.sm,
  },
});
