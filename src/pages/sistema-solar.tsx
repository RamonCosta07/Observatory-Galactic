"use client";
// Styles
import { Container } from "@/styles/ContainerStyles";
import { Button } from "@/styles/ButtonStyles";
import { PlanetsContainer, PlanetsInformation } from "@/styles/PlanetsStyles";
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

const SistemaSolar = () => {
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
    router.push("/sistema-solar/2");
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
            <h3>Planetas do Sistema Solar</h3>
            <PlanetsInformation>
              Clique no planeta para descobrir mais sobre ele.
            </PlanetsInformation>

            {/* Mercurio */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[0].name)}
              title={planetsToRender[0].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[0].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[0].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[0].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[0].namePt}</h1>
                <p>{planetsToRender && planetsToRender[0].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[0].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/mercury_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[0].namePt}</h2>
            </I.PlanetContainer>

            {/* Venus */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[1].name)}
              title={planetsToRender[1].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[1].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[1].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[1].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[1].namePt}</h1>
                <p>{planetsToRender && planetsToRender[1].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[1].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/venus_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[1].namePt}</h2>
            </I.PlanetContainer>

            {/* Terra */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[2].name)}
              title={planetsToRender[2].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[2].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[2].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[2].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[2].namePt}</h1>
                <p>{planetsToRender && planetsToRender[2].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[2].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/earth_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[2].namePt}</h2>
            </I.PlanetContainer>

            {/* Marte */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[3].name)}
              title={planetsToRender[3].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[3].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[3].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[3].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[3].namePt}</h1>
                <p>{planetsToRender && planetsToRender[3].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[3].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/mars_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[3].namePt}</h2>
            </I.PlanetContainer>

            {/* Júpiter */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[4].name)}
              title={planetsToRender[4].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[4].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[4].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[4].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[4].namePt}</h1>
                <p>{planetsToRender && planetsToRender[4].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[4].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/jupiter_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[4].namePt}</h2>
            </I.PlanetContainer>

            {/* Saturno */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[5].name)}
              title={planetsToRender[5].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[5].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[5].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[5].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[5].namePt}</h1>
                <p>{planetsToRender && planetsToRender[5].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[5].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/saturn_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[5].namePt}</h2>
            </I.PlanetContainer>

            {/* Urano */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[6].name)}
              title={planetsToRender[6].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[6].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[6].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[6].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[6].namePt}</h1>
                <p>{planetsToRender && planetsToRender[6].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[6].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/uranus_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[6].namePt}</h2>
            </I.PlanetContainer>

            {/* Netuno */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[7].name)}
              title={planetsToRender[7].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[7].name] === true
                  ? "true"
                  : "false"
              }
              colors={planetsToRender[7].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[7].name] === true
                    ? "true"
                    : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[7].namePt}</h1>
                <p>{planetsToRender && planetsToRender[7].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={
                  selectedplanets[planetsToRender[7].name] ? "slide-right" : ""
                }
              >
                <Planet diameter={3} texture={`/neptune_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[7].namePt}</h2>
            </I.PlanetContainer>

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

export default SistemaSolar;
