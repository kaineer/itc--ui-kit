import classes from "./AnchoredPopup.module.css";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { useState, useCallback } from "react";
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
  getAngleStyle: (popup: HTMLElement | null) => AngleStyle | null;
}

const useAnchoredPopup = (
  anchorRef: RefObject<HTMLElement | null>,
  anchorAngle: AngleType,
  popupAngle: AngleType,
  distance: number = 0,
): AnchoredPopupParams => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getAngleStyle = useCallback(
    (popup: HTMLElement | null): AngleStyle | null => {
      if (popup && anchorRef?.current) {
        return getAnchoredPopupPosition(
          anchorRef.current?.getBoundingClientRect(),
          popup.getBoundingClientRect(),
          anchorAngle,
          popupAngle,
          distance,
        );
      }

      return null;
    },
    [anchorRef, anchorAngle, popupAngle, distance],
  );

  const closePopup = () => setIsOpen(false);
  const openPopup = () => setIsOpen(true);

  return {
    closePopup,
    openPopup,
    anchorRef,
    isOpen,
    getAngleStyle,
  };
};

export interface Props {
  anchorRef: RefObject<HTMLElement | null>;
  anchorAngle: AngleType;
  popupAngle: AngleType;
  distance?: number;

  children: ReactNode;
}

export const AnchoredPopup = ({
  children,
  anchorRef,
  anchorAngle,
  popupAngle,
  distance = 0,
}: Props) => {
  const anchorParams: AnchoredPopupParams = useAnchoredPopup(
    anchorRef,
    anchorAngle,
    popupAngle,
    distance,
  );

  const [style, setStyle] = useState<AngleStyle | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const { getAngleStyle } = anchorParams;

  useEffect(() => {
    if (ref.current) {
      setStyle(getAngleStyle(ref.current));
    }
  }, [ref, getAngleStyle]);

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
