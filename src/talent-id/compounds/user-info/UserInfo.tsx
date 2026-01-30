import { type CurrencyTypes, type User } from "./types";
import classes from "./UserInfo.module.css";

import { Identification } from "./identity/Identification";
import { UserRoles } from "./identity/UserRoles";
import { useState } from "react";
import { FolderIndicator } from "../shared/FolderIndicator";
import { Avatar } from "../../kit/Avatar";
import { UserInfoHidden } from "./UserInfoHidden";

interface Props {
  user: User;
  typeNames: CurrencyTypes;
  onAddRole?: (userId: string) => void;
  onRemoveRole?: (userId: string, role: string) => void;
}

export const UserInfo = ({
  user,
  typeNames,
  onAddRole = () => null,
  onRemoveRole = () => null,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { userName: name } = user;

  const handleToggle = (flag: boolean) => {
    setExpanded(flag);
  };

  const handleAddRole = () => {
    onAddRole(user.userId);
  };

  const handleRemoveRole = (role: string) => {
    onRemoveRole(user.userId, role);
  };

  return (
    <div className={classes.column}>
      <div className={classes.userInfo}>
        <FolderIndicator expanded={expanded} onToggle={handleToggle} />
        <Avatar variation="32" fullname={name} />
        <Identification user={user} />
        <UserRoles
          user={user}
          onAdd={handleAddRole}
          onRemove={handleRemoveRole}
        />
      </div>
      {(expanded && <UserInfoHidden user={user} typeNames={typeNames} />) ||
        null}
    </div>
  );
};
