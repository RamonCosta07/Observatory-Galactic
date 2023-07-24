// Styles
import * as S from "@/styles/ProfileStyles";
import { Button } from "@/styles/ButtonStyles";
// Hooks
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
// Next
import Head from "next/head";
// Components
import ProfileSetup from "@/components/ProfileSetup";
import DeleteAccount from "@/components/DeleteAccount";
import ProfileSetupAstronomicalEvents from "@/components/ProfileSetupAstronomicalEvents";
// Icons
import { FcDataConfiguration } from "react-icons/fc";
import { GiEclipseFlare, GiAlienSkull } from "react-icons/gi";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
// Ver depois
import Script from "next/script";

const Perfil = () => {
  const { user, signout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <S.ProfileContainer>
      <Head>
        <title>Perfil | Galactic Observatory</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('user-auth')) {
                window.location.href = "/login"
              }
            `,
          }}
        />
      </Head>

      <S.MenuButton onClick={handleMenuClick} title={isMenuOpen? 'Fechar Menu' : 'Abrir Menu'}>
        {isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </S.MenuButton>

      <S.TabContainer isopen={isMenuOpen ? "true" : "false"}>
        <S.Tab
          active={activeTab === "tab1" ? "true" : "false"}
          onClick={() => handleTabClick("tab1")}
          title="Editar perfil"
        >
          Configuração do Perfil <FcDataConfiguration />
        </S.Tab>
        <S.Tab
          active={activeTab === "tab2" ? "true" : "false"}
          onClick={() => handleTabClick("tab2")}
          title="Gerenciar eventos agendados"
        >
          Eventos Astronômicos <GiEclipseFlare />
        </S.Tab>
        <S.Tab
          active={activeTab === "tab3" ? "true" : "false"}
          onClick={() => handleTabClick("tab3")}
          title="Deletar a conta"
        >
          Excluir Conta <GiAlienSkull />
        </S.Tab>
        <Button onClick={signout} title="Deslogar">Sair</Button>
      </S.TabContainer>

      <S.ContentContainer isopen={isMenuOpen ? "true" : "false"}>
        {activeTab === "tab1" && user && <ProfileSetup setIsMenuOpen={setIsMenuOpen} />}
        {activeTab === "tab2" && user && <ProfileSetupAstronomicalEvents setIsMenuOpen={setIsMenuOpen} />}
        {activeTab === "tab3" && user && <DeleteAccount setIsMenuOpen={setIsMenuOpen} />}
      </S.ContentContainer>
    </S.ProfileContainer>
  );
};

export default Perfil;
