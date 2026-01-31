import classes from "./Arrow.module.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { type MouseEvent, type ReactNode } from "react";

type Direction = "down" | "right";
interface Props {
  direction?: Direction;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

type ArrowDirection = "right" | "down";
const arrows: Record<ArrowDirection, () => ReactNode> = {
  right: () => <MdOutlineKeyboardArrowRight size={32} />,
  down: () => <MdOutlineKeyboardArrowDown size={32} />,
};

export const Arrow = ({ direction = "right", onClick = () => null }: Props) => {
  const render = arrows[direction];

  return (
    <div className={classes.arrow} onClick={onClick}>
      {render()}
    </div>
  );
};
