import classes from "./Cross.module.css";
import { type MouseEvent, type RefObject } from "react";
import { RxCross2 } from "react-icons/rx";
import { getVarious } from "../../compounds/shared/Various";

interface Props {
  ref?: RefObject<HTMLDivElement>;
  variation?: string;
  title?: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const CrossWrapper = getVarious("cross", classes);

export const Cross = ({
  ref,
  variation = "",
  title,
  onClick = () => null,
}: Props) => {
  return (
    <CrossWrapper
      ref={ref}
      title={title}
      variation={variation}
      onClick={onClick}
    >
      <RxCross2 />
    </CrossWrapper>
  );
};
