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

  style.left = px(anchorX + (p1 === "r" ? -width : a1 === p1 ? 0 : distance));
  style.top = px(anchorY + (p2 === "b" ? -height : a2 === p2 ? 0 : distance));

  return style;
};
