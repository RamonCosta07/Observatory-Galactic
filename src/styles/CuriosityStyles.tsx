import styled from "styled-components";

export const Container = styled.div`
  background-color: #0d0d1a;
  width: 76%;
  margin-top: 6rem;
  margin-bottom: 1rem;
  margin-left: 12%;
  margin-right: 12%;
  padding: 1rem 0;
  height: 100%;
  border-radius: 10px;

  > button {
    margin-top: 1rem;
    margin-left: 45rem;

    @media (max-width: 768px) {
      margin-top: 1.2rem;
      margin-left: 34rem;
    }

    @media (max-width: 600px) {
      margin-top: 1.4rem;
      margin-left: 22.5rem;
    }

    @media (max-width: 500px) {
      margin-top: 1.5rem;
      margin-left: 16.5rem;
    }

    @media (max-width: 412px) {
      margin-top: 1.3rem;
      margin-left: 11.3rem;
    }
  }

  h1 {
    text-align: center;
    cursor: default;

    @media (max-width: 500px) {
      font-size: 1.7rem;
    }

    @media (max-width: 414px) {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1200px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (max-width: 998px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 414px) {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

export const LoadingContainer = styled.div`
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: purple;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(152, 209, 209, 0.1);

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 998px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffff00;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  text-align: center;
  cursor: default;

  @media (max-width: 1200px) {
    font-size: 1.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }

  @media (max-width: 414px) {
    font-size: 1.2rem;
  }
`;

export const Explanation = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  background-color: #a103a1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 414px) {
    font-size: 1.3rem;
  }
`;

export const ImageLoad = styled.div`
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-container.image-loaded img {
    display: block;
  }
  .image-container:not(.image-loaded) img {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 500px;
  max-height: 400px;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 300px;
  }

  @media (max-width: 600px) {
    margin-bottom: 0.5rem;
  }
`;

export const DateStyles = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: cyan;
  font-weight: bold;
  cursor: default;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 414px) {
    font-size: 1.1rem;
  }
`;