import { type MouseEvent, type ReactNode } from "react";
import clsx from "clsx";
import { getVariationClasses } from "../../shared/classes";

export interface VariousProps {
  variation: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

type Props = VariousProps;

export const getVarious =
  (className: string, classes: Record<string, string>) =>
  ({ variation, onClick = () => null, children }: Props) => {
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
