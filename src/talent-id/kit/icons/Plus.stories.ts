import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "./Plus";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Icons/Plus",
  component: Plus,
  parameters: {},
  argTypes: {
    variation: {
      control: "select",
      options: ["role", "coin", "game"],
    },
    size: { control: "number" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Plus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { variation: "game" },
};

export const Game: Story = {
  args: { variation: "game" },
};

export const Role: Story = {
  args: { variation: "role" },
};

export const Coin: Story = {
  args: { variation: "coin" },
};
