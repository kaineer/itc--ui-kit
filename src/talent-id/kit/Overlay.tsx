import classes from "./Overlay.module.css";
import { getVarious, type VariousProps } from "../compounds/shared/Various";

const OverlayWrapper = getVarious("overlay", classes);

export const Overlay = ({
  variation = "black-05",
  onClick = () => null,
}: VariousProps) => {
  return (
    <OverlayWrapper onClick={onClick} variation={variation}></OverlayWrapper>
  );
};
