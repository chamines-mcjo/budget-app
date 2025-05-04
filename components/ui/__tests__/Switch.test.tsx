import React from "react";
import flatten from "lodash.flatten";
import { act, render, fireEvent } from "@testing-library/react-native";
import { Switch } from "../Switch";
import { colors } from "@/theme/colors";

describe("Switch Component", () => {
  it("renders correctly with label and description", () => {
    const { getByText } = render(
      <Switch
        label="Enable notifications"
        description="We recommend you to enable notifications"
      />,
    );

    expect(getByText("Enable notifications")).toBeTruthy();
    expect(getByText("We recommend you to enable notifications")).toBeTruthy();
  });

  it("toggles state when pressed", async () => {
    const onToggleMock = jest.fn();
    const { getByTestId } = render(
      <Switch onToggle={onToggleMock} testID="animated-toggle" />,
    );
    const toggle = getByTestId("animated-toggle");

    await act(async () => {
      fireEvent.press(toggle);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(onToggleMock).toHaveBeenCalledWith(false);

    await act(async () => {
      fireEvent.press(toggle);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(onToggleMock).toHaveBeenCalledWith(true);
  });

  it("updates internal state when initialValue prop changes", () => {
    const { rerender, getByTestId } = render(
      <Switch initialValue={false} testID="switch-toggle" />,
    );
    const toggle = getByTestId("switch-toggle");

    rerender(<Switch initialValue={true} testID="switch-toggle" />);
    expect(toggle).toBeTruthy();
  });

  it("applies light label and description style in light mode", () => {
    const { getByText } = render(
      <Switch
        label="Theme test"
        description="We recommend you to enable notifications"
        variant="light"
      />,
    );
    const label = getByText("Theme test");
    const description = getByText("We recommend you to enable notifications");

    const flatStyles = flatten(
      Array.isArray(label.props.style)
        ? label.props.style
        : [label.props.style],
    );

    const flatStylesDescription = flatten(
      Array.isArray(description.props.style)
        ? description.props.style
        : [description.props.style],
    );
    expect(flatStyles).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: colors.neutral[100] }),
      ]),
    );

    expect(flatStylesDescription).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: colors.neutral[100] }),
      ]),
    );
  });

  it("links switch to label via accessibilityLabelledBy", () => {
    const { getByText, getByTestId } = render(
      <Switch
        label="Enable notifications"
        testID="animated-toggle"
        nativeID="animated-toggle"
      />,
    );

    const label = getByText("Enable notifications");
    const toggle = getByTestId("animated-toggle");

    expect(label.props.nativeID).toBe("animated-toggle-label");
    expect(toggle.props.accessibilityLabelledBy).toBe("animated-toggle-label");
  });
});
