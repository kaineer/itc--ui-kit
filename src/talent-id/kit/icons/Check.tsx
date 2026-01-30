import { getVariationClasses } from "../../shared/classes";
import classes from "./Check.module.css";
import { FaCheck } from "react-icons/fa";
import clsx from "clsx";

interface Props {
  variation: string;
}

export const Check = ({ variation }: Props) => {
  const className = clsx(classes.icon, getVariationClasses(variation, classes));
  return <FaCheck className={className} />;
};
