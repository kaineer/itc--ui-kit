import type {
  Organization,
  OrganizationId,
  User,
  UserCreate,
  UserId,
  UserRole,
} from "../types";
import { useRef, useCallback, useState } from "react";
import { Button } from "../../../kit/inputs/Button";
import { TextInput } from "../../../kit/inputs/TextInput";
import { SectionTitle } from "../../../kit/SectionTitle";
import { Column, Row } from "../../shared/Container";
import { PopupContainer } from "../../shared/PopupContainer";
import { UserRoles } from "../identity/UserRoles";
import { UserOrganizations } from "../hidden/UserOrganizations";

interface Props {
  user?: User;
  allOrganizations: Organization[];
  onSubmit: (user: UserCreate) => void;
  onClose: () => void;
}

const placeholders = {
  name: "ФИО",
  email: "Email",
  pass: "Пароль",
};

/** Create or update user */
export const CreateUser = ({
  user,
  allOrganizations,
  onSubmit,
  onClose,
}: Props) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);

  const existingUser: boolean = Boolean(user && user.userId);

  const [roles, setRoles] = useState<UserRole[]>(user?.roles || ["player"]);
  const [organizationIds, setOrganizationIds] = useState<OrganizationId[]>(
    (user?.organizations || []).map((o) => o.id),
  );

  const handleSubmit = useCallback(() => {
    const data: UserCreate & { userId?: UserId } = {
      userName: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passRef.current?.value || "",
      roles,
      organizations: organizationIds,
    };
    if (user && user.userId) {
      data.userId = user.userId;
    }

    onSubmit(data);
    onClose();
  }, [
    user,
    roles,
    organizationIds,
    onSubmit,
    onClose,
    nameRef,
    emailRef,
    passRef,
  ]);

  const validate = useCallback(() => {
    if (user) {
      return (
        Boolean(user.userId) &&
        Boolean(nameRef?.current?.value) &&
        Boolean(emailRef?.current?.value) &&
        organizationIds.length > 0 &&
        roles.length > 0
      );
    } else {
      return (
        Boolean(nameRef?.current?.value) &&
        Boolean(emailRef?.current?.value) &&
        organizationIds.length > 0 &&
        roles.length > 0
      );
    }
  }, [user, roles, organizationIds, nameRef, emailRef]);

  const roleUser: Partial<User> = {
    roles,
  };

  const organizationUser: Partial<User> = {
    organizations: organizationIds
      .map((id: OrganizationId) => allOrganizations.find((o) => o.id === id))
      .filter((x) => !!x),
  };

  const handleRemoveRole = (name: UserRole) => {
    setRoles((prev: UserRole[]) => prev.filter((r: UserRole) => r !== name));
  };

  const handleUpdateRoles = (newRoles: UserRole[]) => {
    setRoles(newRoles);
  };

  const handleRemoveFromOrganization = (id: OrganizationId) => {
    setOrganizationIds((prev) => prev.filter((oid) => oid !== id));
  };

  const handleUpdateOrganizations = (orgs: Organization[]) => {
    setOrganizationIds(orgs.map(({ id }) => id));
  };

  return (
    <PopupContainer onCrossClick={onClose}>
      <Column gap={8}>
        <SectionTitle
          title={existingUser ? "Пользователь" : "Новый пользователь"}
        />
        <Row gap={8}>
          <TextInput
            variation="33"
            width={223}
            textRef={nameRef}
            defaultValue={user?.userName}
            placeholder={placeholders.name}
          />
          <TextInput
            variation="33"
            width={223}
            textRef={emailRef}
            defaultValue={user?.email}
            placeholder={placeholders.email}
          />
        </Row>
        <TextInput
          variation="33"
          width={454}
          textRef={passRef}
          password={true}
          placeholder={placeholders.pass}
        />
        {/* do not set defaultValue, to prevent password copy */}

        <UserRoles
          user={roleUser}
          hasTitle={true}
          variation="in-form"
          onRemove={handleRemoveRole}
          onRolesUpdate={handleUpdateRoles}
        />

        <UserOrganizations
          user={organizationUser}
          variation="in-form"
          hasTitle={true}
          allOrganizations={allOrganizations}
          onRemoveFromOrganization={handleRemoveFromOrganization}
          onUpdateOrganizations={handleUpdateOrganizations}
        />

        <Button
          title={
            existingUser ? "Обновить пользователя" : "Создать пользователя"
          }
          onClick={handleSubmit}
          disabled={!validate()}
          variation="bottom"
        />
      </Column>
    </PopupContainer>
  );
};
