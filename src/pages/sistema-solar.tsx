// Styles
import { Container } from "@/styles/ContainerStyles";
import { Button } from "@/styles/ButtonStyles";
import * as S from "@/styles/SistemaSolarStyles";
// Next
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// React Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import data from "@/json/planets-description.json";
// Components
const Planets = dynamic(() => import("@/components/Planets"), { ssr: false });
interface ISolarSystemProps{
  dataPlanets: any;
}

const SistemaSolar = ({dataPlanets}:ISolarSystemProps) => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/sistema-solar/2");
  };

  const isDesktopLarge = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isMobileMini = useMediaQuery({ maxWidth: 380 });

  // Define diferentes diâmetros para cada tamanho de tela
  let diameter;
  if (isDesktopLarge) {
    diameter = 5;
  } else if (isTablet) {
    diameter = 4;
  } else if (isMobile) {
    diameter = 3;
  } else if (isMobileMini) {
    diameter = 2;
  } else {
    diameter = 5; // Valor padrão
  }

  return (
    <>
    <Container>
      <Head>
          <title>Sistema Solar | Galactic Observatory</title>
      </Head>
      <Planets diameter={diameter} data={dataPlanets} />
      <S.ButtonContainer>
        <Button onClick={handleNextPage} title="Ir para página de gráficos">
          Ir Para Gráficos <AiOutlineArrowRight />
        </Button>
      </S.ButtonContainer>
      </Container>
      <span style={{ opacity: '0' }}>-</span>
    </>
  );
};

export async function getStaticProps() {
  const dataPlanets = data;

  return {
    props: {
      dataPlanets
    },
  };
}

export default SistemaSolar;
