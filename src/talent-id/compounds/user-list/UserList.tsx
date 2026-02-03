import { useCenteredPopup } from "../../hooks/useCenteredPopup";
import { Button } from "../../kit/inputs/Button";
import { CenteredPopup } from "../shared/CenteredPopup";
import { CreateUser } from "../user-info/popups/CreateUser";
import type {
  CurrencyId,
  Organization,
  User,
  UserCreate,
} from "../user-info/types";
import { UserInfo } from "../user-info/UserInfo";

interface Props {
  users: User[];
  typeNames: Record<CurrencyId, string>;
  allOrganizations: Organization[];
  onUserCreation: (user: UserCreate) => void;
}

// DONE: Add create popup
// TODO: Add update popup
// TODO: Add popup calls
// TODO: Add create, update and delete callbacks
export const UserList = ({
  users,
  typeNames,
  allOrganizations,
  onUserCreation = () => null,
}: Props) => {
  const popupParameters = useCenteredPopup({ dismissable: true });
  const { openPopup, closePopup } = popupParameters;

  const handleUserCreate = (user: UserCreate) => {
    onUserCreation(user);
    closePopup();
  };

  return (
    <>
      {users.map((user: User) => (
        <UserInfo
          user={user}
          typeNames={typeNames}
          allOrganizations={allOrganizations}
        />
      ))}
      <Button onClick={openPopup} variation="bottom">
        Добавить пользователя
      </Button>
      <CenteredPopup popupParameters={popupParameters}>
        <CreateUser
          allOrganizations={allOrganizations}
          onSubmit={handleUserCreate}
          onClose={closePopup}
        />
      </CenteredPopup>
    </>
  );
};
