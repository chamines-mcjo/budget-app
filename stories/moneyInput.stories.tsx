import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { MoneyInput } from "@/components/ui/MoneyInput";

const meta = {
  title: "MoneyInput",
  component: MoneyInput,
} satisfies Meta<typeof MoneyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["dark", "light"],
    },
    label: {
      control: {
        type: "text",
      },
    },
    hasError: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    label: "Monthly amount",
    value: undefined,
    placeholder: "0.00",
    onChangeText: action("onChangeText"),
    variant: "dark",
  },
};

export const Light: Story = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["dark", "light"],
    },
    label: {
      control: {
        type: "text",
      },
    },
    hasError: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    label: "Monthly amount",
    value: undefined,
    placeholder: "0.00",
    onChangeText: action("onChangeText"),
    variant: "light",
  },
  parameters: {
    backgrounds: {
      default: "primary-700",
    },
  },
};
