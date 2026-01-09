import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";

import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

export type PillIndicatorProps = {
  /**
   * "solid" | "gradient"
   */
  appearance?: "solid" | "gradient";
  /**
   * Preset variant for the pill indicator "primary" or "secondary"
   */
  variant?: "primary" | "secondary";
  children: string;
  style?: StyleProp<ViewStyle>;
} & Pick<
  ViewProps,
  | "testID"
  | "accessible"
  | "accessibilityLabel"
  | "accessibilityHint"
  | "accessibilityRole"
>;

export function PillIndicator({
  children,
  appearance = "solid",
  variant = "primary",
  style,
  ...accessibilityProps
}: PillIndicatorProps) {
  const content = (
    <Text
      size="sm"
      weight="semiBold"
      style={[styles.label, { color: textColors[appearance][variant] }]}
    >
      {children}
    </Text>
  );

  if (appearance === "gradient") {
    return (
      <LinearGradient
        {...accessibilityProps}
        colors={gradientBackgrounds[variant]}
        style={[styles.base, style]}
      >
        {content}
      </LinearGradient>
    );
  }

  return (
    <View
      {...accessibilityProps}
      style={[
        styles.base,
        { backgroundColor: solidBackgrounds[variant] },
        style,
      ]}
    >
      {content}
    </View>
  );
}

const solidBackgrounds = {
  primary: colors.neutral["0"],
  secondary: colors.neutral["900"],
} as const;

const gradientBackgrounds = {
  primary: [colors.primary["500"], colors.primary["800"]],
  secondary: [colors.red["400"], colors.red["500"]],
} as const;

const textColors = {
  solid: {
    primary: colors.grey["800"],
    secondary: colors.neutral["0"],
  },
  gradient: {
    primary: colors.neutral["0"],
    secondary: colors.neutral["0"],
  },
};

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
