import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpdateUserOrganizations } from "./UpdateUserOrganizations";
import { organizationList, userWithOrganizations } from "../mocks";
const meta = {
  title: "TalentId/Compounds/UserInfo/Popups/UpdateUserOrganizations",
  component: UpdateUserOrganizations,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {
    allOrganizations: organizationList,
  },
} satisfies Meta<typeof UpdateUserOrganizations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: userWithOrganizations,
  },
};
