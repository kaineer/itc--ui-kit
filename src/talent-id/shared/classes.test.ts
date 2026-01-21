import { describe, it, expect } from "vitest";
import { getVariationClasses } from "./classes";

describe("getVariationClasses", () => {
  const variations = {
    "variation-a": "a",
    "variation-b": "b",
  };

  it("should return variations glued together", () => {
    expect(getVariationClasses("a b", variations)).toBe("a b");
  });

  it("should ignore not provided variations", () => {
    expect(getVariationClasses("a c", variations)).toBe("a");
  });
});
