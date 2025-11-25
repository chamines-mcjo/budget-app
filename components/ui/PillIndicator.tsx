import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import type { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

export type PillIndicatorProps = {
  /**
   * Text rendered inside the pill.
   */
  children: string;
  /**
   * Choose between a solid or gradient background.
   */
  variant?: "solid" | "gradient";
  /**
   * Solid background color when variant is set to solid.
   */
  solidColor?: string;
  /**
   * Gradient color stops when variant is set to gradient.
   */
  gradientColors?: [string, string];
  /**
   * Color applied to the label text.
   */
  textColor?: string;
  /**
   * Style overrides for the pill container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the label text.
   */
  textStyle?: StyleProp<TextStyle>;
} & Pick<
  ViewProps,
  | "testID"
  | "accessible"
  | "accessibilityLabel"
  | "accessibilityHint"
  | "accessibilityRole"
>;

const defaultGradientColors: [string, string] = [
  colors.primary["400"],
  colors.primary["700"],
];

export function PillIndicator({
  children,
  variant = "solid",
  solidColor = colors.neutral["900"],
  gradientColors = defaultGradientColors,
  textColor = colors.neutral["0"],
  style,
  textStyle,
  ...accessibilityProps
}: PillIndicatorProps) {
  const content = (
    <Text
      size="sm"
      weight="semiBold"
      style={[styles.label, { color: textColor }, textStyle]}
    >
      {children}
    </Text>
  );

  if (variant === "gradient") {
    return (
      <LinearGradient
        {...accessibilityProps}
        colors={gradientColors}
        style={[styles.base, style]}
      >
        {content}
      </LinearGradient>
    );
  }

  return (
    <View
      {...accessibilityProps}
      style={[styles.base, { backgroundColor: solidColor }, style]}
    >
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: "flex-end",
  },
  label: {
    textAlign: "center",
  },
});
