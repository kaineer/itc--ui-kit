import classes from "./Plus.module.css";
import { type MouseEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import { getVariationClasses } from "../../shared/classes";
import clsx from "clsx";

const defaultSize = 20;

interface Props {
  variation?: string;
  size?: number;
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
}

export const Plus = ({
  variation = "",
  size = defaultSize,
  onClick = () => null,
}: Props) => {
  const className = clsx(classes.plus, getVariationClasses(variation, classes));

  return <FaPlus className={className} size={size} onClick={onClick} />;
};
