import { KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { FontSize, Radius, Spacing } from '@/constants/theme';

interface SheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  /** Pinned under the scrolling content — usually the primary Button. */
  footer?: React.ReactNode;
  /** Set false for short menus that should not scroll. */
  scroll?: boolean;
  children?: React.ReactNode;
}

/**
 * Bottom sheet used for every editor and action menu: dimmed backdrop that
 * closes on tap, grabber, optional title with a close button, scrolling body
 * and a pinned footer. It lifts itself above the keyboard.
 */
export function Sheet({ visible, onClose, title, footer, scroll = true, children }: SheetProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView style={styles.root} behavior="padding">
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} accessibilityLabel="Close" />
        <View style={[styles.sheet, { backgroundColor: colors.background, paddingBottom: insets.bottom + Spacing.lg }]}>
          <View style={[styles.grabber, { backgroundColor: colors.border }]} />
          {!!title && (
            <View style={styles.header}>
              <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>{title}</Text>
              <TouchableOpacity onPress={onClose} hitSlop={10} accessibilityRole="button" accessibilityLabel="Close">
                <Icon name="close" size={20} color={colors.textSecondary} />
              </TouchableOpacity>
            </View>
          )}
          {scroll ? (
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.body}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={styles.body}>{children}</View>
          )}
          {!!footer && <View style={styles.footer}>{footer}</View>}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: {
    maxHeight: '88%',
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    paddingTop: Spacing.sm,
  },
  grabber: { width: 40, height: 4, borderRadius: 2, alignSelf: 'center', marginBottom: Spacing.md },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.md,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  title: { flex: 1, fontSize: FontSize.lg, fontWeight: '500' },
  scroll: { flexGrow: 0 },
  body: { paddingHorizontal: Spacing.lg, paddingBottom: Spacing.sm },
  footer: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md },
});
