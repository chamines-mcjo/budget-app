import React from "react";
import { render } from "@testing-library/react-native";
import { SelectGridItem } from "../SelectGridItem";

describe("SelectGridItem", () => {
  it("renders with label", () => {
    const { getByText } = render(<SelectGridItem label="Test Item" />);
    expect(getByText("Test Item")).toBeTruthy();
  });

  it("renders when isSelected is true", () => {
    const { getByText } = render(
      <SelectGridItem label="Selected" isSelected={true} />,
    );
    expect(getByText("Selected")).toBeTruthy();
  });

  it("renders when isPressed is true", () => {
    const { getByText } = render(
      <SelectGridItem label="Pressed" isPressed={true} isSelected={false} />,
    );
    expect(getByText("Pressed")).toBeTruthy();
  });

  it("renders when both isPressed and isSelected are true", () => {
    const { getByText } = render(
      <SelectGridItem label="Both" isPressed={true} isSelected={true} />,
    );
    expect(getByText("Both")).toBeTruthy();
  });

  it("renders with default props", () => {
    const { getByText } = render(<SelectGridItem label="Default" />);
    expect(getByText("Default")).toBeTruthy();
  });
});
