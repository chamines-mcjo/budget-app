import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SelectItemTrigger } from "../SelectItemTrigger";
import { Text } from "@/components/ui/Text";

describe("SelectItemTrigger", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <SelectItemTrigger>
        <Text>Item Content</Text>
      </SelectItemTrigger>,
    );
    expect(getByText("Item Content")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <SelectItemTrigger onPress={onPressMock}>
        <Text>Press Me</Text>
      </SelectItemTrigger>,
    );
    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("renders function children with pressed state", () => {
    const { getByText } = render(
      <SelectItemTrigger>
        {({ pressed }) => <Text>{pressed ? "Pressed" : "Not Pressed"}</Text>}
      </SelectItemTrigger>,
    );
    expect(getByText("Not Pressed")).toBeTruthy();
  });

  it("passes testID prop", () => {
    const { getByTestId } = render(
      <SelectItemTrigger testID="item-trigger">
        <Text>Content</Text>
      </SelectItemTrigger>,
    );
    expect(getByTestId("item-trigger")).toBeTruthy();
  });

  it("passes nativeID prop", () => {
    const { getByTestId } = render(
      <SelectItemTrigger testID="trigger" nativeID="native-trigger">
        <Text>Content</Text>
      </SelectItemTrigger>,
    );
    const trigger = getByTestId("trigger");
    expect(trigger.props.nativeID).toBe("native-trigger");
  });
});
