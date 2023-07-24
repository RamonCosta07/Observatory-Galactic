// Styles
import * as S from "@/styles/ImageOpenModalStyles";
// Interfaces
import { IImageOpenModalProps } from "@/interfaces/iComponents/IImageOpenModal";

const ImageOpenModal = ({ children, onClose }: IImageOpenModalProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <S.ModalContainer onClick={onClose} title="Minimizar">
      <S.ModalContent onClick={handleClick}>{children}</S.ModalContent>
    </S.ModalContainer>
  );
};

export default ImageOpenModal;
