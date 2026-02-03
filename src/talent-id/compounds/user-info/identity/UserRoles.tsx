import { useRef, type MouseEvent } from "react";
import { Ellipsis } from "../../../kit/icons/Ellipsis";
import { RoleBadge } from "./RoleBadge";
import type { User, UserRole } from "../types";
import classes from "./UserRoles.module.css";
import { useAnchoredPopup } from "../../../hooks/useAnchoredPopup";
import { AnchoredPopup } from "../../shared/AnchoredPopup";
import { UpdateUserRoles } from "../popups/UpdateUserRoles";
import { SectionTitle } from "../../../kit/SectionTitle";
import { Column } from "../../shared/Container";
import { getVariationClasses } from "../../../shared/classes";
import clsx from "clsx";

interface Props {
  user: Pick<User, "roles">;
  hasTitle?: boolean;
  variation?: string;
  onRemove?: (role: UserRole) => void;
  onRolesUpdate?: (roles: UserRole[]) => void;
}

export const UserRoles = ({
  user,
  hasTitle = false,
  variation = "",
  onRemove = () => null,
  onRolesUpdate = () => null,
}: Props) => {
  const { roles = [] } = user;
  const plusRef = useRef<HTMLDivElement>(null);
  const anchorParameters = useAnchoredPopup({
    anchorRef: plusRef,
    anchorAngle: "lb",
    popupAngle: "lt",
    dismissable: true,
    distance: 8,
  });

  const className = clsx(
    classes.roles,
    getVariationClasses(variation, classes),
  );

  const { openPopup, closePopup } = anchorParameters;

  const handleRolesUpdate = (newRoles: UserRole[]) => {
    onRolesUpdate(newRoles);
    closePopup();
  };

  return (
    <Column>
      {hasTitle && <SectionTitle title="Роли" variation="badges-list" />}
      <div className={className}>
        {roles.map((role) => (
          <RoleBadge name={role} onRemove={onRemove} />
        ))}
        <div ref={plusRef} className={classes.plusContainer}>
          <Ellipsis variation="role" onClick={openPopup} />
        </div>
        <AnchoredPopup
          popupParameters={anchorParameters}
          onOverlayClick={closePopup}
        >
          <UpdateUserRoles user={user} onRolesUpdate={handleRolesUpdate} />
        </AnchoredPopup>
      </div>
    </Column>
  );
};
