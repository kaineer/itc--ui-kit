import classes from "./Checkbox.module.css";
import { useState, useEffect, useCallback, type RefObject } from "react";
import { Check } from "../icons/Check";

interface Props {
  value?: boolean;
  defaultValue?: boolean;
  onClick?: (flag: boolean) => void;
  ref?: RefObject<HTMLDivElement | null>;
  // TODO: disabled?: boolean
}

export const Checkbox = ({
  value,
  defaultValue = false,
  onClick = () => null,
  ref,
}: Props) => {
  const [checked, setChecked] = useState<boolean>(Boolean(defaultValue));

  useEffect(() => {
    if (typeof value === "boolean") {
      if (value !== checked) {
        setChecked(value);
      }
    }
  }, [value, checked]);

  const handleClick = useCallback(() => {
    onClick(!checked);
    if (typeof value !== "boolean") {
      setChecked((prev) => !prev);
    }
  }, [value, checked, onClick]);

  return (
    <div className={classes.wrapper}>
      <div ref={ref} className={classes.checkbox} onClick={handleClick}>
        {checked ? <Check variation="brand 8" /> : null}
      </div>
    </div>
  );
};
