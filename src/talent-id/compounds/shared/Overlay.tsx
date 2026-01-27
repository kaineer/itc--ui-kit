import clsx from "clsx";
import classes from "./Overlay.module.css";
import { getVariationClasses } from "../../shared/classes";
import { type MouseEvent } from "react";

interface Props {
  variation?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => null;
}

export const Overlay = ({
  variation = "black-05",
  onClick = () => null,
}: Props) => {
  const className = clsx(
    classes.overlay,
    getVariationClasses(variation, classes),
  );
  return <div onClick={onClick} className={className}></div>;
};
