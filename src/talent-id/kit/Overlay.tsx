import classes from "./Overlay.module.css";
import { getVarious, type VariousProps } from "../compounds/shared/Various";

const OverlayWrapper = getVarious("overlay", classes);

export const Overlay = ({
  ref,
  variation = "black-05",
  onClick = () => null,
}: VariousProps) => {
  return (
    <OverlayWrapper
      ref={ref}
      onClick={onClick}
      variation={variation}
    ></OverlayWrapper>
  );
};
