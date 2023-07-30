'use cliente';
// Styles
import * as S from "@/styles/NavbarStyles";
// Next
import Link from "next/link";
import { useRouter } from "next/router";
// Icons
import {
  FiHome,
  FiCalendar,
  FiSun,
  FiInfo,
  FiUser,
  FiVolume2,
  FiVolumeX,
  FiLogOut,
} from "react-icons/fi";
import { BsQuestionCircle, BsFillPlayFill, BsStopFill } from "react-icons/bs";
import { GiHypersonicBolt } from "react-icons/gi";
// Hooks
import { useContext, useState } from "react";
import useAuth from "@/hooks/useAuth";
// Context
import { VideoContext } from "@/contexts/VideoContext";

const Navbar = () => {
  const { user, signout } = useAuth();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const { isAudioOn, toggleAudio, isVideoActive, toggleVideo } =
    useContext(VideoContext);
  const router = useRouter();
  const isActiveSistemaSolar = router.pathname.startsWith("/sistema-solar");

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOpenNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <>
      {showNavbar ? (
        <S.NavbarContainer>
          <S.HeadNavbar>
            <S.NavbarCloseIcon
              onClick={handleOpenNavbar}
              title="Minimizar Navbar"
            />
            <S.Logo src="/favicon.png" alt="Logo do site" />
            <S.VideoDirectionRow>
            <S.VideoButton
              onClick={toggleVideo}
              title={
                isVideoActive
                  ? "Desativar vídeo de fundo"
                  : "Ativar vídeo de fundo"
              }
            >
              {isVideoActive ? <BsStopFill /> : <BsFillPlayFill />}
            </S.VideoButton>

            {isVideoActive && (
              <S.VideoButton
                onClick={toggleAudio}
                title={isAudioOn ? "Desativar som" : "Ativar o som"}
              >
                {isAudioOn ? <FiVolume2 /> : <FiVolumeX />}
              </S.VideoButton>
            )}
            </S.VideoDirectionRow>
          </S.HeadNavbar>
          <S.NavLinks>
            <Link href="/">
              <S.NavButton active={router.pathname === "/" ? "true" : "false"} title="Ir para página Home" >
                <FiHome />
                Home
              </S.NavButton>
            </Link>

            <S.NavButton
              active={isActiveSistemaSolar ? "true" : "false"}
              onMouseEnter={handleDropdownToggle}
              onMouseLeave={handleDropdownToggle}
            >
              <S.SolarSystemContainer>
                <FiSun />
                Espaço
                {showDropdown && (
                  <S.DropdownMenu>
                    <Link href="/sistema-solar" title="Ir para página Sistema Solar">
                      <S.DropdownMenuItem
                        active={
                          router.pathname === "/sistema-solar"
                            ? "true"
                            : "false"
                        }
                      >
                        *Sistema Solar
                      </S.DropdownMenuItem>
                    </Link>

                    <Link href="/sistema-solar/2" title="Ir para página de Corpos Celestes">
                      <S.DropdownMenuItem
                        active={
                          router.asPath === "/sistema-solar/2"
                            ? "true"
                            : "false"
                        }
                      >
                        *Corpos Celestes
                      </S.DropdownMenuItem>
                    </Link>

                    <Link href="/sistema-solar/3" title="Ir para página Sistema Solar Gráficos">
                      <S.DropdownMenuItem
                        active={
                          router.asPath === "/sistema-solar/3"
                            ? "true"
                            : "false"
                        }
                      >
                        *Sistema Solar Gráficos
                      </S.DropdownMenuItem>
                    </Link>
                  </S.DropdownMenu>
                )}
              </S.SolarSystemContainer>
            </S.NavButton>

            <Link href="/eventos">
              <S.NavButton
                active={router.pathname === "/eventos" ? "true" : "false"}
                title="Ir para página Eventos"
              >
                <FiCalendar />
                Eventos
              </S.NavButton>
            </Link>

            <Link href="/curiosidades">
              <S.NavButton
                active={router.pathname === "/curiosidades" ? "true" : "false"}
                title="Ir para página Curiosidades"
              >
                <FiInfo />
                Curiosidades
              </S.NavButton>
            </Link>

              
            <Link href="/sobre">
                <S.NavButton
                  active={router.pathname === "/sobre" ? "true" : "false"}
                  title="Ir para página Sobre"
                >
                  <BsQuestionCircle />
                  Sobre
                </S.NavButton>
            </Link>
          

            {!user ? (
              <Link href="/login">
                <S.NavButton
                  active={router.pathname === "/login" ? "true" : "false"}
                  title="Ir para página Login"
                >
                  <FiUser />
                  Login
                </S.NavButton>
              </Link>
            ) : (
              <>
                <Link href="/perfil">
                  <S.NavButton
                      active={router.pathname === "/perfil" ? "true" : "false"}
                      title="Ir para página Perfil"
                  >
                    <GiHypersonicBolt />
                    Perfil
                  </S.NavButton>
                </Link>

                <S.Logout onClick={() => signout()}>
                  <S.NavButton active={"false"} title="Deslogar">
                    <FiLogOut />
                    Sair
                  </S.NavButton>
                </S.Logout>
              </>
            )}
          </S.NavLinks>
        </S.NavbarContainer>
      ) : (
        <S.NavbarContainerOpen title="Expandir Navbar">
          <S.NavbarOpenIcon onClick={handleOpenNavbar} />
        </S.NavbarContainerOpen>
      )}
    </>
  );
};

export default Navbar;
