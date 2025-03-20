import { render, fireEvent } from "@testing-library/react-native";
import { MoneyInput } from "@/components/ui/MoneyInput";
import { colors } from "@/theme/colors";

describe("MoneyInput", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(<MoneyInput testID="money-input" />);

    expect(getByTestId("money-input")).toBeTruthy();
  });

  it("renders with label when provided", () => {
    const { getByText } = render(<MoneyInput label="Amount" />);

    expect(getByText("Amount")).toBeTruthy();
  });

  it("handles value changes correctly", () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <MoneyInput
        testID="money-input"
        value="100"
        onChangeText={onChangeText}
      />,
    );

    const input = getByTestId("money-input");
    fireEvent.changeText(input, "200");

    expect(onChangeText).toHaveBeenCalledWith("200");
  });

  it("applies error styles when hasError is true", () => {
    const { getByTestId } = render(
      <MoneyInput testID="money-input" hasError={true} />,
    );

    const input = getByTestId("money-input");
    expect(input.props.placeholderTextColor).toBe(colors.red[400]);
  });

  it("applies light variant styles correctly", () => {
    const { getByTestId } = render(
      <MoneyInput testID="money-input" variant="light" />,
    );

    const input = getByTestId("money-input");
    expect(input.props.selectionColor).toBe(colors.neutral[100]);
  });
});
