import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface CardProps {
  onPress?: () => void;
  variant?: 'default' | 'outlined';
  compact?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

/** Flat white surface with a hairline border — no drop shadow. */
export function Card({ style, children, onPress, variant = 'default', compact }: CardProps) {
  const { colors } = useTheme();

  const cardStyle: StyleProp<ViewStyle> = [
    styles.card,
    {
      backgroundColor: colors.surface,
      borderColor: variant === 'outlined' ? colors.border : colors.borderLight,
    },
    compact && styles.compact,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={cardStyle}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    padding: Spacing.lg,
  },
  compact: {
    padding: Spacing.md,
  },
});
