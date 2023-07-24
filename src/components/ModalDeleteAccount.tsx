// Styles
import * as S from "@/styles/ModalConfirmStyles";
// Interface
import { IModalDeleteAccountProps } from "@/interfaces/iComponents/IModalConfirm";
// Hooks
import { useState, useEffect } from "react";

const ModalDeleteAccount = ({
  msg,
  handleConfirmDelete,
  handleCancelDelete,
  secondsRemaining,
}: IModalDeleteAccountProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [remaining, setRemaining] = useState(secondsRemaining || 0);

  useEffect(() => {
    if (remaining !== 0) {
      const intervalId = setInterval(() => {
        setRemaining((prevRemaining) => prevRemaining - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
    setIsButtonDisabled(false);
  }, [remaining]);

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <p>{msg}</p>
        <S.ButtonsContainer>
          <S.ConfirmButton
            onClick={handleConfirmDelete}
            disabled={isButtonDisabled}
            title="Confirmar exclusão da conta"
          >
            {isButtonDisabled ? `(${remaining}) segundos` : "Confirmar"}
          </S.ConfirmButton>

          <S.CancelButton onClick={handleCancelDelete} title="Cancelar">Cancelar</S.CancelButton>
        </S.ButtonsContainer>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default ModalDeleteAccount;
