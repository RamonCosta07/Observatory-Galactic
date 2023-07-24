// Styled
import styled from "styled-components";
// Interface
import { IPlanetInfo } from "@/interfaces/iStyles/IPlanetInfoStyles";

export const PlanetContainer = styled.div<IPlanetInfo>`
  display: flex;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-left: 1rem;

  h2 {
    font-size: 24px;
    display: ${(props) =>
      props.selectedplanet === "true" ? "none" : "visible"};
    margin-top: 3.5rem;
    margin-left: 20rem;
    text-align: center;
    background: linear-gradient(to right, ${(props) => props.colors!});
    transition: background-color 1s ease-in-out 0.5s;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    &:hover {
      font-size: 30px;
      font-weight: bold;
      background: linear-gradient(
        to right,
        ${(props) =>
          props.colors && props.colors.split(", ").reverse().join(", ")}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @media screen and (max-width: 1200px) {
    h2 {
      margin-left: 10rem;
    }
  }

  @media screen and (max-width: 998px) {
    h2 {
      margin-left: 5rem;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 414px) {
    h2 {
      margin-left: 0.2rem;
    }
  }
`;

export const PlanetInfo = styled.div<IPlanetInfo>`
  display: ${(props) => (props.selectedplanet === "true" ? "visible" : "none")};
  background-color: #7514bb;
  padding: 0.5rem;
  text-align: center;
  border-radius: 10px;

  p {
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }

    @media screen and (max-width: 998px) {
      font-size: 19px;
    }

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 500px) {
      font-size: 17px;
      line-height: 1.5;
    }
  }

  h1 {
    text-align: justify;
    margin-left: 5rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 414px) {
    h1 {
      margin-left: 0.4rem;
    }
  }
`;

export const Planet3D = styled.div`
  transition: transform 0.5s ease;
  transform: translateX(0);

  &.slide-right {
    transform: translateX(10%);
  }
`;
