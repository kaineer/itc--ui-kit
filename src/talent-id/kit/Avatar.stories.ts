import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "TalentId/Kit/Avatar",
  component: Avatar,
  parameters: {},
  argTypes: {
    variation: { control: "text" },
    fullname: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Size24: Story = {
  args: {
    variation: "24",
    fullname: "Hello World",
  },
};

export const Size28: Story = {
  args: {
    variation: "28",
    fullname: "Twenty Eight",
  },
};

export const Size32: Story = {
  args: {
    variation: "32",
    fullname: "Thirty Two",
  },
};

export const Size44: Story = {
  args: {
    variation: "44",
    fullname: "Fourty Four",
  },
};
