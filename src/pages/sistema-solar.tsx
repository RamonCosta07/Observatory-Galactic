'use client';
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
import Planet from "@/components/Planet";
import PlanetInfo from "@/components/PlanetInfo";
import { PlanetsContainer, PlanetsInformation } from "@/styles/PlanetsStyles";
import data from "@/json/planets-description.json";
// Components
const Planets = dynamic(() => import("@/components/Planets"), { ssr: false });

const SistemaSolar = () => {
  const router = useRouter();
  const planetsToRender = data.planets.slice(0, 8);

  const handleNextPage = () => {
    router.push("/sistema-solar/2");
  };

  return (
    <>
    <Container>
      <Head>
          <title>Sistema Solar | Galactic Observatory</title>
      </Head>
        {/* <Planets /> */}
        {/* <Planet diameter={3} texture={`/mars_texture.jpg`} /> */}
        <PlanetsContainer>
      <h3>Planetas do Sistema Solar</h3>
      <PlanetsInformation>
        Clique abaixo para ler mais sobre os planetas.
      </PlanetsInformation>
      {planetsToRender.map((planet, index) => (
        <PlanetInfo
          key={index}
          planetName={planet.name}
          planetNamePt={planet.namePt}
          description={planet.description}
          colors={planet.colors}
        />
      ))}

      <h3>Planeta Anão</h3>
      <PlanetInfo
        planetName={data.planets[8].name}
        planetNamePt={data.planets[8].namePt}
        description={data.planets[8].description}
        colors={data.planets[8].colors}
      />

      <h3>Satélite Natural</h3>
      <PlanetInfo
        planetName={data.planets[9].name}
        planetNamePt={data.planets[9].namePt}
        description={data.planets[9].description}
        colors={data.planets[9].colors}
      />

      <h3>Estrela Central do Sistema Solar</h3>
      <PlanetInfo
        planetName={data.planets[10].name}
        planetNamePt={data.planets[10].namePt}
        description={data.planets[10].description}
        colors={data.planets[10].colors}
      />
    </PlanetsContainer>
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

export default SistemaSolar;
