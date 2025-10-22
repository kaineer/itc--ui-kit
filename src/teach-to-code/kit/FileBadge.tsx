import clsx from "clsx";
import classes from './FileBadge.module.css'

interface Props {
  title: string;
  active: boolean;
  onClick: () => void;
}

export const FileBadge = ({
  title, active, onClick
}: Props) => {
  const className = clsx(classes.badge, {
    [classes.active]: active,
  });

  return (
    <span className={className} onClick={onClick}>{ title }</span>
  );
}
