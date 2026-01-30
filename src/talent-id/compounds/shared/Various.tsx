import { type MouseEvent, type ReactNode } from "react";
import clsx from "clsx";
import { getVariationClasses } from "../../shared/classes";

export interface VariousProps {
  variation: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

type Props = VariousProps & {
  classes: Record<string, string>;
};

export const getVarious =
  (className: string) =>
  ({ variation, classes, onClick = () => null, children }: Props) => {
    const variousClassName = clsx(
      classes[className],
      getVariationClasses(variation, classes),
    );

    return (
      <div className={variousClassName} onClick={onClick}>
        {children}
      </div>
    );
  };
