import { type MouseEvent } from "react";
import { Plus } from "../../../kit/icons/Plus";
import { RoleBadge } from "./RoleBadge";
import type { User } from "../types";
import classes from "./UserRoles.module.css";

interface Props {
  user: User;
  onRemove?: (role: string) => void;
  onAdd?: (e: MouseEvent<HTMLElement>) => void;
}

export const UserRoles = ({
  user,
  onRemove = () => null,
  onAdd = () => null,
}: Props) => {
  const { roles } = user;

  return (
    <div className={classes.roles}>
      {roles.map((role) => (
        <RoleBadge name={role} onRemove={onRemove} />
      ))}
      <Plus variation="role" onClick={onAdd} />
    </div>
  );
};
