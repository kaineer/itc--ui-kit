export const fetchInitials = (fullname: string): string => {
  return fullname
    .split(" ")
    .map((s) => s.slice(0, 1).toUpperCase())
    .slice(0, 2)
    .join("");
};
