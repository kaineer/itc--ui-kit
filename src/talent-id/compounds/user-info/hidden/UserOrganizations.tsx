import { Ellipsis } from "../../../kit/icons/Ellipsis";
import { SectionTitle } from "../../../kit/SectionTitle";
import type { OrganizationId, User } from "../types";
import { OrganizationBadge } from "./OrganizationBadge";
import classes from "./UserOrganizations.module.css";

interface Props {
  user: User;
  onRemoveFromOrganization?: (id: OrganizationId) => void;
}

export const UserOrganizations = ({
  user,
  onRemoveFromOrganization = () => null,
}: Props) => {
  const { organizations = [] } = user;

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
        <Ellipsis variation="organization" />
      </div>
    </div>
  );
};
