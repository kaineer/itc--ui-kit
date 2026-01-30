import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlay } from "./Overlay";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Overlay",
  component: Overlay,
  parameters: {},
  argTypes: {
    variation: { controls: "string" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variation: "",
  },
};
