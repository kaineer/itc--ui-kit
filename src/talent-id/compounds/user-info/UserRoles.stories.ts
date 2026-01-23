import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserRoles } from "./UserRoles";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/UserRoles",
  component: UserRoles,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {
    onRemove: fn(),
    onAdd: fn(),
  },
} satisfies Meta<typeof UserRoles>;

export default meta;

type Story = StoryObj<typeof meta>;

const userByRoles = (...args: string[]) => {
  return { userId: "", userName: "", email: "", roles: args };
};

export const Player: Story = {
  args: {
    user: userByRoles("player"),
  },
};

export const Admin: Story = {
  args: {
    user: userByRoles("admin"),
  },
};

export const AllRoles: Story = {
  args: {
    user: userByRoles("admin", "player", "methodist", "mentor", "game_diz"),
  },
};
