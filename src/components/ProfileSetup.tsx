/// Styles
import * as S from "@/styles/ProfileSetupStyles";
import { Button } from "@/styles/ButtonStyles";
import {
  InputWrapper,
  ShowPasswordIcon,
  IconsWrapper,
  HidePasswordIcon,
} from "@/styles/LoginStyles";
// Hooks e Bibliotecas
import useAuth from "@/hooks/useAuth";
import { useState, useRef, useEffect } from "react";
import { validate as validateEmail } from "email-validator";
// Firebase
import { db } from "@/services/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth } from "@/services/firebase";
import {
  reauthenticateWithCredential,
  updateEmail,
  updateProfile,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
// Icons
import { FiEdit, FiX } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
// Components
import Error from "./Error";
// Interfaces
import { IOpenMenuProfile } from "@/interfaces/iComponents/IProfile";

const ProfileSetup = ({ setIsMenuOpen }: IOpenMenuProfile) => {
  const { user, setUser } = useAuth();
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [name, setName] = useState(user?.name ? user.name : "");
  const nameRegex = /^[a-zA-Z\s]+$/;
  const [email, setEmail] = useState(user?.email ? user.email : "");
  const [error, setError] = useState("");
  const userCredential = auth.currentUser;
  const [passwordBox, setPasswordBox] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [isEditingEmail, isEditingName, isEditingPassword]);

  const handleNameEditClick = () => {
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setIsEditingName(true);
  };

  const handleEmailEditClick = () => {
    setIsEditingEmail(true);
    setIsEditingPassword(false);
    setIsEditingName(false);
  };

  const handlePasswordEditClick = () => {
    setIsEditingEmail(false);
    setIsEditingPassword(true);
    setIsEditingName(false);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleNameSaveClick = async () => {
    const firstName = name.split(" ")[0];
    if (firstName.length < 3) {
      setError("O primeiro nome deve ter no mínimo 3 caracteres");
      return;
    }
    if (name.length + 1 > 30) {
      setError("O nome completo não pode ter mais de 30 caracteres");
      return;
    }
    if (!nameRegex.test(name)) {
      setError("Nome não pode ter números ou caracteres especiais");
      return;
    }

    const formattedName = name
      .split(" ")
      .map(
        (namePart) =>
          namePart.charAt(0).toUpperCase() + namePart.slice(1).toLowerCase()
      )
      .join(" ");
    setName(formattedName);

    try {
      const userRef = doc(db, "users", user!.uid);
      await updateDoc(userRef, { name: formattedName });
      setUser((prevUser: any) => ({
        ...prevUser,
        name,
      }));
      await updateProfile(userCredential!, { displayName: formattedName });
    } catch (error) {
      console.error("Erro ao atualizar o nome do usuário:", error);
    } finally {
      setIsEditingName(false);
    }
  };

  const handleEmailSaveClick = async () => {
    // Verificar se o e-mail digitado é válido
    if (email) {
      if (!validateEmail(email)) {
        setError("E-mail inválido");
        return;
      }
    }

    // Verificar se o e-mail já está vinculado a outra conta
    const usersCollection = collection(db, "users");
    const existingUserQuery = query(
      usersCollection,
      where("email", "==", email)
    );
    const existingUserSnapshot = await getDocs(existingUserQuery);

    if (!existingUserSnapshot.empty) {
      setError("E-mail já está vinculado a outra conta");
      return;
    }

    setUser((prevUser: any) => ({
      ...prevUser,
      email,
    }));
    await updateEmail(auth.currentUser!, email!);
    const userRef = doc(db, "users", user!.uid);
    await updateDoc(userRef, { email });
    setIsEditingEmail(false);
  };

  const handlePasswordSaveClick = async () => {
    if (
      passwordBox.confirmPassword === "" ||
      passwordBox.newPassword === "" ||
      passwordBox.currentPassword === ""
    ) {
      setError("Favor preencha todos os dados");
      return;
    }

    if (passwordBox.newPassword)
      if (passwordBox.newPassword !== passwordBox.confirmPassword) {
        setError("As senhas não correspondem");
        return;
      }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(passwordBox.newPassword)) {
      if (!/[a-z]/.test(passwordBox.newPassword)) {
        setError("A senha deve conter pelo menos uma letra minúscula.");
        return;
      }

      if (!/[A-Z]/.test(passwordBox.newPassword)) {
        setError("A senha deve conter pelo menos uma letra maiúscula.");
        return;
      }

      if (!/\d/.test(passwordBox.newPassword)) {
        setError("A senha deve conter pelo menos um número.");
        return;
      }

      if (!/[@$!%*?&]/.test(passwordBox.newPassword)) {
        setError("A senha deve conter pelo menos um caractere especial.");
        return;
      }

      if (!/[A-Za-z\d@$!%*?&]{8,}/.test(passwordBox.newPassword)) {
        setError("A senha deve ter no mínimo 8 caracteres.");
        return;
      }
    }

    try {
      const user = auth.currentUser;

      // Reautenticar o usuário com a senha atual
      const credential = EmailAuthProvider.credential(
        user?.email!,
        passwordBox.currentPassword
      );
      try {
        await reauthenticateWithCredential(user!, credential);
        await updatePassword(user!, passwordBox.newPassword);
      } catch (error: any) {
        setError("Senha incorreta, favor digite a senha correta da sua conta");
        return;
      }

      handlePasswordCancelClick();
    } catch (error) {
      setError(
        "Falha ao atualizar a senha. Verifique se a senha atual está correta."
      );
    }
  };

  const handleNameCancelClick = () => {
    setName(user?.name || "");
    setError("");
    setIsEditingName(false);
  };

  const handleEmailCancelClick = () => {
    setEmail(user?.email || "");
    setError("");
    setIsEditingEmail(false);
  };

  const handlePasswordCancelClick = () => {
    setPasswordBox({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError("");
    setIsEditingPassword(false);
  };

  return (
    <S.ConfigContainer>
      <h1>Configurações do Perfil</h1>
      <S.Container>
        <h3>Dados da Conta</h3>
        <S.UserInfo>
          <S.UserData>
            {isEditingName ? (
              <S.EditContainer>
                <S.HeaderContainerEdit>
                  <h2>Editar Nome</h2>
                  <S.CancelButton
                    title="Cancelar edição"
                    onClick={handleNameCancelClick}
                  >
                    <FiX />
                  </S.CancelButton>
                </S.HeaderContainerEdit>
                <S.EditInput
                  ref={inputRef}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                />
                <S.Send>
                  <Button
                    onClick={handleNameSaveClick}
                    title="Salvar alterações"
                  >
                    Salvar
                  </Button>
                </S.Send>
              </S.EditContainer>
            ) : (
              <S.UserInformation>
                <span>Nome: {name}</span>
                <S.EditButton onClick={handleNameEditClick}>
                  <FiEdit title="Alterar nome" />
                </S.EditButton>
              </S.UserInformation>
            )}
          </S.UserData>
        </S.UserInfo>

        <S.UserInfo>
          <S.UserData>
            {isEditingEmail ? (
              <S.EditContainer>
                <S.HeaderContainerEdit>
                  <h2>Editar E-mail</h2>
                  <S.CancelButton
                    title="Cancelar edição"
                    onClick={handleEmailCancelClick}
                  >
                    <FiX />
                  </S.CancelButton>
                </S.HeaderContainerEdit>
                <S.EditInput
                  ref={inputRef}
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
                <S.Send>
                  <Button
                    onClick={handleEmailSaveClick}
                    title="Salvar alterações"
                  >
                    Salvar
                  </Button>
                </S.Send>
              </S.EditContainer>
            ) : (
              <S.UserInformation>
                <span>E-mail: {email}</span>
                {user?.provider === "password" && (
                  <S.EditButton onClick={handleEmailEditClick}>
                    <FiEdit title="Alterar e-mail" />
                  </S.EditButton>
                )}
              </S.UserInformation>
            )}
          </S.UserData>
        </S.UserInfo>

        <S.UserInfo>
          <S.UserData>
            {isEditingPassword ? (
              <S.EditContainer>
                <S.HeaderContainerEdit>
                  <h2>Senha Atual</h2>
                  <S.CancelButton
                    title="Cancelar edição"
                    onClick={handlePasswordCancelClick}
                  >
                    <FiX />
                  </S.CancelButton>
                </S.HeaderContainerEdit>

                <InputWrapper>
                  <S.EditInput
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    value={passwordBox.currentPassword}
                    onChange={(e) => {
                      setPasswordBox((prevPasswordBox) => ({
                        ...prevPasswordBox,
                        currentPassword: e.target.value,
                      }));
                      setError("");
                    }}
                  />
                  <IconsWrapper>
                    {showPassword ? (
                      <HidePasswordIcon
                        onClick={handleTogglePassword}
                        title="Ocultar senha"
                      />
                    ) : (
                      <ShowPasswordIcon
                        onClick={handleTogglePassword}
                        title="Exibir senha"
                      />
                    )}
                  </IconsWrapper>
                </InputWrapper>

                <h2>Nova Senha</h2>
                <InputWrapper>
                  <S.EditInput
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordBox.newPassword}
                    onChange={(e) => {
                      setPasswordBox((prevPasswordBox) => ({
                        ...prevPasswordBox,
                        newPassword: e.target.value,
                      }));
                      setError("");
                    }}
                  />
                  <IconsWrapper>
                    {showConfirmPassword ? (
                      <HidePasswordIcon
                        onClick={handleToggleConfirmPassword}
                        title="Ocultar senha"
                      />
                    ) : (
                      <ShowPasswordIcon
                        onClick={handleToggleConfirmPassword}
                        title="Exibir senha"
                      />
                    )}
                  </IconsWrapper>
                </InputWrapper>

                <h2>Confirme a Nova Senha</h2>
                <InputWrapper>
                  <S.EditInput
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordBox.confirmPassword}
                    onChange={(e) => {
                      setPasswordBox((prevPasswordBox) => ({
                        ...prevPasswordBox,
                        confirmPassword: e.target.value,
                      }));
                      setError("");
                    }}
                  />
                  <IconsWrapper>
                    {showConfirmPassword ? (
                      <HidePasswordIcon
                        onClick={handleToggleConfirmPassword}
                        title="Ocultar senha"
                      />
                    ) : (
                      <ShowPasswordIcon
                        onClick={handleToggleConfirmPassword}
                        title="Exibir senha"
                      />
                    )}
                  </IconsWrapper>
                </InputWrapper>

                <S.Send>
                  <Button
                    onClick={handlePasswordSaveClick}
                    title="Salvar alterações"
                  >
                    Salvar
                  </Button>
                </S.Send>
              </S.EditContainer>
            ) : (
              <S.UserInformation>
                <span
                  style={{ cursor: "not-allowed" }}
                  title="Caso não se recorde de sua senha, poderá recuperá-la na página de login"
                >
                  Senha:
                  <AiFillLock style={{ marginLeft: ".6rem" }} />
                  <AiFillLock />
                  <AiFillLock />
                  <AiFillLock />
                  <AiFillLock />
                  <AiFillLock />
                  <AiFillLock />
                  <AiFillLock />
                </span>
                {user?.provider === "password" && (
                  <S.EditButton onClick={handlePasswordEditClick}>
                    <FiEdit title="Alterar senha" />
                  </S.EditButton>
                )}
              </S.UserInformation>
            )}
          </S.UserData>
        </S.UserInfo>
        <S.ErrorContainer>{error && <Error>{error}</Error>}</S.ErrorContainer>
      </S.Container>
    </S.ConfigContainer>
  );
};

export default ProfileSetup;
