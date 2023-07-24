import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    text-align: center;
    position: absolute;
    top: 120px;
    margin-left: 450px;
    font-size: 28px;
  }

  h1 span {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
`;

export const SolarSystem = styled.div`
  position: absolute;
  top: -10px;
`;

export const ButtonSolarSystem = styled.div`
  position: relative;
  top: 525px;
  left: 500px;
  cursor: pointer;

  p {
    span {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0.5rem 1rem;
      border-radius: 10px;

      &:active {
        background-color: rgba(0, 0, 0, 0.8);
        color: orange;
      }

      &:hover {
        color: orange;
      }

      &:focus {
        outline: none;
        border: 2px solid rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
