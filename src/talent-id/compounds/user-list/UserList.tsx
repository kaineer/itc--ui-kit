import type { CurrencyId, Organization, User } from "../user-info/types";
import { UserInfo } from "../user-info/UserInfo";

interface Props {
  users: User[];
  typeNames: Record<CurrencyId, string>;
  allOrganizations: Organization[];
}

// TODO: Add create popup
// TODO: Add update popup
// TODO: Add popup calls
// TODO: Add create, update and delete callbacks
export const UserList = ({ users, typeNames, allOrganizations }: Props) => {
  return (
    <>
      {users.map((user: User) => (
        <UserInfo
          user={user}
          typeNames={typeNames}
          allOrganizations={allOrganizations}
        />
      ))}
    </>
  );
};
