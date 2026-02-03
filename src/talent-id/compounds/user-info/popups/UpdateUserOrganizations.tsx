import classes from "./UpdateUserOrganizations.module.css";
import { useCallback, useRef, useState } from "react";
import { PopupContainer } from "../../shared/PopupContainer";
import type { Organization, OrganizationId, User } from "../types";
import { Checkbox } from "../../../kit/inputs/Checkbox";
import { Label } from "../../../kit/inputs/Label";
import { SectionTitle } from "../../../kit/SectionTitle";
import { Button } from "../../../kit/inputs/Button";

interface RowProps {
  value: boolean;
  organization: Organization;
  onChange?: (id: OrganizationId, value: boolean) => void;
}

const UserOrganizationsRow = ({
  value,
  organization,
  onChange = () => null,
}: RowProps) => {
  const cbRef = useRef<HTMLDivElement | null>(null);

  const handleChange = useCallback(
    (newValue: boolean) => {
      onChange(organization.id, newValue);
    },
    [organization, onChange],
  );

  return (
    <div className={classes.organizationRow}>
      <Checkbox ref={cbRef} value={value} onClick={handleChange} />
      <Label ref={cbRef} variation="">
        {organization.name}
      </Label>
    </div>
  );
};

interface Props {
  user: Pick<User, "organizations">;
  allOrganizations: Organization[];
  onOrganizationsUpdate: (newOrganizations: Organization[]) => void;
}

export const UpdateUserOrganizations = ({
  user,
  allOrganizations,
  onOrganizationsUpdate = () => null,
}: Props) => {
  const [organizations, setOrganizations] = useState<Organization[]>(
    user.organizations || [],
  );

  const handleChange = useCallback(
    (id: OrganizationId, value: boolean) => {
      const found = organizations.find((org) => org.id === id);

      if (value) {
        if (!found) {
          const organization = allOrganizations.find((org) => org.id === id);
          if (organization) {
            setOrganizations([...(organizations || []), organization]);
          }
        }
      } else {
        setOrganizations((organizations || []).filter((org) => org.id !== id));
      }
    },
    [organizations, setOrganizations, allOrganizations],
  );

  const handleOrganizationsUpdate = useCallback(() => {
    onOrganizationsUpdate(organizations);
  }, [organizations, onOrganizationsUpdate]);

  return (
    <PopupContainer>
      <SectionTitle title="Организации" variation="popup-title" />

      {allOrganizations.map((organization) => (
        <UserOrganizationsRow
          key={organization.id}
          value={!!(organizations || []).find((o) => o.id === organization.id)}
          organization={organization}
          onChange={handleChange}
        />
      ))}
      <Button onClick={handleOrganizationsUpdate} variation="bottom">
        Изменить организации
      </Button>
    </PopupContainer>
  );
};
