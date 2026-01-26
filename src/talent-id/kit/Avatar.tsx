import classes from "./Avatar.module.css";
import clsx from "clsx";
import { getVariationClasses } from "../shared/classes";
import { fetchInitials } from "../shared/initials";

interface Props {
  variation?: string;
  fullname: string;
}

export const Avatar = ({ fullname, variation = "" }: Props) => {
  const variationClass = clsx(
    [classes.avatar],
    getVariationClasses(variation, classes),
  );
  const initials = fetchInitials(fullname);

  return <div className={variationClass}>{initials}</div>;
};
