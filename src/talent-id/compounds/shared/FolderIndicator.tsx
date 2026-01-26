import { type MouseEvent } from "react";
import classes from "./FolderIndicator.module.css";
import { Arrow } from "../../kit/icons/Arrow";
import { useState } from "react";

interface Props {
  expanded: boolean;
  onToggle?: (open: boolean) => void;
}

export const FolderIndicator = ({ expanded, onToggle = () => null }: Props) => {
  const [open, setOpen] = useState(expanded);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newOpen = !open;
    setOpen(newOpen);
    onToggle(newOpen);
  };

  return (
    <div className={classes.folderIndicator}>
      <Arrow onClick={handleClick} direction={open ? "down" : "right"} />
    </div>
  );
};
