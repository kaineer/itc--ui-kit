import type { UserRole } from "../compounds/user-info/types";

export const roleNames: Record<UserRole, string> = {
  admin: "Администратор",
  mentor: "Ментор",
  methodist: "Методист",
  player: "Игрок",
  game_diz: "Геймдиз",
};

export const rolesInOrder: UserRole[] = [
  "admin",
  "mentor",
  "methodist",
  "player",
  "game_diz",
];
