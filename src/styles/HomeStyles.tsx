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

    @media screen and (max-width: 1200px) {
      top: 200px;
      margin-left: 600px;
      font-size: 32px;
    }

    @media screen and (max-width: 988px) {
      top: 200px;
      margin-left: 600px;
      font-size: 30px;
    }

    @media screen and (max-width: 768px) {
      top: 150px;
      margin-left: 230px;
      font-size: 28px;
    }

    @media screen and (max-width: 600px) {
      top: 80px;
      margin-left: 300px;
      font-size: 26px;
    }

    @media screen and (max-width: 500px) {
      top: 90px;
      margin-left: 250px;
      font-size: 24px;
    }

    @media screen and (max-width: 414px) {
      top: 100px;
      margin-left: 20px;
      font-size: 20px;
    }

    @media screen and (max-width: 390px) {
      margin-left: 8px;
    }

    @media screen and (max-width: 375px) {
      top: 80px;
      margin-left: 8px;
      font-size: 19px;
    }

    @media screen and (max-width: 360px) {
      top: 100px;
      margin-left: 15px;
      font-size: 18px;
    }
  }

  h1 span {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: inline-block;

    @media screen and (max-width: 414px) {
      padding: 0.6rem;
    }

    @media screen and (max-width: 360px) {
      padding: 0.6rem 0.3rem;
    }
  }
`;

export const SolarSystem = styled.div`
  position: absolute;
  top: -10px;

  @media screen and (max-width: 1200px) {
    top: -20px;
  }
`;

export const ButtonSolarSystem = styled.div`
  position: relative;
  top: 525px;
  left: 500px;
  cursor: pointer;

  @media screen and (max-width: 1200px) {
    top: 800px;
    left: 650px;
  }

  @media screen and (max-width: 988px) {
    top: 900px;
    left: 620px;
  }

  @media screen and (max-width: 768px) {
    top: 730px;
    left: 300px;
  }

  @media screen and (max-width: 600px) {
    top: 600px;
    left: 260px;
  }

  @media screen and (max-width: 500px) {
    top: 600px;
    left: 150px;
  }

  @media screen and (max-width: 414px) {
    top: 580px;
    left: 15px;
  }

  @media screen and (max-width: 390px) {
    left: 2px;
  }

  @media screen and (max-width: 375px) {
    top: 475px;
    left: 10px;
  }

  p {
    span {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0.5rem 1rem;
      border-radius: 10px;

      @media screen and (max-width: 1200px) {
        font-size: 22px;
        padding: 1rem;
      }

      @media screen and (max-width: 600px) {
        font-size: 20px;
      }

      @media screen and (max-width: 500px) {
        font-size: 21px;
        padding: .8rem;
      }

      @media screen and (max-width: 414px) {
        font-size: 19px;
        padding: .5rem;
      }

      @media screen and (max-width: 375px) {
        font-size: 18px;
      }

      @media screen and (max-width: 360px) {
        font-size: 16px;
      }

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
