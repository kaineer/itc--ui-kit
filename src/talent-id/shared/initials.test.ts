import { describe, it, expect } from "vitest";
import { fetchInitials } from "./initials";

describe("fetchInitials()", () => {
  it("should uppercase initials", () => {
    expect(fetchInitials("hello world")).toBe("HW");
  });

  it("should return for single character", () => {
    expect(fetchInitials("hello")).toBe("H");
  });

  it("should work with cyrillic letters", () => {
    expect(fetchInitials("петр иванов")).toBe("ПИ");
  });
});
