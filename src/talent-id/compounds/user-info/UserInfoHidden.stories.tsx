import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserInfoHidden } from "./UserInfoHidden";
// import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/UserInfo/UserInfoHidden",
  component: UserInfoHidden,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof UserInfoHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

import { richUser, currencyTypes } from "./mocks";

export const Base: Story = {
  args: {
    user: richUser,
    typeNames: currencyTypes,
  },
};
