import { StyleSheet } from "react-native";

import { colors } from "@/theme/colors";
import { Text } from "@/components/ui/Text";

import type { TextProps } from "react-native";

export type LabelProps = Pick<
  TextProps,
  "children" | "style" | "testID" | "nativeID"
>;

export function Label({ children, style, ...textProps }: LabelProps) {
  return (
    <Text
      {...textProps}
      size="md"
      weight="semiBold"
      style={[styles.label, style]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.neutral[900],
  },
});
