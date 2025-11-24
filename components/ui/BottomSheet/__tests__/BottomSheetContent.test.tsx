import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheetContent } from "../BottomSheetContent";
import { Text } from "@/components/ui/Text";

describe("BottomSheetContent", () => {
  it("renders children", () => {
    const { getByText } = render(
      <BottomSheetContent>
        <Text>Content Text</Text>
      </BottomSheetContent>,
    );
    expect(getByText("Content Text")).toBeTruthy();
  });

  it("renders without children", () => {
    const { getByTestId } = render(
      <BottomSheetContent testID="test-content" />,
    );
    expect(getByTestId("test-content")).toBeTruthy();
  });

  it("renders multiple children", () => {
    const { getByText } = render(
      <BottomSheetContent>
        <Text>First</Text>
        <Text>Second</Text>
      </BottomSheetContent>,
    );
    expect(getByText("First")).toBeTruthy();
    expect(getByText("Second")).toBeTruthy();
  });
});
