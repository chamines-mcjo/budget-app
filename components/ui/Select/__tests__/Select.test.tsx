import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { Select } from "../Select";
import { Text } from "@/components/ui/Text";

describe("Select", () => {
  const renderWithProvider = (component: React.ReactElement) =>
    render(<BottomSheet.ModalProvider>{component}</BottomSheet.ModalProvider>);

  it("exports all subcomponents", () => {
    expect(Select.Trigger).toBeDefined();
    expect(Select.GridList).toBeDefined();
    expect(Select.GridItemItem).toBeDefined();
    expect(Select.ItemTrigger).toBeDefined();
    expect(Select.GridPicker).toBeDefined();
  });

  it("Trigger component renders correctly", () => {
    const { getByText } = renderWithProvider(
      <Select.Trigger
        label="Test"
        options={["A", "B"]}
        renderItem={({ item }) => <Text>{item}</Text>}
      >
        {() => <Text>Content</Text>}
      </Select.Trigger>,
    );
    expect(getByText("Test")).toBeTruthy();
  });

  it("GridPicker component renders correctly", () => {
    const { getByText } = renderWithProvider(
      <Select.GridPicker label="Test Grid" options={["A", "B", "C"]} />,
    );
    expect(getByText("Test Grid")).toBeTruthy();
  });
});
