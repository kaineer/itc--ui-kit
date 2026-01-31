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

  const typeKeys = Object.keys(typeNames).sort((a, b) => Number(a) - Number(b));

  return (
    <div className={classes.container}>
      <SectionTitle title="Валюта" />
      <div className={classes.balance}>
        {typeKeys.map((id: CurrencyId) => {
          return (
            <Badge
              key={"currency-" + id}
              variation="balance"
              title={typeNames[id] + ": " + (balance[id] || 0)}
            />
          );
        })}
      </div>
    </div>
  );
};
