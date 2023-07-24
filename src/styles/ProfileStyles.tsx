// Styled
import styled from "styled-components";
// Interfaces
import { IIsActive } from "@/interfaces/iStyles/INavbarStyles";

export const ProfileContainer = styled.div`
  background-color: #0d0d1a;
  width: 76%;
  min-height: 610px;
  margin-bottom: 0.9rem;
  margin-top: 5rem;
  display: flex;
  margin-left: 12%;
  margin-right: 12%;
  gap: 4rem;
  padding: 1.5rem 2rem;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 7rem;
  }

  @media screen and (max-width: 998px) {
    width: 84%;
    margin-left: 8%;
    margin-right: 8%;
    margin-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    width: 86%;
    margin-left: 7%;
    margin-right: 7%;
    padding-left: 0.8rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    padding-right: 0.8rem;
    gap: 0rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

export const TabContainer = styled.div<{ isopen: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #4b0082;
  padding: 0.6rem;
  padding-top: 1rem;
  border-radius: 5px;
  min-height: 475px;

  button {
    margin-top: 4rem;

    @media screen and (max-width: 600px) {
      margin-top: 3rem;
    }
  }

  @media screen and (max-width: 1200px) {
    gap: 0.9rem;
    padding: 0.7rem;
  }

  @media screen and (max-width: 998px) {
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.isopen === "true" ? "flex" : "none")};
    position: absolute;
    right: 6rem;
    top: 12rem;
    z-index: 999;
    padding: 3rem 4rem;
    gap: 1.1rem;
  }

  @media screen and (max-width: 500px) {
    right: 3rem;
    top: 14rem;
  }

  @media screen and (max-width: 540px) {
    top: 14rem;
    right: 4rem;
  }

  @media screen and (max-width: 414px) {
    right: 0.4rem;
  }

  @media screen and (max-width: 375px) {
    right: 0rem;
  }

  @media screen and (max-width: 414px) {
    top: 10.5rem;
    right: 2.5rem;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 10rem;
    left: 3.5rem;
    background-color: transparent;
    color: cyan;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    top: 8rem;
    left: 3rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 2rem;
    top: 8rem;
    left: 1rem;
  }
`;

export const Tab = styled.div<IIsActive>`
  padding: 10px;
  background-color: ${(props) =>
    props.active === "true" ? "#340d50" : "#8080e5"};
  color: ${(props) => (props.active === "true" ? "cyan" : "#fff")};
  cursor: pointer;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    padding: 12px;
    font-size: 18px;
  }

  @media screen and (max-width: 998px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    padding: 13px;
  }

  @media screen and (max-width: 414px) {
    font-size: 16px;
    padding: 9px;
  }
`;

export const ContentContainer = styled.div<{ isopen: string }>`
  margin: 0 auto;
  display: ${(props) => (props.isopen === "false" ? "block" : "none")};
`;
