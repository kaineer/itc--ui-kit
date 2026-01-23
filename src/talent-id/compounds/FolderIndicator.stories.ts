import type { Meta, StoryObj } from "@storybook/react-vite";
import { FolderIndicator } from "./FolderIndicator";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/FolderIndicator",
  component: FolderIndicator,
  parameters: {},
  argTypes: {
    expanded: { type: "boolean" },
  },
  args: {
    onToggle: fn(),
  },
} satisfies Meta<typeof FolderIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    expanded: false,
  },
};
