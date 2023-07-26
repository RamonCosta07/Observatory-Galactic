// Styled
import styled, { keyframes } from "styled-components";
// Icons
import { FaReact, FaGithubAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiStyledcomponents,
  SiNasa,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoFirebase } from "react-icons/bi";
import { BsFiletypeJsx, BsFiletypeJson } from "react-icons/bs";
import { DiFirebase } from "react-icons/di";

const expandCardContainer = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const expandIcon = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(4);
  }
`;

const expandIconIsolated = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
`;

export const Container = styled.div`
  background-color: #0d0d1a;
  width: 76%;
  margin: 0 auto;
  margin-top: 5.2rem;
  margin-left: 12%;
  margin-right: 12%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  @media screen and (max-width: 1200px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  @media screen and (max-width: 998px) {
    width: 84%;
    margin-left: 8%;
    margin-right: 8%;
  }

  @media screen and (max-width: 768px) {
    width: 86%;
    margin-left: 7%;
    margin-right: 7%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  h2 {
    cursor: default;
    color: "#0D0D1A";
    background-color: #dcf3f0;
    padding: 0.3rem;
    border-radius: 8px;
    margin-top: 0.2rem;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }

    svg {
      color: yellow;
    }
  }
`;

export const Icon = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  transform: rotate(-45deg);

  @media screen and (max-width: 1200px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ContainerCard = styled.div`
  padding: 20px;
  background-color: #e755d4;
  border-radius: 8px;
  margin-top: 1rem;
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: black;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 998px) {
    width: 92%;
  }

  @media screen and (max-width: 768px) {
    width: 94%;
  }

  @media screen and (max-width: 600px) {
    width: 96%;
  }

  @media screen and (max-width: 500px) {
    width: 98%;
  }

  span {
    margin-bottom: 1.5rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  min-width: 200px;
  max-width: 500px;
  background-color: #f7f4f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform-origin: center;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }

  p {
    font-size: 18px;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 22px;
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }

  transform-origin: center;

  &:hover,
  &:focus {
    animation: ${expandCardContainer} 0.5s forwards;
    z-index: 1;
  }
`;

export const InfoCardUl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;
  max-width: 500px;
  background-color: #f7f4f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform-origin: center;

  ul {
    list-style-type: none;
    padding: 0;
    cursor: default;
  }

  li {
    background-color: #f7d8ea;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    &:hover,
    &:focus {
      animation: ${expandCardContainer} 0.5s forwards;
      z-index: 1;
    }

    a {
      text-decoration: none;
      color: #3e49e0;
      transition: color 0.3s ease;

      &:hover,
      &:focus {
        color: #2934c0;
        font-weight: bold;
      }
    }

    @media screen and (max-width: 1200px) {
      font-size: 22px;
    }

    @media screen and (max-width: 768px) {
      padding: 8px;
    }

    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
`;

export const IconsTechnologiesContainer = styled.div`
  display: flex;
  gap: 1.9rem;

  svg {
    font-size: 2rem;
    transform-origin: center;

    &:hover,
    &:focus {
      animation: ${expandIcon} 0.5s forwards;
      z-index: 1;
    }
  }

  @media screen and (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media screen and (max-width: 998px) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    gap: 0.8rem;
  }

  @media screen and (max-width: 500px) {
    gap: 1rem;
  }

  @media screen and (max-width: 414px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const React = styled(FaReact)`
  color: #61dafb;
  background-color: black;
  border-radius: 50%;
  padding: 0.1rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const TypeScript = styled(SiTypescript)`
  color: #007bcd;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const NextJS = styled(TbBrandNextjs)`
  color: black;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const JSON = styled(BsFiletypeJson)`
  color: #f90;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const StyledComponents = styled(SiStyledcomponents)`
  color: #db7093;
  font-size: 2.5rem !important;

  @media screen and (max-width: 1200px) {
    font-size: 2.2rem !important;
  }

  @media screen and (max-width: 998px) {
    font-size: 2rem !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.6rem !important;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.4rem !important;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem !important;
  }
`;

export const Firebase = styled(BiLogoFirebase)`
  color: #ffcb2b;
  background-color: #00bcd4;
  padding: 0.2rem;
  border-radius: 50%;
  font-size: 2.1rem !important;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem !important;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem !important;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem !important;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem !important;
  }

  &:hover,
  &:focus {
    font-size: 2rem !important;
  }
`;

export const Firestore = styled(DiFirebase)`
  color: #767676;
  font-size: 2.5rem !important;

  @media screen and (max-width: 1200px) {
    font-size: 2.2rem !important;
  }

  @media screen and (max-width: 998px) {
    font-size: 2rem !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.6rem !important;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.4rem !important;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem !important;
  }
`;

export const JSX = styled(BsFiletypeJsx)`
  color: #f0db4f;
  background-color: black;
  border-radius: 8px;
  padding: 0.2rem;
  font-size: 2.1rem !important;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem !important;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem !important;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem !important;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem !important;
  }
`;

export const NASA = styled(SiNasa)`
  color: #0065b3;
  font-size: 3.5rem !important;
  transform-origin: center;

  @media screen and (max-width: 1200px) {
    font-size: 3rem !important;
  }

  @media screen and (max-width: 998px) {
    font-size: 2.8rem !important;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.6rem !important;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.4rem !important;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.2rem !important;
  }

  &:hover,
  &:focus {
    animation: ${expandIconIsolated} 0.5s forwards;
    z-index: 1;
  }
`;

export const Vercel = styled(SiVercel)`
  color: white;
  font-size: 2rem;
  background-color: black;
  border-radius: 50%;
  padding: 0.2rem;
  transform-origin: center;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }

  &:hover,
  &:focus {
    animation: ${expandIconIsolated} 0.5s forwards;
    z-index: 1;
  }
`;

export const Github = styled(FaGithubAlt)`
  font-size: 2.5rem;
  color: black;
  transform-origin: center;

  @media screen and (max-width: 1200px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }

  &:hover,
  &:focus {
    animation: ${expandIconIsolated} 0.5s forwards;
    z-index: 1;
    color: #3e49e0;
  }
`;

export const Footer = styled.footer`
  background-color: #fafa27;
  color: black;
  padding: 4px 10px;
  border-radius: 20px;
  font-weight: bold;
  margin-top: -0.9rem;
  cursor: default;

  p {
    font-size: 12px;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 0.3rem;
  }

  svg {
    color: red;
  }

  &:hover,
  &:focus {
    animation: ${expandCardContainer} 0.5s forwards;
    z-index: 1;
  }
`;
