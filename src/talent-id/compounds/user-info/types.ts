export type UserRole = "admin" | "player" | "methodist" | "mentor" | "game_diz";

export interface User {
  userId: string;
  userName: string;
  email: string;
  roles?: UserRole[];
}
