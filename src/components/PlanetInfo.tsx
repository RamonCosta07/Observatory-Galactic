'use cliente';
// Styles
import * as S from "@/styles/PlanetInfoStyles";
// Hooks e Bibliotecas
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
// Components
import Planet from "./Planet";
// Interfaces
import {
  IPlanetInfo,
  Iselectedplanets,
} from "@/interfaces/iComponents/IPlanetInfo";

const PlanetInfo = ({
  planetName,
  planetNamePt,
  description,
  colors,
}: IPlanetInfo) => {
  const [selectedplanets, setselectedplanets] = useState<Iselectedplanets>({});

  const handlePlanetClick = (planet: string) => {
    setselectedplanets((prevselectedplanets) => ({
      ...prevselectedplanets,
      [planet]: !prevselectedplanets[planet],
    }));
  };

  const isDesktopLarge = useMediaQuery({ minWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isMobileMini = useMediaQuery({ maxWidth: 380 });

  // Define diferentes diâmetros para cada tamanho de tela
  let diameter;
  if (isDesktopLarge) {
    diameter = 5;
  } else if (isTablet) {
    diameter = 4;
  } else if (isMobile) {
    diameter = 3;
  } else if (isMobileMini) {
    diameter = 2;
  } else {
    diameter = 5; // Valor padrão
  }

  return (
    <>
      <S.PlanetContainer
        onClick={() => handlePlanetClick(planetName)}
        title={planetNamePt}
        selectedplanet={selectedplanets[planetName] === true ? "true" : "false"}
        colors={colors}
      >
        <S.PlanetInfo
          selectedplanet={
            selectedplanets[planetName] === true ? "true" : "false"
          }
        >
          <h1>{planetNamePt}</h1>
          <p>{description}</p>
        </S.PlanetInfo>

        <S.Planet3D
          className={selectedplanets[planetName] ? "slide-right" : ""}
        >
          <Planet diameter={diameter} texture={`/${planetName}_texture.jpg`} />
        </S.Planet3D>
        <h2>{planetNamePt}</h2>
      </S.PlanetContainer>
    </>
  );
};

export default PlanetInfo;
