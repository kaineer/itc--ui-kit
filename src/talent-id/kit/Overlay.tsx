import clsx from "clsx";
import classes from "./Overlay.module.css";
import { type MouseEvent } from "react";
import { getVariationClasses } from "../shared/classes";

interface Props {
  variation?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
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
