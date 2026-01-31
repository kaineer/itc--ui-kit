import classes from "./Badge.module.css";
import { type ReactNode } from "react";
import { getVarious, type VariousProps } from "../compounds/shared/Various";

type Props = VariousProps & { title: string };

const BadgeWrapper = getVarious("badge", classes);

export const Badge = ({ variation = "role", title, children }: Props) => {
  return (
    <BadgeWrapper variation={variation}>
      {title}
      {children}
    </BadgeWrapper>
  );
};
