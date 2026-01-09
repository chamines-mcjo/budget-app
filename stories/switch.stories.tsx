import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";
import { Switch } from "@/components/ui/Switch";

const meta = {
  title: "Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const argTypes: Story["argTypes"] = {
  variant: {
    control: {
      type: "select",
    },
    options: ["dark", "light"],
  },
  alignItems: {
    control: {
      type: "select",
    },
    options: ["top", "center", "bottom"],
  },
  label: {
    control: {
      type: "text",
    },
  },
  description: {
    control: {
      type: "text",
    },
  },
  initialValue: {
    control: {
      type: "boolean",
    },
    options: [true, false],
  },
};

export const Dark: Story = {
  argTypes,
  args: {
    label: "Notificaciones diarias",
    description: "Te recordaremos registrar tus gastos cada día.",
    initialValue: true,
    onToggle: action("onToggle"),
    alignItems: "center",
  },
};

export const Light: Story = {
  argTypes,
  args: {
    variant: "light",
    label: "Notificaciones diarias",
    description: "Te recordaremos registrar tus gastos cada día.",
    initialValue: false,
    onToggle: action("onToggle"),
    alignItems: "center",
  },
  parameters: {
    backgrounds: {
      default: "primary-900",
    },
  },
};
