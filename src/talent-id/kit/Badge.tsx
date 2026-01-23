import classes from "./Badge.module.css";
import clsx from "clsx";
import { getVariationClasses } from "../shared/classes";

import { type ReactNode } from "react";

interface Props {
  variation?: string;
  title: string;
  children?: ReactNode;
}

export const Badge = ({ variation = "", title, children }: Props) => {
  const className = clsx(
    [classes.badge],
    getVariationClasses(variation, classes),
  );

  return (
    <div className={className}>
      {title} {children || null}
    </div>
  );
};
