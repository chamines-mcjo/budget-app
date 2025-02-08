import type { Meta, StoryObj } from "@storybook/react";
import { Text as TextComp, textSizes, textWeights } from "@/components/ui/Text";

const meta = {
  title: "Tokens/Text",
  component: TextComp,
} satisfies Meta<typeof TextComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  argTypes: {
    size: {
      options: Object.values(textSizes),
      control: { type: "select" },
    },
    weight: {
      options: Object.values(textWeights),
      control: { type: "select" },
    },
  },
  args: {
    children: "Whereas disregard and contempt for human rights have resulted",
    size: "md",
    weight: "regular",
  },
};
