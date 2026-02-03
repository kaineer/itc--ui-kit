import classes from "./CenteredPopup.module.css";
import type { ReactNode } from "react";
import { type PopupParams } from "../../hooks/useCenteredPopup";
import { Overlay } from "../../kit/Overlay";
import { createPortal } from "react-dom";

interface Props {
  popupParameters: PopupParams;
  children: ReactNode;
}

export const CenteredPopup = ({ popupParameters, children }: Props) => {
  const { isOpen, clickOverlay } = popupParameters;

  return (
    isOpen &&
    createPortal(
      [
        <Overlay variation="" onClick={clickOverlay} />,
        <div className={classes.centeredPopup}>{children}</div>,
      ],
      document.body,
    )
  );
};
