import classes from "./AnchoredPopup.module.css";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { useState, useCallback } from "react";
import {
  getAnchoredPopupPosition,
  type AngleStyle,
} from "../../shared/angleStyle";
import { createPortal } from "react-dom";
import { Overlay } from "./Overlay";

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
  anchorAngle?: AngleType;
  popupAngle?: AngleType;
  distance?: number;
  isPopupOpen?: boolean;

  children: ReactNode;
}

export const AnchoredPopup = ({
  children,
  anchorRef,
  anchorAngle = "rt",
  popupAngle = "lt",
  distance = 0,
  isPopupOpen = false,
}: Props) => {
  const anchorParams: AnchoredPopupParams = useAnchoredPopup(
    anchorRef,
    anchorAngle,
    popupAngle,
    distance,
  );

  const [style, setStyle] = useState<AngleStyle | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const { getAngleStyle, isOpen, closePopup, openPopup } = anchorParams;

  useEffect(() => {
    if (ref.current && isOpen) {
      setStyle(getAngleStyle(ref.current));
    }
  }, [isOpen, ref, getAngleStyle]);

  useEffect(() => {
    (isPopupOpen ? openPopup : closePopup)();
  }, [isPopupOpen, openPopup, closePopup]);

  // TODO: возможно, есть смысл вынести overlay в отдельный компонент
  return (
    <>
      {createPortal(
        isOpen && (
          <>
            <Overlay />
            <div
              ref={ref}
              className={classes.anchoredPopup}
              style={style || undefined}
            >
              {children}
            </div>
          </>
        ),
        document.body,
      )}
    </>
  );
};
