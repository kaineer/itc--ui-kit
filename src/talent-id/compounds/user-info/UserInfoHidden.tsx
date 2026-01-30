import { Badge } from "../../kit/Badge";
import { SectionTitle } from "../../kit/SectionTitle";
import classes from "./UserInfoHidden.module.css";
import type { CurrencyId, CurrencyTypes, User } from "./types";

/** User info hidden part */
interface Props {
  user: User;
  typeNames: CurrencyTypes;
}

export const UserInfoHidden = ({ user, typeNames }: Props) => {
  const { balance = {} } = user;

  return (
    <div className={classes.container}>
      <SectionTitle title="Валюта" />
      <div className={classes.balance}>
        {Object.keys(typeNames).map((name: CurrencyId) => {
          return (
            <Badge
              variation="balance"
              title={typeNames[name] + ": " + (balance[name] || 0)}
            />
          );
        })}
      </div>
    </div>
  );
};
