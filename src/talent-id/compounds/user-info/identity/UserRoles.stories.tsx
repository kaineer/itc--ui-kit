import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserRoles } from "./UserRoles";
import { fn } from "storybook/test";
import type { User, UserRole } from "../types";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "TalentId/Compounds/UserInfo/Identity/UserRoles",
  component: UserRoles,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {
    onRemove: fn(),
    onAdd: fn(),
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState<User>(args.user);

    const handleRemove = (name: string) => {
      const roles = user.roles;
      setUser((prev) => ({ ...prev, roles: roles.filter((n) => n !== name) }));
    };

    return <UserRoles user={user} onRemove={handleRemove} />;
  },
} satisfies Meta<typeof UserRoles>;

export default meta;

type Story = StoryObj<typeof meta>;

const userByRoles = (...args: UserRole[]) => {
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
