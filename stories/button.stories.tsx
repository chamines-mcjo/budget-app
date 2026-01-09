import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";

import { Button } from "@/components/ui/Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Hello World",
    onPress: action("onPress"),
  },
};

export const Secondary: Story = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    variant: "secondary",
    children: "Hello World",
    onPress: action("onPress"),
  },
};

export const tertiary: Story = {
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary"],
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    variant: "tertiary",
    children: "Hello World",
    onPress: action("onPress"),
  },
};
