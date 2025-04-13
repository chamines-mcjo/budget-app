import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@/components/ui/TextInput";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "TextInput",
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const argTypes: Story["argTypes"] = {
  multiline: {
    control: {
      type: "boolean",
    },
  },
  label: {
    control: {
      type: "text",
    },
  },
  placeholder: {
    control: {
      type: "text",
    },
  },
  value: {
    control: {
      type: "text",
    },
  },
  variant: {
    control: {
      type: "select",
    },
    options: ["dark", "light"],
  },
  hasError: {
    control: {
      type: "boolean",
    },
  },
};

export const Dark: Story = {
  argTypes,
  args: {
    hasError: false,
    label: "Label",
    placeholder: "Enter text here",
    value: undefined,
    onChangeText: action("onChangeText"),
    variant: "dark",
  },
  parameters: {
    backgrounds: {
      default: "neutral-0",
    },
  },
};

export const Light: Story = {
  argTypes,
  args: {
    hasError: false,
    label: "Label",
    placeholder: "Enter text here",
    value: undefined,
    onChangeText: action("onChangeText"),
    variant: "light",
  },
  parameters: {
    backgrounds: {
      default: "primary-700",
    },
  },
};
