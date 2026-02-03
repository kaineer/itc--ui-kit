import { getVarious } from "../../compounds/shared/Various";
import classes from "./Edit.module.css";
import { type MouseEvent } from "react";
import { MdOutlineEdit } from "react-icons/md";

interface Props {
  title?: string;
  variation?: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

const EditWrapper = getVarious("edit", classes);

export const Edit = ({
  title,
  variation = "",
  onClick = () => null,
}: Props) => {
  return (
    <EditWrapper title={title} variation={variation} onClick={onClick}>
      <MdOutlineEdit />
    </EditWrapper>
  );
};
