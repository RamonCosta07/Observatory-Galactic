'use cliente';
// Styles
import * as S from "@/styles/PasswordRecoveryModalStyles";
// Hooks
import { useState, useRef, useEffect } from "react";
// Bibliotecas
import emailValidator from "email-validator";
// Components
import Error from "./Error";
import Loading from "./Loading";
// Firebase
import { auth, db } from "@/services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
// Interfaces
import { IPasswordRecoveryModal } from "@/interfaces/iComponents/IPasswordRecoveryModal";

const PasswordRecoveryModal = ({ onClose }: IPasswordRecoveryModal) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorRecovery, setErrorRecovery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorRecovery("");
  };

  const getUserByEmail = async (email: string) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      }
      return null;
    } catch (error) {
      return null;
    }
  };

  const handleRecoverPassword = async () => {
    setLoading(true);
    if (!emailValidator.validate(email)) {
      setErrorRecovery("Por favor, digite um e-mail válido.");
      setLoading(false);
      return;
    }

    try {
      // Verifica se existe algum usuário com o e-mail fornecido
      const user = await getUserByEmail(email);
      if (!user) {
        setErrorRecovery("Nenhum usuário encontrado com este e-mail.");
        setLoading(false);
        return;
      }

      if (user.provider !== "password") {
        setErrorRecovery("Este e-mail não utiliza autenticação por senha.");
        setLoading(false);
        return;
      }

      await sendPasswordResetEmail(auth, email);

      // Mensagem de sucesso
      console.log(
        "Solicitação para recuperar senha enviada com o e-mail:",
        email
      );

      setLoading(false);
      onClose();
    } catch (error) {
      setErrorRecovery(
        "Erro ao enviar o e-mail de recuperação de senha. Tente novamente mais tarde"
      );
      setLoading(false);
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalTitle>Recuperação de Senha</S.ModalTitle>
        <p>Digite seu e-mail</p>
        <S.Input
          ref={inputRef}
          type="email"
          placeholder="Digite o e-mail cadastrado"
          value={email}
          onChange={handleInputChange}
        />
        {errorRecovery && <Error>{errorRecovery}</Error>}
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.Button
              onClick={handleRecoverPassword}
              title="Enviar e-mail de recuperação de senha"
            >
              Recuperar Senha
            </S.Button>
            <S.Button onClick={onClose} title="Cancelar recuperação de senha">
              Fechar
            </S.Button>
          </>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default PasswordRecoveryModal;
