import styled from "styled-components";

export const SuccessMessage = styled.div`
  p {
    background-color: #22f522;
    color: black;
    padding: 0.5rem;
    font-size: 16px;
    margin-top: 5px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    cursor: default;
    word-break: break-word;
    width: 350px;

    @media screen and (max-width: 1200px) {
      width: 300px;
    }

    @media screen and (max-width: 998px) {
      width: 250px;
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      font-size: 14px;
    }

    @media screen and (max-width: 600px) {
      width: 180px;
      font-size: 13px;
    }

    @media screen and (max-width: 500px) {
      width: 160px;
      font-size: 12px;
    }

    @media screen and (max-width: 414px) {
      width: 100%;
      font-size: 11px;
    }
  }
`;
