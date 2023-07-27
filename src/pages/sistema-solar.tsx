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
// Components
const Planets = dynamic(() => import("@/components/Planets"), { ssr: false });

const SistemaSolar = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/sistema-solar/2");
  };

  return (
    <>
    <Container>
      <Head>
          <title>Sistema Solar | Galactic Observatory</title>
      </Head>
      <Planets />
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

SistemaSolar.getInitialProps = async () => {
  return {};
};

export default SistemaSolar;
