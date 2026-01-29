// For stories only
import { useRef, type ReactNode, type RefObject } from "react";
import { AnchoredPopup } from "./AnchoredPopup";
import classes from "./AnchorPopupWrapper.module.css";
import { useAnchoredPopup } from "../../hooks/useAnchoredPopup";
import type { AngleType } from "../../shared/angleStyle";
import { px } from "../../shared/px";

interface Props {
  anchorAngle?: AngleType;
  popupAngle?: AngleType;
  distance?: number;
  children: ReactNode;
  dismissable?: boolean;
}

interface RectProps {
  ref?: RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  color: string;
  absolute?: boolean;
  style?: { [id: string]: string };
  onClick?: () => void;
}

export const Rect = ({
  ref,
  width,
  height,
  color,
  absolute,
  style,
  onClick = () => null,
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
      onClick={onClick}
    ></div>
  );
};

export const AnchoredPopupWrapper = ({
  anchorAngle = "rt",
  popupAngle = "lt",
  distance = 0,
  dismissable = false,
  children,
}: Props) => {
  const anchorRef = useRef<HTMLButtonElement>(null);

  const popupParams = useAnchoredPopup({
    anchorRef,
    anchorAngle,
    popupAngle,
    distance,
    dismissable,
  });

  const { clickOverlay, openPopup } = popupParams;

  return [
    <button ref={anchorRef} className={classes.anchor} onClick={openPopup}>
      click me
    </button>,
    <AnchoredPopup popupParameters={popupParams} onOverlayClick={clickOverlay}>
      {children}
    </AnchoredPopup>,
  ];
};
