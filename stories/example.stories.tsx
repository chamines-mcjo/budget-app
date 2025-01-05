import type { Meta, StoryObj } from "@storybook/react";
import { Pressable, Text } from "react-native";
import { action } from "@storybook/addon-actions";

const Button = ({
  children,
  onPress,
}: {
  children: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#1e40af" : "#3b82f6",
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginHorizontal: 16,
          borderRadius: 8,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 17,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "Hello World",
    onPress: action("onPress"),
  },
};
