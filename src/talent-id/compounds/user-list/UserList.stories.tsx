import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserList } from "./UserList";
import { currencyTypes, organizationList, userList } from "../user-info/mocks";
const meta = {
  title: "TalentId/Compounds/UserList/UserList",
  component: UserList,
  parameters: {},
  argTypes: {},
  args: {
    users: userList,
    typeNames: currencyTypes,
    allOrganizations: organizationList,
  },
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
}; /** Base: Story */
