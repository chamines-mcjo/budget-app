import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeTruthy();
  });

  it("renders correctly with primary variant", () => {
    const { getByText } = render(<Button variant="primary">Primary</Button>);
    expect(getByText("Primary")).toBeTruthy();
  });

  it("renders correctly with secondary variant", () => {
    const { getByText } = render(
      <Button variant="secondary">Secondary</Button>,
    );
    expect(getByText("Secondary")).toBeTruthy();
  });

  it("renders correctly with tertiary variant", () => {
    const { getByText } = render(<Button variant="tertiary">Tertiary</Button>);
    expect(getByText("Tertiary")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>Press Me</Button>,
    );
    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("does not call onPress when disabled", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} disabled>
        Disabled
      </Button>,
    );
    fireEvent.press(getByText("Disabled"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
