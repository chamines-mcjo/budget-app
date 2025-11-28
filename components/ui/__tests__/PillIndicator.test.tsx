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
  it("renders the primary solid palette by default", () => {
    const { getByTestId, getByText } = render(
      <PillIndicator testID="pill">Paso 1 de 2</PillIndicator>,
    );

    const pill = getByTestId("pill");
    const pillStyle = flattenViewStyle(pill.props.style);
    expect(pillStyle.backgroundColor).toBe(colors.neutral["0"]);

    const label = getByText("Paso 1 de 2");
    const labelStyle = flattenTextStyle(label.props.style);
    expect(labelStyle.color).toBe(colors.grey["800"]);
  });

  it("uses the secondary palette when requested for solid appearance", () => {
    const { getByTestId } = render(
      <PillIndicator testID="pill" variant="secondary" appearance="solid">
        Paso 2 de 2
      </PillIndicator>,
    );

    const pill = getByTestId("pill");
    const pillStyle = flattenViewStyle(pill.props.style);
    expect(pillStyle.backgroundColor).toBe(colors.neutral["900"]);
  });

  it("renders gradient colors based on the variant palette", () => {
    const { getByTestId } = render(
      <PillIndicator testID="pill" appearance="gradient" variant="primary">
        Paso 1 de 2
      </PillIndicator>,
    );

    const pill = getByTestId("pill");
    const expectedGradient = [colors.primary["500"], colors.primary["800"]].map(
      (color) => processColor(color),
    );
    expect(pill.props.colors).toEqual(expectedGradient);
  });

  it("updates gradient colors when switching to the secondary variant", () => {
    const { getByTestId } = render(
      <PillIndicator testID="pill" appearance="gradient" variant="secondary">
        Paso 2 de 2
      </PillIndicator>,
    );

    const pill = getByTestId("pill");
    const expectedGradient = [colors.red["400"], colors.red["500"]].map(
      (color) => processColor(color),
    );
    expect(pill.props.colors).toEqual(expectedGradient);
  });
});
