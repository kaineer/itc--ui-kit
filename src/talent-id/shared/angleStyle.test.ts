import { describe, it, expect } from "vitest";
import {
  getAnchoredPopupPosition,
  type AngleType,
  type BoundedRectangle,
} from "./angleStyle";

const makeBR = (
  left: number,
  top: number,
  width: number,
  height: number,
): BoundedRectangle => {
  return {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
  };
};

const testAnchorBr = makeBR(50, 50, 50, 50);
const testPopupBr = makeBR(0, 0, 100, 30);

const testAngles = (
  anchorAngle: AngleType,
  popupAngle: AngleType,
  distance: number = 0,
) => {
  return (
    getAnchoredPopupPosition(
      testAnchorBr,
      testPopupBr,
      anchorAngle,
      popupAngle,
      distance,
    ) || { display: null, position: null, left: null, top: null }
  );
};

describe("getAnchoredPopupPosition()", () => {
  it("should set display and position properties", () => {
    const { display, position } = testAngles("rb", "lt");

    expect(display).toBe("inline-block");
    expect(position).toBe("absolute");
  });

  describe("positioning without distance", () => {
    it("should set left-top to anchor right-bottom", () => {
      const { left, top } = testAngles("rb", "lt");

      expect(left).toBe("100px");
      expect(top).toBe("100px");
    });

    it("should set left-top to anchor left-bottom", () => {
      const { left, top } = testAngles("lb", "lt");

      expect(left).toBe("50px");
      expect(top).toBe("100px");
    });

    it("should set left-bottom to anchor left-top", () => {
      const { left, top } = testAngles("lt", "lb");

      expect(left).toBe("50px");
      expect(top).toBe("20px");
    });
  });

  describe("positioning with distance", () => {
    it("should add only one side when exist", () => {
      const { left, top } = testAngles("lb", "lt", 10);

      expect(left).toBe("50px");
      expect(top).toBe("110px");
    });

    it("should add for two sides", () => {
      const { left, top } = testAngles("rb", "lt", 8);

      expect(left).toBe("108px");
      expect(top).toBe("108px");
    });

    it("should add for left side popup", () => {
      const { left, top } = testAngles("lt", "rt", 8);

      expect(left).toBe("-58px");
      expect(top).toBe("50px");
    });
  });
});
