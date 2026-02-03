import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeleteUser } from "./DeleteUser";
const meta = {
  title: "TalentId/Compounds/UserInfo/Popups/DeleteUser",
  component: DeleteUser,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof DeleteUser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
