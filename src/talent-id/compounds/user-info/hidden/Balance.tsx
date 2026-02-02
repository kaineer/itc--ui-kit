import { Badge } from "../../../kit/Badge";
import { SectionTitle } from "../../../kit/SectionTitle";
import classes from "./Balance.module.css";
import type { CurrencyId, CurrencyTypes, User } from "../types";

interface Props {
  user: User;
  typeNames: CurrencyTypes;
}

export const Balance = ({ user, typeNames }: Props) => {
  const { balance = {} } = user;

  const typeKeys = Object.keys(typeNames).sort((a, b) => Number(a) - Number(b));

  return (
    <div className={classes.container}>
      <SectionTitle title="Валюта" />
      <div className={classes.currencies}>
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
