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
    disabled: { control: "boolean" },
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

export const Disabled: Story = {
  args: {
    title: "Заблокированная кнопка",
    variation: "bottom",
    disabled: true,
  },
};
