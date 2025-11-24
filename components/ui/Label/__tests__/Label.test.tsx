import React from "react";
import { render } from "@testing-library/react-native";
import { Label } from "../Label";

describe("Label", () => {
  it("renders correctly with children text", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText("Test Label")).toBeTruthy();
  });

  it("applies custom style", () => {
    const customStyle = { fontSize: 20 };
    const { getByText } = render(
      <Label style={customStyle}>Styled Label</Label>,
    );
    expect(getByText("Styled Label")).toBeTruthy();
  });

  it("passes testID prop", () => {
    const { getByTestId } = render(
      <Label testID="custom-label">Label with TestID</Label>,
    );
    expect(getByTestId("custom-label")).toBeTruthy();
  });

  it("passes nativeID prop", () => {
    const { getByText } = render(
      <Label nativeID="native-label">Label with NativeID</Label>,
    );
    const label = getByText("Label with NativeID");
    expect(label.props.nativeID).toBe("native-label");
  });
});
