import classes from "./Ellipsis.module.css";
import { FaEllipsis } from "react-icons/fa6";
import { getVarious, type VariousProps } from "../../compounds/shared/Various";

type Props = VariousProps;

const EllipsisWrapper = getVarious("icon", classes);

export const Ellipsis = ({ variation, onClick = () => null }: Props) => {
  return (
    <EllipsisWrapper variation={variation} onClick={onClick}>
      <FaEllipsis />
    </EllipsisWrapper>
  );
};
