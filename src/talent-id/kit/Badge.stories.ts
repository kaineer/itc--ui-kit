import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "TalentId/Kit/Badge",
  component: Badge,
  parameters: {},
  argTypes: {
    variation: { control: "text" },
    title: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Role: Story = {
  args: {
    title: "badge",
    variation: "role",
  },
};

export const Currency: Story = {
  args: {
    title: "Марки: 0",
    variation: "balance",
  },
};
