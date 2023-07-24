import styled from "styled-components";

export const Container404 = styled.div`
  cursor: default;
  background-color: #0d0d1a;
  border-radius: 8px;
  height: 85vh;
  padding: 3rem 0;
  top: 5rem;
  left: 12%;
  width: 76%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow-y: hidden !important;

  img {
    margin-top: 1rem;
    border-radius: 5px;
    max-width: 290px;
    max-height: 290px;
    background-size: cover;
    animation: brilhoAnimacao 2s infinite;

    @media screen and (max-width: 768px) {
      max-width: 220px;
      max-height: 220px;
    }

    @media screen and (max-width: 414px) {
      max-width: 290px;
      max-height: 290px;
    }
  }

  @keyframes brilhoAnimacao {
    0% {
      box-shadow: 0 0 5px 5px #1f8134;
    }
    50% {
      box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0.3);
    }
    100% {
      box-shadow: 0 0 5px 5px #1f8134;
    }
  }

  span {
    padding: 5px;
    background-color: orange;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    color: purple;
    text-align: center;

    &:hover {
      background-color: white;
      color: orange;
    }

    @media screen and (max-width: 414px) {
      font-size: 15px;
      margin: 0 1rem;
      span {
        padding: 0px;
      }
    }
  }

  p {
    margin-top: -0.8rem;
    margin-bottom: 1rem;
    padding: 5px;
    background-color: purple;
    border-radius: 8px;
    font-size: 18px;
    color: orange;

    &:hover {
      background-color: white;
      color: purple;
    }

    @media screen and (max-width: 414px) {
      font-size: 15px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ffa500;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
    left: 10%;
  }

  @media screen and (max-width: 998px) {
    top: 4.5rem;
    width: 84%;
    left: 8%;
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 768px) {
    width: 86%;
    left: 7%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    left: 5%;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    left: 2.5%;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    padding-top: 0rem;
    left: 0;
    top: 4rem;

    h1 {
      font-size: 22px;
      margin-top: -4rem;
    }
  }

  @media screen and (max-width: 375px) {
    h1 {
      margin-top: 5rem;
    }
  }
`;
