import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

// Same drawing as the launcher icon (store/icon/icon.html, concept 3): keep the two in step.
const CLOUD = 'M340 700 H700 A120 120 0 0 0 730 462 A170 170 0 0 0 420 410 A150 150 0 0 0 340 700 Z';

/** Orange to purple brand gradient, filling its parent. Used behind onboarding and the login hero. */
export function BrandGradient({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[StyleSheet.absoluteFill, style]} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="brandFill" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFA23F" />
            <Stop offset="0.38" stopColor="#F6821F" />
            <Stop offset="0.7" stopColor="#D0559C" />
            <Stop offset="1" stopColor="#7C5CF0" />
          </LinearGradient>
        </Defs>
        <Rect width="100" height="100" fill="url(#brandFill)" />
      </Svg>
    </View>
  );
}

interface BrandMarkProps {
  size?: number;
  /** Cloud only, no tile. For use on top of the brand gradient. */
  bare?: boolean;
}

/** The app mark: a cloud with a switch in it. */
export function BrandMark({ size = 64, bare }: BrandMarkProps) {
  return (
    <Svg width={size} height={size} viewBox={bare ? '172 205 680 540' : '0 0 1024 1024'}>
      <Defs>
        <LinearGradient id="markTile" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#FFA23F" />
          <Stop offset="0.38" stopColor="#F6821F" />
          <Stop offset="0.7" stopColor="#D0559C" />
          <Stop offset="1" stopColor="#7C5CF0" />
        </LinearGradient>
        <LinearGradient id="markSwitch" x1="0" y1="0" x2="1" y2="0.6">
          <Stop offset="0" stopColor="#FFA23F" />
          <Stop offset="0.45" stopColor="#F6821F" />
          <Stop offset="1" stopColor="#9B5BEA" />
        </LinearGradient>
      </Defs>
      {!bare && <Rect width="1024" height="1024" rx="230" fill="url(#markTile)" />}
      <G transform="translate(512 512) scale(1.06) translate(-532 -505)">
        <Path d={CLOUD} fill="#FFFFFF" />
      </G>
      <Rect x="372" y="508" width="270" height="130" rx="65" fill="url(#markSwitch)" />
      <Circle cx="577" cy="573" r="47" fill="#FFFFFF" />
    </Svg>
  );
}
