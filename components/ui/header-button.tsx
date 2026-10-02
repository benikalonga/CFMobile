import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconName } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';

interface HeaderButtonProps {
  icon: IconName;
  label: string;
  onPress: () => void;
}

/** Round white icon button for the right side of a screen header. */
export function HeaderButton({ icon, label, onPress }: HeaderButtonProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      hitSlop={6}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.button, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}
    >
      <Icon name={icon} size={18} color={colors.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
