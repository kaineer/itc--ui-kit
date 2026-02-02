import classes from "./UserInfoHidden.module.css";
import { Balance } from "./hidden/Balance";
import { UserOrganizations } from "./hidden/UserOrganizations";
import type { CurrencyTypes, Organization, User } from "./types";

/** User info hidden part */
interface Props {
  user: User;
  typeNames: CurrencyTypes;
  allOrganizations: Organization[];
}

export const UserInfoHidden = ({
  user,
  typeNames,
  allOrganizations,
}: Props) => {
  return (
    <div className={classes.container}>
      <Balance user={user} typeNames={typeNames} />
      <UserOrganizations user={user} allOrganizations={allOrganizations} />
    </div>
  );
};
