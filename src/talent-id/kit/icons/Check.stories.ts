import type { Meta, StoryObj } from "@storybook/react-vite";
import { Check } from "./Check";
// import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Icons/Check",
  component: Check,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Check>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variation: "",
  },
};

export const Size8: Story = {
  args: {
    variation: "8",
  },
};
