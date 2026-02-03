import { useRef } from "react";
import { Ellipsis } from "../../../kit/icons/Ellipsis";
import { SectionTitle } from "../../../kit/SectionTitle";
import { AnchoredPopup } from "../../shared/AnchoredPopup";
import type { Organization, OrganizationId, User } from "../types";
import { OrganizationBadge } from "./OrganizationBadge";
import classes from "./UserOrganizations.module.css";
import { useAnchoredPopup } from "../../../hooks/useAnchoredPopup";
import { UpdateUserOrganizations } from "../popups/UpdateUserOrganizations";
import { Column } from "../../shared/Container";
import { getVariationClasses } from "../../../shared/classes";
import clsx from "clsx";

interface Props {
  user: Pick<User, "organizations">;
  hasTitle?: boolean;
  variation?: string;
  allOrganizations: Organization[];
  onRemoveFromOrganization?: (id: OrganizationId) => void;
  onUpdateOrganizations?: (organizations: Organization[]) => void;
}

export const UserOrganizations = ({
  user,
  hasTitle = false,
  variation = "",
  allOrganizations,
  onRemoveFromOrganization = () => null,
  onUpdateOrganizations = () => null,
}: Props) => {
  const { organizations = [] } = user;
  const className = clsx(
    classes.container,
    getVariationClasses(variation, classes),
  );

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
    <Column>
      {hasTitle && <SectionTitle title="Организации" variation="badges-list" />}
      <div className={className}>
        {!hasTitle && <SectionTitle title="Организации" />}
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
          <Ellipsis
            ref={plusRef}
            variation="organization"
            onClick={openPopup}
          />
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
    </Column>
  );
};
