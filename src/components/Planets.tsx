// Styled
import * as S from "@/styles/PlanetsStyles";
// Components
import PlanetInfo from "./PlanetInfo";
// JSON
import data from "@/json/planets-description.json";
interface IPlanet {
  name: string;
  namePt: string;
  description: string;
  colors: string;
}

const Planets = ({diameter, data}:any) => {
  const planetsToRender = data.planets.slice(0, 8);
  return (
    <S.PlanetsContainer>
      <h3>Planetas do Sistema Solar</h3>
      <S.PlanetsInformation>
        Clique abaixo para ler mais sobre os planetas.
      </S.PlanetsInformation>
      {planetsToRender.map((planet:IPlanet, index:number) => (
        <PlanetInfo
          key={index}
          planetName={planet.name}
          planetNamePt={planet.namePt}
          description={planet.description}
          colors={planet.colors}
          diameter={diameter}
        />
      ))}

      <h3>Planeta Anão</h3>
      <PlanetInfo
        planetName={data.planets[8].name}
        planetNamePt={data.planets[8].namePt}
        description={data.planets[8].description}
        colors={data.planets[8].colors}
        diameter={diameter}
      />

      <h3>Satélite Natural</h3>
      <PlanetInfo
        planetName={data.planets[9].name}
        planetNamePt={data.planets[9].namePt}
        description={data.planets[9].description}
        colors={data.planets[9].colors}
        diameter={diameter}
      />

      <h3>Estrela Central do Sistema Solar</h3>
      <PlanetInfo
        planetName={data.planets[10].name}
        planetNamePt={data.planets[10].namePt}
        description={data.planets[10].description}
        colors={data.planets[10].colors}
        diameter={diameter}
      />
    </S.PlanetsContainer>
  );
};

export default Planets;
