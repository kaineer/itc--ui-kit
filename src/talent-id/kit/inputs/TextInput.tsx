import { getVarious, type VariousProps } from "../../compounds/shared/Various";
import classes from "./TextInput.module.css";
import { px } from "../../shared/px";
import { useEffect, type RefObject } from "react";

type Props = VariousProps & {
  width?: number; /** input width, in case undefined, should be 100% */
  password?: boolean;
  defaultValue?: string;
  value?: string;
  textRef?: RefObject<HTMLInputElement>;
};

const InputWrapper = getVarious("input", classes);

export const TextInput = ({
  width = -1,
  password,
  variation = "",
  value,
  defaultValue,
  textRef,
}: Props) => {
  const style: Record<string, string> = {};

  useEffect(() => {
    if (textRef?.current) {
      if (typeof value === "string") {
        textRef.current.value = value;
        return;
      }

      if (typeof defaultValue === "string") {
        textRef.current.value = defaultValue;
        return;
      }
    }
  }, [textRef, value, defaultValue]);

  if (width < 0) {
    style.width = "100%";
  } else {
    style.width = px(width);
  }

  return (
    <InputWrapper variation={variation} style={style}>
      <input
        ref={textRef}
        type={password ? "password" : "text"}
        style={style}
      />
    </InputWrapper>
  );
};
