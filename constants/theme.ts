import { Platform } from 'react-native';

export const CF = {
  orange: '#F6821F',
  orangeLight: '#FBAD41',
  orangeDark: '#E05D00',
  blue: '#003682',
  blueLight: '#0051C3',
  navy: '#1B1B3A',
};

/**
 * Neutral canvas, white cards, hairline borders, one accent. Colour is for
 * state (success / warning / error) and the single brand accent — not for
 * decoration, so icons and chrome stay grey.
 */
export const Colors = {
  light: {
    text: '#17171A',
    textSecondary: '#6E6E76',
    textTertiary: '#A3A3AB',
    background: '#F0F0F1',
    surface: '#FFFFFF',
    surfaceSecondary: '#F5F5F6',
    tint: CF.orange,
    primary: CF.orange,
    primaryLight: CF.orangeLight,
    icon: '#6E6E76',
    border: '#E7E7EA',
    borderLight: '#EEEEF0',
    tabIconDefault: '#6E6E76',
    tabIconSelected: CF.orange,
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    cardShadow: 'rgba(0,0,0,0.03)',
    statusActive: '#10B981',
    statusPending: '#F59E0B',
    statusError: '#EF4444',
    statusPaused: '#A3A3AB',
    overlay: 'rgba(0,0,0,0.3)',
    inputBg: '#F5F5F6',
    badge: '#FDEBD9',
    badgeText: CF.orangeDark,
  },
  dark: {
    text: '#F2F2F3',
    textSecondary: '#A0A0A8',
    textTertiary: '#6C6C74',
    background: '#0C0C0E',
    surface: '#161618',
    surfaceSecondary: '#202023',
    tint: CF.orange,
    primary: CF.orange,
    primaryLight: CF.orangeLight,
    icon: '#A0A0A8',
    border: '#2A2A2E',
    borderLight: '#222225',
    tabIconDefault: '#A0A0A8',
    tabIconSelected: CF.orange,
    success: '#34D399',
    error: '#F87171',
    warning: '#FBBF24',
    info: '#60A5FA',
    cardShadow: 'rgba(0,0,0,0.2)',
    statusActive: '#34D399',
    statusPending: '#FBBF24',
    statusError: '#F87171',
    statusPaused: '#6C6C74',
    overlay: 'rgba(0,0,0,0.6)',
    inputBg: '#202023',
    badge: '#3A2410',
    badgeText: CF.orangeLight,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  full: 999,
};

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
});
