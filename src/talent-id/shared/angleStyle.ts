export type AngleType = "lt" | "rt" | "lb" | "rb";

export interface AngleStyle {
  display: "inline-block";
  position: "absolute";
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

export interface BoundedRectangle {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const px = (value: number | string) => String(value) + "px";

export const getAnchoredPopupPosition = (
  anchorBr: BoundedRectangle,
  anchorAngle: AngleType,
  popupAngle: AngleType,
  distance: number = 0,
): AngleStyle => {
  const style: AngleStyle = {
    display: "inline-block",
    position: "absolute",
  };

  const { left, right, top, bottom } = anchorBr;

  const [a1, a2] = anchorAngle.split("");
  const [p1, p2] = popupAngle.split("");

  const style1 = p1 === "l" ? "left" : "right";
  const style2 = p2 === "t" ? "top" : "bottom";

  let value1 = a1 === "l" ? left : right;
  let value2 = a2 === "t" ? top : bottom;

  if (a2 !== p2) {
    if (a2 === "t" /* this means p2 == b */) {
      value2 -= distance;
    } else {
      /* i.e. a2 == b && p2 == t */
      value2 += distance;
    }
  }

  if (a1 !== p1) {
    if (a1 === "l" /* and p1 === r */) {
      value1 -= distance;
    } else {
      value1 += distance;
    }
  }

  style[style1] = px(value1);
  style[style2] = px(value2);

  return style;
};
