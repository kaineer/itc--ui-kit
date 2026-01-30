import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoleBadge } from "./RoleBadge";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/Identity/RoleBadge",
  component: RoleBadge,
  parameters: {},
  argTypes: {
    name: {
      type: "select",
      options: ["admin", "mentor", "methodist", "game_diz", "player"],
    },
  },
  args: {
    onRemove: fn(),
  },
} satisfies Meta<typeof RoleBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Admin: Story = {
  args: {
    name: "admin",
  },
  name: "Администратор",
};

export const Player: Story = {
  args: {
    name: "player",
  },
  name: "Игрок",
};

export const Mentor: Story = {
  args: { name: "mentor" },
  name: "Ментор",
};

export const GameDiz: Story = {
  args: { name: "game_diz" },
  name: "Гейм дизайнер",
};

export const Methodist: Story = {
  args: { name: "methodist" },
  name: "Методист",
};
