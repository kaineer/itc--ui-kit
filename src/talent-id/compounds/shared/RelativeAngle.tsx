import classes from "./RelativeAngle.module.css";
import type { ReactNode } from "react";
import type { AngleType } from "../../shared/angleStyle";
import { getVarious } from "./Various";

const RelativeAngleWrapper = getVarious("angle", classes);

interface Props {
  angle: AngleType;
  children: ReactNode;
}

export const RelativeAngle = ({ angle, children }: Props) => {
  return (
    <RelativeAngleWrapper variation={angle}>{children}</RelativeAngleWrapper>
  );
};
