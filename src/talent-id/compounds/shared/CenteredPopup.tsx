import classes from "./CenteredPopup.module.css";
import { useRef, type ReactNode } from "react";
import { type PopupParams } from "../../hooks/useCenteredPopup";
import { Overlay } from "../../kit/Overlay";
import { createPortal } from "react-dom";

interface Props {
  popupParameters: PopupParams;
  children: ReactNode;
}

export const CenteredPopup = ({ popupParameters, children }: Props) => {
  const { isOpen, clickOverlay } = popupParameters;
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    isOpen &&
    createPortal(
      [
        <Overlay
          ref={ref}
          variation="black-05 centered-popup"
          onClick={clickOverlay}
        />,
        <div
          onClick={() => ref?.current?.click()}
          className={classes.centeredPopup}
        >
          {children}
        </div>,
      ],
      document.body,
    )
  );
};
