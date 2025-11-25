import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";

import { Select } from "@/components/ui/Select/Select";

const meta = {
  title: "Select",
  component: Select.GridPicker,
} satisfies Meta<typeof Select.GridPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const argTypes: Story["argTypes"] = {
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
      type: "object",
    },
  },
  options: {
    control: {
      type: "object",
    },
  },
  hasError: {
    control: {
      type: "boolean",
    },
  },
};

const options: Array<Record<string, string>> = [
  { label: "Diario", value: "daily", id: "daily" },
  { label: "Semanal", value: "weekly", id: "weekly" },
  { label: "Quincenal", value: "biweekly", id: "biweekly" },
  { label: "Mensual", value: "monthly", id: "monthly" },
  { label: "Anual", value: "annual", id: "annual" },
];

export const Grid: Story = {
  argTypes,
  args: {
    label: "Frecuencia de pago",
    value: {
      label: "Mensual",
      value: "monthly",
      id: "monthly",
    },
    placeholder: "Por uso",
    options,
    onSelectValue: action("onSelectValue"),
  },
};
