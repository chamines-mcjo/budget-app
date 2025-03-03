import React from "react";
import { render } from "@testing-library/react-native";
import { Text } from "@/components/ui/Text";

describe("Text component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<Text>Test Text</Text>);
    const textElement = getByText("Test Text");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontSize: 16,
      lineHeight: 24,
    });
    expect(textElement.props.style).toContainEqual({
      fontFamily: "Inter_400Regular",
    });
  });

  it("renders correctly with custom size", () => {
    const { getByText } = render(<Text size="lg">Test Text</Text>);
    const textElement = getByText("Test Text");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontSize: 17,
      lineHeight: 24,
    });
  });

  it("renders correctly with custom weight", () => {
    const { getByText } = render(<Text weight="bold">Test Text</Text>);
    const textElement = getByText("Test Text");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontFamily: "Inter_700Bold",
    });
  });

  it("renders correctly with custom size and weight", () => {
    const { getByText } = render(
      <Text size="xl" weight="semiBold">
        Test Text
      </Text>,
    );
    const textElement = getByText("Test Text");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontSize: 18,
      lineHeight: 22,
    });
    expect(textElement.props.style).toContainEqual({
      fontFamily: "Inter_600SemiBold",
    });
  });
});
