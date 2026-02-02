import { Badge } from "../../../kit/Badge";
import { Cross } from "../../../kit/icons/Cross";
import type { Organization, OrganizationId } from "../types";

interface Props {
  organization: Organization;
  onRemove?: (organizationId: OrganizationId) => void;
}

export const OrganizationBadge = ({
  organization,
  onRemove = () => null,
}: Props) => {
  const handleClick = () => {
    onRemove(organization.id);
  };
  return (
    <Badge variation="organization" title={organization.name}>
      <Cross size={16} onClick={handleClick} variation="organization inbadge" />
    </Badge>
  );
};
