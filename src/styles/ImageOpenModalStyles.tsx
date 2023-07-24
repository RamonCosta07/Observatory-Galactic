import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
    max-height: 60%;
    object-fit: contain;
    padding: 1rem;
  }
`;
