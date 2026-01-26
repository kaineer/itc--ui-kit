import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnchoredPopup } from "./AnchoredPopup";
import { fn } from "storybook/test";
import { useRef } from "storybook/internal/preview-api";
import type { RefObject } from "react";

const meta = {
  title: "TalentId/Compounds/Shared/AnchoredPopup",
  component: AnchoredPopup,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof AnchoredPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

const styleBlue = {
  width: "100px",
  height: "100px",
  position: "absolute",
  display: "inline-block",
  background: "blue",
};

interface RectProps {
  ref: RefObject<HTMLElement>;
  width: number;
  height: number;
  color: string;
  absolute?: boolean;
  style?: { [id: string]: string };
}

const px = (value: number) => String(value) + "px";

const Rect = ({ ref, width, height, color, absolute, style }: RectProps) => {
  return (
    <div
      ref={ref}
      style={{
        ...style,
        width: px(width),
        height: px(height),
        backgroundColor: color,
        position: absolute ? "absolute" : "relative",
      }}
    ></div>
  );
};

export const Base: Story = {
  args: {},
  render: () => {
    const ref = useRef<HTMLElement>(null);

    return (
      <>
        <Rect
          ref={ref}
          width={80}
          height={20}
          color="red"
          absolute={true}
          style={{ left: "40px", top: "20px" }}
        />

        <AnchoredPopup anchorRef={ref} anchorAngle="lb" popupAngle="lt">
          <Rect width={80} height={20} color="blue" />
        </AnchoredPopup>
      </>
    );
  },
};
