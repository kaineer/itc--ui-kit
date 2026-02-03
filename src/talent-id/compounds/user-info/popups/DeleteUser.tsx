import { Button } from "../../../kit/inputs/Button";
import { SectionTitle } from "../../../kit/SectionTitle";
import { PopupContainer } from "../../shared/PopupContainer";
import type { UserDelete } from "../types";

interface Props {
  user: UserDelete;
  onSubmit: (user: UserDelete) => void;
  onClose: () => void;
}

export const DeleteUser = ({
  user,
  onSubmit = () => null,
  onClose = () => null,
}: Props) => {
  const handleSubmit = () => {
    onSubmit(user);
    onClose();
  };

  return (
    <PopupContainer>
      <SectionTitle title="Удаление" />
      <div style={{ fontFamily: "sans-serif" }}>
        Вы хотите удалить этого пользователя?
      </div>
      <Button
        onClick={handleSubmit}
        title="Удалить пользователя"
        variation="bottom reddish"
      />
    </PopupContainer>
  );
};
