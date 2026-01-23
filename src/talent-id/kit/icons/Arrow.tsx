import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import classes from "./Arrow.module.css";
import { type MouseEvent } from "react";

type Direction = "down" | "right";
interface Props {
  direction?: Direction;
  size?: number;
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
}

const defaultSize = 24;

export const Arrow = ({
  direction = "right",
  size = defaultSize,
  onClick = () => null,
}: Props) => {
  if (direction === "right") {
    return (
      <MdOutlineKeyboardArrowRight
        onClick={onClick}
        className={classes.arrow}
        size={size}
      />
    );
  } else if (direction === "down") {
    return (
      <MdOutlineKeyboardArrowDown
        onClick={onClick}
        className={classes.arrow}
        size={size}
      />
    );
  }
};
