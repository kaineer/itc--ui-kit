import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Inputs/Checkbox",
  component: Checkbox,
  parameters: {},
  argTypes: {
    value: { control: "boolean" },
    defaultValue: { control: "boolean" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseOn: Story = {
  args: {
    value: true,
  },
};

export const BaseOff: Story = {
  args: {
    value: false,
  },
};

export const FreeOn: Story = {
  args: {
    defaultValue: true,
  },
};
