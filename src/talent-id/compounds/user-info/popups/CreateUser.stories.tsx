import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreateUser } from "./CreateUser";
import { fn } from "storybook/test";
import { organizationList } from "../mocks";

const meta = {
  title: "TalentId/Compounds/UserList/CreateUser",
  component: CreateUser,
  parameters: {},
  argTypes: {
    user: { controls: "object" },
  },
  args: {
    onSubmit: fn(),
    allOrganizations: organizationList,
  },
} satisfies Meta<typeof CreateUser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
  args: {},
};

export const Update: Story = {
  args: {
    user: {
      userId: "hello-id",
      userName: "John Doe",
      email: "jonh.doe@email.com",
      password: "",
    },
  },
};
