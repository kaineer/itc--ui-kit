import {
  type CurrencyTypes,
  type Organization,
  type User,
  type UserCreate,
  type UserDelete,
  type UserId,
  type UserUpdate,
} from "./types";

import classes from "./UserInfo.module.css";

import { Identification } from "./identity/Identification";
import { UserRoles } from "./identity/UserRoles";
import { useRef, useState } from "react";
import { FolderIndicator } from "../shared/FolderIndicator";
import { Avatar } from "../../kit/Avatar";
import { UserInfoHidden } from "./UserInfoHidden";
import { RelativeAngle } from "../shared/RelativeAngle";
import { Cross } from "../../kit/icons/Cross";
import { Edit } from "../../kit/icons/Edit";
import { CenteredPopup } from "../shared/CenteredPopup";
import { useCenteredPopup } from "../../hooks/useCenteredPopup";
import { CreateUser } from "./popups/CreateUser";
import { useAnchoredPopup } from "../../hooks/useAnchoredPopup";
import { AnchoredPopup } from "../shared/AnchoredPopup";
import { DeleteUser } from "./popups/DeleteUser";

interface Props {
  user: User;
  typeNames: CurrencyTypes;
  allOrganizations: Organization[];
  onRemoveRole?: (userId: string, role: string) => void;
  onUpdateUser?: (user: UserCreate & { userId: UserId }) => void;
}

export const UserInfo = ({
  user,
  typeNames,
  allOrganizations,
  onRemoveRole = () => null,
  onUpdateUser = () => null,
  onRemoveUser = () => null,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { userName: name } = user;

  const popupParameters = useCenteredPopup({ dismissable: true });
  const { openPopup: openEditPopup, closePopup } = popupParameters;

  const iconRef = useRef<HTMLDivElement | null>(null);
  const anchorParams = useAnchoredPopup({
    anchorRef: iconRef,
    anchorAngle: "rb",
    popupAngle: "rt",
    distance: 8,
    dismissable: true,
  });
  const { openPopup: openRmPopup, closePopup: closeRmPopup } = anchorParams;

  const handleToggle = (flag: boolean) => {
    setExpanded(flag);
  };

  const handleRemoveRole = (role: string) => {
    onRemoveRole(user.userId, role);
  };

  const handleUpdateUser = (user: UserUpdate) => {
    onUpdateUser(user);
  };

  return (
    <div className={classes.column}>
      <div className={classes.userInfo}>
        <RelativeAngle angle="rt">
          <Edit
            variation="black"
            title="Редактировать пользователя"
            onClick={openEditPopup}
          />
          <Cross
            variation="red"
            title="Удалить пользователя"
            ref={iconRef}
            onClick={openRmPopup}
          />
        </RelativeAngle>
        <FolderIndicator expanded={expanded} onToggle={handleToggle} />
        <Avatar variation="32" fullname={name} />
        <Identification user={user} />
        <UserRoles user={user} onRemove={handleRemoveRole} />
      </div>
      {(expanded && (
        <UserInfoHidden
          user={user}
          typeNames={typeNames}
          allOrganizations={allOrganizations}
        />
      )) ||
        null}
      <CenteredPopup popupParameters={popupParameters}>
        <CreateUser
          user={user}
          allOrganizations={allOrganizations}
          onSubmit={handleUpdateUser}
          onClose={closePopup}
        />
      </CenteredPopup>
      <AnchoredPopup
        popupParameters={anchorParams}
        onOverlayClick={closeRmPopup}
      >
        <DeleteUser
          user={user}
          onClose={closeRmPopup}
          onSubmit={onRemoveUser}
        />
      </AnchoredPopup>
    </div>
  );
};
