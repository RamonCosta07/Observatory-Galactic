import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: #0d0d1a;
  width: 76%;
  margin-top: 6rem;
  margin-bottom: 0.9rem;
  margin-left: 12%;
  margin-right: 12%;
  padding: 1rem;
  height: 100%;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 998px) {
    padding-bottom: 2rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 912px) {
    margin-bottom: 50.3rem;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 38.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5rem;
    margin-bottom: .5rem;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 500px) {
    width: 82%;
    margin-left: 9%;
    margin-right: 9%;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 420px) {
    width: 86%;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 5rem;
    margin-bottom: 11.5rem;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 21rem;
  }

  @media screen and (max-width: 412px) {
    margin-bottom: 22rem;
  }

  @media screen and (max-width: 393px) {
    margin-bottom: 18rem;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 7rem;
  }

  @media screen and (max-width: 360px) {
    margin-bottom: 11rem;
  }

  h2 {
    cursor: default;
    color: #0d0d1a;
    background-color: #dcf3f0;
    padding: 0.3rem;
    border-radius: 8px;
    margin-top: 2rem;
    margin-bottom: 0.3rem;
    display: inline-block;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }

    @media screen and (max-width: 600px) {
      font-size: 20px;
    }

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }

    @media screen and (max-width: 414px) {
      font-size: 16px;
    }

    svg {
      color: yellow;
    }
  }
`;
