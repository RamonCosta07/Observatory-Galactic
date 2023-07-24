import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { IIsActive } from "@/interfaces/iStyles/INavbarStyles";

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 300px;
    word-wrap: break-word;
  }

  @media screen and (max-width: 600px) {
    max-width: 520px;
  }

  @media screen and (max-width: 500px) {
    max-width: 400px;
  }

  @media screen and (max-width: 375px) {
    max-width: 400px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const TabButton = styled.button<IIsActive>`
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  ${({ active }) =>
    active === "true" &&
    `
    background-color: #4fbeda;
    color: #fff;
  `}

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 998px) {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 15rem;
  }
`;

export const EventsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 2rem;

  li {
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 0.5rem;
    margin-left: 10rem;

    @media screen and (max-width: 768px) {
      margin-left: 8rem;
      margin-top: 1rem;
    }
  }

  p {
    color: black;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }

    @media screen and (max-width: 998px) {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 998px) {
    margin-left: 1rem;
  }
`;

export const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;
  max-width: 575px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 998px) {
    padding: 8px;
  }

  @media screen and (max-width: 500px){
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const EventDate = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 998px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TrashIcon = styled(BsTrash)`
  cursor: pointer;
  color: #999;
  font-size: 1rem;

  &:hover {
    color: #ff0000;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
