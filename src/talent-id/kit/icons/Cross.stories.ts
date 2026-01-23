import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cross } from "./Cross";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Icons/Cross",
  component: Cross,
  parameters: {},
  argTypes: {
    variation: {
      control: "select",
      options: ["white", "black", "grey", "violet"],
    },
    size: { control: "number" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Cross>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variation: "black",
  },
};
