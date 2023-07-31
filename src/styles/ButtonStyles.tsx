import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffd700;
  color: #0d0d1a;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #ffa500;
    color: purple;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;

    &:hover {
      background-color: #ccc;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 998px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    padding: 6px 14px;
  }

  @media screen and (max-width: 500px) {
    padding: 8px 12px;
    font-size: 11px;
  }
`;
