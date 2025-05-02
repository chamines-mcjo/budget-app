import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Select } from "@/components/ui/Select";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const argTypes: Story["argTypes"] = {
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
  value: {
    control: {
      type: "text",
    },
  },
  hasError: {
    control: {
      type: "boolean",
    },
  },
};

export const Simple: Story = {
  argTypes,
  args: {
    label: "Monthly amount",
    value: undefined,
    placeholder: "0.00",
    onChangeText: action("onChangeText"),
    variant: "dark",
  },
};

export const CustomRender: Story = {
  argTypes,
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
