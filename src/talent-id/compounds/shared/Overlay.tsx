import clsx from "clsx";
import classes from "./Overlay.module.css";
import { getVariationClasses } from "../../shared/classes";

interface Props {
  variation?: string;
}

export const Overlay = ({ variation = "black-05" }: Props) => {
  const className = clsx(
    classes.overlay,
    getVariationClasses(variation, classes),
  );
  return <div className={className}></div>;
};
