import type { Meta, StoryObj } from "@storybook/react";
import { Text, View, useWindowDimensions } from "react-native";
import { colors } from "@/theme/colors";

const Palette = ({ color = "primary" }: { color: keyof typeof colors }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        margin: 16,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {Object.entries(colors[color]).map(([shadeName, shade]) => {
        return (
          <View
            key={shadeName}
            style={{
              flexBasis: width / 2 - 18,
              backgroundColor: shade,
              padding: 24,
              borderRadius: 12,
            }}
          >
            <Text>{shadeName}</Text>
          </View>
        );
      })}
    </View>
  );
};

const meta = {
  title: "Tokens/Colors",
  component: Palette,
} satisfies Meta<typeof Palette>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  argTypes: {
    color: {
      options: Object.keys(colors),
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
  },
};
