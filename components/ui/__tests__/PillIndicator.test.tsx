import React from "react";
import { render } from "@testing-library/react-native";
import { StyleSheet, processColor, type StyleProp } from "react-native";
import type { TextStyle, ViewStyle } from "react-native";

import { PillIndicator } from "@/components/ui/PillIndicator";
import { colors } from "@/theme/colors";

const flattenViewStyle = (style: StyleProp<ViewStyle>) =>
  StyleSheet.flatten(style) ?? {};

const flattenTextStyle = (style: StyleProp<TextStyle>) =>
  StyleSheet.flatten(style) ?? {};

describe("PillIndicator", () => {
  it("renders with a solid background by default", () => {
    const { getByTestId, getByText } = render(
      <PillIndicator testID="pill">Step 1 of 2</PillIndicator>,
    );

    const pill = getByTestId("pill");
    const style = flattenViewStyle(pill.props.style);
    expect(style.backgroundColor).toBe(colors.neutral["900"]);

    expect(getByText("Step 1 of 2")).toBeTruthy();
  });

  it("supports gradient backgrounds", () => {
    const gradientColors: [string, string] = ["#111111", "#222222"];
    const { getByTestId } = render(
      <PillIndicator
        testID="pill"
        variant="gradient"
        gradientColors={gradientColors}
      >
        Step 1 of 2
      </PillIndicator>,
    );

    const pill = getByTestId("pill");
    const processedGradient = gradientColors.map((color) =>
      processColor(color),
    );
    expect(pill.props.colors).toEqual(processedGradient);
  });

  it("allows overriding solid and text colors", () => {
    const { getByTestId, getByText } = render(
      <PillIndicator testID="pill" solidColor="#123456" textColor="#654321">
        Step 2 of 2
      </PillIndicator>,
    );

    const pill = getByTestId("pill");
    const pillStyle = flattenViewStyle(pill.props.style);
    expect(pillStyle.backgroundColor).toBe("#123456");

    const text = getByText("Step 2 of 2");
    const textStyle = flattenTextStyle(text.props.style);
    expect(textStyle.color).toBe("#654321");
  });
});
