/** Основная идея: рисуем div с содержимым, если получаем click, отправляем его в ref */
import classes from "./Label.module.css";
import { getVarious, type VariousProps } from "../../compounds/shared/Various";
import type { RefObject } from "react";
import { useCallback } from "react";

const LabelWrapper = getVarious("label", classes);

type Props = VariousProps & {
  ref?: RefObject<HTMLElement | null>;
};

export const Label = ({ children, variation, ref }: Props) => {
  const handleClick = useCallback(() => {
    if (ref && ref.current) {
      ref.current.click();
    }
  }, [ref]);

  return (
    <LabelWrapper variation={variation} onClick={handleClick}>
      {children}
    </LabelWrapper>
  );
};
