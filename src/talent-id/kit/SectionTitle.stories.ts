import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./SectionTitle";

const meta = {
  title: "TalentId/Kit/SectionTitle",
  component: SectionTitle,
  parameters: {},
  argTypes: {
    title: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { title: "Hello world" },
};

export const TitleUser: Story = {
  args: {
    title: "Пользователь"
  }
};
