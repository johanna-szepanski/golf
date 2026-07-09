import {
  Text,
  type TextProps,
  StyleSheet,
  useWindowDimensions
} from "react-native";

export function getFontScale(width: number): number {
  if (width >= 1024) return 1.15;
  if (width >= 768) return 1.07;
  return 1;
}

/**
 * Drop-in replacement for <Text> that scales fontSize proportionally
 * to the current screen width: phone 1×, tablet 1.07×, desktop 1.15×.
 */
export function ScaledText({ style, ...props }: TextProps) {
  const { width } = useWindowDimensions();
  const scale = getFontScale(width);
  const flat = StyleSheet.flatten(style);
  const scaledStyle =
    flat && flat.fontSize != null
      ? [flat, { fontSize: Math.round(flat.fontSize * scale) }]
      : style;
  return (
    <Text
      style={scaledStyle}
      {...props}
    />
  );
}
