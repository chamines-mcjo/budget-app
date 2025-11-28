import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import {
  PillIndicator,
  type PillIndicatorProps,
} from "@/components/ui/PillIndicator";
import { colors } from "@/theme/colors";

const meta = {
  title: "Pill Indicator",
  component: PillIndicator,
  args: {
    children: "Paso 1 de 2",
    appearance: "solid",
    variant: "primary",
  },
  argTypes: {
    appearance: {
      control: { type: "select" },
      options: ["solid", "gradient"],
      description: "Render with a solid fill or gradient background.",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Color variant of the pill indicator.",
    },
  },
} satisfies Meta<PillIndicatorProps>;

export default meta;

type Story = StoryObj<PillIndicatorProps>;

export const Solid: Story = {
  args: {
    appearance: "solid",
    variant: "primary",
  },
  decorators: [
    (StoryComponent) => (
      <View
        style={{
          backgroundColor: colors.primary["800"],
          padding: 16,
          flex: 1,
        }}
      >
        <StoryComponent />
      </View>
    ),
  ],
};

export const Gradient: Story = {
  args: {
    appearance: "gradient",
    variant: "secondary",
  },
  decorators: [
    (StoryComponent) => (
      <View
        style={{
          backgroundColor: colors.neutral["300"],
          padding: 16,
          flex: 1,
        }}
      >
        <StoryComponent />
      </View>
    ),
  ],
};
