import type { ReactNode } from "react";
import classes from "./PopupContainer.module.css";

interface Props {
  children: ReactNode;
}

export const PopupContainer = ({ children }: Props) => {
  return <div className={classes.container}>{children}</div>;
};
