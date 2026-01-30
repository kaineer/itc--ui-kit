import type { CurrencyTypes, User } from "./types";

export const currencyTypes: CurrencyTypes = {
  "3": "Марки",
  "5": "Фунты",
  "10": "Кроны",
};

export const richUser: User = {
  userName: "",
  userId: "",
  email: "",
  roles: ["admin", "player"],
  balance: {
    "3": 45,
    "5": 48,
    "10": 39,
  },
};
