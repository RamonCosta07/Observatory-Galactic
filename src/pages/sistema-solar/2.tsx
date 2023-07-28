"use client";
// Styles
import { Container } from "@/styles/ContainerStyles";
import { Button } from "@/styles/ButtonStyles";
import { PlanetsContainer } from "@/styles/PlanetsStyles";
import * as S from "@/styles/SistemaSolarStyles";
import * as I from "@/styles/PlanetInfoStyles";
// Next
import Head from "next/head";
import { useRouter } from "next/router";
// Hooks
import { useEffect, useState } from "react";
// React Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Components
import Planet from "@/components/Planet";
import Loading from "@/components/Loading";
// JSON
import data from "@/json/planets-description.json";
// Interfaces
import {
  Iselectedplanets,
  ISolarSystemProps,
} from "@/interfaces/iComponents/IPlanetInfo";

const SolarSystemCelestialBodies = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [planetsToRender, setPlanetsToRender] = useState<
    ISolarSystemProps[] | null
  >(null);
  useEffect(() => {
    setTimeout(() => {
      setPlanetsToRender(
        data.planets.slice(0, 11).map((planet) => {
          return {
            ...planet,
            texture: `/${planet.name}_texture.jpg`,
          };
        })
      );
    }, 2000);
    setLoading(false);
  }, []);

  const handleNextPage = () => {
    router.push("/sistema-solar/3");
  };

  const [selectedplanets, setselectedplanets] = useState<Iselectedplanets>({});

  const handlePlanetClick = (planet: string) => {
    setselectedplanets((prevselectedplanets) => ({
      ...prevselectedplanets,
      [planet]: !prevselectedplanets[planet],
    }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Head>
          <title>Sistema Solar | Galactic Observatory</title>
        </Head>

        {planetsToRender && (
          <PlanetsContainer>
            <h3>Planeta Anão</h3>
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[8].name)}
              title={planetsToRender[8].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[8].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[8].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[8].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[8].namePt}</h1>
                <p>{planetsToRender && planetsToRender[8].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[8].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/pluto_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[8].namePt}</h2>
            </I.PlanetContainer>

            <h3>Satélite Natural</h3>
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[9].name)}
              title={planetsToRender[9].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[9].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[9].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[9].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[9].namePt}</h1>
                <p>{planetsToRender && planetsToRender[9].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[9].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/moon_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[9].namePt}</h2>
            </I.PlanetContainer>

            <h3>Estrela Central do Sistema Solar</h3>
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[10].name)}
              title={planetsToRender[10].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[10].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[10].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[10].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[10].namePt}</h1>
                <p>{planetsToRender && planetsToRender[10].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[10].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/sun_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[10].namePt}</h2>
            </I.PlanetContainer>
          </PlanetsContainer>
        )}

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

export default SolarSystemCelestialBodies;
