import classes from "./Button.module.css";
import clsx from "clsx";
import { getVariationClasses } from "../shared/classes";

interface Props {
  variation?: string;
  title: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  variation = "",
  onClick = () => null,
}: Props) => {
  const className = clsx(
    classes.button,
    getVariationClasses(variation, classes),
  );

  return (
    <div className={className} onClick={onClick}>
      {title}
    </div>
  );
};
