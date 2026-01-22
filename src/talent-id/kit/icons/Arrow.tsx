import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import classes from "./Arrow.module.css";

type Direction = "down" | "right";
interface Props {
  direction?: Direction;
  size?: number;
}

const defaultSize = 24;

export const Arrow = ({ direction = "right", size = defaultSize }: Props) => {
  if (direction === "right") {
    return (
      <MdOutlineKeyboardArrowRight className={classes.arrow} size={size} />
    );
  } else if (direction === "down") {
    return <MdOutlineKeyboardArrowDown className={classes.arrow} size={size} />;
  }
};
