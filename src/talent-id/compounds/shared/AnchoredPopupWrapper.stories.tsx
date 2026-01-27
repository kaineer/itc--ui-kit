import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnchoredPopupWrapper, Rect } from "./AnchoredPopupWrapper";
// import { fn } from "storybook/test";

const meta = {
  title: "TalentId/Compounds/Shared/AnchoredPopup",
  component: AnchoredPopupWrapper,
  parameters: {},
  argTypes: {
    anchorAngle: { control: "select", options: ["lt", "rt", "lb", "rb"] },
    popupAngle: { control: "select", options: ["lt", "rt", "lb", "rb"] },
    distance: { control: "number" },
    isPopupOpen: { control: "boolean" },
  },
  args: {},
} satisfies Meta<typeof AnchoredPopupWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = <Rect width={80} height={200} color="#81a1c1" />;

export const Base: Story = {
  args: {
    distance: 4,
    children,
  },
};

export const PopupDown: Story = {
  args: {
    distance: 4,
    children,
    anchorAngle: "lb",
    popupAngle: "lt",
  },
};

export const PopupRight: Story = {
  args: {
    distance: 4,
    children,
    anchorAngle: "rt",
    popupAngle: "lt",
  },
};

export const PopupLeft: Story = {
  args: {
    distance: 4,

    children,

    anchorAngle: "lt",
    popupAngle: "rt",
  },
};
