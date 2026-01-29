import { describe, it, expect } from "vitest";
import { px } from "./px";

describe("px()", () => {
  it("should return correct result for zero", () => {
    expect(px(0)).toBe("0px");
  });

  it("should return correct result for positive number", () => {
    expect(px(321)).toBe("321px");
  });

  it("should return correct result for negative number", () => {
    expect(px(-123)).toBe("-123px");
  });
});
