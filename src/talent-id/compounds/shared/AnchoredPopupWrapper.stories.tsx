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
  },
  args: {},
} satisfies Meta<typeof AnchoredPopupWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = <Rect width={80} height={200} color="#81a1c1" />;

export const Base: Story = {
  args: {
    anchorAngle: "lb",
    popupAngle: "lt",
    distance: 0,
    children,
  },
};
