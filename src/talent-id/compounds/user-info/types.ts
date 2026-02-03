export type UserRole = "admin" | "player" | "methodist" | "mentor" | "game_diz";
export type CurrencyId = string;
export type OrganizationId = string;
export type UserId = string;

export type Balance = Record<CurrencyId, number>;

export interface User {
  userId: UserId;
  userName: string;
  email: string;
  password: string;
  roles?: UserRole[];
  balance?: Balance;
  organizations?: Organization[];
}

export type UserCreate = Partial<
  Omit<User, "organizations" | "userId"> & {
    organizations: OrganizationId[];
  }
>;

export type UserUpdate = Omit<User, "organizations"> & {
  organizations: OrganizationId[];
};

export interface UserDelete {
  userId: User["userId"];
}

export interface Organization {
  id: OrganizationId;
  name: string;
  contact?: string;
}

export type CurrencyTypes = Record<CurrencyId, string>;
