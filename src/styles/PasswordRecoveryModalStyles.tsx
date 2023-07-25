import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #4b0082;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin-top: -0.8rem;
    margin-bottom: 0.5rem;
    text-align: center;
    cursor: default;

    @media screen and (max-width: 988px) {
      font-size: 16px;
    }

    @media screen and (max-width: 414px) {
      font-size: 17px;
    }
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  cursor: default;

  @media screen and (max-width: 988px) {
    padding-top: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding-top: 1.2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 414px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0253a8;
    color: #ccc;
  }

  @media screen and (max-width: 988px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 0.2rem;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0.1rem;
  }
`;
