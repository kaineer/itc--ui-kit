import { Badge } from "../../kit/Badge";
import { Cross } from "../../kit/icons/Cross";
import { roleNames } from "../../shared/roles";

interface Props {
  name: string;
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
