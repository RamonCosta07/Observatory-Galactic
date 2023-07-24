import styled from "styled-components";

export const InformationDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 10px;
  color: black;
  max-width: 575px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 19px;
    }
  }
`;

export const ButtonDelete = styled.div`
  background-color: #ddd2d2;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  button {
    margin: 0 auto;
  }
`;
