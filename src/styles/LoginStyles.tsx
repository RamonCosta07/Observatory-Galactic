// Styled
import styled from "styled-components";
// Interfaces
import { IIsActive } from "@/interfaces/iStyles/INavbarStyles";
import { IProviderContainer } from "@/interfaces/iStyles/ILoginStyles";
// Icons
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";

export const LoginContainer = styled.div<IIsActive>`
  background-color: #0d0d1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 46%;
  padding: 1rem;
  padding-left: 1rem;
  margin-left: 28%;
  margin-right: 28%;
  min-height: ${(props) => (props.active === "true" ? "60vh" : "85vh")};
  border-radius: 10px;
  margin-top: ${(props) => (props.active === "true" ? "7rem" : "5rem")};
  margin-bottom: 0rem;
  max-width: 500px;

  @media screen and (max-width: 1200px) {
    margin-top: ${(props) => (props.active === "true" ? "10rem" : "5rem")};
    padding: 0.8rem;
  }

  @media screen and (max-width: 998px) {
    margin-top: ${(props) => (props.active === "true" ? "6rem" : "5rem")};
    padding: 0rem;
    height: 40%;
    margin-left: 30%;
    margin-right: 30%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    padding: 0 1rem;
    height: 42%;
    margin-left: 29%;
    margin-right: 29%;
  }

  @media screen and (max-width: 600px) {
    padding: 0.1rem 1rem;
    height: 51%;
    margin-left: 24.5%;
    margin-right: 24.5%;
  }

  @media screen and (max-width: 500px) {
    margin-top: ${(props) => (props.active === "true" ? "5rem" : "4.5rem")};
    padding: 0.2rem 1.3rem;
    margin-left: 22.5%;
    margin-right: 22.5%;
  }

  @media screen and (max-width: 414px) {
    margin-top: ${(props) => (props.active === "true" ? "5rem" : "4.5rem")};
    height: ${(props) => (props.active === "true" ? "30vh" : "100%")};
    margin-left: 17.5%;
    margin-right: 17.5%;
  }

  @media screen and (max-width: 375px) {
    padding: 0.1rem 1.3rem;
    margin-left: 15%;
    margin-right: 15%;
    height: 51%;
  }

  @media screen and (max-width: 360px) {
    margin-top: 4.5rem;
    padding: 0rem 1.3rem;
    margin-left: 10.5%;
    margin-right: 10.5%;
  }

  h2 {
    margin-top: ${(props) => (props.active === "true" ? "1rem" : "-2rem")};
    margin-bottom: 1rem;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 28px;
    }

    @media screen and (max-width: 998px) {
      margin-bottom: 0.5rem;
      margin-top: -1.5rem;
      font-size: 26px;
    }

    @media screen and (max-width: 768px) {
      margin-top: -2rem;
      font-size: 23px;
    }

    @media screen and (max-width: 600px) {
      font-size: 22px;
    }

    @media screen and (max-width: 500px) {
      margin-top: -2.4rem;
      font-size: 21px;
    }

    @media screen and (max-width: 375px) {
      margin-top: -2rem;
    }

    @media screen and (max-width: 360px) {
      margin-top: -1.5rem;
      font-size: 20px;
    }
  }
`;

export const Tabs = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 1rem;

  @media screen and (max-width: 1200px) {
    margin-bottom: 1.75rem;
  }

  @media screen and (max-width: 998px) {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1.35rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 414px) {
    margin-bottom: 1.4rem;
    margin-top: -10rem;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 360px) {
    margin-top: -3rem;
  }
`;

export const Tab = styled.li`
  margin-right: 0.4rem;

  @media screen and (max-width: 600px) {
    font-size: 0.3rem;
    margin-right: 0.3rem;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0.2rem;
  }

  @media screen and (max-width: 360px) {
    margin-right: 0.3rem;
  }
`;

export const TabLink = styled.a<IIsActive>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) =>
    props.active === "true" ? "#007bff" : "#f8f9fa"};
  color: ${(props) => (props.active === "true" ? "#fff" : "#212529")};
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1200px) {
    font-size: 21px;
  }

  @media screen and (max-width: 998px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0.4rem 0.8rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
    padding: 0.4rem 0.7rem;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;

  @media screen and (max-width: 998px) {
    margin-bottom: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 0.8rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 998px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }

  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 350px;

  @media screen and (max-width: 1200px) {
    padding: 0.6rem;
    font-size: 1rem;
    padding-right: 2.5rem;
  }

  @media screen and (max-width: 998px) {
    padding: 0.5rem;
    padding-right: 2.3rem;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 0.4rem 0.5rem;
    font-size: 1rem;
    padding-right: 2.1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 230px;
    font-size: 0.8rem;
    padding-right: 1.8rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.9rem;
    padding-right: 1.9rem;
  }
`;

export const IconsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: white;
  svg {
    color: #0d0d1a;
    font-size: 2rem;
    margin-left: -3rem;
    padding-right: 0.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 998px) {
      font-size: 2.1rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.9rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.7rem;
    }

    @media screen and (max-width: 360px) {
      font-size: 1.6rem;
    }
  }
`;

export const ShowPasswordIcon = styled(FaEye)`
  cursor: pointer;
`;

export const HidePasswordIcon = styled(FaEyeSlash)`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 998px) {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 412px) {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 414px) {
    padding-bottom: 0rem;
  }
`;

export const ProviderContainer = styled.div<IProviderContainer>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  button:hover {
    background-color: ${(props) =>
      props.provider === "google"
        ? "#d9eb3d"
        : props.provider === "facebook"
        ? "cyan"
        : "#ccc"};
  }

  span {
    cursor: default;
    color: ${(props) =>
      props.provider === "google"
        ? "#d9eb3d"
        : props.provider === "facebook"
        ? "cyan"
        : "#ccc"};
  }

  @media screen and (max-width: 500px) {
    gap: 0.3rem;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 5rem;
    height: 5rem;
  }

  @media screen and (max-width: 998px) {
    width: 3.9rem;
    height: 3.9rem;
  }

  @media screen and (max-width: 768px) {
    width: 3.7rem;
    height: 3.7rem;
  }

  @media screen and (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media screen and (max-width: 500px) {
    width: 3.3rem;
    height: 3.3rem;
  }

  svg {
    font-size: 4rem;

    @media screen and (max-width: 1200px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 998px) {
      font-size: 3.9rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 3.7rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 3.5rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 3.3rem;
    }
  }
`;

export const FacebookIconButton = styled(FaFacebook)`
  color: blue;
`;
