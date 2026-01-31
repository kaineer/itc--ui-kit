import classes from "./Cross.module.css";
import { type MouseEvent } from "react";
import { RxCross2 } from "react-icons/rx";
import { getVarious } from "../../compounds/shared/Various";

interface Props {
  variation?: string;
  size: number;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const CrossWrapper = getVarious("cross", classes);

export const Cross = ({ variation = "", onClick = () => null }: Props) => {
  return (
    <CrossWrapper variation={variation} onClick={onClick}>
      <RxCross2 />
    </CrossWrapper>
  );
};
