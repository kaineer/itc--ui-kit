import type { Meta, StoryObj } from "@storybook/react-vite";
import { Identification } from "./Identification";

const meta = {
  title: "TalentId/Compounds/UserInfo/Identity/Identification",
  component: Identification,
  parameters: {},
  argTypes: {
    user: { control: "object" },
  },
  args: {},
} satisfies Meta<typeof Identification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: {
      userId: "",
      userName: "John Helloworld",
      email: "john@heloworld.com",
    },
  },
};

export const Roman: Story = {
  args: {
    user: {
      userId: "",
      userName: "Роман Бурашнов",
      email: "roman.burashnov@mail.ru",
    },
  },
  name: "Дизайнер",
};

export const Frontender: Story = {
  args: {
    user: {
      userId: "",
      userName: "Сергей Ключковский",
      email: "kaineer@gmail.com",
    },
  },
  name: "Фронтендер",
};

export const TooLong: Story = {
  args: {
    user: {
      userId: "",
      userName: "John Helloworld, another person with too long name",
      email: "john@heloworld.and.another.long.email.com",
    },
  },
};
