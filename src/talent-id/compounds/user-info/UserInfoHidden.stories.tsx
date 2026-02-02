import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserInfoHidden } from "./UserInfoHidden";
// import { fn } from "storybook/test";
import { richUser, currencyTypes, organizationList } from "./mocks";

const meta = {
  title: "TalentId/Compounds/UserInfo/UserInfoHidden",
  component: UserInfoHidden,
  parameters: {},
  argTypes: {},
  args: {
    allOrganizations: organizationList,
  },
} satisfies Meta<typeof UserInfoHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

const emptyBalanceUser = {
  ...richUser,
  balance: {},
};

export const Base: Story = {
  args: {
    user: richUser,
    typeNames: currencyTypes,
  },
};

export const EmptyBalance: Story = {
  name: "Без денег",
  args: {
    user: emptyBalanceUser,
    typeNames: currencyTypes,
  },
};
