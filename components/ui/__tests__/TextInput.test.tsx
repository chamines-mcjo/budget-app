import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TextInput } from "../TextInput";
import { colors } from "@/theme/colors";

describe("TextInput Component", () => {
  it("renders correctly with default props", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Enter text" />,
    );
    const input = getByPlaceholderText("Enter text");
    expect(input).toBeTruthy();
  });

  it("should call onChangeText when input changes", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Enter text" onChangeText={handleChange} />,
    );
    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "new text");
    expect(handleChange).toHaveBeenCalledWith("new text");
  });

  it("should apply dark variant styles by default", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Dark input" value="" onChangeText={() => {}} />,
    );

    const input = getByPlaceholderText("Dark input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: colors.grey[100] }),
      ]),
    );
  });

  it("should apply light variant styles", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        variant="light"
        placeholder="Light input"
        value=""
        onChangeText={() => {}}
      />,
    );

    const input = getByPlaceholderText("Light input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: colors.neutral[0] }),
      ]),
    );
  });

  it("should apply error styles on dark variant", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder="Error input"
        value=""
        onChangeText={() => {}}
        hasError={true}
      />,
    );

    const input = getByPlaceholderText("Error input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderColor: colors.red[600] }),
      ]),
    );
  });

  it("should apply error styles on light variant", () => {
    const { getByPlaceholderText, getByText } = render(
      <TextInput
        label="Light Label"
        placeholder="Error input"
        value=""
        onChangeText={() => {}}
        hasError={true}
        variant="light"
      />,
    );

    const input = getByPlaceholderText("Error input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderColor: colors.red[600] }),
      ]),
    );

    const label = getByText("Light Label");
    const labelStyles = label.props.style.flat();
    const errorColorStyle = labelStyles.find(
      (style: { color?: string }) => style.color === colors.red[600],
    );

    expect(errorColorStyle).toBeDefined();
  });

  it("should apply error styles on dark variant", () => {
    const { getByPlaceholderText, getByText } = render(
      <TextInput
        label="Dark Label"
        placeholder="Error input"
        value=""
        onChangeText={() => {}}
        hasError={true}
        variant="dark"
      />,
    );

    const input = getByPlaceholderText("Error input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderColor: colors.red[600] }),
      ]),
    );

    const label = getByText("Dark Label");
    const labelStyles = label.props.style.flat();
    const errorColorStyle = labelStyles.find(
      (style: { color?: string }) => style.color === colors.red[600],
    );

    expect(errorColorStyle).toBeDefined();
  });

  it("should link input to label via accessibilityLabelledBy", () => {
    const { getByText, getByPlaceholderText } = render(
      <TextInput
        label="Description"
        nativeID="my-input"
        placeholder="Enter description"
        value=""
        onChangeText={() => {}}
      />,
    );

    const label = getByText("Description");
    const input = getByPlaceholderText("Enter description");

    expect(label.props.nativeID).toBe("my-input-label");
    expect(input.props.accessibilityLabelledBy).toBe("my-input-label");
  });

  it("should apply multiline styles when multiline is true", () => {
    const { getByPlaceholderText } = render(
      <TextInput
        placeholder="Multiline input"
        multiline={true}
        value=""
        onChangeText={() => {}}
      />,
    );

    const input = getByPlaceholderText("Multiline input");
    expect(input.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ minHeight: 100 })]),
    );
  });
});
