import classes from "./Overlay.module.css";
import { getVarious, type VariousProps } from "../compounds/shared/Various";

const OverlayWrapper = getVarious("overlay");

export const Overlay = ({
  variation = "black-05",
  onClick = () => null,
}: VariousProps) => {
  return (
    <OverlayWrapper
      classes={classes}
      onClick={onClick}
      variation={variation}
    ></OverlayWrapper>
  );
};
