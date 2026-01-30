import { getVarious, type VariousProps } from "../../compounds/shared/Various";
import classes from "./Button.module.css";
import { useCallback, type MouseEvent } from "react";

type Props = VariousProps & {
  title?: string;
  disabled?: boolean;
};

const ButtonWrapper = getVarious("button");

export const Button = ({
  title = "",
  variation = "",
  onClick = () => null,
  disabled = false,
  children,
}: Props) => {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!disabled) onClick(e);
    },
    [disabled, onClick],
  );

  const mixedVariation: string = variation + (disabled ? " disabled" : "");

  return (
    <ButtonWrapper
      variation={mixedVariation}
      onClick={handleClick}
      classes={classes}
    >
      {title}
      {children}
    </ButtonWrapper>
  );
};
