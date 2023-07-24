import styled from "styled-components";

export const GlossaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #17172e;
  border-radius: 8px;
  margin: 1rem 0;
  padding: 0.5rem 0;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }

  @media screen and (max-width: 500px) {
    gap: 0rem;
  }

  @media screen and (max-width: 420px) {
    padding: 0.2rem 0;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 10px 40px;
  cursor: default;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      @media screen and (max-width: 768px) {
        margin-bottom: 0.8rem;
        display: flex;
        flex-direction: column;
        background-color: #20203f;
        border-radius: 8px;
        padding: .2rem 0;
      }

      @media screen and (max-width: 500px) {
        margin-bottom: 1rem;
        padding: 0.1rem 0.3rem;
      }

      @media screen and (max-width: 420px) {
        padding: 0.2rem 0.3rem;
      }
    }
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 998px) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
`;

export const Term = styled.span`
  margin-right: 4px;
  @media screen and (max-width: 1200px) {
    font-size: 22px;
  }

  @media screen and (max-width: 998px) {
    font-size: 19px;
  }
`;

export const Emoji = styled.span`
  font-size: 20px;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 998px) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
