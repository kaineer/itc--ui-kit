import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserOrganizations } from "./UserOrganizations";
import { userWithOrganizations } from "../mocks";
import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/Hidden/UserOrganizations",
  component: UserOrganizations,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {
    onRemoveFromOrganization: fn(),
  },
} satisfies Meta<typeof UserOrganizations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: userWithOrganizations,
  },
};
