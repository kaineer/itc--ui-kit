import { describe, it, expect } from "vitest";
import { getAnchoredPopupPosition, type BoundedRectangle } from "./angleStyle";

const testAnchorBr: BoundedRectangle = {
  left: 50,
  top: 50,
  right: 100,
  bottom: 100,
  width: 50,
  height: 50,
};

describe("getAnchoredPopupPosition()", () => {
  it("should set display and position properties", () => {
    const { display, position } = getAnchoredPopupPosition(
      testAnchorBr,
      "rb",
      "lt",
    );

    expect(display).toBe("inline-block");
    expect(position).toBe("absolute");
  });

  describe("positioning without distance", () => {
    it("should set left-top to anchor right-bottom", () => {
      const { left, top, right, bottom } = getAnchoredPopupPosition(
        testAnchorBr,
        "rb",
        "lt",
      );

      expect(left).toBe("100px");
      expect(top).toBe("100px");

      expect(right).toBeUndefined();
      expect(bottom).toBeUndefined();
    });

    it("should set left-top to anchor left-bottom", () => {
      const { left, top, right, bottom } = getAnchoredPopupPosition(
        testAnchorBr,
        "lb",
        "lt",
      );

      expect(left).toBe("50px");
      expect(top).toBe("100px");

      expect(right).toBeUndefined();
      expect(bottom).toBeUndefined();
    });

    it("should set left-bottom to anchor left-top", () => {
      const { left, top, right, bottom } = getAnchoredPopupPosition(
        testAnchorBr,
        "lt",
        "lb",
      );

      expect(left).toBe("50px");
      expect(bottom).toBe("50px");

      expect(right).toBeUndefined();
      expect(top).toBeUndefined();
    });
  });

  describe("positioning with distance", () => {
    it("should add only one side when exist", () => {
      const { left, top, right, bottom } = getAnchoredPopupPosition(
        testAnchorBr,
        "lb",
        "lt",
        10,
      );

      expect(left).toBe("50px");
      expect(top).toBe("110px");

      expect(right).toBeUndefined();
      expect(bottom).toBeUndefined();
    });

    it("should add for two sides", () => {
      const { left, top, right, bottom } = getAnchoredPopupPosition(
        testAnchorBr,
        "rb",
        "lt",
        8,
      );

      expect(left).toBe("108px");
      expect(top).toBe("108px");

      expect(right).toBeUndefined();
      expect(bottom).toBeUndefined();
    });
  });
});
