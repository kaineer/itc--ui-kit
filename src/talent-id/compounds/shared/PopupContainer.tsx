import type { ReactNode, MouseEvent } from "react";
import classes from "./PopupContainer.module.css";
import { Cross } from "../../kit/icons/Cross";

interface Props {
  children: ReactNode;
  onCrossClick?: () => void;
}

export const PopupContainer = ({ children, onCrossClick }: Props) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      {onCrossClick ? (
        <Cross variation="popup-close" onClick={onCrossClick} />
      ) : null}
      {children}
    </div>
  );
};
