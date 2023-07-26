// Styles
import { Container } from "@/styles/ContainerStyles";
import { Button } from "@/styles/ButtonStyles";
import * as S from "@/styles/SistemaSolarStyles";
// Components
import Planets from "@/components/Planets";
import Loading from "@/components/Loading";
// Next
import Head from "next/head";
import { useRouter } from "next/router";
// React Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Hooks
import { useState } from "react";

const SistemaSolar = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  const handleNextPage = () => {
    router.push("/sistema-solar/2");
  };

  if (loading) {
    return (
      <Loading />
    )
  }

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
