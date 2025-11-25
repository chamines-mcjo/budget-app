import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { PillIndicator } from "@/components/ui/PillIndicator";
import { colors } from "@/theme/colors";

const meta = {
  title: "Pill Indicator",
  component: PillIndicator,
  args: {
    children: "Paso 1 de 2",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "gradient"],
    },
    solidColor: {
      control: {
        type: "color",
      },
    },
    textColor: {
      control: {
        type: "color",
      },
    },
    gradientColors: {
      control: {
        type: "object",
      },
      description: "Array with two color stops, e.g. ['#fff', '#000']",
    },
  },
} satisfies Meta<typeof PillIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    solidColor: colors.neutral["0"],
    textColor: colors.grey["800"],
  },
  decorators: [
    (Story) => (
      <View
        style={{
          backgroundColor: colors.primary["800"],
          padding: 16,
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const Gradient: Story = {
  args: {
    variant: "gradient",
    gradientColors: [colors.secondary["400"], colors.secondary["700"]],
    textColor: colors.neutral["0"],
  },
  decorators: [
    (Story) => (
      <View
        style={{
          backgroundColor: colors.neutral["300"],
          padding: 16,
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
};
