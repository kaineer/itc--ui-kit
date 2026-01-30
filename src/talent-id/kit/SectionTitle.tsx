import { getVariationClasses } from "../shared/classes";
import classes from "./SectionTitle.module.css";
import clsx from "clsx";

interface Props {
  title: string;
  variation?: string;
}

export const SectionTitle = ({ title, variation = "" }: Props) => {
  const className = clsx(
    classes.title,
    getVariationClasses(variation, classes),
  );

  return <h1 className={className}>{title}</h1>;
};
