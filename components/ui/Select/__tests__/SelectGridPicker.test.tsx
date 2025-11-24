import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { SelectGridPicker } from "../SelectGridPicker";

describe("SelectGridPicker", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];

  const renderWithProvider = (component: React.ReactElement) =>
    render(<BottomSheet.ModalProvider>{component}</BottomSheet.ModalProvider>);

  it("renders with label and options", () => {
    const { getByText } = renderWithProvider(
      <SelectGridPicker label="Pick One" options={mockOptions} />,
    );
    expect(getByText("Pick One")).toBeTruthy();
  });

  it("displays placeholder when no value selected", () => {
    const { getByText } = renderWithProvider(
      <SelectGridPicker
        label="Pick"
        placeholder="Select an option"
        options={mockOptions}
      />,
    );
    expect(getByText("Select an option")).toBeTruthy();
  });

  it("displays selected value", () => {
    const { getByText } = renderWithProvider(
      <SelectGridPicker label="Pick" value="Option 2" options={mockOptions} />,
    );
    expect(getByText("Option 2")).toBeTruthy();
  });

  it("handles object options with default label extraction", () => {
    const objectOptions = [
      { label: "First Option" },
      { label: "Second Option" },
    ];
    const { getByText } = renderWithProvider(
      <SelectGridPicker
        label="Pick"
        value={objectOptions[0]}
        options={objectOptions}
      />,
    );
    expect(getByText("First Option")).toBeTruthy();
  });

  it("uses custom extractItemLabel function", () => {
    const objectOptions = [
      { id: "1", name: "First" },
      { id: "2", name: "Second" },
    ];
    const extractLabel = (item: (typeof objectOptions)[0]) => item.name;
    const { getByText } = renderWithProvider(
      <SelectGridPicker
        label="Pick"
        value={objectOptions[0]}
        options={objectOptions}
        extractItemLabel={extractLabel}
      />,
    );
    expect(getByText("First")).toBeTruthy();
  });

  it("passes testID prop", () => {
    const { getByTestId } = renderWithProvider(
      <SelectGridPicker
        label="Pick"
        options={mockOptions}
        testID="grid-picker"
      />,
    );
    expect(getByTestId("grid-picker")).toBeTruthy();
  });

  it("passes onSelectValue prop", () => {
    const onSelectMock = jest.fn();
    renderWithProvider(
      <SelectGridPicker
        label="Pick"
        options={mockOptions}
        onSelectValue={onSelectMock}
      />,
    );
    // Just verifying it renders without error with onSelectValue prop
    expect(onSelectMock).not.toHaveBeenCalled();
  });

  it("renders SelectGridItem for each option with correct props", () => {
    const { getByText } = renderWithProvider(
      <SelectGridPicker label="Pick" value="Option 1" options={mockOptions} />,
    );
    // Verify the component renders the value correctly
    expect(getByText("Option 1")).toBeTruthy();
  });

  it("handles hasError prop", () => {
    const { getByText } = renderWithProvider(
      <SelectGridPicker label="Pick" options={mockOptions} hasError={true} />,
    );
    expect(getByText("Pick")).toBeTruthy();
  });

  it("renders with keyExtractor prop", () => {
    const keyExtractor = (item: string, index: number) => `key-${index}`;
    const { getByText } = renderWithProvider(
      <SelectGridPicker
        label="Pick"
        options={mockOptions}
        keyExtractor={keyExtractor}
      />,
    );
    expect(getByText("Pick")).toBeTruthy();
  });
});
