"use client";
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
import { useState } from "react";
import { Iselectedplanets } from "@/interfaces/iComponents/IPlanetInfo";
import * as I from "@/styles/PlanetInfoStyles";
// Components
const Planets = dynamic(() => import("@/components/Planets"), { ssr: false });

interface ISolarSystemProps {
  name: string;
  namePt: string;
  description: string;
  colors: string;
}

const SistemaSolar = ({ planetsToRender }: any) => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/sistema-solar/2");
  };

  const [selectedplanets, setselectedplanets] = useState<Iselectedplanets>({});

  const handlePlanetClick = (planet: string) => {
    setselectedplanets((prevselectedplanets) => ({
      ...prevselectedplanets,
      [planet]: !prevselectedplanets[planet],
    }));
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

          {planetsToRender.map((planet: ISolarSystemProps, index: number) => (
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planet.name)}
              title={planet.namePt}
              selectedplanet={
                selectedplanets[planet.name] === true ? "true" : "false"
              }
              colors={planet.colors}
              key={index}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planet.name] === true ? "true" : "false"
                }
              >
                <h1>{planet.namePt}</h1>
                <p>{planet.description}</p>
              </I.PlanetInfo>

              <I.Planet3D
                className={selectedplanets[planet.name] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/${planet.name}_texture.jpg`} />
              </I.Planet3D>
              <h2>{planet.namePt}</h2>
            </I.PlanetContainer>
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
      <span style={{ opacity: "0" }}>-</span>
    </>
  );
};

export async function getServerSideProps() {
  const planetsToRender = data.planets.slice(0, 8);

  return {
    props: {
      planetsToRender,
    },
  };
}

export default SistemaSolar;
