import classes from "./FolderIndicator.module.css";
import { Arrow } from "../kit/icons/Arrow";

interface Props {
  expanded: boolean;
}

export const FolderIndicator = ({ expanded }: Props) => {
  return (
    <div className={classes.folderIndicator}>
      <Arrow direction={expanded ? "down" : "right"} />
    </div>
  );
};
