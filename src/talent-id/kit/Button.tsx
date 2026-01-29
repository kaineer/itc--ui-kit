import classes from "./Button.module.css";
import clsx from "clsx";
import { getVariationClasses } from "../shared/classes";
import { useCallback } from "react";

interface Props {
  variation?: string;
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  title,
  variation = "",
  onClick = () => null,
  disabled = false,
}: Props) => {
  const className = clsx(
    classes.button,
    getVariationClasses(variation, classes),
    { [classes.disabled]: Boolean(disabled) },
  );

  const handleClick = useCallback(() => {
    if (!disabled) onClick();
  }, [disabled, onClick]);

  return (
    <div className={className} onClick={handleClick}>
      {title}
    </div>
  );
};
