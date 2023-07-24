import styled from "styled-components";

export const ConfigContainer = styled.div`
  h1 {
    cursor: default;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }

    @media screen and (max-width: 600px) {
      margin-top: 3rem;
    }

    @media screen and (max-width: 500px) {
      margin-top: 4rem;
    }
  }
`;

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 1rem;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    color: black;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 22px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 24px 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.6rem;

  @media screen and (max-width: 1200px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const UserData = styled.h2`
  font-size: 18px;
  color: #0d0d1a;

  span {
    cursor: default;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h2 {
    font-size: 16px;
    color: #0d0d1a;

    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      font-size: 17px;
    }
  }
`;

export const HeaderContainerEdit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #4fbeda;
  border-radius: 4px;
  font-size: 14px;
  padding-right: 2.5rem;

  &:focus {
    border-color: #0d0d1a;
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    padding: 6px;
    padding-right: 2.1rem;
    font-size: 14px;
  }
`;

export const Send = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ee0d0d;
  font-size: 30px;
  cursor: pointer;
  margin-top: -0.4rem;
`;

export const UserInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1rem;
    margin-left: 0.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;

export const Email = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: default;
`;

export const ErrorContainer = styled.div`
  margin-top: -1rem;
`;
