import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheetFooter } from "../BottomSheetFooter";
import { Text } from "@/components/ui/Text";

describe("BottomSheetFooter", () => {
  it("renders children", () => {
    const { getByText } = render(
      <BottomSheetFooter>
        <Text>Footer Content</Text>
      </BottomSheetFooter>,
    );
    expect(getByText("Footer Content")).toBeTruthy();
  });

  it("renders without children", () => {
    const { getByTestId } = render(<BottomSheetFooter testID="test-footer" />);
    expect(getByTestId("test-footer")).toBeTruthy();
  });

  it("applies custom style", () => {
    const { getByTestId } = render(
      <BottomSheetFooter testID="footer" style={{ backgroundColor: "red" }}>
        <Text>Content</Text>
      </BottomSheetFooter>,
    );
    const footer = getByTestId("footer");
    expect(footer.props.style).toContainEqual({ backgroundColor: "red" });
  });
});
