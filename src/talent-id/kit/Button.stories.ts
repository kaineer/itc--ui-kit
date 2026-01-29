import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Button",
  component: Button,
  parameters: {},
  argTypes: {
    title: { control: "text" },
    variation: { control: "text" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Сбросить роли",
    variation: "bottom",
  },
};
