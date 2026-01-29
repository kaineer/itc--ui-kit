import classes from "./AnchoredPopup.module.css";
import { useEffect, useRef, type ReactNode } from "react";
import { useState } from "react";
import { type AngleStyle } from "../../shared/angleStyle";
import { createPortal } from "react-dom";
import { Overlay } from "../../kit/Overlay";
import { type AnchoredPopupParams } from "../../hooks/useAnchoredPopup";

export interface Props {
  popupParameters: AnchoredPopupParams;
  onOverlayClick?: () => void;

  children: ReactNode;
}

export const AnchoredPopup = ({
  popupParameters,
  children,
  onOverlayClick = () => null,
}: Props) => {
  const { isOpen, getAngleStyle } = popupParameters;

  const [style, setStyle] = useState<AngleStyle | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && isOpen) {
      setStyle(getAngleStyle(ref.current));
    }
  }, [isOpen, ref, getAngleStyle]);

  return (
    <>
      {isOpen &&
        createPortal(
          [
            <Overlay onClick={onOverlayClick} />,
            <div
              ref={ref}
              className={classes.anchoredPopup}
              style={style || undefined}
            >
              {children}
            </div>,
          ],
          document.body,
        )}
    </>
  );
};
