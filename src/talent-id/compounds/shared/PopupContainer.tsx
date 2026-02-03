import type { ReactNode } from "react";
import classes from "./PopupContainer.module.css";
import { Cross } from "../../kit/icons/Cross";

interface Props {
  children: ReactNode;
  onCrossClick?: () => void;
}

export const PopupContainer = ({ children, onCrossClick }: Props) => {
  return (
    <div className={classes.container}>
      {onCrossClick ? (
        <Cross variation="popup-close" onClick={onCrossClick} />
      ) : null}
      {children}
    </div>
  );
};
