import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserInfo } from "./UserInfo";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/UserInfo",
  component: UserInfo,
  parameters: {},
  argTypes: {},
  args: {
    onAddRole: fn(),
    onRemoveRole: fn(),
  },
} satisfies Meta<typeof UserInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: {
      userId: "id-john-doe",
      userName: "John Doe",
      email: "john@doe.com",
      roles: ["admin"],
    },
  },
};

export const SuperUser: Story = {
  args: {
    user: {
      userId: "id-su",
      userName: "Super User",
      email: "su@itc.ru",
      roles: ["admin", "game_diz", "mentor", "methodist", "player"],
    },
  },
};
