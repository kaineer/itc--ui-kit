// For stories only
import { useRef, type RefObject } from "react";
import {
  type Props as AnchoredPopupProps,
  AnchoredPopup,
} from "./AnchoredPopup";

type Props = Omit<AnchoredPopupProps, "anchorRef">;

const px = (value: number) => String(value) + "px";

interface RectProps {
  ref?: RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  color: string;
  absolute?: boolean;
  style?: { [id: string]: string };
}

export const Rect = ({
  ref,
  width,
  height,
  color,
  absolute,
  style,
}: RectProps) => {
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

export const AnchoredPopupWrapper = ({
  anchorAngle = "rt",
  popupAngle = "lt",
  distance,
  children,
  isPopupOpen,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Rect
        ref={ref}
        width={200}
        height={80}
        absolute={true}
        style={{ left: "200px", top: "50px" }}
        color="#5e81ac"
      />
      <AnchoredPopup
        anchorRef={ref}
        anchorAngle={anchorAngle}
        popupAngle={popupAngle}
        distance={distance}
        isPopupOpen={isPopupOpen}
      >
        {children}
      </AnchoredPopup>
    </>
  );
};
