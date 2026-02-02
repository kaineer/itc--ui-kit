import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserOrganizations } from "./UserOrganizations";
import { organizationList, userWithOrganizations } from "../mocks";
import { fn } from "storybook/test";
import type { Organization, OrganizationId, User } from "../types";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "TalentId/Compounds/UserInfo/Hidden/UserOrganizations",
  component: UserOrganizations,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {
    onRemoveFromOrganization: fn(),
    allOrganizations: organizationList,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState<User>(args.user);

    const handleRemove = (id: OrganizationId) => {
      const { organizations } = user;
      setUser((prev) => ({
        ...prev,
        organizations: (organizations || []).filter((o) => o.id !== id),
      }));
    };

    const handleUpdate = (organizations: Organization[]) => {
      setUser((prev) => ({ ...prev, organizations }));
    };

    return (
      <UserOrganizations
        user={user}
        allOrganizations={args.allOrganizations}
        onRemoveFromOrganization={handleRemove}
        onUpdateOrganizations={handleUpdate}
      />
    );
  },
} satisfies Meta<typeof UserOrganizations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: userWithOrganizations,
  },
};
