import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Kit/Inputs/TextInput",
  component: TextInput,
  parameters: {},
  argTypes: {
    value: { controls: "string" },
    defaultValue: { controls: "string" },
    placeholder: { controls: "string" },
  },
  args: {},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    defaultValue: "Base",
  },
};
