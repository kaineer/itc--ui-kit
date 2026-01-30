import classes from "./Avatar.module.css";
import { fetchInitials } from "../shared/initials";
import { getVarious, type VariousProps } from "../compounds/shared/Various";

type Props = VariousProps & { fullname: string };

const AvatarWrapper = getVarious("avatar");

export const Avatar = ({ fullname, variation = "" }: Props) => {
  const initials = fetchInitials(fullname);

  return (
    <AvatarWrapper variation={variation} classes={classes}>
      {initials}
    </AvatarWrapper>
  );
};
