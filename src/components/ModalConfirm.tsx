// Styles
import * as S from "@/styles/ModalConfirmStyles";
// Interface
import { IModalProps } from "@/interfaces/iComponents/IModalConfirm";

const ModalConfirm = ({
  msg,
  handleConfirmModal,
  handleCancelModal,
}: IModalProps) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <p>{msg}</p>
        {handleConfirmModal ? (
          <S.ButtonsContainer>
            <S.ConfirmButton onClick={handleConfirmModal} title="Confirmar">
              Sim
            </S.ConfirmButton>

            <S.CancelButton onClick={handleCancelModal} title="Cancelar">
              Não
            </S.CancelButton>
          </S.ButtonsContainer>
        ) : (
          <S.ButtonsContainer>
            <S.CancelButton onClick={handleCancelModal} title="Fechar">
              Fechar
            </S.CancelButton>
          </S.ButtonsContainer>
        )}
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default ModalConfirm;
