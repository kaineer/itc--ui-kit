import classes from "./AnchoredPopup.module.css";
import { useRef, type ReactNode, type RefObject } from "react";
import { useState } from "react";
import {
  getAnchoredPopupPosition,
  type AngleStyle,
} from "../../shared/angleStyle";
import { createPortal } from "react-dom";

type AnchorRef = RefObject<HTMLElement | null>;
type VoidFn = () => void;
type AngleType = "lt" | "rt" | "lb" | "rb";

interface AnchoredPopupParams {
  closePopup: VoidFn;
  openPopup: VoidFn;
  isOpen: boolean;
  anchorRef: AnchorRef;
  getAngleStyle: (popupRef: RefObject<HTMLElement | null>) => AngleStyle | null;
}

const useAnchoredPopup = (
  anchorRef: RefObject<HTMLElement | null>,
  anchorAngle: AngleType,
  popupAngle: AngleType,
  distance: number = 0,
): AnchoredPopupParams => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closePopup = () => setIsOpen(false);
  const openPopup = () => setIsOpen(true);

  let getAngleStyle: (
    popupRef: RefObject<HTMLElement | null>,
  ) => AngleStyle | null = () => null;

  if (anchorRef.current) {
    getAngleStyle = (popupRef: RefObject<HTMLElement | null>) => {
      if (popupRef) {
        return getAnchoredPopupPosition(
          anchorRef?.current?.getBoundingClientRect(),
          popupRef?.current?.getBoundingClientRect(),
          anchorAngle,
          popupAngle,
          distance,
        );
      }
      return null;
    };
  }

  return {
    closePopup,
    openPopup,
    anchorRef,
    isOpen,
    getAngleStyle,
  };
};

interface Props {
  anchorRef: RefObject<HTMLElement | null>;
  anchorAngle: AngleType;
  popupAngle: AngleType;
  distance: number;

  children: ReactNode;
}

export const AnchoredPopup = ({
  children,
  anchorRef,
  anchorAngle,
  popupAngle,
  distance,
}: Props) => {
  const anchorParams: AnchoredPopupParams = useAnchoredPopup(
    anchorRef,
    anchorAngle,
    popupAngle,
    distance,
  );

  const ref = useRef<HTMLDivElement>(null);

  const { getAngleStyle } = anchorParams;

  const style = ref.current && getAngleStyle(ref);

  return (
    <>
      {createPortal(
        <div
          ref={ref}
          className={classes.anchoredPopup}
          style={style || undefined}
        >
          {children}
        </div>,
        document.body,
      )}
    </>
  );
};
