import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpdateUserRoles } from "./UpdateUserRoles";
import { fn } from "storybook/test";
import type { UserRole } from "../types";

const meta = {
  title: "TalentId/Compounds/UserInfo/Popups/UpdateUserRoles",
  component: UpdateUserRoles,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {},
} satisfies Meta<typeof UpdateUserRoles>;

export default meta;

type Story = StoryObj<typeof meta>;

const userByRoles = (...args: UserRole[]) => {
  return { userId: "", userName: "", email: "", roles: args };
};

export const Base: Story = {
  args: {
    user: userByRoles("player", "admin"),
  },
};
