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
        {/* <Planets /> */}
        {/* <Planet diameter={3} texture={`/mars_texture.jpg`} /> */}
        {planetsToRender && (
          <PlanetsContainer>
            <h3>Planetas do Sistema Solar</h3>
            <PlanetsInformation>
              Clique abaixo para ler mais sobre os planetas.
            </PlanetsInformation>

            {/* Mercurios */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Mercurios")}
              title="Mercurios"
              selectedplanet={
                selectedplanets["Mercurios"] === true ? "true" : "false"
              }
              colors="cor"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Mercurios"] === true ? "true" : "false"
                }
              >
                <h1>{planetsToRender && planetsToRender[0].name}</h1>
                <p>{planetsToRender && planetsToRender[0].description}</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Mercurios"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/mercury_texture.jpg`} />
              </I.Planet3D>
              <h2>Mercurios</h2>
            </I.PlanetContainer>

            {/* Venus */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Venus")}
              title="Venus"
              selectedplanet={
                selectedplanets["Venus"] === true ? "true" : "false"
              }
              colors="cor"
              key="Venus"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Venus"] === true ? "true" : "false"
                }
              >
                <h1>Venus</h1>
                <p>Descrição de Venus</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Venus"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/venus_texture.jpg`} />
              </I.Planet3D>
              <h2>Venus</h2>
            </I.PlanetContainer>

            {/* Terra */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Terra")}
              title="Terra"
              selectedplanet={
                selectedplanets["Terra"] === true ? "true" : "false"
              }
              colors="cor"
              key="Terra"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Terra"] === true ? "true" : "false"
                }
              >
                <h1>Terra</h1>
                <p>Descrição de Terra</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Terra"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/earth_texture.jpg`} />
              </I.Planet3D>
              <h2>Terra</h2>
            </I.PlanetContainer>

            {/* Marte */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Marte")}
              title="Marte"
              selectedplanet={
                selectedplanets["Marte"] === true ? "true" : "false"
              }
              colors="cor"
              key="Marte"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Marte"] === true ? "true" : "false"
                }
              >
                <h1>Marte</h1>
                <p>Descrição de Marte</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Marte"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/mars_texture.jpg`} />
              </I.Planet3D>
              <h2>Marte</h2>
            </I.PlanetContainer>

            {/* Júpiter */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Júpiter")}
              title="Júpiter"
              selectedplanet={
                selectedplanets["Júpiter"] === true ? "true" : "false"
              }
              colors="cor"
              key="Júpiter"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Júpiter"] === true ? "true" : "false"
                }
              >
                <h1>Júpiter</h1>
                <p>Descrição de Júpiter</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Júpiter"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/jupiter_texture.jpg`} />
              </I.Planet3D>
              <h2>Júpiter</h2>
            </I.PlanetContainer>

            {/* Saturno */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Saturno")}
              title="Saturno"
              selectedplanet={
                selectedplanets["Saturno"] === true ? "true" : "false"
              }
              colors="cor"
              key="Saturno"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Saturno"] === true ? "true" : "false"
                }
              >
                <h1>Saturno</h1>
                <p>Descrição de Saturno</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Saturno"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/saturn_texture.jpg`} />
              </I.Planet3D>
              <h2>Saturno</h2>
            </I.PlanetContainer>

            {/* Urano */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Urano")}
              title="Urano"
              selectedplanet={
                selectedplanets["Urano"] === true ? "true" : "false"
              }
              colors="cor"
              key="Urano"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Urano"] === true ? "true" : "false"
                }
              >
                <h1>Urano</h1>
                <p>Descrição de Urano</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Urano"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/uranus_texture.jpg`} />
              </I.Planet3D>
              <h2>Urano</h2>
            </I.PlanetContainer>

            {/* Netuno */}
            <I.PlanetContainer
              onClick={() => handlePlanetClick("Netuno")}
              title="Netuno"
              selectedplanet={
                selectedplanets["Netuno"] === true ? "true" : "false"
              }
              colors="cor"
              key="Netuno"
            >
              <I.PlanetInfo
                selectedplanet={
                  selectedplanets["Netuno"] === true ? "true" : "false"
                }
              >
                <h1>Netuno</h1>
                <p>Descrição de Netuno</p>
              </I.PlanetInfo>
              <I.Planet3D
                className={selectedplanets["Netuno"] ? "slide-right" : ""}
              >
                <Planet diameter={3} texture={`/neptune_texture.jpg`} />
              </I.Planet3D>
              <h2>Netuno</h2>
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
