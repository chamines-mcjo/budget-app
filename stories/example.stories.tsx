import type { Meta, StoryObj } from "@storybook/react";
import { Pressable, Text } from "react-native";
import { action } from "@storybook/addon-actions";

const Button = ({ children }: { children: string }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#4f546e" : "#636789",
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginHorizontal: 16,
          borderRadius: 8,
        },
      ]}
      onPress={() => action("onPress")}
    >
      <Text style={{ color: "#000000" }}>{children}</Text>
    </Pressable>
  );
};

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Hello World",
  },
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
};
