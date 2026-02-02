import { useRef } from "react";
import { Ellipsis } from "../../../kit/icons/Ellipsis";
import { SectionTitle } from "../../../kit/SectionTitle";
import { AnchoredPopup } from "../../shared/AnchoredPopup";
import type { Organization, OrganizationId, User } from "../types";
import { OrganizationBadge } from "./OrganizationBadge";
import classes from "./UserOrganizations.module.css";
import { useAnchoredPopup } from "../../../hooks/useAnchoredPopup";
import { UpdateUserOrganizations } from "../popups/UpdateUserOrganizations";

interface Props {
  user: User;
  allOrganizations: Organization[];
  onRemoveFromOrganization?: (id: OrganizationId) => void;
  onUpdateOrganizations?: (organizations: Organization[]) => void;
}

export const UserOrganizations = ({
  user,
  allOrganizations,
  onRemoveFromOrganization = () => null,
  onUpdateOrganizations = () => null,
}: Props) => {
  const { organizations = [] } = user;

  const plusRef = useRef<HTMLDivElement>(null);
  const anchorParameters = useAnchoredPopup({
    anchorRef: plusRef,
    anchorAngle: "lb",
    popupAngle: "lt",
    dismissable: true,
    distance: 8,
  });

  const { openPopup, closePopup } = anchorParameters;

  const handleOrganizationsUpdate = (newOrganizations: Organization[]) => {
    onUpdateOrganizations(newOrganizations);
    closePopup();
  };

  return (
    <div className={classes.container}>
      <SectionTitle title="Организации" />
      <div className={classes.organizations}>
        {organizations.map((org) => {
          return (
            <OrganizationBadge
              key={org.id}
              organization={org}
              onRemove={onRemoveFromOrganization}
            />
          );
        })}
        <Ellipsis ref={plusRef} variation="organization" onClick={openPopup} />
      </div>
      <AnchoredPopup
        popupParameters={anchorParameters}
        onOverlayClick={closePopup}
      >
        <UpdateUserOrganizations
          user={user}
          allOrganizations={allOrganizations}
          onOrganizationsUpdate={handleOrganizationsUpdate}
        />
      </AnchoredPopup>
    </div>
  );
};
