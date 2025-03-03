import { fontFamilies, fontSizes, lineHeights } from "@/theme/fonts";
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
   * Text predefined size option. Follow t-shirt sizes
   */
  size?: keyof typeof textSizes;
  /**
   * Text predefined weight option
   */
  weight?: keyof typeof textWeights;
  /**
   * Style for layout text in view
   */
  style?: Omit<RNTextProps["style"], "fontSize" | "fontWeight" | "fontFamily">;
} & Pick<RNTextProps, "children">;

export function Text({
  children,
  size = "md",
  weight = "regular",
  style,
}: TextProps) {
  return (
    <RNText style={[styles[size], styles[weight], style]}>{children}</RNText>
  );
}

const styles = StyleSheet.create({
  xs: {
    fontSize: fontSizes["xs"],
    lineHeight: lineHeights["xs"],
  },
  sm: {
    fontSize: fontSizes["sm"],
    lineHeight: lineHeights["sm"],
  },
  md: {
    fontSize: fontSizes["md"],
    lineHeight: lineHeights["md"],
  },
  lg: {
    fontSize: fontSizes["lg"],
    lineHeight: lineHeights["lg"],
  },
  xl: {
    fontSize: fontSizes["xl"],
    lineHeight: lineHeights["xl"],
  },
  "2xl": {
    fontSize: fontSizes["2xl"],
    lineHeight: lineHeights["2xl"],
  },
  "3xl": {
    fontSize: fontSizes["3xl"],
    lineHeight: lineHeights["3xl"],
  },
  "4xl": {
    fontSize: fontSizes["4xl"],
    lineHeight: lineHeights["4xl"],
  },
  "5xl": {
    fontSize: fontSizes["5xl"],
    lineHeight: lineHeights["5xl"],
  },
  bold: {
    fontFamily: fontFamilies.InterBold,
  },
  semiBold: {
    fontFamily: fontFamilies.InterSemiBold,
  },
  regular: {
    fontFamily: fontFamilies.InterRegular,
  },
});
