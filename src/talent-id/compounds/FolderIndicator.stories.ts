import type { Meta, StoryObj } from "@storybook/react-vite";
import { FolderIndicator } from "./FolderIndicator";

const meta = {
  title: "TalentId/Compounds/FolderIndicator",
  component: FolderIndicator,
  parameters: {},
  argTypes: {
    expanded: { type: "boolean" },
  },
  args: {},
} satisfies Meta<typeof FolderIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    expanded: false,
  },
};
