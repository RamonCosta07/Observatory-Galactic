// Styled
import styled from "styled-components";
// Interfaces
import { IIsActive } from "@/interfaces/iStyles/INavbarStyles";
// Icons
import { TbLayoutNavbarCollapse } from "react-icons/tb";

export const NavbarContainerOpen = styled.nav`
  position: fixed;
  top: 5px;
  left: 15px;
  width: 100%;
  height: 10px;
  z-index: 2;
`;

export const NavbarOpenIcon = styled(TbLayoutNavbarCollapse)`
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 2.5rem;
  }
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #4b0082;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 2;

  @media screen and (max-width: 600px) {
    height: 48px;
  }

  @media screen and (max-width: 414px) {
    height: 54px;
    padding: 0 25px;
  }
`;

export const HeadNavbar = styled.div`
  display: flex;
  gap: 0.4rem;

  @media screen and (max-width: 998px) {
    gap: 0.3rem;
    margin-right: 1.1rem;
  }

  @media screen and (max-width: 768px) {
    gap: 0.2rem;
  }

  @media screen and (max-width: 600px) {
    gap: 0.1rem;
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 500px) {
    margin-left: -0.8rem;
  }

  @media screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    padding: 10px 0;
  }

  @media screen and (max-width: 390px) {
    margin-right: 0rem;
  }
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 20px;

  @media screen and (max-width: 1200px) {
    height: 45px;
  }

  @media screen and (max-width: 998px) {
    height: 38px;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 35px;
    margin-top: 8px;
  }

  @media screen and (max-width: 600px) {
    height: 32px;
    margin-top: 9px;
  }

  @media screen and (max-width: 500px) {
    height: 28px;
    margin-top: 5px;
  }

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const NavbarCloseIcon = styled(TbLayoutNavbarCollapse)`
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-right: 1.1rem;

  @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 998px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    margin-right: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    margin-right: 8px;
  }
`;

export const VideoDirectionRow = styled.div`
  display: flex;
  @media screen and (max-width: 414px) {
    flex-direction: row;
    gap: 0.1rem;
  }
`;

export const VideoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media screen and (max-width: 998px) {
    font-size: 20px;
    margin-right: 0.3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }

  @media screen and (max-width: 414px) {
    font-size: 17px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  a {
    @media screen and (max-width: 768px) {
      margin-right: -1.8rem;
    }

    @media screen and (max-width: 600px) {
      margin-right: -2rem;
      gap: 0.7rem;
    }

    @media screen and (max-width: 500px) {
      margin-right: -2.4rem;
    }

    @media screen and (max-width: 414px) {
      margin-right: -2.4rem;
      gap: 0.8rem;
    }

    @media screen and (max-width: 390px) {
      margin-right: -2.4rem;
    }
  }
`;

export const NavButton = styled.div<IIsActive>`
  font-size: 16px;
  position: relative;
  margin-left: 10px;
  color: ${(props) => (props.active === "true" ? "#FFFF00" : "#fff")};
  font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};
  text-decoration: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-right: 30px;
  svg {
    margin-right: 5px;
    font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};

    @media screen and (max-width: 600px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 393px) {
      font-size: .9rem;
    }
  }

  &:hover {
    color: ${(props) => (props.active === "true" ? "#f7f752ee" : "#ccc")};
    transition: color 0.3s ease;
    font-weight: normal;
  }

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 998px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

  @media screen and (max-width: 414px) {
    font-size: 11px;
  }

  @media screen and (max-width: 393px) {
    gap: 5px;
    font-size: 10.5px;
  }

  @media screen and (max-width: 360px) {
    gap: 5px;
    font-size: 9px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #9574ac;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 3;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 2px;
  }
`;

export const DropdownMenuItem = styled.div<IIsActive>`
  color: ${(props) => (props.active === "true" ? "#FFFF00" : "#fff")};
  padding: 5px;
  cursor: pointer;
  margin-top: 0.2rem;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: ${(props) => (props.active === "true" ? "#f7f752ee" : "#ccc")};
  }

  @media screen and (max-width: 1200px) {
    font-size: 17px;
  }

  @media screen and (max-width: 998px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
    padding: 3px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 0 3px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

  @media screen and (max-width: 414px) {
    font-size: 12px;
  }

  @media screen and (max-width: 393px) {
    font-size: 11px;
  }
`;

export const SolarSystemContainer = styled.div`
  display: flex;

  @media screen and (max-width: 998px) {
    margin-right: -0.8rem;
  }

  @media screen and (max-width: 768px) {
    margin-right: -1.6rem;
  }

  @media screen and (max-width: 600px) {
    margin-right: -2.1rem;
    flex-direction: column;

    svg {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 500px) {
    margin-right: -2.3rem;
  }

  @media screen and (max-width: 414px) {
    margin-right: -2.3rem;
  }

  @media screen and (max-width: 393px) {
    gap: 5px;
    margin-right: -2.4rem;
  }
`;

export const Logout = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
