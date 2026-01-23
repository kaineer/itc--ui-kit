/** User identification: userName and email */
import clsx from "clsx";
import classes from "./Identification.module.css";
import { type User } from "./types";
import { getVariationClasses } from "../../shared/classes";

interface Props {
  variation?: string;
  user: User;
}

export const Identification = ({ variation = "", user }: Props) => {
  const { userName: name, email } = user;
  const className = clsx(
    classes.identification,
    getVariationClasses(variation, classes),
  );

  return (
    <div className={className}>
      <div className={classes.name}>{name}</div>
      <div className={classes.email}>{email}</div>
    </div>
  );
};
