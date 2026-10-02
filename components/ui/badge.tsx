import { StyleSheet, View, Text } from 'react-native';
import { Radius, FontSize } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const { colors } = useTheme();

  const bgMap: Record<string, string> = {
    default: colors.surfaceSecondary,
    success: colors.statusActive + '1A',
    warning: colors.statusPending + '1A',
    error: colors.statusError + '1A',
    info: colors.info + '1A',
  };

  const textMap: Record<string, string> = {
    default: colors.textSecondary,
    success: colors.statusActive,
    warning: colors.statusPending,
    error: colors.statusError,
    info: colors.info,
  };

  return (
    <View style={[styles.badge, { backgroundColor: bgMap[variant] }]}>
      <Text style={[styles.text, { color: textMap[variant] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: Radius.full,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: FontSize.xs,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
