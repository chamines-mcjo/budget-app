import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheetHeader } from "../BottomSheetHeader";
import { Text } from "@/components/ui/Text";

describe("BottomSheetHeader", () => {
  it("renders with string title", () => {
    const { getByText } = render(<BottomSheetHeader title="Test Title" />);
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("renders with custom ReactNode title", () => {
    const customTitle = <Text>Custom Title</Text>;
    const { getByText } = render(<BottomSheetHeader title={customTitle} />);
    expect(getByText("Custom Title")).toBeTruthy();
  });

  it("renders with subtitle", () => {
    const { getByText } = render(
      <BottomSheetHeader title="Title" subtitle="Subtitle" />,
    );
    expect(getByText("Title")).toBeTruthy();
    expect(getByText("Subtitle")).toBeTruthy();
  });

  it("renders without subtitle", () => {
    const { getByText } = render(<BottomSheetHeader title="Only Title" />);
    expect(getByText("Only Title")).toBeTruthy();
  });
});
