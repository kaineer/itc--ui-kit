import { Badge } from "../../../kit/Badge";
import { Cross } from "../../../kit/icons/Cross";
import { roleNames } from "../../../shared/roles";
import type { UserRole } from "../types";

interface Props {
  name: UserRole;
  onRemove?: (name: string) => void;
}

export const RoleBadge = ({ name, onRemove = () => null }: Props) => {
  return (
    <Badge variation="role" title={roleNames[name] || ""}>
      <Cross
        size={16}
        onClick={() => onRemove(name)}
        variation="role inbadge"
      />
    </Badge>
  );
};
