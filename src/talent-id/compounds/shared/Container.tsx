import classes from "./Row.module.css";
import type { ReactNode } from "react";
import { px } from "../../shared/px";

interface Props {
  gap?: number;
  children: ReactNode;
}

export const Row = ({ gap = 0, children }: Props) => {
  const style: Record<string, string> = {};
  if (gap !== 0) {
    style.gap = px(gap);
  }

  return (
    <div className={classes.row} style={style}>
      {children}
    </div>
  );
};

export const Column = ({ gap = 0, children }: Props) => {
  const style: Record<string, string> = {};
  if (gap !== 0) {
    style.gap = px(gap);
  }

  return (
    <div className={classes.column} style={style}>
      {children}
    </div>
  );
};
