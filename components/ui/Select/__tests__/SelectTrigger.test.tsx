import React from "react";
import { render } from "@testing-library/react-native";
import { BottomSheet } from "@/components/ui/BottomSheet/BottomSheet";
import { SelectTrigger } from "../SelectTrigger";
import { Text } from "@/components/ui/Text";

describe("SelectTrigger", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockRenderItem = ({ item }: { item: string }) => <Text>{item}</Text>;
  const mockChildren = jest.fn(() => <Text>Children Content</Text>);

  beforeEach(() => {
    mockChildren.mockClear();
  });

  const renderWithProvider = (component: React.ReactElement) =>
    render(<BottomSheet.ModalProvider>{component}</BottomSheet.ModalProvider>);

  it("renders with label", () => {
    const { getByText } = renderWithProvider(
      <SelectTrigger
        label="Select Label"
        options={mockOptions}
        renderItem={mockRenderItem}
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByText("Select Label")).toBeTruthy();
  });

  it("displays placeholder when no value is selected", () => {
    const { getByText } = renderWithProvider(
      <SelectTrigger
        label="Select"
        placeholder="Choose an option"
        options={mockOptions}
        renderItem={mockRenderItem}
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByText("Choose an option")).toBeTruthy();
  });

  it("displays selected value using default renderValue", () => {
    const { getByText } = renderWithProvider(
      <SelectTrigger
        label="Select"
        value="Option 1"
        options={mockOptions}
        renderItem={mockRenderItem}
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByText("Option 1")).toBeTruthy();
  });

  it("uses custom renderValue when provided", () => {
    const customRenderValue = ({ value }: { value: string | undefined }) => (
      <Text>Custom: {value}</Text>
    );
    const { getByText } = renderWithProvider(
      <SelectTrigger
        label="Select"
        value="Option 1"
        options={mockOptions}
        renderItem={mockRenderItem}
        renderValue={customRenderValue}
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByText("Custom: Option 1")).toBeTruthy();
  });

  it("passes correct props to children render function", () => {
    const childrenSpy = jest.fn(() => <Text>Content</Text>);
    renderWithProvider(
      <SelectTrigger
        label="Select"
        value="Option 1"
        options={mockOptions}
        renderItem={mockRenderItem}
      >
        {childrenSpy}
      </SelectTrigger>,
    );

    expect(childrenSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        value: "Option 1",
        options: mockOptions,
        renderItem: mockRenderItem,
        onSelectValue: expect.any(Function),
        keyExtractor: expect.any(Function),
      }),
    );
  });

  it("uses custom keyExtractor when provided", () => {
    const customKeyExtractor = (item: string, index: number) =>
      `custom-${index}`;
    const childrenSpy = jest.fn(() => <Text>Content</Text>);
    renderWithProvider(
      <SelectTrigger
        label="Select"
        options={mockOptions}
        renderItem={mockRenderItem}
        keyExtractor={customKeyExtractor}
      >
        {childrenSpy}
      </SelectTrigger>,
    );

    expect(childrenSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        keyExtractor: customKeyExtractor,
      }),
    );
  });

  it("passes testID prop", () => {
    const { getByTestId } = renderWithProvider(
      <SelectTrigger
        label="Select"
        options={mockOptions}
        renderItem={mockRenderItem}
        testID="select-trigger"
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByTestId("select-trigger")).toBeTruthy();
  });

  it("passes nativeID prop", () => {
    const { getByTestId } = renderWithProvider(
      <SelectTrigger
        label="Select"
        options={mockOptions}
        renderItem={mockRenderItem}
        testID="select"
        nativeID="native-select"
      >
        {mockChildren}
      </SelectTrigger>,
    );
    const trigger = getByTestId("select");
    expect(trigger.props.nativeID).toBe("native-select");
  });

  it("handles object value correctly", () => {
    const objectOptions = [
      { id: "1", label: "First" },
      { id: "2", label: "Second" },
    ];
    const { getByText } = renderWithProvider(
      <SelectTrigger
        label="Select"
        value={objectOptions[0]}
        options={objectOptions}
        renderItem={({ item }) => <Text>{item.label}</Text>}
      >
        {mockChildren}
      </SelectTrigger>,
    );
    expect(getByText("First")).toBeTruthy();
  });

  it("calls onSelectValue when provided in children", () => {
    const onSelectMock = jest.fn();
    const childrenSpy = jest.fn(({ onSelectValue }) => {
      // Simulate selecting a value
      onSelectValue("Option 2");
      return <Text>Content</Text>;
    });

    renderWithProvider(
      <SelectTrigger
        label="Select"
        options={mockOptions}
        renderItem={mockRenderItem}
        onSelectValue={onSelectMock}
      >
        {childrenSpy}
      </SelectTrigger>,
    );

    expect(onSelectMock).toHaveBeenCalledWith("Option 2");
  });
});
