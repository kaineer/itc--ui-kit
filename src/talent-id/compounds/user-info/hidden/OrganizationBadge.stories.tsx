import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrganizationBadge } from "./OrganizationBadge";
import { fn } from "storybook/test";
import { defaultOrganization } from "../mocks";

const meta = {
  title: "TalentId/Compounds/UserInfo/OrganizationBadge",
  component: OrganizationBadge,
  parameters: {},
  argTypes: {
    organization: { controls: "object" },
  },
  args: {
    onRemove: fn(),
  },
} satisfies Meta<typeof OrganizationBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    organization: defaultOrganization,
  },
};
