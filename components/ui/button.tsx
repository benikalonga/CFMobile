import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Radius, Spacing, FontSize } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export function Button({
  title, onPress, variant = 'primary', size = 'md',
  loading, disabled, icon, style,
}: ButtonProps) {
  const { colors } = useTheme();

  const bgMap: Record<string, string> = {
    primary: colors.primary,
    secondary: colors.surfaceSecondary,
    danger: colors.error,
    ghost: 'transparent',
  };

  const textMap: Record<string, string> = {
    primary: '#FFFFFF',
    secondary: colors.text,
    danger: '#FFFFFF',
    ghost: colors.text,
  };

  const sizeMap: Record<string, ViewStyle> = {
    sm: { height: 34, paddingHorizontal: 14 },
    md: { height: 46, paddingHorizontal: 20 },
    lg: { height: 52, paddingHorizontal: 24 },
  };

  const fontMap: Record<string, TextStyle> = {
    sm: { fontSize: FontSize.sm },
    md: { fontSize: FontSize.md },
    lg: { fontSize: FontSize.md },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.75}
      style={[
        styles.button,
        sizeMap[size],
        { backgroundColor: bgMap[variant], opacity: disabled ? 0.45 : 1 },
        (variant === 'ghost' || variant === 'secondary') && { borderWidth: 1, borderColor: colors.border },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textMap[variant]} />
      ) : (
        <>
          {icon}
          <Text style={[styles.text, fontMap[size], { color: textMap[variant] }]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.full,
    gap: Spacing.sm,
  },
  text: {
    fontWeight: '600',
    letterSpacing: 0.1,
  },
});
