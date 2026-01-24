import { useRef, type ReactNode, type Ref } from "react";
import { useState } from "storybook/internal/preview-api";

type AnchorRef = Ref<HTMLOrSVGElement>;
type VoidFn = () => void;
type AngleType = "lt" | "rt" | "lb" | "rb";

interface AnchoredPopupParams {
  closePopup: VoidFn;
  openPopup: VoidFn;
  isOpen: boolean;
  anchorRef: AnchorRef;
}

export const useAnchoredPopup = (
  anchorAngle: AngleType,
  popupAngle: AngleType,
): AnchoredPopupParams => {
  const anchorRef = useRef<HTMLOrSVGElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closePopup = () => setIsOpen(false);
  const openPopup = () => setIsOpen(true);

  return {
    closePopup,
    openPopup,
    anchorRef,
    isOpen,
  };
};

interface Props {
  children: ReactNode;
  anchorParams: AnchoredPopupParams;
}

export const AnchoredPopup = ({ children, anchorParams }: Props) => {};
