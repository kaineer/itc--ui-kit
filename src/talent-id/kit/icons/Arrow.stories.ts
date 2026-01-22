import type { Meta, StoryObj } from "@storybook/react-vite";
import { Arrow } from "./Arrow";

const meta = {
  title: "TalentId/Kit/Icons/Arrow",
  component: Arrow,
  parameters: {},
  argTypes: {
    direction: { control: "select", options: ["down", "right"] },
    size: { control: "number" },
  },
  args: {},
} satisfies Meta<typeof Arrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 24,
  },
};
