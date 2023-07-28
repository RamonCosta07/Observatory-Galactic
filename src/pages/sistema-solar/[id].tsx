// Styles
import { Container } from "@/styles/ContainerStyles";
// Next
import Head from "next/head";
// Components
import PlanetSizeChart from "@/components/PlanetSizeChart";
import PlanetDistanceSunChart from "@/components/PlanetDistanceSunChart";
import RotationPeriodChart from "@/components/RotationPeriodChart";

const SistemaSolarGraphics = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Sistema Solar - Gráficos</title>
        </Head>
        <h1
          style={{ textAlign: "center", cursor: "default", fontSize: "22px" }}
        >
          Gráficos Comparativos
        </h1>
        <PlanetSizeChart />
        <PlanetDistanceSunChart />
        <RotationPeriodChart />
      </Container>
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  if (id !== "3") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
}

export default SistemaSolarGraphics;
