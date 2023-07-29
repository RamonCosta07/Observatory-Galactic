import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalContent = styled.div`
  background-color: #b18bcc;
  padding: 24px;
  border-radius: 4px;
  width: 400px;

  p {
    color: black;
    text-align: center;
    font-style: italic;
    font-size: 18px;
    word-break: break-word;

    @media (max-width: 998px) {
      font-size: 16px;
    }

    @media (max-width: 600px) {
      font-size: 15px;
    }

    @media (max-width: 500px) {
      font-size: 14.5px;
    }
  }

  @media (max-width: 998px) {
    width: 380px;
  }

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 500px) {
    width: 330px;
  }

  @media (max-width: 420px) {
    width: 310px;
    padding: 22px;
    margin-bottom: 5rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#b4b0b0" : "#28a745")};
  color: #ffffff;
  padding: 9px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  color: #ffffff;
  padding: 9px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
`;
