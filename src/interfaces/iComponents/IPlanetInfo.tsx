export interface Iselectedplanets {
  [key: string]: boolean;
}

export interface IPlanetInfo {
  planetName: string;
  planetNamePt: string;
  description: string;
  colors: string;
}

export interface ISolarSystemProps {
  name: string;
  namePt: string;
  description: string;
  colors: string;
  texture: string;
}