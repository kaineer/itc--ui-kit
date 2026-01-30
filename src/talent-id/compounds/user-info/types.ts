export type UserRole = "admin" | "player" | "methodist" | "mentor" | "game_diz";
export type CurrencyId = string;

export type Balance = Record<CurrencyId, number>;

export interface User {
  userId: string;
  userName: string;
  email: string;
  roles?: UserRole[];
  balance?: Balance;
}

export type CurrencyTypes = Record<CurrencyId, string>;
