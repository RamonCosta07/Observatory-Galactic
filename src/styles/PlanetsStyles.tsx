import styled from "styled-components";

export const PlanetsContainer = styled.div`
  text-align: center;
  h3 {
    text-align: center;
    margin-bottom: .8rem;
    font-size: 24px;
    font-weight: bold;
    color: cyan;
    background-color: #012923;
    padding: 0.3rem;
    border-radius: 8px;
    cursor: default;
    display: inline-block;

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
`;

export const PlanetsInformation = styled.div`
  background-color: #fafa27;
  color: black;
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  cursor: default;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 1rem;

  p {
    font-size: 12px;
    margin-bottom: 0.3rem;
  }
`;

