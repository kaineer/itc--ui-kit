import classes from "./Plus.module.css";
import { FaPlus } from "react-icons/fa6";
import { getVarious, type VariousProps } from "../../compounds/shared/Various";

type Props = VariousProps;

const PlusWrapper = getVarious("plus");

export const Plus = ({ variation = "", onClick = () => null }: Props) => {
  // NOTE: this way is better
  return (
    <PlusWrapper variation={variation} classes={classes} onClick={onClick}>
      <FaPlus />
    </PlusWrapper>
  );
};
