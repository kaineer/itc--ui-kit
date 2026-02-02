import type { Meta, StoryObj } from "@storybook/react-vite";
import { Balance } from "./Balance";
// import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/Hidden/Balance",
  component: Balance,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Balance>;

export default meta;

type Story = StoryObj<typeof meta>;

import { richUser, currencyTypes } from "../mocks";
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
