// Styles
import * as S from "@/styles/HomeStyles";
// Next
import Head from "next/head";
import { useRouter } from "next/router";
// Hooks
import { useState, useEffect } from "react";
// Components
import SolarSystem from "@/components/SolarSystem";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowHeader(true);

    const timeout = setTimeout(() => {
      setShowHeader(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleSystemSolarPage = () => {
    router.push("/sistema-solar");
  };

  return (
    <S.HomeContainer>
      <Head>
        <title>Home | Galactic Observatory</title>
      </Head>
      {showHeader && (
        <h1>
          <span>Bem-vindo ao Galactic Observatory</span>
        </h1>
      )}
      <S.SolarSystem>
        <SolarSystem />
      </S.SolarSystem>
      <S.ButtonSolarSystem
        title="Ir para página de sistema solar"
        onClick={handleSystemSolarPage}
      >
        <p>
          <span>
            Comece explorando o Sistema Solar <AiOutlineArrowRight />
          </span>
        </p>
      </S.ButtonSolarSystem>
    </S.HomeContainer>
  );
}
