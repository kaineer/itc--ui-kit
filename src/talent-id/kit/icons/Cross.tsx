import classes from "./Cross.module.css";
import { type MouseEvent } from "react";
import { RxCross2 } from "react-icons/rx";
import { getVariationClasses } from "../../shared/classes";
import clsx from "clsx";

const defaultSize = 16;

interface Props {
  variation?: string;
  size: number;
  onClick: (e: MouseEvent<HTMLOrSVGElement>) => void;
}

export const Cross = ({
  variation = "",
  size = defaultSize,
  onClick = () => null,
}: Props) => {
  const className = clsx(
    classes.cross,
    getVariationClasses(variation, classes),
  );

  return <RxCross2 className={className} size={size} onClick={onClick} />;
};
