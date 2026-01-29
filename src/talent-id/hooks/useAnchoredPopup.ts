import { useCallback, useState, type RefObject } from "react";
import { getAnchoredPopupPosition } from "../shared/angleStyle";

type AngleType = "lt" | "rt" | "lb" | "rb";
type VoidFn = () => void;
type AnchorRef = RefObject<HTMLElement | null>;

export interface AnchoredPopupParams {
  closePopup: VoidFn;
  openPopup: VoidFn;
  clickOverlay: VoidFn;
  isOpen: boolean;
  anchorRef: AnchorRef;
  getAngleStyle: (popup: HTMLElement | null) => AngleStyle | null;
}

export interface AngleStyle {
  display: "inline-block";
  position: "absolute";
  left?: string;
  top?: string;
}

interface AnchoredPopupProps {
  anchorRef: RefObject<HTMLElement | null>;
  anchorAngle: AngleType;
  popupAngle: AngleType;
  dismissable?: boolean;
  distance?: number;
  startOpen?: boolean;
}

export const useAnchoredPopup = ({
  anchorRef,
  anchorAngle,
  popupAngle,
  distance = 0,
  startOpen = false,
  dismissable = false,
}: AnchoredPopupProps): AnchoredPopupParams => {
  const [isOpen, setIsOpen] = useState<boolean>(startOpen);

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

  const clickOverlay = dismissable ? () => setIsOpen(false) : () => null;

  return {
    closePopup,
    openPopup,
    clickOverlay,
    anchorRef,
    isOpen,
    getAngleStyle,
  };
};
