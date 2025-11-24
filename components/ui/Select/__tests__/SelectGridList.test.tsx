import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { SelectGridList } from "../SelectGridList";
import { Text } from "@/components/ui/Text";

describe("SelectGridList", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockRenderItem = ({ item }: { item: string }) => <Text>{item}</Text>;

  it("renders all options", () => {
    const { getByText } = render(
      <SelectGridList
        options={mockOptions}
        renderItem={mockRenderItem}
        value={undefined}
      />,
    );
    expect(getByText("Option 1")).toBeTruthy();
    expect(getByText("Option 2")).toBeTruthy();
    expect(getByText("Option 3")).toBeTruthy();
  });

  it("calls onSelect when an item is pressed", () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <SelectGridList
        options={mockOptions}
        renderItem={mockRenderItem}
        value={undefined}
        onSelect={onSelectMock}
      />,
    );
    fireEvent.press(getByText("Option 2"));
    expect(onSelectMock).toHaveBeenCalledWith("Option 2");
  });

  it("marks selected item correctly", () => {
    const renderItemWithSelection = jest.fn(({ item }) => <Text>{item}</Text>);
    render(
      <SelectGridList
        options={mockOptions}
        renderItem={renderItemWithSelection}
        value="Option 2"
      />,
    );

    expect(renderItemWithSelection).toHaveBeenCalledWith(
      expect.objectContaining({
        item: "Option 2",
        isSelected: true,
      }),
    );
  });

  it("uses custom keyExtractor", () => {
    const keyExtractor = jest.fn(
      (item: string, index: number) => `key-${index}`,
    );
    render(
      <SelectGridList
        options={mockOptions}
        renderItem={mockRenderItem}
        value={undefined}
        keyExtractor={keyExtractor}
      />,
    );
    expect(keyExtractor).toHaveBeenCalled();
  });

  it("handles object options with selection", () => {
    const objectOptions = [
      { id: "1", label: "First" },
      { id: "2", label: "Second" },
    ];
    const objectRenderItem = ({
      item,
    }: {
      item: (typeof objectOptions)[0];
    }) => <Text>{item.label}</Text>;
    const renderItemSpy = jest.fn(objectRenderItem);

    render(
      <SelectGridList
        options={objectOptions}
        renderItem={renderItemSpy}
        value={objectOptions[0]}
      />,
    );

    expect(renderItemSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        item: objectOptions[0],
        isSelected: true,
      }),
    );
  });

  it("passes pressed state to renderItem", () => {
    const renderItemSpy = jest.fn(({ item }) => <Text>{item}</Text>);
    render(
      <SelectGridList
        options={mockOptions}
        renderItem={renderItemSpy}
        value={undefined}
      />,
    );

    expect(renderItemSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        isPressed: expect.any(Boolean),
      }),
    );
  });
});
