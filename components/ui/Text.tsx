import { Text as RNText, StyleSheet } from "react-native";

import type { TextProps as RNTextProps } from "react-native";

export const textSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
  "4xl": "4xl",
  "5xl": "5xl",
} as const;

export const textWeights = {
  regular: "regular",
  bold: "bold",
  semiBold: "semiBold",
} as const;

export type TextProps = {
  /**
   * Preset size for text
   */
  size?: keyof typeof textSizes;
  /**
   * Preset font weight for text
   */
  weight?: keyof typeof textWeights;
  /**
   * Style for layout text in view
   */
  style?: Omit<RNTextProps["style"], "fontSize" | "fontWeight" | "fontFamily">;
} & Pick<RNTextProps, "children">;

export function Text({ children, size = "md", weight = "regular" }: TextProps) {
  return <RNText style={[styles[size], styles[weight]]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  xs: {
    fontSize: 13,
  },
  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 17,
  },
  xl: {
    fontSize: 18,
  },
  "2xl": {
    fontSize: 20,
  },
  "3xl": {
    fontSize: 24,
  },
  "4xl": {
    fontSize: 30,
  },
  "5xl": {
    fontSize: 32,
  },
  bold: {
    fontWeight: "700",
  },
  semiBold: {
    fontWeight: "600",
  },
  regular: {
    fontWeight: "400",
  },
});
