import { Pressable, StyleSheet } from "react-native";
import type { PressableProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text } from "@/components/ui/Text";
import { colors } from "@/theme/colors";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: string;
} & Pick<
  PressableProps,
  | "onPress"
  | "onLongPress"
  | "testID"
  | "style"
  | "disabled"
  | "accessibilityLabel"
  | "accessibilityHint"
  | "hitSlop"
>;

export function Button({
  children,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={[styles.base, styles[variant], disabled && styles.disabled]}
      {...props}
    >
      {({ pressed }) => (
        <LinearGradient
          colors={disabled ? gradients["transparent"] : gradients[variant]}
          style={[styles.background, pressed && !disabled && { opacity: 0.75 }]}
        >
          <Text
            style={[
              styles.label,
              altLabels.includes(variant) && styles.labelAlt,
              disabled && styles.disabledLabel,
            ]}
            size="lg"
            weight="semiBold"
          >
            {children}
          </Text>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const gradients = {
  primary: [colors.primary["500"], colors.primary["800"]],
  secondary: [colors.red["400"], colors.red["500"]],
  tertiary: [colors.neutral["300"], colors.neutral["500"]],
  transparent: ["transparent", "transparent"],
} as const;

const altLabels = ["tertiary"];

const styles = StyleSheet.create({
  base: {
    borderRadius: 28,
  },
  background: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 28,
  },
  primary: {
    backgroundColor: colors.primary["500"],
  },
  secondary: {
    backgroundColor: colors.red["400"],
  },
  tertiary: {
    backgroundColor: colors.neutral["300"],
  },
  disabled: {
    backgroundColor: colors.neutral["200"],
  },
  label: {
    color: colors.neutral["100"],
    textAlign: "center",
  },
  labelAlt: {
    color: colors.neutral["900"],
  },
  disabledLabel: {
    color: colors.neutral["600"],
  },
});
