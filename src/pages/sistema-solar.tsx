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
import { useEffect, useState } from "react";
import { Iselectedplanets } from "@/interfaces/iComponents/IPlanetInfo";
import * as I from "@/styles/PlanetInfoStyles";
// Components
const Planets = dynamic(() => import("@/components/Planets"), { ssr: false });

interface ISolarSystemProps {
  name: string;
  namePt: string;
  description: string;
  colors: string;
  texture: string; // Adicionando a propriedade texture
}

const SistemaSolar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [planetsToRender, setPlanetsToRender] = useState<
    ISolarSystemProps[] | null
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setPlanetsToRender(
        data.planets.slice(0, 8).map((planet) => {
          return {
            ...planet,
            texture: `/${planet.name}_texture.jpg`, // Obtendo a URL da textura
          };
        })
      );
    }, 3000);
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

  //   if (loading) {
  //     return (
  //     <p>Loading...</p>
  //   )
  // }

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
              Clique abaixo para ler mais sobre os planetas.
            </PlanetsInformation>

            {/* Mercurio */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick(planetsToRender[0].name)}
              title={planetsToRender[0].namePt}
              selectedplanet={
                selectedplanets[planetsToRender[0].name] === true ? "true" : "false"
              }
              colors={planetsToRender[0].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[0].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[0].namePt}</h1>
                <p>{planetsToRender && planetsToRender[0].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[0].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[1].name] === true ? "true" : "false"
              }
              colors={planetsToRender[1].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[1].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[1].namePt}</h1>
                <p>{planetsToRender && planetsToRender[1].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[1].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[2].name] === true ? "true" : "false"
              }
              colors={planetsToRender[2].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[2].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[2].namePt}</h1>
                <p>{planetsToRender && planetsToRender[2].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[2].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[3].name] === true ? "true" : "false"
              }
              colors={planetsToRender[3].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[3].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[3].namePt}</h1>
                <p>{planetsToRender && planetsToRender[3].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[3].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[4].name] === true ? "true" : "false"
              }
              colors={planetsToRender[4].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[4].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[4].namePt}</h1>
                <p>{planetsToRender && planetsToRender[4].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[4].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[5].name] === true ? "true" : "false"
              }
              colors={planetsToRender[5].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[5].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[5].namePt}</h1>
                <p>{planetsToRender && planetsToRender[5].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[5].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[6].name] === true ? "true" : "false"
              }
              colors={planetsToRender[6].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[6].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[6].namePt}</h1>
                <p>{planetsToRender && planetsToRender[6].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[6].name] ? "slide-right" : ""}
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
                selectedplanets[planetsToRender[7].name] === true ? "true" : "false"
              }
              colors={planetsToRender[7].colors}
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets[planetsToRender[7].name] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[7].namePt}</h1>
                <p>{planetsToRender && planetsToRender[7].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets[planetsToRender[7].name] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/neptune_texture.jpg`} />
              </I.Planet3D>
              <h2>{planetsToRender[7].namePt}</h2>
            </I.PlanetContainer>

            {/* <h3>Planeta Anão</h3>
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
          /> */}
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

// export async function getStaticProps() {
//  const planetsToRender: ISolarSystemProps[] = data.planets
//     .slice(0, 8)
//     .map((planet) => {
//       return {
//         ...planet,
//         texture: `/${planet.name}_texture.jpg`, // Obtendo a URL da textura
//       };
//     });

//   return {
//     props: {
//       planetsToRender,
//     },
//   };
// }

export default SistemaSolar;
