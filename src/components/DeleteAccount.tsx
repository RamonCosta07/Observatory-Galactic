// Styles
import * as S from "@/styles/DeleteAccountStyles";
import { ConfigContainer } from "@/styles/ProfileSetupStyles";
import { Container } from "@/styles/ProfileSetupAstronomicalEventsStyles";
import { Button } from "@/styles/ButtonStyles";
// Hooks
import useAuth from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// Components
import Error from "./Error";
import ModalDeleteAccount from "./ModalDeleteAccount";
// Firebase
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  writeBatch,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "@/services/firebase";
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
} from "firebase/auth";
// Icons
import { GiCrackedAlienSkull } from "react-icons/gi";
// Interfaces
import { IOpenMenuProfile } from "@/interfaces/iComponents/IProfile";

const DeleteAccount = ({ setIsMenuOpen }: IOpenMenuProfile) => {
  const [deletingAccount, setDeletingAccount] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const removeUserFromEvents = async () => {
    try {
      const userId = user?.uid;
      const eventsRef = collection(db, "events");
      const eventsSnapshot = await getDocs(
        query(eventsRef, where("users", "array-contains", userId))
      );

      const batch = writeBatch(db);

      eventsSnapshot.forEach((eventDoc) => {
        const eventData = eventDoc.data();

        if (
          Array.isArray(eventData.users) &&
          eventData.users.includes(userId)
        ) {
          const updatedUsers = eventData.users.filter((uid) => uid !== userId);
          const eventRef = doc(db, "events", eventDoc.id);
          batch.update(eventRef, { users: updatedUsers });
        }
      });

      await batch.commit();
    } catch (error) {
      setError(`Erro ao remover eventos registrados: ${error}`);
    }
  };

  const deleteUserData = async () => {
    try {
      const userId = user?.uid;
      const userRef = doc(db, "users", userId!);
      await deleteDoc(userRef);
    } catch (error) {
      console.log(`Erro ao excluir dados da conta: {error}`);
    }
  };

  const deleteAccount = async () => {
    setError("");
    try {
      setDeletingAccount(true);
      const user = auth.currentUser;

      if (user) {
        let provider;

        // Verificar o provedor de autenticação do usuário atual
        if (user.providerData && user.providerData.length > 0) {
          const providerId = user.providerData[0].providerId;

          if (providerId === "google.com") {
            provider = new GoogleAuthProvider();
          } else if (providerId === "facebook.com") {
            provider = new FacebookAuthProvider();
          } else if (providerId === "github.com") {
            provider = new GithubAuthProvider();
          } else if (providerId === "password") {
            const password = prompt(
              "Por favor, digite sua senha para confirmar a exclusão da conta."
            );

            if (!password) {
              setError("Por favor, forneça a senha para excluir sua conta.");
              setShowModal(false);
              setDeletingAccount(false);
              return;
            }

            // Reautenticar o usuário com e-mail e senha
            const credentials = EmailAuthProvider.credential(
              user.email!,
              password
            );
            try {
              await reauthenticateWithCredential(user, credentials);
            } catch (error) {
              setError(
                "A senha fornecida é inválida. Por favor, tente novamente."
              );
              setShowModal(false);
              setDeletingAccount(false);
              return;
            }
          }
        }

        try {
          // Reautenticar o usuário de acordo com o provedor
          if (provider) {
            await reauthenticateWithPopup(user, provider);
          }
        } catch (error: any) {
          if (
            error.code === "auth/popup-closed-by-user" ||
            error.code === "auth/cancelled-popup-request"
          ) {
            setError(
              "A janela de reautenticação foi fechada. Por favor, tente novamente."
            );
            setShowModal(false);
            setDeletingAccount(false);
            return;
          } else if (error.code === "auth/requires-recent-login") {
            setError(
              "Por favor, faça login novamente para continuar com a exclusão da conta."
            );
            setShowModal(false);
            setDeletingAccount(false);
            return;
          } else {
            setError(error);
            throw error;
          }
        }
      }

      await removeUserFromEvents();
      setShowModal(false);
      if (error) {
        return;
      }
      await deleteUserData();
      if (error) {
        return;
      }
      // Excluir a conta do usuário
      await auth.currentUser?.delete();
      router.push("/");
    } catch (error) {
      setError(`Erro ao excluir conta: ${error}`);
      setShowModal(false);
      setDeletingAccount(false);
    }
  };

  const handleShowModal = () => {
    setError("");
    setShowModal((prev) => !prev);
  };

  return (
    <ConfigContainer>
      <h1 style={{ textAlign: "center", cursor: "default" }}>
        Exclusão da Conta
      </h1>
      <Container>
        <S.InformationDelete>
          <p>
            Caso deseje excluir sua conta, poderá fazê-lo pelo botão abaixo.
          </p>
          <p>
            Lembre-se, essa ação é irreversível e após ela você não receberá
            mais nenhum lembrete de eventos astronômicos anteriormente
            cadastrados.
          </p>
          <S.ButtonDelete title="Excluir conta">
            <Button onClick={handleShowModal} disabled={deletingAccount}>
              Excluir conta <GiCrackedAlienSkull />
            </Button>
          </S.ButtonDelete>
          {error && <Error>{error}</Error>}
        </S.InformationDelete>

        {showModal && (
          <ModalDeleteAccount
            msg={
              <>
                Tem certeza de que deseja excluir sua conta?
                <br />
                Caso confirme, seus dados serão completamente apagados e seus
                lembretes não serão mais enviados ao seu e-mail.
              </>
            }
            handleConfirmDelete={deleteAccount}
            handleCancelDelete={handleShowModal}
            secondsRemaining={10}
          />
        )}
      </Container>
    </ConfigContainer>
  );
};

export default DeleteAccount;
