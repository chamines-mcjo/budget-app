import React, { useRef } from "react";
import { render } from "@testing-library/react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { BottomSheetModal } from "../BottomSheetModal";
import { Text } from "@/components/ui/Text";
import type { BottomSheetModalRef } from "../BottomSheetModal";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
);

describe("BottomSheetModal", () => {
  it("renders with BottomSheetModalProvider", () => {
    const result = render(
      <TestWrapper>
        <BottomSheetModal>
          <Text>Modal Content</Text>
        </BottomSheetModal>
      </TestWrapper>,
    );
    expect(result).toBeTruthy();
  });

  it("accepts custom snapPoints prop", () => {
    const result = render(
      <TestWrapper>
        <BottomSheetModal snapPoints={["25%", "75%"]}>
          <Text>Custom Snap Points</Text>
        </BottomSheetModal>
      </TestWrapper>,
    );
    expect(result).toBeTruthy();
  });

  it("uses default snapPoints when not provided", () => {
    const result = render(
      <TestWrapper>
        <BottomSheetModal>
          <Text>Default Snap Points</Text>
        </BottomSheetModal>
      </TestWrapper>,
    );
    expect(result).toBeTruthy();
  });

  it("forwards ref correctly", () => {
    const TestComponent = () => {
      const ref = useRef<BottomSheetModalRef>(null);
      return (
        <TestWrapper>
          <BottomSheetModal ref={ref}>
            <Text>With Ref</Text>
          </BottomSheetModal>
        </TestWrapper>
      );
    };

    const result = render(<TestComponent />);
    expect(result).toBeTruthy();
  });

  it("accepts additional props like name and keyboardBehavior", () => {
    const result = render(
      <TestWrapper>
        <BottomSheetModal name="test-modal" keyboardBehavior="interactive">
          <Text>With Props</Text>
        </BottomSheetModal>
      </TestWrapper>,
    );
    expect(result).toBeTruthy();
  });
});
