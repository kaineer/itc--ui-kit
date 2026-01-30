import classes from "./UpdateUserRoles.module.css";
import type { User, UserRole } from "../types";
import { Checkbox } from "../../../kit/inputs/Checkbox";
import { useCallback, useRef, useState } from "react";
import { Label } from "../../../kit/inputs/Label";
import { rolesInOrder, roleNames } from "../../../shared/roles";
import { SectionTitle } from "../../../kit/SectionTitle";
import { Button } from "../../../kit/inputs/Button";
import { PopupContainer } from "../../shared/PopupContainer";

interface Props {
  user: User;
  onRolesUpdate?: (newRoles: UserRole[]) => void;
}

interface RowProps {
  label: string;
  slug: UserRole;
  value: boolean;
  onChange: (slug: UserRole, value: boolean) => void;
}

const UserRolesRow = ({ label, slug, value, onChange }: RowProps) => {
  const cbRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (newValue: boolean) => {
    onChange(slug, newValue);
  };

  return (
    <div className={classes.roleRow}>
      <Checkbox ref={cbRef} value={value} onClick={handleChange} />
      <Label ref={cbRef} variation="">
        {label}
      </Label>
    </div>
  );
};

export const UpdateUserRoles = ({
  user,
  onRolesUpdate = () => null,
}: Props) => {
  const [roles, setRoles] = useState<UserRole[]>(user.roles || []);

  const handleChange = useCallback(
    (role: UserRole, flag: boolean) => {
      if (flag) {
        if (!roles.includes(role)) setRoles([...roles, role]);
      } else {
        setRoles(roles.filter((r) => r !== role));
      }
    },
    [roles, setRoles],
  );

  const handleRolesUpdate = useCallback(() => {
    onRolesUpdate(roles);
  }, [roles, onRolesUpdate]);

  return (
    <PopupContainer>
      <SectionTitle title="Роли" variation="role-form" />
      {rolesInOrder.map((role: UserRole) => (
        <UserRolesRow
          label={roleNames[role]}
          slug={role}
          value={roles.includes(role)}
          onChange={handleChange}
        />
      ))}
      <Button onClick={handleRolesUpdate} variation="bottom">
        Изменить роли
      </Button>
    </PopupContainer>
  );
};
