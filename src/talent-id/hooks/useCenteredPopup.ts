import { useState } from "react";

export interface PopupProps {
  dismissable?: boolean;
}

export interface PopupParams {
  isOpen: boolean;
  closePopup: () => void;
  openPopup: () => void;
  clickOverlay: () => void;
}

export const useCenteredPopup = ({
  dismissable = true,
}: PopupProps): PopupParams => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickOverlay = dismissable ? () => setIsOpen(false) : () => null;

  return {
    isOpen,
    closePopup: () => setIsOpen(false),
    openPopup: () => setIsOpen(true),
    clickOverlay,
  };
};
