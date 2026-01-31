import classes from "./Plus.module.css";
import { FaPlus } from "react-icons/fa6";
import { getVarious, type VariousProps } from "../../compounds/shared/Various";

type Props = VariousProps;

const PlusWrapper = getVarious("plus", classes);

export const Plus = ({ variation = "", onClick = () => null }: Props) => {
  return (
    <PlusWrapper variation={variation} onClick={onClick}>
      <FaPlus />
    </PlusWrapper>
  );
};
