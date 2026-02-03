import { type MouseEvent, type ReactNode, type RefObject } from "react";
import clsx from "clsx";
import { getVariationClasses } from "../../shared/classes";

export interface VariousProps {
  ref?: RefObject<HTMLDivElement | null>;
  variation: string;
  children?: ReactNode;
  style?: Record<string, string>;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  title?: string;
}

type Props = VariousProps;

export const getVarious =
  (className: string, classes: Record<string, string>) =>
  ({ variation, onClick = () => null, children, ref, style, title }: Props) => {
    const variousClassName = clsx(
      classes[className],
      getVariationClasses(variation, classes),
    );

    return (
      <div
        ref={ref}
        className={variousClassName}
        onClick={onClick}
        style={style || {}}
        title={title}
      >
        {children}
      </div>
    );
  };
