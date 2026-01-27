export type AngleType = "lt" | "rt" | "lb" | "rb";

export interface AngleStyle {
  display: "inline-block";
  position: "absolute";
  left?: string;
  top?: string;
}

export interface BoundedRectangle {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

const px = (value: number | string) => String(value) + "px";

/**
 * Get style to position popup relative to anchor
 *
 * @param anchorBr bounding rectangle of anchor
 * @param anchorAngle anchor angle
 * @param popupAngle popup angle
 * @param distance distance from anchor
 *
 * @returns Style to position popup
 */
export const getAnchoredPopupPosition = (
  anchorBr: BoundedRectangle | undefined,
  popupBr: BoundedRectangle | undefined,
  anchorAngle: AngleType,
  popupAngle: AngleType,
  distance: number = 0,
): AngleStyle | null => {
  const style: AngleStyle = {
    display: "inline-block",
    position: "absolute",
  };

  if (!anchorBr || !popupBr) {
    return null;
  }

  const { left, right, top, bottom } = anchorBr;
  const { width, height } = popupBr;

  const [a1, a2] = anchorAngle.split("");
  const [p1, p2] = popupAngle.split("");

  const anchorX = a1 === "l" ? left : right;
  const anchorY = a2 === "t" ? top : bottom;

  const horizontalShift: { [id: string]: number } = {
    ll: anchorX,
    lr: anchorX - width - distance,
    rl: anchorX + distance,
    rr: anchorX - width,
  };
  const verticalShift: { [id: string]: number } = {
    tt: anchorY,
    tb: anchorY - height - distance,
    bt: anchorY + distance,
    bb: anchorY - height,
  };

  style.left = px(horizontalShift[a1 + p1]);
  style.top = px(verticalShift[a2 + p2]);

  return style;
};
