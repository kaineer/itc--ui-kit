import type { CurrencyTypes, Organization, User } from "./types";

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

export const defaultOrganization: Organization = {
  id: "fff-fff-fff",
  name: "Организация по умолчанию",
};

export const organization1: Organization = {
  id: "aaa-aaa-aaa",
  name: "Колледж",
};

export const organization2: Organization = {
  id: "bbb-bbb-bbb",
  name: "Школа",
};
