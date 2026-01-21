/** Name is defined and is not equal to "undefined" */
const notUndefined = (s: string | undefined): boolean =>
  !!s && s !== "undefined"; // WTF? Зачем проверять на "undefined", хз

/**
 * Get variation classes from vite.module.css classes
 *
 * @example getVariationClasses("big green", classes);
 */
export const getVariationClasses = (
  variation: string,
  classes: { [id: string]: string },
): string => {
  return variation
    .split(" ")
    .map((v) => String(classes["variation-" + v]))
    .filter(notUndefined)
    .join(" ");
};
