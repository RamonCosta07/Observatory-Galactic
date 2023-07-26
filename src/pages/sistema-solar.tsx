// Styles
import { Container } from "@/styles/ContainerStyles";
import { Button } from "@/styles/ButtonStyles";
import * as S from "@/styles/SistemaSolarStyles";
// Components
import Planets from "@/components/Planets";
// Next
import Head from "next/head";
import { useRouter } from "next/router";
// React Icons
import { AiOutlineArrowRight } from "react-icons/ai";

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

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default SistemaSolar;
